
        const notification = document.getElementById('notification');
        const closeNotification = document.getElementById('closeNotification');

        setTimeout(() => {
            notification.classList.add('show');
        }, 2000);

        closeNotification.addEventListener('click', () => {
            notification.classList.remove('show');
        });

        const sliderTrack = document.getElementById('sliderTrack');
        const prevSlide = document.getElementById('prevSlide');
        const nextSlide = document.getElementById('nextSlide');
        const dots = document.querySelectorAll('.dot');
        
        let currentSlide = 0;
        const totalSlides = 4;

        function updateSlider() {
            sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentSlide].classList.add('active');
        }

        function nextSlideHandler() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }

        function prevSlideHandler() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        }

        nextSlide.addEventListener('click', nextSlideHandler);
        prevSlide.addEventListener('click', prevSlideHandler);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateSlider();
            });
        });

        let autoSlideInterval = setInterval(nextSlideHandler, 4000);

        const slider = document.querySelector('.slider');
        slider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        slider.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(nextSlideHandler, 4000);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlideHandler();
            if (e.key === 'ArrowRight') nextSlideHandler();
        });


        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const icon = question.querySelector('.faq-icon');

                faqQuestions.forEach(otherQuestion => {
                    if (otherQuestion !== question) {
                        const otherAnswer = otherQuestion.nextElementSibling;
                        const otherIcon = otherQuestion.querySelector('.faq-icon');
                        otherAnswer.classList.remove('open');
                        otherIcon.classList.remove('open');
                    }
                });
                
                answer.classList.toggle('open');
                icon.classList.toggle('open');
            });
        });

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

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });


        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                header.style.background = 'rgba(0, 0, 0, 0.8)';
            }
        });

        document.querySelectorAll('a[href*="t.me"]').forEach(link => {
            link.addEventListener('click', () => {
                console.log('Contact button clicked');
            });
        });
