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

    // let initialAlliance = [
    //     ["GRAYGO", "http://gray-go.com/", "비디씨 얼라이언스에 속한 회사", "https://drive.google.com/file/d/1XaMB0Y2Pj7RlXT1TuSFnaD8HtCye1S6k/view?usp=sharing"],
    //     ["마음수업", "https://www.kokkiri.kr/", "비디씨 얼라이언스에 속한 회사", "https://drive.google.com/file/d/1MPPqcJl_20FLdWzBAG7DXAcjgTL1jWqi/view?usp=sharing"],
    //     ["RIDI", "https://ridibooks.com/", "비디씨 얼라이언스에 속한 회사", "https://drive.google.com/file/d/13GB8nfaK5pcIRhfTNxdIuv_WztktfPti/view?usp=sharing"],
    //     ["SENKO", "http://en-us.senko.co.kr/web2019/main.php", "비디씨 얼라이언스에 속한 회사", "https://drive.google.com/file/d/1SHpEJBe4rxCg4J-w6HhUkXSmtpZpp3QJ/view?usp=sharing"],
    //     ["오늘회", "https://www.onul-hoi.com/", "비디씨 얼라이언스에 속한 회사", "https://drive.google.com/file/d/18v13RPm9k2VukAKQlGY-6HscyzpSKSqD/view?usp=sharing"],
    //     ["STAGE 5", "https://www.stagefive.com/", "비디씨 얼라이언스에 속한 회사", "https://drive.google.com/file/d/13f80DGeG_jzs3Sofa7RLpX0Q3pGS15IQ/view?usp=sharing"],
    //     ["Millibatt", "https://www.millibatt.com", "비디씨 얼라이언스에 속한 회사", "https://drive.google.com/file/d/1E5bm2l1xwviDN2vkOTLiB1VvLhYXJ8iM/view?usp=sharing"],
    //     ["Motion2AI", "https://motion2ai.com", "비디씨 얼라이언스에 속한 회사", "https://drive.google.com/file/d/1bmkPc4-iiN_Q6SaElGjjs53rRV5YFa5B/view?usp=sharing"],
    //     ["d.code", "http://home.itsdcode.com/", "비디씨 얼라이언스에 속한 회사", "https://drive.google.com/file/d/1VlpDVSQjsRrri68h0e1GeTcrAfTNblUr/view?usp=sharing"],
    //     ["SWING", "https://theswing.co.kr/", "비디씨 얼라이언스에 속한 회사", "https://drive.google.com/file/d/159fpmzkTRXX6FjtpYDcbo8AfAIK0WQni/view?usp=sharing"],
    //     ["WireBarley", "https://kr.wirebarley.com/?lang=en", "비디씨 얼라이언스에 속한 회사", "https://drive.google.com/file/d/19ZUov62k4cVxe6pgK2pF6ug427Lbanfv/view?usp=sharing"],
    //     ["BOLD.", "https://be.thebold.co.kr/", "비디씨 얼라이언스에 속한 회사", "https://drive.google.com/file/d/1eptaiNmXfnlKRM8G70sWNDhtC5UwIEXF/view?usp=sharing"],
    //     ["brich", "https://brich.co.kr", "비디씨 얼라이언스에 속한 회사", "https://drive.google.com/file/d/1ErkQ8-glTo9eAXAPCpgtwwN0ixn9pPXp/view?usp=sharing"],
    //     ["sweetspot", "https://www.sweetspot.co.kr/", "비디씨 얼라이언스에 속한 회사", "https://drive.google.com/file/d/1svo8p-IMJy_JeEUwEztTxSe6hKgX-PIM/view?usp=sharing"],
    //     ["Hbsmith", "https://hbsmith.io/", "비디씨 얼라이언스에 속한 회사", "https://drive.google.com/file/d/12_d8YLliQfWZ34Lg8EweP0sDUWObaFjz/view?usp=sharing"],
    //     ["OFN", "https://orangefootballnetwork.com/", "비디씨 얼라이언스에 속한 회사", "https://drive.google.com/file/d/1y0DUadH_ORbfbzXjkAppZMPHWHoN210Q/view?usp=sharing"],
    //     ["IN8", "https://in8.kr/", "비디씨 얼라이언스에 속한 회사", "https://drive.google.com/file/d/18CvTV1OgCEUxWnZjU6wcUudgScRJgKg9/view?usp=sharing"],
    //     ["AIMS", "https://aims2018.modoo.at/", "비디씨 얼라이언스에 속한 회사", "https://drive.google.com/file/d/1ToI52d7_BijgrXpqlsmDZbQLpklI7XmT/view?usp=sharing"],
    //     ["Holosmedic", "http://항암제.com/", "비디씨 얼라이언스에 속한 회사", "https://drive.google.com/file/d/1ToI52d7_BijgrXpqlsmDZbQLpklI7XmT/view?usp=sharing"],
    // ];

    // initialAlliance = initialAlliance.map((alli) => ({
    //     Title: alli[0],
    //     URL: alli[1],
    //     Logo: alli[3],
    // }));

    // firebase.database().ref("/alliance").set(initialAlliance);

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
                    
                </div>`);
                    // <p class="portfolio-description">${alli.Description}사</p>
                });
            }
        });
});
