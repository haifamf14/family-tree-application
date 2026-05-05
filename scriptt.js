document.addEventListener('DOMContentLoaded', function () {
    // ====================== DOM Elements ======================
    const form              = document.getElementById('family-form');
    const nameInput         = document.getElementById('name');
    const ageInput          = document.getElementById('age');
    const genderInputs      = document.querySelectorAll('input[name="gender"]');
    const relationshipSel   = document.getElementById('relationship');
    const occupationSel     = document.getElementById('occupation');
    const photoInput        = document.getElementById('photo');
    const photoPreview      = document.getElementById('photo-preview');
    const submitBtn         = document.getElementById('submit-btn');
    const cancelEditBtn     = document.getElementById('cancel-edit');
    const formTitle         = document.getElementById('form-title');
    const memberIdInput     = document.getElementById('member-id');

    const toggleTreeBtn     = document.getElementById('toggle-tree');
    const filterFamilySel   = document.getElementById('filter-family');

    // NEW: head-of-family controls
    const headSelector      = document.getElementById('head-selector');
    const loadTreeBtn       = document.getElementById('load-tree');

    // Display containers
    const familyTree        = document.getElementById('family-tree');
    const parentsSection    = document.getElementById('parents');
    const childrenSection   = document.getElementById('children');
    const relativesSection  = document.getElementById('relatives');
    const statsTableBody    = document.querySelector('#stats-table tbody');

    // ====================== State ======================
    let members        = JSON.parse(localStorage.getItem('familyMembers')) || [];
    let editMode       = false;
    let currentId      = null;
    let currentHead    = 'all';          // ← which family we’re looking at
    let ageChart, genderChart, occupationChart;

    // ====================== Init ======================
    populateHeadSelector();
    initCharts();
    refreshEverything();

    // ====================== Event Listeners ======================
    toggleTreeBtn.addEventListener('click', () => {
        familyTree.style.display =
            familyTree.style.display === 'none' ? 'block' : 'none';
    });

    filterFamilySel.addEventListener('change', filterMembersSection);

    photoInput.addEventListener('change', handlePhotoUpload);
    form.addEventListener('submit', handleFormSubmit);
    cancelEditBtn.addEventListener('click', cancelEdit);

    loadTreeBtn.addEventListener('click', () => {
        currentHead = headSelector.value;
        refreshEverything();
    });

    // ====================== Form / CRUD ======================
    function handleFormSubmit(e) {
        e.preventDefault();

        const name         = nameInput.value.trim();
        const age          = parseInt(ageInput.value, 10);
        const gender       = [...genderInputs].find(r => r.checked).value;
        const relationship = relationshipSel.value;
        const occupation   = occupationSel.value;
        const photoFile    = photoInput.files[0];

        if (!name || !age || !relationship) {
            alert('Please fill in all required fields!');
            return;
        }

        // Determine / set head-of-family for this member
        let headOfFamily = currentHead === 'all' ? null : currentHead;
        if (!headOfFamily && (relationship === 'Father' || relationship === 'Mother')) {
            // Creating a brand-new family
            headOfFamily = name;
        }

        const memberData = {
            id: editMode ? currentId : Date.now().toString(),
            name,
            age,
            gender,
            relationship,
            occupation,
            headOfFamily,
            photo: photoFile
                ? URL.createObjectURL(photoFile)
                : 'https://via.placeholder.com/60'
        };

        if (editMode) {
            members = members.map(m => (m.id === currentId ? memberData : m));
            exitEditMode();
        } else {
            members.push(memberData);
        }

        // If a new head was just created, switch to that family automatically
        if (!currentHead || currentHead === 'all') {
            currentHead = memberData.headOfFamily || 'all';
        }

        saveAndRefresh();
        resetForm();
    }

    window.editMember = function (id) {
        const m = members.find(mem => mem.id === id);
        if (!m) return;

        editMode   = true;
        currentId  = id;
        formTitle.textContent = 'Edit Family Member';
        submitBtn.textContent = 'Update Member';
        cancelEditBtn.style.display = 'inline-block';

        nameInput.value        = m.name;
        ageInput.value         = m.age;
        document.querySelector(`input[name="gender"][value="${m.gender}"]`).checked = true;
        relationshipSel.value  = m.relationship;
        occupationSel.value    = m.occupation;
        memberIdInput.value    = m.id;
        photoPreview.innerHTML = `<img src="${m.photo}" alt="Preview">`;
    };

    window.deleteMember = function (id) {
        if (!confirm('Are you sure you want to delete this member?')) return;

        const memberToDelete = members.find(m => m.id === id);
        members = members.filter(m => m.id !== id);

        // If the deleted person was the head and nobody else belongs to that family, drop the family
        if (memberToDelete &&
            memberToDelete.name === memberToDelete.headOfFamily) {
            const stillExists = members.some(
                m => m.headOfFamily === memberToDelete.headOfFamily
            );
            if (!stillExists) currentHead = 'all';
        }

        saveAndRefresh();
    };

    function cancelEdit() {
        exitEditMode();
        resetForm();
    }

    // ====================== Render ======================
    function refreshEverything() {
        populateHeadSelector();
        renderFamilyTree();
        renderStatsTable();
        updateCharts();
    }

    function renderFamilyTree() {
        parentsSection.innerHTML   = '';
        childrenSection.innerHTML  = '';
        relativesSection.innerHTML = '';

        getFilteredMembers().forEach(m => {
            const person = document.createElement('div');
            person.className = `person ${m.gender.toLowerCase()}`;
            person.dataset.id = m.id;
            person.dataset.relationship = m.relationship;

            person.innerHTML = `
                <img src="${m.photo}" alt="${m.name}">
                <span class="name">${m.name}</span>
                <span class="age">${m.age}</span>
                <span class="relationship">${m.relationship}</span>
                <span class="occupation">${m.occupation}</span>
                <div class="actions">
                    <button class="edit-btn"   onclick="editMember('${m.id}')">Edit</button>
                    <button class="delete-btn" onclick="deleteMember('${m.id}')">Delete</button>
                </div>
            `;

            if (['Father', 'Mother'].includes(m.relationship)) {
                parentsSection.appendChild(person);
            } else if (['Son', 'Daughter', 'Brother', 'Sister'].includes(m.relationship)) {
                childrenSection.appendChild(person);
            } else {
                relativesSection.appendChild(person);
            }
        });
    }

    function renderStatsTable() {
        statsTableBody.innerHTML = '';
        getFilteredMembers().forEach(m => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${m.photo}" alt="${m.name}" class="thumbnail"></td>
                <td>${m.name}</td>
                <td>${m.age}</td>
                <td>${m.gender}</td>
                <td>${m.relationship}</td>
                <td>${m.occupation}</td>
            `;
            statsTableBody.appendChild(row);
        });
    }

    // ====================== Charts ======================
    function initCharts() {
        const ageCtx       = document.getElementById('age-chart').getContext('2d');
        const genderCtx    = document.getElementById('gender-chart').getContext('2d');
        const occupationCtx= document.getElementById('occupation-chart').getContext('2d');

        ageChart = new Chart(ageCtx, {
            type: 'bar',
            data: { datasets: [{ backgroundColor: '#4a90e2' }] },
            options: { scales: { y: { beginAtZero: true } }, plugins: { legend: { display:false } } }
        });

        genderChart = new Chart(genderCtx, {
            type: 'pie',
            data: { datasets: [{ backgroundColor: ['#3498db', '#e91e63'] }] },
            options: { plugins: { legend:{ position:'bottom' } } }
        });

        occupationChart = new Chart(occupationCtx, {
            type: 'doughnut',
            data: { datasets: [{ backgroundColor: ['#2ecc71', '#f39c12', '#9b59b6'] }] },
            options: { plugins: { legend:{ position:'bottom' } } }
        });
    }

    function updateCharts() {
        const list = getFilteredMembers();

        // ---- Age (10-year buckets)
        const ageBuckets = Array(10).fill(0);
        list.forEach(m => {
            const idx = Math.min(9, Math.floor(m.age / 10));
            ageBuckets[idx]++;
        });
        ageChart.data = {
            labels: ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89', '90-99'],
            datasets: [{ label: 'Age Groups', data: ageBuckets }]
        };
        ageChart.update();

        // ---- Gender
        const male   = list.filter(m => m.gender === 'Male').length;
        const female = list.filter(m => m.gender === 'Female').length;
        genderChart.data = { labels: ['Male', 'Female'], datasets: [{ data:[male, female] }] };
        genderChart.update();

        // ---- Occupation
        const occs = ['Student','Working','Retired'];
        occupationChart.data = {
            labels: occs,
            datasets: [{ data: occs.map(o => list.filter(m => m.occupation === o).length) }]
        };
        occupationChart.update();
    }

    // ====================== Helpers ======================
    function getFilteredMembers() {
        return currentHead === 'all'
            ? members
            : members.filter(m => m.headOfFamily === currentHead || m.name === currentHead);
    }

    function filterMembersSection() {
        const filter = filterFamilySel.value;
        document.querySelectorAll('.person').forEach(p => {
            const section = p.parentElement.id;
            p.style.display =
                filter === 'all' ||
                (filter === 'parents'   && section === 'parents')   ||
                (filter === 'children'  && section === 'children')  ||
                (filter === 'relatives' && section === 'relatives')
                    ? 'block' : 'none';
        });
    }

    function handlePhotoUpload(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = evt => {
            photoPreview.innerHTML = `<img src="${evt.target.result}" alt="Preview">`;
        };
        reader.readAsDataURL(file);
    }

    function resetForm() {
        form.reset();
        photoPreview.innerHTML = '';
        photoInput.value = '';
    }

    function exitEditMode() {
        editMode = false;
        currentId = null;
        formTitle.textContent = 'Add Family Member';
        submitBtn.textContent = 'Add Member';
        cancelEditBtn.style.display = 'none';
    }

    function populateHeadSelector() {
        if (!headSelector) return;

        const allHeads = [...new Set(
            members
                .filter(m => m.headOfFamily)         // has a head marker
                .map(m => m.headOfFamily)
        )];

        headSelector.innerHTML = '';
        const optAll = new Option('All Families', 'all');
        headSelector.appendChild(optAll);
        allHeads.forEach(h => headSelector.appendChild(new Option(h, h)));

        // keep dropdown in sync with currentHead var
        if (!allHeads.includes(currentHead)) currentHead = 'all';
        headSelector.value = currentHead;
    }

    function saveAndRefresh() {
        localStorage.setItem('familyMembers', JSON.stringify(members));
        refreshEverything();
    }
});
