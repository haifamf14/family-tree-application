const familyData = {
  name: "Tok Ayah",
  relation: "Grandfather",
  type: "person",
  photo: "https://i.pinimg.com/736x/93/d7/c9/93d7c9042c9654c48444877077db935b.jpg",
  dob: "1950-01-01",
  region: "Johor",
  spouse: {
    name: "Atok",
    relation: "Grandmother",
    type: "spouse",
    photo: "icon/tokmek.jpg",
    dob: "1952-03-15",
    region: "Johor"
  },
  children: [
    // First Child - Umi (Mother)
    {
      name: "Maklong",
      relation: "Mother",
      type: "person",
      photo: "icon/maklong.jpg",
      dob: "1975-05-20",
      region: "Johor",
      spouse: {
        name: "Paklong",
        relation: "Father",
        type: "spouse",
        photo: "icon/paklong.jpg",
        dob: "1973-08-12",
        region: "Johor"
      },
      children: [
        { name: "Faris", relation: "Brother", type: "person", photo: "icon/abe.jpg", dob: "2000-07-30", region: "Johor" },
        { name: "Iman", relation: "Brother", type: "person", photo: "icon/iman.jpg", dob: "2002-02-14", region: "Johor" },
        { name: "Dayana", relation: "Sister", type: "person", photo: "icon/dayana.jpg", dob: "2004-11-05", region: "Johor" },
        { name: "Danish", relation: "Brother", type: "person", photo: "icon/danish.jpg", dob: "2006-09-18", region: "Johor" },
        { name: "Damia", relation: "Sister", type: "person", photo: "icon/damiaa.jpg", dob: "2008-04-22", region: "Johor" },
        { name: "Dhia", relation: "Sister", type: "person", photo: "icon/dhia.jpg", dob: "2010-12-10", region: "Johor" },]
    },
    
    // Second Child - Pak Cik A (Uncle)
    {
      name: "Mak lang",
      relation: "Uncle",
      type: "person",
      photo: "icon/maklang.jpg",
      dob: "1978-03-08",
      region: "Kuala Lumpur",
      spouse: {
        name: "Pak lang",
        relation: "Aunt",
        type: "spouse",
        photo: "icon/paklang.jpg",
        dob: "1980-04-25",
        region: "Kuala Lumpur"
      },
      children: [
        { name: "Arif", relation: "Cousin", type: "person", photo: "icon/along.jpg", dob: "2005-10-15", region: "Kuala Lumpur" },
        { name: "Ayuni", relation: "Cousin", type: "person", photo: "icon/angah.jpg", dob: "2007-07-20", region: "Kuala Lumpur" },
        { name: "Aizudin", relation: "Cousin", type: "person", photo: "icon/abangcik.jpg", dob: "2009-09-12", region: "Kuala Lumpur" },
        { name: "Adlina", relation: "Cousin", type: "person", photo: "icon/adlina.jpg", dob: "2011-05-18", region: "Kuala Lumpur" },
      ]
    },
    
    // Third Child - Pak Cik B (Uncle)
   {
      name: "Umi",
      relation: "Mother",
      type: "person",
      photo: "icon/umi.jpg",
      dob: "1975-05-20",
      region: "Johor",
      spouse: {
        name: "Abah",
        relation: "Father",
        type: "spouse",
        photo: "icon/abah.jpg",
        dob: "1973-08-12",
        region: "Johor"
      },
      children: [
        { name: "Haifa", relation: "Me", type: "person", photo: "icon/haifa.jpg", dob: "2000-07-30", region: "Johor" },
        { name: "Hanania", relation: "Sister", type: "person", photo: "icon/niaa.jpg", dob: "2002-02-14", region: "Johor" },
        { name: "Ammar", relation: "Brother", type: "person", photo: "icon/ammar.jpg", dob: "2004-11-05", region: "Johor" },
        { name: "Hasya", relation: "Brother", type: "person", photo: "icon/hasya.jpg", dob: "2006-09-18", region: "Johor" },
        { name: "Inara", relation: "Sister", type: "person", photo: "icon/inara.jpg", dob: "2008-04-22", region: "Johor" },
        { name: "Ilmi", relation: "Sister", type: "person", photo: "icon/ilmi.jpg", dob: "2010-12-10", region: "Johor" },
        { name: "Aydan", relation: "Brother", type: "person", photo: "icon/aydan.jpg", dob: "2013-06-25", region: "Johor" }
      ]
    },
    
    // Fourth Child - Mak Cik C (Aunt)
    {
      name: "Cik Mira",
      relation: "Aunt",
      type: "person",
      photo: "icon/cikmira.jpg",
      dob: "1982-11-30",
      region: "Melaka",
      spouse: {
        name: "Cik Mazlin",
        relation: "Uncle",
        type: "spouse",
        photo: "icon/cikmazlin.jpg",
        dob: "1980-04-15",
        region: "Melaka"
      },
      children: [
        { name: "Auni", relation: "Cousin", type: "person", photo: "icon/auni.jpg", dob: "2009-02-14", region: "Melaka" },
        { name: "Aimi", relation: "Cousin", type: "person", photo: "icon/aimi.jpg", dob: "2011-06-30", region: "Melaka" },
        { name: "Arfa", relation: "Cousin", type: "person", photo: "icon/arfa.jpg", dob: "2013-08-22", region: "Melaka" },
        { name: "Ammara", relation: "Cousin", type: "person", photo: "icon/ammara.jpg", dob: "2015-10-10", region: "Melaka" },
        { name: "Auliya ", relation: "Cousin", type: "person", photo: "icon/auliya.jpg", dob: "2017-12-25", region: "Melaka" },
         { name: "Ayden ", relation: "Cousin", type: "person", photo: "icon/ayden.jpg", dob: "2017-12-25", region: "Melaka" }
      ]
    },
    
    // Fifth Child - Pak Cik D (Uncle)
    {
      name: "Mokni",
      relation: "Aunt",
      type: "person",
      photo: "https://i.pinimg.com/736x/93/d7/c9/93d7c9042c9654c48444877077db935b.jpg",
      dob: "1985-04-18",
      region: "Sabah",
      },
    
    // Sixth Child - Mak Cik E (Aunt)
    {
      name: "Moksu",
      relation: "Aunt",
      type: "person",
      photo: "icon/moksu.jpg",
      dob: "1988-09-12",
      region: "Sarawak",
      spouse: {
        name: "Poksu",
        relation: "Uncle",
        type: "spouse",
        photo: "icon/poksu.jpg",
        dob: "1986-12-05",
        region: "Sarawak"
      },
      children: [
        { name: "Haziq", relation: "Cousin", type: "person", photo: "icon/haziq.jpg", dob: "2013-01-20", region: "Sarawak" },
        { name: "Hadif", relation: "Cousin", type: "person", photo: "icon/hadif.jpg", dob: "2015-04-12", region: "Sarawak" },
        { name: "Hana", relation: "Cousin", type: "person", photo: "icon/hana.jpg", dob: "2017-07-25", region: "Sarawak" },
      ]
    },
  ]
};

