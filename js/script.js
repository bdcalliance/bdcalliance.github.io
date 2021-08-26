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

/* parsing google spreadsheet */

$(document).ready(() => {
    const sheetKey = "1iQQkxg0kI7SB13eepBWr_HHp4QwD71jG389veJ4pBT8";
    const sheetID = 1;
    const url = `https://docs.google.com/spreadsheets/d/${sheetKey}/gviz/tq?`;

    $.ajax({
        crossOrigin: true,
        dataType: "json",
        url,
        success: function (data) {
            console.log(data);
            data.feed.entry.forEach((item) => {
                "https://drive.google.com/file/d/1XaMB0Y2Pj7RlXT1TuSFnaD8HtCye1S6k/view?usp=sharing";
                let imgUrl = item.gsx$image.$t;
                const keyStart = imgUrl.indexOf("file/d/");
                const keyEnd = imgUrl.indexOf("/view");
                const imgKey = imgUrl.slice(keyStart + 7, keyEnd);

                const imgUrlPrefix = "http://drive.google.com/uc?export=view&id=";
                let htmlCode = `<div class="item">
                <a href="${item.gsx$url.$t}">
                    <img src="${imgUrlPrefix + imgKey}" alt="${item.gsx$title.$t}" class="portfolio-logo" />
                </a>
                <h2 class="portfolio-title">${item.gsx$title.$t}</h2>
                <p class="portfolio-description">${item.gsx$description.$t}사</p>
            </div>`;
                $("#portfolios .container").append(htmlCode);
            });
        },
    });
});

/* side bar */

function openNav() {
    document.querySelector("aside").style.width = "300px";
}

function closeNav() {
    document.querySelector("aside").style.width = "0";
}
