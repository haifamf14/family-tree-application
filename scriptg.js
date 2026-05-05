document.addEventListener('DOMContentLoaded', function() {
    // Sample gallery data
    const galleryData = [
        {
            id: 1,
            title: "Abah",
            family: "faizal",
            type: "photo",
            src: "assets/f16.jpg",
            likes: 0,
            comments: [
            ],
            discussions: [
            ],
            rating: 0
        },
        {
            id: 1,
            title: "Umi",
            family: "faizal",
            type: "photo",
            src: "assets/f17.jpg",
            likes: 0,
            comments: [
            ],
            discussions: [
            ],
            rating: 0
        },
        {
            id: 1,
            title: "Umi & Abah",
            family: "faizal",
            type: "photo",
            src: "assets/f5.jpg",
            likes: 0,
            comments: [
            ],
            discussions: [
            ],
            rating: 0
        },
        {
            id: 1,
            title: "Haifa",
            family: "faizal",
            type: "photo",
            src: "assets/1.jpeg",
            likes: 0,
            comments: [
            ],
            discussions: [
            ],
            rating: 0
        },
        {
            id: 1,
            title: "Hanania",
            family: "faizal",
            type: "photo",
            src: "assets/f12.jpg",
            likes: 0,
            comments: [
            ],
            discussions: [
            ],
            rating: 0
        },
        {
            id: 1,
            title: "Ammar",
            family: "faizal",
            type: "photo",
            src: "assets/f11.jpg",
            likes: 0,
            comments: [
            ],
            discussions: [
            ],
            rating: 0
        },
        {
            id: 1,
            title: "Hasya",
            family: "faizal",
            type: "photo",
            src: "assets/f18.jpg",
            likes: 0,
            comments: [
            ],
            discussions: [
            ],
            rating: 0
        },
        {
            id: 1,
            title: "Inara Mirza",
            family: "faizal",
            type: "photo",
            src: "assets/f15.jpg",
            likes: 0,
            comments: [
            ],
            discussions: [
            ],
            rating: 0
        },
        {
            id: 1,
            title: "Ilmi MAdiha",
            family: "faizal",
            type: "photo",
            src: "assets/f13.jpg",
            likes: 0,
            comments: [
            ],
            discussions: [
            ],
            rating: 0
        },
        {
            id: 1,
            title: "Aydan Fahri",
            family: "faizal",
            type: "photo",
            src: "assets/f14.jpg",
            likes: 0,
            comments: [
            ],
            discussions: [
            ],
            rating: 0
        },
        {
            id: 2,
            title: "Inara Birthday",
            family: "faizal",
            type: "video",
            src: "assets/f1.mp4",
            likes: 0,
            comments: [
            ],
            discussions: [
            ],
            rating: 0
        },
        {
            id: 3,
            title: "My siblings",
            family: "faizal",
            type: "photo",
            src: "assets/f2.jpg",
            likes: 12,
            comments: [
            ],
            discussions: [
            ],
            rating: 0
        },
        {
            id: 4,
            title: "Our dreams",
            family: "faizal",
            type: "photo",
            src: "assets/f8.jpg",
            likes: 12,
            comments: [
            ],
            discussions: [
            ],
            rating: 0
        },
        {
            id: 5,
            title: "Ammar 8A's",
            family: "faizal",
            type: "photo",
            src: "assets/f4.jpg",
            likes: 12,
            comments: [
            ],
            discussions: [
            ],
            rating: 0
        },
        {
            id: 6,
            title: "Hasya 6A's",
            family: "faizal",
            type: "photo",
            src: "assets/f9.jpg",
            likes: 12,
            comments: [
            ],
            discussions: [
            ],
            rating: 0
        },
        {
            id: 7,
            title: "Raya Kelantan 2025",
            family: "kelantan",
            type: "video",
            src: "assets/f6.mp4",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
        {
            id: 8,
            title: "Raya Johor 2024",
            family: "Faizal",
            type: "photo",
            src: "assets/f7.jpg",
            likes: 15,
            comments: [],
            discussions: [],
            rating: 0
        },
        {
            id: 9,
            title: "Ammar Muallim",
            family: "Faizal",
            type: "photo",
            src: "assets/f3.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
        {
            id: 10,
            title: "First family photo",
            family: "johor",
            type: "photo",
            src: "assets/j1.jpg",
            likes: 0,
            comments: [
            ],
            discussions: [],
            rating: 0
        },
        {
            id: 11,
            title: "Atok",
            family: "johor",
            type: "photo",
            src: "assets/j2.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
        {
            id: 12,
            title: "Atok ayah & atok",
            family: "johor",
            type: "photo",
            src: "assets/j14.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
        {
            id: 13,
            title: "Family photo",
            family: "johor",
            type: "photo",
            src: "assets/j3.jpg",
            likes: 0,
            comments: [
            ],
            discussions: [],
            rating: 0
        },
        {
            id: 14,
            title: "Pakngah family",
            family: "johor",
            type: "photo",
            src: "assets/j12.jpg",
            likes: 0,
            comments: [
            ],
            discussions: [],
            rating: 0
        },
        {
            id: 15,
            title: "Mak uda family",
            family: "johor",
            type: "photo",
            src: "assets/j9.jpg",
            likes: 0,
            comments: [
            ],
            discussions: [],
            rating: 0
        },
        {
            id: 16,
            title: "Mak andak family",
            family: "johor",
            type: "photo",
            src: "assets/j8.jpg",
            likes: 0,
            comments: [
            ],
            discussions: [],
            rating: 0
        },
        {
            id: 17,
            title: "Mak uteh family",
            family: "johor",
            type: "photo",
            src: "assets/j4.jpg",
            likes: 0,
            comments: [
            ],
            discussions: [],
            rating: 0
        },
        {
            id: 18,
            title: "Moksu family",
            family: "johor",
            type: "photo",
            src: "assets/j7.jpg",
            likes: 0,
            comments: [
            ],
            discussions: [],
            rating: 0
        },
        {
            id: 19,
            title: "Muar trip",
            family: "johor",
            type: "photo",
            src: "assets/j13.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
        {
            id: 20,
            title: "Muar trip",
            family: "johor",
            type: "photo",
            src: "assets/j11.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
        {
            id: 20,
            title: "Aunty",
            family: "johor",
            type: "photo",
            src: "assets/j10.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
        {
            id: 21,
            title: "Atok",
            family: "johor",
            type: "photo",
            src: "assets/j5.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
        {
            id: 22,
            title: "Atok",
            family: "johor",
            type: "photo",
            src: "assets/j15.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
        {
            id: 23,
            title: "Camping trip",
            family: "johor",
            type: "photo",
            src: "assets/j17.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
                {
            id: 24,
            title: "RAya Picuture",
            family: "kelantan",
            type: "photo",
            src: "assets/k1.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
                {
            id: 25,
            title: "Cik Mazlin Family",
            family: "kelantan",
            type: "photo",
            src: "assets/k2.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
                {
            id: 26,
            title: "Moksu Family",
            family: "kelantan",
            type: "photo",
            src: "assets/k3.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
                  {
            id: 27,
            title: "Umi's Siblings",
            family: "kelantan",
            type: "photo",
            src: "assets/k4.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
                  {
            id: 26,
            title: "Tokmek and her daughter",
            family: "kelantan",
            type: "photo",
            src: "assets/k5.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
                  {
            id: 27,
            title: "Paklang Family",
            family: "kelantan",
            type: "photo",
            src: "assets/k6.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
                  {
            id: 28,
            title: "Open house",
            family: "kelantan",
            type: "photo",
            src: "assets/k7.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
                  {
            id: 26,
            title: "My cousin",
            family: "kelantan",
            type: "photo",
            src: "assets/k8.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
                  {
            id: 26,
            title: "Raya 2025",
            family: "kelantan",
            type: "photo",
            src: "assets/k9.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
                  {
            id: 26,
            title: "Pulau Redang trips",
            family: "kelantan",
            type: "photo",
            src: "assets/k10.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
                  {
            id: 26,
            title: "Pulau Redang trips",
            family: "kelantan",
            type: "photo",
            src: "assets/k11.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
                  {
            id: 26,
            title: "Open house",
            family: "kelantan",
            type: "photo",
            src: "assets/k12.jpg",
            likes: 0,
            comments: [],
            discussions: [],
            rating: 0
        },
    ];

    // DOM Elements
    const galleryContainer = document.querySelector('.gallery-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('mediaModal');
    const closeBtn = document.querySelector('.close-btn');
    const modalMediaContainer = document.querySelector('.modal-media-container');
    const modalTitle = document.querySelector('.modal-title');
    const modalFamily = document.querySelector('.modal-family');
    const likeBtn = document.querySelector('.like-btn');
    const likeCount = document.querySelector('.like-count');
    const stars = document.querySelectorAll('.star');
    const commentsContainer = document.querySelector('.comments-container');
    const commentForm = document.querySelector('.comment-form');
    const discussionContainer = document.querySelector('.discussion-container');
    const discussionForm = document.querySelector('.discussion-form');

    // Current selected item
    let currentItem = null;

    // Initialize gallery
    function initGallery() {
        renderGallery('all');
        setupEventListeners();
    }

    // Render gallery based on filter
    function renderGallery(family) {
        galleryContainer.innerHTML = '';
        
        const filteredItems = family === 'all' 
            ? galleryData 
            : galleryData.filter(item => item.family === family);
        
        filteredItems.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = `gallery-item ${item.type}`;
            galleryItem.dataset.id = item.id;
            
            let mediaElement;
            if (item.type === 'photo') {
                mediaElement = document.createElement('img');
                mediaElement.src = item.src;
                mediaElement.alt = item.title;
            } else {
                mediaElement = document.createElement('video');
                mediaElement.src = item.src;
                mediaElement.controls = true;
            }
            mediaElement.className = 'gallery-media';
            
            const galleryInfo = document.createElement('div');
            galleryInfo.className = 'gallery-info';
            
            const titleElement = document.createElement('div');
            titleElement.className = 'gallery-title';
            titleElement.textContent = item.title;
            
            const familyElement = document.createElement('div');
            familyElement.className = 'gallery-family';
            familyElement.textContent = formatFamilyName(item.family);
            
            galleryInfo.appendChild(titleElement);
            galleryInfo.appendChild(familyElement);
            
            galleryItem.appendChild(mediaElement);
            galleryItem.appendChild(galleryInfo);
            
            galleryContainer.appendChild(galleryItem);
        });
    }

    // Format family name for display
    function formatFamilyName(family) {
        return family.charAt(0).toUpperCase() + family.slice(1) + ' Family';
    }

    // Setup event listeners
    function setupEventListeners() {
        // Filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                renderGallery(button.dataset.family);
            });
        });
        
        // Gallery items (using event delegation)
        galleryContainer.addEventListener('click', e => {
            const galleryItem = e.target.closest('.gallery-item');
            if (galleryItem) {
                const itemId = parseInt(galleryItem.dataset.id);
                openModal(itemId);
            }
        });
        
        // Close modal
        closeBtn.addEventListener('click', closeModal);
        window.addEventListener('click', e => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Like button
        likeBtn.addEventListener('click', toggleLike);
        
        // Star rating
        stars.forEach(star => {
            star.addEventListener('click', setRating);
            star.addEventListener('mouseover', hoverRating);
            star.addEventListener('mouseout', resetRating);
        });
        
        // Comment form
        commentForm.addEventListener('submit', e => {
            e.preventDefault();
            const textarea = commentForm.querySelector('textarea');
            addComment(textarea.value);
            textarea.value = '';
        });
        
        // Discussion form
        discussionForm.addEventListener('submit', e => {
            e.preventDefault();
            const input = discussionForm.querySelector('input');
            addDiscussionTopic(input.value);
            input.value = '';
        });
    }

    // Open modal with item details
    function openModal(itemId) {
        currentItem = galleryData.find(item => item.id === itemId);
        if (!currentItem) return;
        
        // Set media
        modalMediaContainer.innerHTML = '';
        let mediaElement;
        if (currentItem.type === 'photo') {
            mediaElement = document.createElement('img');
            mediaElement.src = currentItem.src;
            mediaElement.alt = currentItem.title;
        } else {
            mediaElement = document.createElement('video');
            mediaElement.src = currentItem.src;
            mediaElement.controls = true;
        }
        mediaElement.className = 'modal-media';
        modalMediaContainer.appendChild(mediaElement);
        
        // Set info
        modalTitle.textContent = currentItem.title;
        modalFamily.textContent = formatFamilyName(currentItem.family);
        
        // Set likes
        likeCount.textContent = currentItem.likes;
        likeBtn.className = 'like-btn';
        likeBtn.innerHTML = `<i class="far fa-heart"></i> <span class="like-count">${currentItem.likes}</span>`;
        
        // Set rating
        resetRating();
        if (currentItem.rating > 0) {
            highlightStars(currentItem.rating);
        }
        
        // Set comments
        renderComments();
        
        // Set discussions
        renderDiscussions();
        
        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Close modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        currentItem = null;
    }

    // Toggle like
    function toggleLike() {
        if (!currentItem) return;
        
        if (likeBtn.classList.contains('liked')) {
            currentItem.likes--;
            likeBtn.classList.remove('liked');
            likeBtn.innerHTML = `<i class="far fa-heart"></i> <span class="like-count">${currentItem.likes}</span>`;
        } else {
            currentItem.likes++;
            likeBtn.classList.add('liked');
            likeBtn.innerHTML = `<i class="fas fa-heart"></i> <span class="like-count">${currentItem.likes}</span>`;
        }
        
        likeCount.textContent = currentItem.likes;
    }

    // Star rating functions
    function setRating(e) {
        if (!currentItem) return;
        const value = parseInt(e.target.dataset.value);
        currentItem.rating = value;
        highlightStars(value);
    }

    function hoverRating(e) {
        const value = parseInt(e.target.dataset.value);
        highlightStars(value);
    }

    function resetRating() {
        if (!currentItem) return;
        const value = currentItem.rating || 0;
        highlightStars(value);
    }

    function highlightStars(upTo) {
        stars.forEach(star => {
            star.classList.remove('selected');
            if (parseInt(star.dataset.value) <= upTo) {
                star.classList.add('selected');
            }
        });
    }

    // Comment functions
    function renderComments() {
        if (!currentItem) return;
        
        commentsContainer.innerHTML = '';
        if (currentItem.comments.length === 0) {
            commentsContainer.innerHTML = '<p>No comments yet.</p>';
            return;
        }
        
        currentItem.comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <strong>${comment.user}:</strong> ${comment.text}
            `;
            commentsContainer.appendChild(commentElement);
        });
    }

    function addComment(text) {
        if (!currentItem || !text.trim()) return;
        
        const newComment = {
            user: "You", // In a real app, this would be the logged-in user
            text: text.trim()
        };
        
        currentItem.comments.push(newComment);
        renderComments();
        commentsContainer.scrollTop = commentsContainer.scrollHeight;
    }

    // Discussion functions
    function renderDiscussions() {
        if (!currentItem) return;
        
        discussionContainer.innerHTML = '';
        if (currentItem.discussions.length === 0) {
            discussionContainer.innerHTML = '<p>No discussions yet.</p>';
            return;
        }
        
        currentItem.discussions.forEach(topic => {
            const topicElement = document.createElement('div');
            topicElement.className = 'discussion-topic';
            topicElement.innerHTML = `
                <strong>${topic.user}:</strong> ${topic.topic}
            `;
            discussionContainer.appendChild(topicElement);
        });
    }

    function addDiscussionTopic(topic) {
        if (!currentItem || !topic.trim()) return;
        
        const newTopic = {
            user: "You", // In a real app, this would be the logged-in user
            topic: topic.trim()
        };
        
        currentItem.discussions.push(newTopic);
        renderDiscussions();
        discussionContainer.scrollTop = discussionContainer.scrollHeight;
    }

    // Initialize the gallery
    initGallery();
});

document.addEventListener("DOMContentLoaded", function () {
  // Handle Likes
  document.querySelectorAll(".like-button").forEach(button => {
    button.addEventListener("click", () => {
      const countSpan = button.querySelector(".like-count");
      let count = parseInt(countSpan.textContent);
      countSpan.textContent = ++count;
    });
  });

  // Handle Comment Toggle
  document.querySelectorAll(".comment-button").forEach(btn => {
    btn.addEventListener("click", () => {
      const commentSection = btn.closest(".gallery-item").querySelector(".comment-section");
      commentSection.style.display = commentSection.style.display === "none" ? "block" : "none";
    });
  });

  // Handle Comment Submission
  document.querySelectorAll(".submit-comment").forEach(button => {
    button.addEventListener("click", () => {
      const section = button.closest(".comment-section");
      const input = section.querySelector(".comment-input");
      const commentText = input.value.trim();
      if (commentText) {
        const li = document.createElement("li");
        li.textContent = commentText;
        section.querySelector(".comment-list").appendChild(li);
        input.value = "";
      }
    });
  });
});