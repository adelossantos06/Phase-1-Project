// document.addEventListener("DOMContentLoaded", () => console.log("We are connected!"));

const countries = document.querySelector("#countires")
const form = document.querySelector("#submitBtn")
const infoContainer = document.querySelector("#cards-contianer")
const list = document.querySelector("#container")

function fetchData() {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => {
            console.log("data", data)
            const countryObj = Object.values(data)
            renderAllCountries(countryObj)

        })
}

fetchData()

function renderAllCountries(countries) {
    console.log('countries', countries)
    countries.forEach(renderOneCountry)
}



function renderOneCountry(singleCountry) {
    console.log('singleCountry', singleCountry)
    const countryName = document.createElement('li')
    countryName.textContent = singleCountry.name.common
    list.append(countryName)
}



// function renderCountry(singleCountry) {

// }

// function oneCountry(oneCountryData) {
//     const countryLi = document.createElement('li')

// }

// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const searchData = new FormData(form)
//     const textBox = document.querySelector('#search')

//     fetchData(textBox.value)
// })

// function countryCard(countryInfo) {
//     countryInfo.forEach(country => {
//         const div = document.createElement('div')
//         const image = document.createElement('img')
//         const name = document.createElement('h3')
//         const population = document.createElement('h3')
//         const language = document.createElement('h3')

//         div.classList = 'card'
//         image.classList = 'card-img'


//         image.src = country.image
//         name.innerText = `Name: ${country.name}`
//         population.innerText = `Population: ${country.population}`
//         language.innerText = `Language: ${country.language}`

//         div.appendChild(image)

//         console.log('country', country)
//     })

// }