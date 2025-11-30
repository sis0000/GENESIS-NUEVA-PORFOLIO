// script.js

// Dark/Light Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or prefer OS theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark-mode');
    }
    
    // Toggle theme function
    function toggleTheme() {
        body.classList.toggle('dark-mode');
        
        // Save preference to localStorage
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Update header shadow for dark mode
        updateHeaderShadow();
    }
    
    // Add click event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                body.classList.add('dark-mode');
            } else {
                body.classList.remove('dark-mode');
            }
            updateHeaderShadow();
        }
    });
    
    // Update header shadow based on theme
    function updateHeaderShadow() {
        const header = document.querySelector('.header');
        if (!header) return;
        
        if (body.classList.contains('dark-mode')) {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 8px rgba(0,0,0,0.4)';
            } else {
                header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
            }
        } else {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
            } else {
                header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            }
        }
    }
    
    // Initialize header shadow on load
    updateHeaderShadow();
});

// Chat functionality
const chatButton = document.getElementById('chatButton');
const chatModal = document.getElementById('chatModal');
const closeChat = document.getElementById('closeChat');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');
const chatBody = document.getElementById('chatBody');

// Toggle chat modal
chatButton.addEventListener('click', function() {
    chatModal.classList.toggle('active');
    if (chatModal.classList.contains('active')) {
        chatInput.focus();
    }
});

// Close chat modal
closeChat.addEventListener('click', function() {
    chatModal.classList.remove('active');
});

// Send message function
function sendChatMessage() {
    const message = chatInput.value.trim();
    if (message === '') return;
    
    // Add user message to chat
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'chat-message user-message';
    userMessageDiv.innerHTML = `<p>${message}</p>`;
    chatBody.appendChild(userMessageDiv);
    
    // Clear input
    chatInput.value = '';
    
    // Scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;
    
    // Simulate bot response after 1 second
    setTimeout(function() {
        const botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'chat-message bot-message';
        
        // Simple response logic
        let botResponse = '';
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            botResponse = 'Hello! How can I help you today?';
        } else if (lowerMessage.includes('project')) {
            botResponse = 'I have several exciting projects including CodeCred, BASE404, DIIN.PH, and DYNAMIS Workout Tracker. Which one interests you?';
        } else if (lowerMessage.includes('contact') || lowerMessage.includes('email')) {
            botResponse = 'You can reach me at nuevagenesis09@gmail.com or schedule a call through Calendly!';
        } else if (lowerMessage.includes('experience')) {
            botResponse = 'I\'m currently a Fresh Graduate. I have experience in full-stack development and AI engineering.';
        } else if (lowerMessage.includes('skill') || lowerMessage.includes('tech')) {
            botResponse = 'I work with JavaScript, TypeScript, React, Next.js, Python, PHP, PostgreSQL, MongoDB, AWS, Docker, and more!';
        } else if (lowerMessage.includes('portfolio') || lowerMessage.includes('projects')) {
            botResponse = "You can check my portfolio anytime! Let me know if you want a specific project overview.";
        } else if (lowerMessage.includes('github')) {
            botResponse = "Here’s my GitHub: https://github.com/nuevagenesis — feel free to explore my work!";
        } else if (lowerMessage.includes('location') || lowerMessage.includes('where are you')) {
            botResponse = "I’m based in the Philippines, but I work with clients anywhere.";
        } else if (lowerMessage.includes('services') || lowerMessage.includes('offer')) {
            botResponse = "I offer web development, app development, UI/UX work, and AI-related solutions.";
        } else if (lowerMessage.includes('price') || lowerMessage.includes('rate')) {
            botResponse = "Rates depend on the scope. Tell me what you need so I can give you a fair estimate.";
        } else if (lowerMessage.includes('hire') || lowerMessage.includes('available')) {
            botResponse = "I’m open to new opportunities! Share the details and let’s check if I’m a good fit.";
        } else if (lowerMessage.includes('about you') || lowerMessage.includes('who are you')) {
            botResponse = "I’m Genesis—a developer focused on building clean, useful, and modern digital solutions.";
        } else if (lowerMessage.includes('time') || lowerMessage.includes('schedule')) {
            botResponse = "You can book a schedule via Calendly. What time works best for you?";
        } else if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
            botResponse = "I can share my resume if you’d like! Just leave your email so I can send it.";
        } else if (lowerMessage.includes('thanks') || lowerMessage.includes('thank you')) {
            botResponse = "You're welcome! Happy to help anytime.";
        } else if (lowerMessage.includes('help') || lowerMessage.includes('assist')) {
            botResponse = "Sure, tell me what you need and I’ll do my best to guide you.";
        } else if (lowerMessage.includes('social') || lowerMessage.includes('facebook') || lowerMessage.includes('linkedin')) {
            botResponse = "You can follow me on LinkedIn or message me through my email anytime.";
        } else if (lowerMessage.includes('stack') || lowerMessage.includes('tools')) {
            botResponse = "I use React, Next.js, Python, PHP, PostgreSQL, MongoDB, Docker, and a bunch of other tools depending on the project.";
        } else if (lowerMessage.includes('ai') || lowerMessage.includes('machine learning')) {
            botResponse = "I build AI features such as chatbots, recommendation systems, and automation tools.";
        } else if (lowerMessage.includes('website') || lowerMessage.includes('web dev')) {
            botResponse = "I design and build responsive, fast, and clean websites. Want one for your business or project?";
        } else if (lowerMessage.includes('app') || lowerMessage.includes('mobile')) {
            botResponse = "I can help with mobile-friendly apps or web apps! Tell me what you're planning.";
        } else if (lowerMessage.includes('job') || lowerMessage.includes('work')) {
            botResponse = "I'm open to freelance, part-time, and full-time roles depending on the project.";
        } else if (lowerMessage.includes('internship')) {
            botResponse = "I’m open to internship-related collaborations or mentorship. What do you have in mind?";
        } else if (lowerMessage.includes('deadline') || lowerMessage.includes('deliver')) {
            botResponse = "I work efficiently and communicate clearly. Let me know your timeline so I can help.";
        } else if (lowerMessage.includes('design') || lowerMessage.includes('ui') || lowerMessage.includes('ux')) {
            botResponse = "I can help with UI/UX, wireframes, prototypes, and design systems.";
        } else if (lowerMessage.includes('start') || lowerMessage.includes('begin')) {
            botResponse = "Great! Tell me a bit more about your idea so we can get things started.";
        }

        
        botMessageDiv.innerHTML = `<p>${botResponse}</p>`;
        chatBody.appendChild(botMessageDiv);
        
        // Scroll to bottom
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}

