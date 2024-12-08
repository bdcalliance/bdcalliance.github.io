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
    // const lines = text.split('\n');
    const lines = text.split(/\r?\n/).filter(line => line.trim() !== '');
    const result = [];
    lines.forEach(line => {
        // const splited = line.split(",");
        const splited = line.split(/[,;]/);
        
        // const url = splited[splited.length-1].trim()
        // const img = splited[splited.length-2].trim()
        const url = splited[splited.length - 1] ? splited[splited.length - 1].trim() : '';
        const img = splited[splited.length - 2] ? splited[splited.length - 2].trim() : '';
        
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
                    ${
                        person.img ?
                        `<img src="./assets/people/${person.img}" alt="${person.name}" class="portfolio-logo" />` :
                        `<div class="empty-image"></div>`
                    }
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
            json.forEach(portfolio => {
                $("#portfolios .container").append(`<div class="item">
                    <a href="${portfolio.url}">
                        ${
                            portfolio.img ? 
                            `<img src="./assets/portfolios/${portfolio.img}" alt="${portfolio.name}" class="portfolio-logo" />` : 
                            `<div class="empty-image"><div class="centered-text">${portfolio.name}</div></div>`
                        }
                    </a>
                </div>`);
            })
        })
})
