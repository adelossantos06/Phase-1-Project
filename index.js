const container = document.querySelector(".container")
const form = document.querySelector('#search-submit')
const searchBar = document.querySelector('#searchBar')
//const submitBtn = document.querySelector("#submitBtn")
const grabSaveButton = document.querySelector('.button')
const divForSavedCards = document.querySelector('.savedShell')
const searchTerm = []
let countries;

function fetchDataAndSubmit() {
    const searchesCountry = form.addEventListener("submit", (e) => {
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

        grabSaveButton.addEventListener("click", (e) => {
            e.preventDefault()
            console.log("hi")
            cloneElement()

        })

    })


}




function cloneElement() {
    const originalCard = document.querySelector('.card')

    let cloneCard = originalCard.cloneNode(true)
    let saveBtn = cloneCard.querySelector('.button')
    saveBtn.remove();

    divForSavedCards.appendChild(cloneCard)


    let removeBtn = document.createElement('button')
    removeBtn.textContent = 'Remove'
    removeBtn.onClick = function () {
        removeCountry(cloneCard)
    }

    cloneCard.append(removeBtn)


    const removesCard = removeBtn.addEventListener('click', (e) => {
        cloneCard.remove()
    })
}


fetchDataAndSubmit()

