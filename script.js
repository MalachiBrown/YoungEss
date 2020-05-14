function displayMenu() {
    /*It took me about 4 hours to completely understand the difference between getElementsByName and getElementById. The former returns an array, the latter an element object. */
    var menu = document.getElementsByClassName("menu")[0];
    var home_menu = menu.getElementsByClassName('home_menu').item(0);
     if (home_menu.style.visibility === "visible"){
         home_menu.style.visibility = "hidden";
     } else{
        home_menu.style.visibility = "visible";
     }
         console.log(home_menu.style.visibility)
}

let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
});