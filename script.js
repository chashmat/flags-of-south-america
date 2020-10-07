let flag = {
    southAmerica: [
        {
            imgAndCountryName: 'argentina',
            capitalCity: 'BUENOS ARIES'
        },
        {
            imgAndCountryName: 'bolovia',
            capitalCity: 'SUCRE'
        },
        {
            imgAndCountryName: 'brazil',
            capitalCity: 'BRASILIA'
        },
        {
            imgAndCountryName: 'chile',
            capitalCity: 'SANTIAGO'
        },
        {
            imgAndCountryName: 'colombia',
            capitalCity: 'BOGOTA'
        },
        {
            imgAndCountryName: 'ecuador',
            capitalCity: 'QUITO'
        },
        {
            imgAndCountryName: 'guyana',
            capitalCity: 'GOERGETOWN'
        },
        {
            imgAndCountryName: 'paraguay',
            capitalCity: 'ASUNICION'
        },
        {
            imgAndCountryName: 'peru',
            capitalCity: 'LIMA'
        },
        {
            imgAndCountryName: 'suriname',
            capitalCity: 'PARAMARIBO'
        },
        {
            imgAndCountryName: 'trinidad',
            capitalCity: 'PORT OF SPAIN'
        },
    ]
};

for (i = 0; i < flag.southAmerica.length; i++) {
    let section = document.createElement('section');
    document.body.appendChild(section);

    let img = document.createElement('img');
    section.appendChild(img);
    img.setAttribute('src', `images/${flag.southAmerica[i].imgAndCountryName}.png`);
    img.setAttribute('alt', flag.southAmerica[i].imgAndCountryName);

    let countryName = document.createElement('p');
    countryName.innerHTML = `Country Name: ${flag.southAmerica[i].imgAndCountryName.toUpperCase()}`;
    section.appendChild(countryName);

    let capitalCity = document.createElement('p');
    capitalCity.innerHTML = `Capital City: ${flag.southAmerica[i].capitalCity}`;
    section.appendChild(capitalCity);
}