let svg, g;
let currentNodeBeingEdited = null;

function initTree() {
  document.getElementById('tree').innerHTML = '';

  const width = 1400;
  const height = 800;

  svg = d3.select('#tree')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .call(d3.zoom().on('zoom', function(event) {
      g.attr('transform', event.transform);
    }));

  g = svg.append('g')
    .attr('transform', 'translate(100, 100)');

  drawTree();
}

function drawTree() {
  const rootData = convertToHierarchy(familyData);
  const root = d3.hierarchy(rootData);

  const treeLayout = d3.tree().nodeSize([180, 150]);
  treeLayout(root);

  // Draw family links
  g.selectAll('.link')
    .data(root.links())
    .enter()
    .append('path')
    .attr('class', 'link')
    .attr('d', d3.linkVertical()
      .x(d => d.x)
      .y(d => d.y));

  // Draw spouse links
  g.selectAll('.spouse-link')
    .data(getSpouseLinks(root))
    .enter()
    .append('path')
    .attr('class', 'spouse-link')
    .attr('d', d => {
      const y = d.source.y;
      return `M${d.source.x},${y} H${d.target.x}`;
    });

  const node = g.selectAll('.node')
    .data(root.descendants())
    .enter()
    .append('g')
    .attr('class', d => `node ${d.data.type}`)
    .attr('transform', d => `translate(${d.x},${d.y})`);

  // Create node content container
  const nodeContent = node.append('foreignObject')
    .attr('width', 120)
    .attr('height', 160)
    .attr('x', -60)
    .attr('y', -80)
    .append('xhtml:div')
    .attr('class', 'node-content')
    .style('cursor', 'pointer')
    .on('click', function(event, d) {
      showMemberDetails(d.data);
    });

  // Add image
  nodeContent.append('img')
    .attr('class', 'node-image')
    .attr('src', d => d.data.photo || 'https://via.placeholder.com/50')
    .attr('alt', d => d.data.name);

  // Add name and relation
  nodeContent.append('div')
    .attr('class', 'node-info')
    .html(d => `<strong>${d.data.name}</strong><br>${d.data.relation}`);

  // Add DOB and Region
  nodeContent.append('div')
    .attr('class', 'node-details')
    .html(d => d.data.dob ? `DOB: ${formatDate(d.data.dob)}` : '');

  nodeContent.append('div')
    .attr('class', 'node-details')
    .html(d => d.data.region ? `Region: ${d.data.region}` : '');
}

