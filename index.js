const container = document.querySelector(".container")
const form = document.querySelector('#search-submit')
const searchBar = document.querySelector('#searchBar')
const submitBtn = document.querySelector("#submitBtn")
const searchTerm = []
let countries;

function fetchDataAndSubmit() {
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log('submitted')
        container.innerHTML = '';



        fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,capital,continents")
            .then(res => res.json())
            .then(data => {

                countries = data

                const searchTerm = searchBar.value
                const splitSearchTerm = searchTerm.split(" ");

                for (let i = 0; i < splitSearchTerm.length; i++) {
                    splitSearchTerm[i] = splitSearchTerm[i][0].toUpperCase() + splitSearchTerm[i].substr(1).toLowerCase()
                }

                const newSearchTerm = splitSearchTerm.join(" ");
                console.log('newSearch', newSearchTerm)
                console.log(searchTerm)
                console.log(splitSearchTerm)
                const filteredData = countries.filter(country => country.name.common.includes(newSearchTerm))
                console.log(filteredData)






                renderCountries(filteredData)
            })
            .catch(err => ('Request Failed', err));
    })

}






function renderCountries(countries) {


    countries.forEach(country => {
        const div = container.appendChild(document.createElement('div'))
        const image = document.createElement('img')
        const divForNameImg = div.appendChild(document.createElement('div'))
        const divForLi = div.appendChild(document.createElement('div'))
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
        capital.innerText = `Capital: ${country.capital[0]}`


        divForNameImg.append(name, image)
        divForLi.append(population, continents, capital)

    })
}


fetchDataAndSubmit()

