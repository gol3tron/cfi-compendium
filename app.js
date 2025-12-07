// CFI Compendium Application
(function() {
    'use strict';
    
    // Configuration
    const config = {
        lessonsPath: 'lessons/',
        lessonsIndex: [
            { id: 'aerodynamics-basics', title: 'Aerodynamics Basics', file: 'aerodynamics-basics.md', category: 'Aerodynamics' },
            { id: 'four-forces', title: 'Four Forces of Flight', file: 'four-forces.md', category: 'Aerodynamics' },
            { id: 'flight-planning', title: 'Flight Planning Fundamentals', file: 'flight-planning.md', category: 'Flight Planning' },
            { id: 'weather-basics', title: 'Weather Fundamentals', file: 'weather-basics.md', category: 'Weather' },
            { id: 'preflight-procedures', title: 'Preflight Procedures', file: 'preflight-procedures.md', category: 'Procedures' }
        ]
    };
    
    // State
    let lessons = [];
    let currentLesson = null;
    
    // DOM Elements
    const lessonList = document.getElementById('lessonList');
    const contentArea = document.getElementById('contentArea');
    const searchInput = document.getElementById('searchInput');
    
    // Initialize the application
    function init() {
        loadLessons();
        setupEventListeners();
        handleRouting();
    }
    
    // Load lessons into the sidebar
    function loadLessons() {
        lessons = config.lessonsIndex;
        renderLessonList(lessons);
    }
    
    // Render lesson list in sidebar
    function renderLessonList(lessonsToRender) {
        if (!lessonList) return;
        
        // Group lessons by category
        const categories = {};
        lessonsToRender.forEach(lesson => {
            if (!categories[lesson.category]) {
                categories[lesson.category] = [];
            }
            categories[lesson.category].push(lesson);
        });
        
        // Build HTML
        let html = '';
        for (const category in categories) {
            html += `<li class="category-header">${category}</li>`;
            categories[category].forEach(lesson => {
                html += `
                    <li>
                        <a href="#${lesson.id}" data-lesson-id="${lesson.id}">
                            ${lesson.title}
                        </a>
                    </li>
                `;
            });
        }
        
        lessonList.innerHTML = html;
        
        // Add click handlers
        lessonList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', handleLessonClick);
        });
    }
    
    // Handle lesson link clicks
    function handleLessonClick(e) {
        e.preventDefault();
        const lessonId = e.currentTarget.dataset.lessonId;
        loadLesson(lessonId);
        
        // Update active state
        lessonList.querySelectorAll('a').forEach(link => {
            link.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
    }
    
    // Load and display a lesson
    async function loadLesson(lessonId) {
        const lesson = lessons.find(l => l.id === lessonId);
        if (!lesson) {
            showError('Lesson not found');
            return;
        }
        
        currentLesson = lesson;
        
        // Show loading state
        contentArea.innerHTML = `
            <div class="loading">
                <i class="fas fa-spinner"></i>
                <p>Loading lesson...</p>
            </div>
        `;
        
        try {
            const response = await fetch(`${config.lessonsPath}${lesson.file}`);
            if (!response.ok) {
                throw new Error('Failed to load lesson');
            }
            
            const markdown = await response.text();
            const html = marked.parse(markdown);
            
            contentArea.innerHTML = `<div class="markdown-content">${html}</div>`;
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Update URL
            window.history.pushState({ lessonId }, lesson.title, `#${lessonId}`);
            document.title = `${lesson.title} - CFI Compendium`;
            
        } catch (error) {
            showError('Failed to load lesson content. Please try again.');
            console.error('Error loading lesson:', error);
        }
    }
    
    // Show error message
    function showError(message) {
        contentArea.innerHTML = `
            <div class="error">
                <h2><i class="fas fa-exclamation-triangle"></i> Error</h2>
                <p>${message}</p>
            </div>
        `;
    }
    
    // Handle routing (hash changes)
    function handleRouting() {
        const hash = window.location.hash.slice(1);
        if (hash) {
            const lesson = lessons.find(l => l.id === hash);
            if (lesson) {
                loadLesson(hash);
                // Highlight active lesson
                const activeLink = lessonList.querySelector(`a[data-lesson-id="${hash}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        }
    }
    
    // Setup event listeners
    function setupEventListeners() {
        // Search functionality
        if (searchInput) {
            searchInput.addEventListener('input', handleSearch);
        }
        
        // Handle browser back/forward
        window.addEventListener('popstate', handleRouting);
    }
    
    // Handle search
    function handleSearch(e) {
        const query = e.target.value.toLowerCase().trim();
        
        if (!query) {
            renderLessonList(lessons);
            return;
        }
        
        const filtered = lessons.filter(lesson => {
            return lesson.title.toLowerCase().includes(query) ||
                   lesson.category.toLowerCase().includes(query);
        });
        
        renderLessonList(filtered);
    }
    
    // Configure marked.js options
    if (typeof marked !== 'undefined') {
        marked.setOptions({
            breaks: true,
            gfm: true,
            headerIds: true,
            mangle: false
        });
    }
    
    // Start the application when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
