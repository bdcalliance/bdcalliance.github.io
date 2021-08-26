/* navigation bar */

this.window.addEventListener("scroll", function (e) {
    const offsetY = this.window.scrollY;
    const height = this.document.body.clientHeight;
    const width = this.document.body.clientWidth;

    let navbarHeight = 85 / 2; // divide for smooth change
    if (width <= 800) {
        navbarHeight = 56 / 2;
    }

    let navbar = this.document.querySelector("nav");
    let logo = this.document.querySelector(".logo");
    let menus = this.document.querySelectorAll(".menu");
    let menuBtn = this.document.querySelector("nav .menu-btn > img");

    const offsetHome = 0;
    const offsetAlliance = this.document.getElementById("alliance").getBoundingClientRect().top + offsetY;

    const navOffsetHome = offsetHome - navbarHeight;
    const navOffsetAlliance = offsetAlliance - navbarHeight;

    if ((offsetY >= navOffsetHome && offsetY <= navOffsetHome + height) || (offsetY >= navOffsetAlliance && offsetY <= navOffsetAlliance + height)) {
        navbar.style.backgroundColor = "transparent";
        logo.src = "./assets/images/logow@3x.png";
        menuBtn.src = "./assets/icons/menuw.svg";
        menus.forEach(function (item) {
            item.style.color = "white";
        });
    } else {
        navbar.style.backgroundColor = "white";
        logo.src = "./assets/images/logob@3x.png";
        menuBtn.src = "./assets/icons/menub.svg";
        menus.forEach(function (item) {
            item.style.color = "black";
        });
    }
});

/* side bar */

function openNav() {
    document.querySelector("aside").style.width = "300px";
}

function closeNav() {
    document.querySelector("aside").style.width = "0";
}
