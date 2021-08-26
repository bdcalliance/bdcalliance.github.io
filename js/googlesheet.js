$(document).ready(() => {
    const firebaseConfig = {
        apiKey: "AIzaSyBish5rWRtR5qplbJYgq-s8V89Md6kQn7g",
        authDomain: "amantani-partners.firebaseapp.com",
        projectId: "amantani-partners",
        storageBucket: "amantani-partners.appspot.com",
        messagingSenderId: "611645040175",
        appId: "1:611645040175:web:4d9fde975aafa1485788da",
        measurementId: "G-P0XK4KR3YN",
    };
    firebase.initializeApp(firebaseConfig);

    firebase
        .database()
        .ref("/alliance")
        .once("value")
        .then((snapshot) => {
            if (snapshot.val()) {
                let alliance = snapshot.val();
                alliance.forEach((alli) => {
                    const imgUrlPrefix = "http://drive.google.com/uc?export=view&id=";
                    let imgUrl = alli.Logo;
                    const keyStart = imgUrl.indexOf("file/d/");
                    const keyEnd = imgUrl.indexOf("/view");
                    const resultingImgUrl = imgUrlPrefix + imgUrl.slice(keyStart + 7, keyEnd);

                    $("#portfolios .container").append(`<div class="item">
                    <a href="${alli.URL}">
                        <img src="${resultingImgUrl}" alt="${alli.Title}" class="portfolio-logo" />
                    </a>
                    <h2 class="portfolio-title">${alli.Title}</h2>
                    <p class="portfolio-description">${alli.Description}사</p>
                </div>`);
                });
            }
        });
});
