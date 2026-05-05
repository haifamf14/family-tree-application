const treeContainer1 = document.getElementById('tree-container-1');
const treeContainer2 = document.getElementById('tree-container-2');
const formPopup = document.getElementById('form-popup');
const nameInput = document.getElementById('person-name');
const ageInput = document.getElementById('person-age');
const genderInputs = document.getElementsByName('gender');
const relationshipInput = document.getElementById('person-relationship');
const occupationInput = document.getElementById('person-occupation');
const photoInput = document.getElementById('person-photo');
const photoPreview = document.getElementById('photo-preview');
const saveBtn = document.getElementById('save-person');
const toggleTreeBtn = document.getElementById('toggle-tree');
const switchFamilyBtn = document.getElementById('switch-family');
const filterFamily = document.getElementById('filter-family');
const familyTree = document.getElementById('family-tree');
const loadTreeBtn = document.getElementById('load-tree');

let currentFamily = 'family1';
let selectedNode = null;
let editPerson = null;

const familyData = {
    family1: {
        name: "Zarina",
        age: 45,
        gender: "Female",
        relationship: "Mother",
        occupation: "Working",
        photo: "https://via.placeholder.com/60",
        children: [
            { name: "Faris", age: 20, gender: "Male", relationship: "Son", occupation: "Student", photo: "https://via.placeholder.com/60", children: [{ name: "Saif", age: 2, gender: "Male", relationship: "Son", occupation: "Student", photo: "https://via.placeholder.com/60" }] },
            { name: "Wani", age: 18, gender: "Female", relationship: "Daughter", occupation: "Student", photo: "https://via.placeholder.com/60" },
            { name: "Iman", age: 16, gender: "Female", relationship: "Daughter", occupation: "Student", photo: "https://via.placeholder.com/60" },
            { name: "Dayana", age: 14, gender: "Female", relationship: "Daughter", occupation: "Student", photo: "https://via.placeholder.com/60" },
            { name: "Danish", age: 12, gender: "Male", relationship: "Son", occupation: "Student", photo: "https://via.placeholder.com/60" },
            { name: "Damia", age: 10, gender: "Female", relationship: "Daughter", occupation: "Student", photo: "https://via.placeholder.com/60" },
            { name: "Dhia", age: 8, gender: "Female", relationship: "Daughter", occupation: "Student", photo: "https://via.placeholder.com/60" }
        ]
    },
    family2: {
        name: "Ahmad",
        age: 50,
        gender: "Male",
        relationship: "Father",
        occupation: "Working",
        photo: "https://via.placeholder.com/60",
        children: [
            { name: "Ali", age: 22, gender: "Male", relationship: "Son", occupation: "Working", photo: "https://via.placeholder.com/60" },
            { name: "Siti", age: 19, gender: "Female", relationship: "Daughter", occupation: "Student", photo: "https://via.placeholder.com/60" }
        ]
    }
};

