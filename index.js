// document.addEventListener("DOMContentLoaded", () => console.log("We are connected!"));

const countries = document.querySelector("#countires")
const form = document.querySelector("#submitBtn")
const infoContainer = document.querySelector("#cards-contianer")
const container = document.querySelector(".container")



function fetchData() {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => {
            console.log("data", data)
            const countryObj = Object.values(data)
            countryCard(countryObj)

        })
}

fetchData()

// function renderAllCountries(countries) {
//     console.log('countries', countries)
//     countries.forEach(renderOneCountry)
// }



// function renderOneCountry(singleCountry) {
//     console.log('singleCountry', singleCountry)
//     const countryNameLi = document.createElement('li')
//     const countryPopulation = document.createElement('li')
//     countryNameLi.textContent = singleCountry.name.common
//     countryPopulation.textContent = singleCountry.population
//     list.append(countryNameLi, countryPopulation)
// }

function countryCard(countryInfo) {
    countryInfo.forEach(country => {
        const div = container.appendChild(document.createElement('div'))
        const divForNameImg = div.appendChild(document.createElement("div"))
        const divForLi = div.appendChild(document.createElement('div'))
        const image = document.createElement('img')
        const name = document.createElement('h2')
        const population = document.createElement('li')
        const continents = document.createElement('li')
        const capital = document.createElement('li')

        div.classList = 'card'
        image.classList = 'card-img'
        divForLi.classList = 'info-list'

        image.src = country.flags.png
        image.alt = country.flags.alt
        name.innerText = `${country.name.common}`
        population.innerText = `Population: ${country.population}`
        continents.innerText = `Continent: ${country.continents}`
        capital.innerText = `Capital: ${country.capital}`

        divForNameImg.append(name, image)
        divForLi.append(population, continents, capital)
    })

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const searchData = new FormData(form)
        const textBox = document.querySelector('#search')

        fetchData(textBox.value)
    })

}








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