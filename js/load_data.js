/* load data */

// parse *person-formatted* csv into json
function parsePeople(text) {
    const lines = text.split('\n');
    const result = [];
    lines.forEach(line => {
        const splited = line.split(",");
        const name = splited[0].trim()
        const img = splited[splited.length-1].trim()
        const position = splited.slice(1, splited.length-1).join(",").trim()
        result.push({name, position, img});
    });
    return result;
}

// parse *portfolio-formatted* csv into json
function parsePortfolios(text) {
    const lines = text.split('\n');
    const result = [];
    lines.forEach(line => {
        const splited = line.split(",");
        const url = splited[splited.length-1].trim()
        const img = splited[splited.length-2].trim()
        const name = splited.slice(0, splited.length-2).join(",").trim()
        result.push({name, url, img});
    });
    return result;
}

// when doc ready
$(document).ready(() => {
    // fetch people
    fetch('./assets/people.csv', {
        method: "GET",
        headers: {
            'content-type': 'text/csv;charset=UTF-8',
        }
    })
        .then(response => response.text())
        .then(text => parsePeople(text))
        .then(json => {
            json.forEach(person => {
                $("#people .container").append(`<div class="item">
                    <img src="./assets/people/${person.img}" alt="${person.name}" class="portfolio-logo" />
                    <h2 class="portfolio-title">${person.name}</h2>
                    <p class="portfolio-description">${person.position}</p>
                </div>`);
            })
        })
    
    // fetch portfolios
    fetch('./assets/portfolios.csv', {
        method: "GET",
        headers: {
            'content-type': 'text/csv;charset=UTF-8',
        }
    })
        .then(response => response.text())
        .then(text => parsePortfolios(text))
        .then(json => {
            json.forEach(portfoliio => {
                $("#portfolios .container").append(`<div class="item">
                    <a href="${portfoliio.url}">
                        <img src="./assets/portfolios/${portfoliio.img}" alt="${portfoliio.name}" class="portfolio-logo" />
                    </a>
                </div>`);
            })
        })
})