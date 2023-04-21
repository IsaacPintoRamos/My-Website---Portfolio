AOS.init({
    duration: 1000
});

let count = 1
document.getElementById("card-project-btn-radio-01").checked = true;
    
setInterval(function() {
    nextImage();
}, 5000)

function nextImage() {
    count++
        if(count > 5) {
            count = 1
        }
        document.getElementById("card-project-btn-radio-0" + count).checked = true;
};

var chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    
    document.body.classList.toggle('dark');
    document.querySelector('.card-skills').classList.toggle('dark');
    document.querySelector('.card-profile-text').classList.toggle('dark');
    document.querySelector('.card-profile-text p').classList.toggle('dark');
    document.querySelector('#model-card').classList.toggle('dark');

    document.querySelector('.card-education-02-left').classList.toggle('dark');
    document.querySelector('.card-education-01-right').classList.toggle('dark');
    document.querySelector('.card-experience-01-right').classList.toggle('dark');
    document.querySelector('.card-experience-01-left').classList.toggle('dark');

    document.querySelector('.card-education-line').classList.toggle('dark');
    document.querySelector('.card-education-point-01-right').classList.toggle('dark');
    document.querySelector('.card-education-point-line-01-right').classList.toggle('dark');
    document.querySelector('.card-education-point-01-left').classList.toggle('dark');
    document.querySelector('.card-education-point-line-01-left').classList.toggle('dark');
    document.querySelector('.card-education-point-line-02-left').classList.toggle('dark');


    document.querySelector('.card-point-mode-dark').classList.toggle('dark');
    document.querySelector('#card-profile').classList.toggle('dark');

    document.querySelector('.card-education-name-couse').classList.toggle('dark');
    document.querySelector('.card-education-name-couse-02').classList.toggle('dark');
    document.querySelector('.card-education-name-couse-03').classList.toggle('dark');

    document.querySelector('.card-education-name-university').classList.toggle('dark');
    document.querySelector('.card-education-name-university-02').classList.toggle('dark');
    document.querySelector('.card-education-name-university-03').classList.toggle('dark');

    document.querySelector('.card-education-text-p').classList.toggle('dark');
    document.querySelector('.card-education-text-p-02').classList.toggle('dark');
    document.querySelector('.card-education-text-p-03').classList.toggle('dark');

    document.querySelector('.card-education-date').classList.toggle('dark');
    document.querySelector('.card-education-date-02').classList.toggle('dark');
    document.querySelector('.card-education-date-03').classList.toggle('dark');

    

    document.querySelector('.card-experience-name-job-title').classList.toggle('dark');
    document.querySelector('.card-experience-name-job-title-02').classList.toggle('dark');

    document.querySelector('.card-experience-name-company').classList.toggle('dark');
    document.querySelector('.card-experience-name-company-02').classList.toggle('dark');

    document.querySelector('.card-experience-date').classList.toggle('dark');
    document.querySelector('.card-experience-date-02').classList.toggle('dark');

    document.querySelector('.card-experience-text-p').classList.toggle('dark');
    document.querySelector('.card-experience-text-p-02').classList.toggle('dark');   

    document.querySelector('.overlay p').classList.toggle('dark');
    document.querySelector('.overlay-02 p').classList.toggle('dark');
    document.querySelector('.overlay-03 p').classList.toggle('dark');
    document.querySelector('.overlay-04 p').classList.toggle('dark');
    document.querySelector('.overlay-05 p').classList.toggle('dark');

    document.querySelector('footer').classList.toggle('dark');

    document.querySelector('#card-project-btn-radio-01 ~ .card-project-navigation-manual .btn-01').classList.toggle('dark');
    document.querySelector('#card-project-btn-radio-01 ~ .card-project-navigation-manual .btn-02').classList.toggle('dark');
    document.querySelector('#card-project-btn-radio-01 ~ .card-project-navigation-manual .btn-03').classList.toggle('dark');
    document.querySelector('#card-project-btn-radio-01 ~ .card-project-navigation-manual .btn-04').classList.toggle('dark');
    document.querySelector('#card-project-btn-radio-01 ~ .card-project-navigation-manual .btn-05').classList.toggle('dark');

    document.querySelector('.card-experience-line').classList.toggle('dark');
    document.querySelector('.card-experience-point-line-01-left').classList.toggle('dark');
    document.querySelector('.card-experience-point-line-01-right').classList.toggle('dark');
    document.querySelector('.card-experience-point-01-left').classList.toggle('dark');
    document.querySelector('.card-experience-point-01-right').classList.toggle('dark');
    document.querySelector('#themes label').classList.toggle('dark');

    document.querySelector('.card-project-field-slides').classList.toggle('dark');
});