function showMemberDetails(data) {
  const popup = document.getElementById('member-popup');
  popup.currentNode = data;
  
  // Display mode
  document.getElementById('popup-name').textContent = data.name;
  document.getElementById('popup-relation').textContent = data.relation;
  document.getElementById('popup-dob').textContent = data.dob ? formatDate(data.dob) : 'N/A';
  document.getElementById('popup-region').textContent = data.region || 'N/A';
  
  const photoElement = document.getElementById('popup-photo');
  photoElement.src = data.photo || 'https://via.placeholder.com/100';
  photoElement.style.display = data.photo ? 'block' : 'none';
  
  // Handle spouse information
  const spouseSection = document.getElementById('popup-spouse-section');
  if (data.spouse) {
    spouseSection.style.display = 'block';
    document.getElementById('popup-spouse-name').textContent = data.spouse.name;
    document.getElementById('popup-spouse-relation').textContent = data.spouse.relation;
  } else {
    spouseSection.style.display = 'none';
  }
  
  // Show action buttons and hide save buttons
  document.getElementById('edit-btn').style.display = 'block';
  document.getElementById('delete-btn').style.display = 'block';
  document.getElementById('save-buttons').style.display = 'none';
  
  popup.classList.add('active');
}

function formatDate(dateString) {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function convertToHierarchy(data) {
  const node = {
    name: data.name,
    relation: data.relation,
    type: data.type || 'person',
    dob: data.dob,
    region: data.region,
    photo: data.photo,
    children: []
  };

  if (data.spouse) {
    const spouseNode = {
      name: data.spouse.name,
      relation: data.spouse.relation,
      type: 'spouse',
      dob: data.spouse.dob,
      region: data.spouse.region,
      photo: data.spouse.photo,
      spouseOf: node.name
    };

    node.children.push(spouseNode);
  }

  if (data.children) {
    for (let child of data.children) {
      node.children.push(convertToHierarchy(child));
    }
  }

  return node;
}

function getSpouseLinks(root) {
  const pairs = [];

  root.each(d => {
    if (d.children) {
      d.children.forEach(child => {
        if (child.data.type === 'spouse' && child.data.spouseOf) {
          const source = d;
          const target = child;
          pairs.push({ source, target });
          
          // Adjust positions to place spouses side by side
          const spouseX = source.x + 150;
          const spouseY = source.y;
          target.x = spouseX;
          target.y = spouseY;
        }
      });
    }
  });

  return pairs;
}

function findNodeByName(node, name) {
  if (node.name === name) return node;
  if (node.children) {
    for (let child of node.children) {
      const found = findNodeByName(child, name);
      if (found) return found;
    }
  }
  return null;
}

function removeNode(parent, name) {
  if (parent.children) {
    parent.children = parent.children.filter(child => child.name !== name);
    for (let child of parent.children) {
      removeNode(child, name);
    }
  }
}

// Event Listeners
document.getElementById('home-btn').addEventListener('click', function() {
  initTree();
});

document.getElementById('edit-btn').addEventListener('click', function() {
  const popup = document.getElementById('member-popup');
  const data = popup.currentNode;
  currentNodeBeingEdited = data;
  
  // Convert display fields to input fields for editing
  document.getElementById('popup-name').innerHTML = `<input type="text" id="edit-name" value="${data.name}">`;
  document.getElementById('popup-relation').innerHTML = `<input type="text" id="edit-relation" value="${data.relation}">`;
  document.getElementById('popup-dob').innerHTML = `<input type="date" id="edit-dob" value="${data.dob || ''}">`;
  document.getElementById('popup-region').innerHTML = `<input type="text" id="edit-region" value="${data.region || ''}">`;
  
  // Hide action buttons and show save buttons
  document.getElementById('edit-btn').style.display = 'none';
  document.getElementById('delete-btn').style.display = 'none';
  document.getElementById('save-buttons').style.display = 'flex';
});

document.getElementById('save-btn').addEventListener('click', function() {
  const popup = document.getElementById('member-popup');
  const data = popup.currentNode;
  
  // Update the data with edited values
  data.name = document.getElementById('edit-name').value;
  data.relation = document.getElementById('edit-relation').value;
  data.dob = document.getElementById('edit-dob').value;
  data.region = document.getElementById('edit-region').value;
  
  // Redraw the tree with updated data
  initTree();
  
  // Close the popup
  popup.classList.remove('active');
  currentNodeBeingEdited = null;
});

document.getElementById('cancel-btn').addEventListener('click', function() {
  document.getElementById('member-popup').classList.remove('active');
  currentNodeBeingEdited = null;
});

document.getElementById('delete-btn').addEventListener('click', function() {
  if (confirm('Are you sure you want to delete this family member?')) {
    const popup = document.getElementById('member-popup');
    const data = popup.currentNode;
    
    // Find and remove the node from familyData
    if (data.type === 'spouse') {
      // Find the main person and remove their spouse
      const mainPerson = findNodeByName(familyData, data.spouseOf);
      if (mainPerson) {
        mainPerson.spouse = null;
      }
    } else {
      // Remove the person node
      removeNode(familyData, data.name);
    }
    
    // Close the popup
    popup.classList.remove('active');
    
    // Redraw the tree
    initTree();
  }
});

document.getElementById('family-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const relation = document.getElementById('relation').value;
  const dob = document.getElementById('dob').value;
  const region = document.getElementById('region').value;
  const photo = document.getElementById('photo').value;
  const spouseName = document.getElementById('spouse-name').value;
  const spouseRelation = document.getElementById('spouse-relation').value;
  const parent = document.getElementById('parent').value;

  // Create new member object
  const newMember = {
    name,
    relation,
    type: "person",
    dob,
    region,
    photo: photo || 'https://via.placeholder.com/50'
  };

  // Add spouse if provided
  if (spouseName) {
    newMember.spouse = {
      name: spouseName,
      relation: spouseRelation,
      type: "spouse",
      photo: 'https://via.placeholder.com/50'
    };
  }

  // Find parent and add new member
  if (parent) {
    const parentNode = findNodeByName(familyData, parent);
    if (parentNode) {
      if (!parentNode.children) parentNode.children = [];
      parentNode.children.push(newMember);
    }
  } else {
    // Add as root if no parent selected
    if (!familyData.children) familyData.children = [];
    familyData.children.push(newMember);
  }

  // Reset form
  e.target.reset();

  // Redraw tree
  initTree();
});

window.addEventListener('load', initTree);