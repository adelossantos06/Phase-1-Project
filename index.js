const container = document.querySelector(".container")
const form = document.querySelector('#search-submit')
const searchBar = document.querySelector('#searchBar')
const submitBtn = document.querySelector("#submitBtn")
//const saveButton = document.querySelector('#btnTemplate').content.cloneNod(true).children[0]
const grabSaveButton = document.querySelector('.button')
const searchTerm = []
let countries;

function fetchDataAndSubmit() {
    form.addEventListener("submit", (e) => {
        e.preventDefault()
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
        const saveButton = document.createElement('button')








        div.classList = 'card'
        image.classList = 'card-img'
        divForLi.classList = 'info-list'
        saveButton.classList = 'button'


        image.src = country.flags.png
        image.alt = country.flags.alt
        name.innerText = `${country.name.common}`
        population.innerText = `Population: ${country.population}`
        continents.innerText = `Continent: ${country.continents}`
        capital.innerText = `Capital: ${country.capital[0]}`
        saveButton.innerText = `Save`




        divForNameImg.append(name, image)
        divForLi.append(population, continents, capital)
        div.append(saveButton)

        const grabSaveButton = document.querySelector('.button')
        const divForSavedCards = document.querySelector('.savedShell')

        grabSaveButton.addEventListener("click", (e) => {
            e.preventDefault()
            console.log("hi")

            // const addHeader = document.createElement('header')
            // const divForHeader = document.createElement('div')

            // divForHeader.classList = 'saved-header'

            // addHeader.innerText = 'Saved Countries'

            // divForSavedCards.appendChild(divForHeader)
            // divForHeader.append(addHeader)

            // const divForSavedCards = document.querySelector('.savedShell')

            let clonedCard = document.querySelector(".card").cloneNode(true)
            divForSavedCards.appendChild(clonedCard)

            // const saveInsideClone = document.querySelector('.button')

            // saveInsideClone.remove()

        })

    })


}



// saveButton.addEventListener("click", (e) => {
//     e.preventDefault()
//     console.log("hi")
// })


fetchDataAndSubmit()

