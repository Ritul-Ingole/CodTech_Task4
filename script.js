// Sample course data
        const coursesData = [
            {
                id: 1,
                title: "Advanced UI Design Mastery",
                instructor: "Sarah Anderson",
                category: "design",
                rating: 4.9,
                duration: "12h 30m",
                price: "$89",
                progress: 65,
                enrolled: true
            },
            {
                id: 2,
                title: "Full Stack Web Development",
                instructor: "Michael Chen",
                category: "development",
                rating: 4.8,
                duration: "18h 45m",
                price: "$129",
                progress: 0,
                enrolled: false
            },
            {
                id: 3,
                title: "Business Strategy & Growth",
                instructor: "Emily Roberts",
                category: "business",
                rating: 4.7,
                duration: "8h 20m",
                price: "$79",
                progress: 45,
                enrolled: true
            },
            {
                id: 4,
                title: "Digital Marketing Fundamentals",
                instructor: "David Kumar",
                category: "marketing",
                rating: 4.9,
                duration: "10h 15m",
                price: "$99",
                progress: 0,
                enrolled: false
            },
            {
                id: 5,
                title: "Portrait Photography Pro",
                instructor: "Lisa Martinez",
                category: "photography",
                rating: 4.8,
                duration: "14h 30m",
                price: "$119",
                progress: 30,
                enrolled: true
            },
            {
                id: 6,
                title: "React & Modern JavaScript",
                instructor: "James Wilson",
                category: "development",
                rating: 4.9,
                duration: "16h 40m",
                price: "$109",
                progress: 0,
                enrolled: false
            }
        ];

        // Render courses
        function renderCourses(courses) {
            const grid = document.getElementById('coursesGrid');
            grid.innerHTML = courses.map(course => `
                <div class="course-card" onclick="viewCourse(${course.id})">
                    <div class="course-thumbnail"></div>
                    <div class="course-info">
                        <div class="course-meta">
                            <span class="course-category">${course.category}</span>
                            <span class="course-rating">★ ${course.rating}</span>
                        </div>
                        <h3 class="course-title">${course.title}</h3>
                        <p class="course-instructor">by ${course.instructor}</p>
                        <div class="course-footer">
                            <span class="course-duration">⏱ ${course.duration}</span>
                            <span class="course-price">${course.price}</span>
                        </div>
                        ${course.enrolled ? `
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${course.progress}%"></div>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `).join('');
        }

        // Render continue learning cards
        function renderContinueCards() {
            const enrolledCourses = coursesData.filter(c => c.enrolled);
            const container = document.getElementById('continueCards');
            container.innerHTML = enrolledCourses.map(course => `
                <div class="continue-card" onclick="viewCourse(${course.id})">
                    <div class="continue-thumbnail"></div>
                    <div class="continue-info">
                        <h3>${course.title}</h3>
                        <p class="continue-progress-text">${course.progress}% complete • ${course.duration} total</p>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${course.progress}%"></div>
                        </div>
                    </div>
                    <button class="btn btn-primary">Continue</button>
                </div>
            `).join('');
        }

        // Filter courses
        function filterCourses(category) {
            const buttons = document.querySelectorAll('.filter-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            const filtered = category === 'all' 
                ? coursesData 
                : coursesData.filter(c => c.category === category);
            renderCourses(filtered);
        }

        // Search courses
        function searchCourses() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            const filtered = coursesData.filter(c => 
                c.title.toLowerCase().includes(query) || 
                c.instructor.toLowerCase().includes(query)
            );
            renderCourses(filtered);
        }

        // View course
        function viewCourse(id) {
            switchPage('courses');
        }

        // Switch pages
        function switchPage(pageName) {
            document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
            document.getElementById(pageName).classList.add('active');
            
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
            document.querySelector(`[data-page="${pageName}"]`).classList.add('active');
        }

        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                switchPage(page);
            });
        });

        // Video controls
        function playVideo() {
            alert('Video player would start here. In a real implementation, this would use HTML5 video or embedded player like YouTube/Vimeo.');
        }

        function seekVideo(event) {
            const bar = event.currentTarget;
            const rect = bar.getBoundingClientRect();
            const percent = ((event.clientX - rect.left) / rect.width) * 100;
            document.getElementById('videoProgress').style.width = percent + '%';
        }

        // Switch tabs
        function switchTab(tabName) {
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');
            
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(tabName).classList.add('active');
        }

        // Initialize
        renderCourses(coursesData);
        renderContinueCards();

        // Search on Enter key
        document.getElementById('searchInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchCourses();
            }
        });