function createNode(person, parentContainer, familyKey) {
    const node = document.createElement('div');
    node.className = `person ${person.gender.toLowerCase()}`;
    node.dataset.relationship = person.relationship;
    node.innerHTML = `
        <img src="${person.photo}" alt="${person.name}">
        <div>${person.name}</div>
        <div class="actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    node.querySelector('.edit-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        editPerson = person;
        showFormPopup(person, familyKey);
    });

    node.querySelector('.delete-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        deletePerson(person, familyKey);
    });

    node.addEventListener('click', (e) => {
        e.stopPropagation();
        selectedNode = node;
        showFormPopup(null, familyKey);
    });

    parentContainer.appendChild(node);
    return node;
}

function renderTree(data, container, familyKey) {
    container.innerHTML = '';
    const parentsDiv = container.querySelector('.parents');
    const childrenDiv = container.querySelector('.children');
    const relativesDiv = container.querySelector('.relatives');

    if (!parentsDiv || !childrenDiv || !relativesDiv) {
        console.error('Container elements (parents, children, relatives) not found');
        return;
    }

    createNode(data, parentsDiv, familyKey);
    if (data.children && data.children.length) {
        data.children.forEach(child => {
            if (['Son', 'Daughter'].includes(child.relationship)) {
                createNode(child, childrenDiv, familyKey);
            } else {
                createNode(child, relativesDiv, familyKey);
            }
            if (child.children && child.children.length) {
                child.children.forEach(grandchild => createNode(grandchild, relativesDiv, familyKey));
            }
        });
    }
}

function showFormPopup(person, familyKey) {
    formPopup.classList.remove('hidden');
    if (person) {
        nameInput.value = person.name;
        ageInput.value = person.age;
        genderInputs.forEach(input => input.checked = input.value === person.gender);
        relationshipInput.value = person.relationship;
        occupationInput.value = person.occupation;
        photoPreview.innerHTML = `<img src="${person.photo}" alt="Preview">`;
        saveBtn.textContent = 'Update Member';
    } else {
        nameInput.value = '';
        ageInput.value = '';
        genderInputs.forEach(input => input.checked = false);
        relationshipInput.value = '';
        occupationInput.value = 'Student';
        photoPreview.innerHTML = '';
        saveBtn.textContent = 'Add Member';
    }
    saveBtn.dataset.family = familyKey;
}

function hideFormPopup() {
    formPopup.classList.add('hidden');
    editPerson = null;
}

function deletePerson(person, familyKey) {
    const family = familyData[familyKey];
    if (family === person) {
        familyData[familyKey] = { name: "Unknown", age: 0, gender: "Male", relationship: "Father", occupation: "Unknown", photo: "https://via.placeholder.com/60", children: [] };
    } else {
        const removeFromChildren = (children) => {
            const index = children.findIndex(child => child === person);
            if (index !== -1) {
                children.splice(index, 1);
                return true;
            }
            return children.some(child => child.children && removeFromChildren(child.children));
        };
        removeFromChildren(family.children);
    }
    renderTree(familyData[familyKey], document.getElementById(`tree-container-${familyKey === 'family1' ? '1' : '2'}`), familyKey);
    updateStats();
}

function updateStats() {
    const tableBody = document.querySelector('#family-table tbody');
    tableBody.innerHTML = '';
    const allMembers = [];

    Object.keys(familyData).forEach(familyKey => {
        if (filterFamily.value === 'all' || filterFamily.value === familyKey) {
            const family = familyData[familyKey];
            allMembers.push(family);
            if (family.children) {
                allMembers.push(...family.children);
                family.children.forEach(child => {
                    if (child.children) allMembers.push(...child.children);
                });
            }
        }
    });

    allMembers.forEach(member => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${member.photo}" alt="${member.name}"></td>
            <td>${member.name}</td>
            <td>${member.age}</td>
            <td>${member.gender}</td>
            <td>${member.relationship}</td>
            <td>${member.occupation}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;
        row.querySelector('.edit-btn').addEventListener('click', () => showFormPopup(member, currentFamily));
        row.querySelector('.delete-btn').addEventListener('click', () => deletePerson(member, currentFamily));
        tableBody.appendChild(row);
    });

    // Update charts
    const ageData = allMembers.reduce((acc, member) => {
        const range = Math.floor(member.age / 10) * 10;
        acc[range] = (acc[range] || 0) + 1;
        return acc;
    }, {});
    const ageChart = new Chart(document.getElementById('age-chart'), {
        type: 'bar',
        data: {
            labels: Object.keys(ageData).map(k => `${k}-${parseInt(k)+9}`),
            datasets: [{ label: 'Age Distribution', data: Object.values(ageData), backgroundColor: '#4CAF50' }]
        }
    });

    const genderData = allMembers.reduce((acc, member) => {
        acc[member.gender] = (acc[member.gender] || 0) + 1;
        return acc;
    }, {});
    const genderChart = new Chart(document.getElementById('gender-chart'), {
        type: 'pie',
        data: {
            labels: Object.keys(genderData),
            datasets: [{ data: Object.values(genderData), backgroundColor: ['#a8d8ea', '#f8c3cd'] }]
        }
    });

    const occupationData = allMembers.reduce((acc, member) => {
        acc[member.occupation] = (acc[member.occupation] || 0) + 1;
        return acc;
    }, {});
    const occupationChart = new Chart(document.getElementById('occupation-chart'), {
        type: 'doughnut',
        data: {
            labels: Object.keys(occupationData),
            datasets: [{ data: Object.values(occupationData), backgroundColor: ['#4CAF50', '#3498db', '#e91e63'] }]
        }
    });
}

photoInput.addEventListener('change', () => {
    const file = photoInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            photoPreview.innerHTML = `<img src="${reader.result}" alt="Preview">`;
        };
        reader.readAsDataURL(file);
    }
});

saveBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);
    const gender = Array.from(genderInputs).find(input => input.checked)?.value;
    const relationship = relationshipInput.value;
    const occupation = occupationInput.value;
    const photo = photoPreview.querySelector('img')?.src || "https://via.placeholder.com/60";

    if (!name || !age || !gender || !relationship) {
        alert('Please fill in all required fields