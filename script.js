const familyData = {
  name: "Tok Pa",
  relation: "Grandfather",
  type: "person",
  dob: "1950-01-15",
  region: "Kelantan",
  photo: "https://via.placeholder.com/50",
  spouse: {
    name: "Tok Ma",
    relation: "Grandmother",
    type: "spouse",
    dob: "1952-05-20",
    region: "Kelantan",
    photo: "https://via.placeholder.com/50"
  },
  children: [
    {
      name: "Mak",
      relation: "Mother",
      type: "person",
      dob: "1975-08-10",
      region: "Selangor",
      photo: "https://via.placeholder.com/50",
      spouse: {
        name: "Ayah",
        relation: "Father",
        type: "spouse",
        dob: "1972-11-25",
        region: "Selangor",
        photo: "https://via.placeholder.com/50"
      },
      children: [
        { 
          name: "Haifa", 
          relation: "Me", 
          type: "person",
          dob: "2000-03-15",
          region: "Kuala Lumpur",
          photo: "https://via.placeholder.com/50"
        },
        { 
          name: "Sister", 
          relation: "Sister", 
          type: "person",
          dob: "2002-07-22",
          region: "Kuala Lumpur",
          photo: "https://via.placeholder.com/50"
        }
      ]
    },
    {
      name: "Pak Cik A",
      relation: "Uncle",
      type: "person",
      dob: "1978-04-05",
      region: "Penang",
      photo: "https://via.placeholder.com/50",
      children: [
        { 
          name: "Cousin A", 
          relation: "Cousin", 
          type: "person",
          dob: "2005-09-12",
          region: "Penang",
          photo: "https://via.placeholder.com/50"
        },
        { 
          name: "Cousin B", 
          relation: "Cousin", 
          type: "person",
          dob: "2007-01-30",
          region: "Penang",
          photo: "https://via.placeholder.com/50"
        }
      ]
    }
  ]
};

let svg, g;

function initTree() {
  // Create popup elements dynamically
  createPopupElement();
  
  document.getElementById('tree').innerHTML = '';

  const width = 1400;
  const height = 800;

  svg = d3.select('#tree')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .call(d3.zoom().on('zoom', function (event) {
      g.attr('transform', event.transform);
    }));

  g = svg.append('g')
    .attr('transform', 'translate(100, 100)');

  drawTree();
}

function createPopupElement() {
  const popupHTML = `
    <div class="popup-overlay" id="member-popup">
      <div class="popup-content">
        <span class="close-popup">&times;</span>
        <h2>Family Member Details</h2>
        <div class="form-group">
          <label>Name:</label>
          <div id="popup-name" class="popup-field"></div>
        </div>
        <div class="form-group">
          <label>Relation:</label>
          <div id="popup-relation" class="popup-field"></div>
        </div>
        <div class="form-group">
          <label>Date of Birth:</label>
          <div id="popup-dob" class="popup-field"></div>
        </div>
        <div class="form-group">
          <label>Region:</label>
          <div id="popup-region" class="popup-field"></div>
        </div>
        <div class="form-group">
          <label>Photo:</label>
          <img id="popup-photo" src="" alt="Member photo" style="max-width: 100px; display: block; margin-top: 5px;">
        </div>
        <div id="popup-spouse-section">
          <h3>Spouse Details</h3>
          <div class="form-group">
            <label>Spouse Name:</label>
            <div id="popup-spouse-name" class="popup-field"></div>
          </div>
          <div class="form-group">
            <label>Spouse Relation:</label>
            <div id="popup-spouse-relation" class="popup-field"></div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', popupHTML);
  
  // Add popup event listeners
  document.querySelector('.close-popup').addEventListener('click', () => {
    document.getElementById('member-popup').classList.remove('active');
  });
  
  document.getElementById('member-popup').addEventListener('click', (e) => {
    if (e.target === document.getElementById('member-popup')) {
      document.getElementById('member-popup').classList.remove('active');
    }
  });
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
    .attr('class', 'node')
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
    .style('background-color', d => d.data.type === 'spouse' ? '#ffb6c1' : '#3498db')
    .style('color', 'white')
    .style('width', '100%')
    .style('padding', '5px 0')
    .style('border-radius', '5px')
    .style('margin-bottom', '5px')
    .html(d => `<strong>${d.data.name}</strong><br>${d.data.relation}`);

  // Add DOB and Region
  nodeContent.append('div')
    .style('font-size', '10px')
    .style('margin-bottom', '3px')
    .html(d => d.data.dob ? `DOB: ${formatDate(d.data.dob)}` : '');

  nodeContent.append('div')
    .style('font-size', '10px')
    .html(d => d.data.region ? `Region: ${d.data.region}` : '');
}

function showMemberDetails(data) {
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
  
  document.getElementById('member-popup').classList.add('active');
}

// Rest of your existing functions remain the same...
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

  // In a real app, you would add this data to the familyData structure
  // and then redraw the tree
  console.log('New member:', {
    name, relation, dob, region, photo,
    spouse: spouseName ? { 
      name: spouseName, 
      relation: spouseRelation,
      dob: '',
      region: region,
      photo: 'https://via.placeholder.com/50'
    } : null
  });

  alert('Family member added to console! (This is a demo - form submission not fully implemented)');
});

window.addEventListener('load', initTree);