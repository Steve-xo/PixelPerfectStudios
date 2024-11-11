// this triggers the menu icon on the top right to open
function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}


// this closes the sidebar menu on clicking the close icon
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function showsection(sectionid) {
    const sections= document.querySelectorAll('section'); //All sections

    sections.forEach(section => {
        section.style.display = 'none';  //hide all sections
    });

    document.getElementById(sectionid).style.display = 'block'; //show selected section
}

document.addEventListener("DOMContentLoaded", () => {
    showsection('home')
})

//show "↑" button when user scrolls down 100px from top
window.onscroll = function() {toggleGoTopButton() };

function toggleGoTopButton() {
    const gotop = document.getElementById("gotop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        gotop.style.display = "block"; // This fuction shows the button when user scrolls 100px from top
    } else {
        gotop.style.display = "none"; //This else fuction hides the button if user has not scrolled 100px from top
    }
}

//This function is to scroll to top of page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth'});
}



