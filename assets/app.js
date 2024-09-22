const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const $$$ = document.getElementById.bind(document);


const imgBannerAbout = $('.img_banner');
const contentAbout = $('.right-side-about');
const serviceContent = $('.service-content');

const app = {
    // Do with event of page
    handleEvents: function () {
        const checkScroll = () => {
            const rect = imgBannerAbout.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                imgBannerAbout.classList.add('visible');
                contentAbout.classList.add('visible');
                serviceContent.classList.add('visible');
                window.removeEventListener('scroll', checkScroll);
            } else {
                imgBannerAbout.classList.remove('visible');
                contentAbout.classList.remove('visible');
                serviceContent.classList.remove('visible');
            }
        }

        window.addEventListener('scroll', checkScroll);
        checkScroll();
    },

    // Functions 
    // Starting app:
    start: function () {
        this.handleEvents();
    }
};

app.start();