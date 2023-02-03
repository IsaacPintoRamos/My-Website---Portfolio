AOS.init({
    duration: 1000
});

let count = 1
document.getElementById("card-project-btn-radio-01").checked = true;
    
setInterval(function() {
    nextImage();
}, 70000000)

function nextImage() {
    count++
        if(count > 4) {
            count = 1
        }
        document.getElementById("card-project-btn-radio-0" + count).checked = true;
};