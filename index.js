//document.addEventListener("DOMContentLoaded", () => console.log("We are connected!"));

//const countries = document.querySelector("#countires")
const form = document.querySelector("#submitBtn")
const infoContainer = document.querySelector("#cards-contianer")
const container = document.querySelector(".container")
const search = document.querySelector("#search-submit")
const searchInput = document.querySelector('#search')
const submitBtn = document.querySelector("#submitBtn")
const card = document.querySelector(".card")
const cardTemplate = document.querySelector("#card-template")
const searchBar = document.querySelector('#searchBar')

// let countries = []


form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log('form is submitted')
})



function fetchData() {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => {
            data.map(country => {
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


        })

        .catch(err => console.log('Request Failed', err));
}

fetchData()