// Send message on button click
sendMessage.addEventListener('click', sendChatMessage);

// Send message on Enter key
chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendChatMessage();
    }
});

// Close chat when clicking outside
document.addEventListener('click', function(e) {
    if (!chatModal.contains(e.target) && !chatButton.contains(e.target)) {
        chatModal.classList.remove('active');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Recommendations slider
let currentSlide = 1; // Starting at index 1 (second dot is active)
const dots = document.querySelectorAll('.dot');
const recommendations = [
    {
        text: '"Was an intern at PocketDevs and sir Genesis was our main trainer to the different technologies we use in the company such as Laravel, Bootstrap, etc. With his guidance, I was equipped with some of the current trends and insights in the tech industry which enabled me..."',
        author: 'Patrick Vince Velasco',
        position: 'Software Engineer, YNS'
    },
    {
        text: '"Working with Genesis was an amazing experience. His expertise in full-stack development and his ability to communicate complex ideas simply is unmatched."',
        author: 'John Doe',
        position: 'Senior Developer, StartupXYZ'
    },
    {
        text: '"An exceptional software engineer who delivers high-quality work consistently. His knowledge of modern technologies is impressive."',
        author: 'Sarah Johnson',
        position: 'CTO, InnovateTech'
    },
    {
        text: '"A true professional with deep technical expertise. Genesis\s contributions to our projects have been invaluable."',
        author: 'Emily Rodriguez',
        position: 'Product Manager, TechVision'
    },

];

// Initialize dots click event
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
    });
});

function updateSlider() {
    // Update active dot
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    
    // Update recommendation content if exists
    const recText = document.querySelector('.recommendation-text');
    const recAuthor = document.querySelector('.recommendation-author');
    
    if (recText && recAuthor && recommendations[currentSlide]) {
        recText.textContent = recommendations[currentSlide].text;
        recAuthor.innerHTML = `
            <strong>${recommendations[currentSlide].author}</strong>
            <span>${recommendations[currentSlide].position}</span>
        `;
    }
}

// Auto-advance slider every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % dots.length;
    updateSlider();
}, 5000);

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const body = document.body;
    
    if (window.scrollY > 50) {
        if (body.classList.contains('dark-mode')) {
            header.style.boxShadow = '0 4px 8px rgba(0,0,0,0.4)';
        } else {
            header.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
        }
    } else {
        if (body.classList.contains('dark-mode')) {
            header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        }
    }
});

// Add animation on scroll for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

console.log('Portfolio loaded successfully!');