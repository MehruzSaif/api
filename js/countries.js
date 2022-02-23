const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json)
        .then(data => displayCountires(data))
}

loadCountries();

const displayCountires = countries => {
    /* for (const country of countries) {
        console.log(country);
    } */
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        console.log(meal);
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div, innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick = "loadCountryByName()">Details</button>
        `

        /* const h3 = document.createElement('h3');
        h3.innerText = country.name;
        countriesDiv.appendChild(h3)

        const p = document.createElement('p');
        p.innerText = country.capital;
        dispatchEvent.appendChild(p); */
        countriesDiv.appendChild(div);
    });
}
