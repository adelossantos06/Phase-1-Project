const container = document.querySelector(".container")
const form = document.querySelector('#search-submit')
const searchBar = document.querySelector('#searchBar')
const divForSavedCards = document.querySelector('.savedShell')


function fetchDataAndSubmit() {
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        container.innerHTML = '';



        fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,capital,continents")
            .then(res => res.json())
            .then(data => {

                const countries = data


                const searchTerm = searchBar.value
                const splitSearchTerm = searchTerm.split(" ");


                for (let i = 0; i < splitSearchTerm.length; i++) {
                    splitSearchTerm[i] = splitSearchTerm[i][0].toUpperCase() + splitSearchTerm[i].substr(1).toLowerCase()
                }

                const newSearchTerm = splitSearchTerm.join(" ");
                const filteredData = countries.filter(country => country.name.common.includes(newSearchTerm))


                renderCountries(filteredData)


            })
            .catch(err => ('Request Failed', err));
    })

}

function renderCountries(countries) {


    countries.forEach(country => {
        const div = document.createElement('div')
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

        container.append(div)
        divForNameImg.append(name, image)
        divForLi.append(population, continents, capital)
        div.append(saveButton)



        saveButton.addEventListener("click", () => {
            cloneElement(div)

        })

        div.addEventListener("mouseover", mouseOver)
        div.addEventListener("mouseleave", mouseLeave)


        function mouseOver() {
            div.style.background = "red";
        }

        function mouseLeave() {
            div.style.background = "LightGray"
        }

    })


}






function cloneElement(originalCard) {


    let cloneCard = originalCard.cloneNode(true)
    let saveBtn = cloneCard.querySelector('.button')
    saveBtn.remove();

    divForSavedCards.appendChild(cloneCard)


    let removeBtn = document.createElement('button')
    removeBtn.textContent = 'Remove'

    cloneCard.append(removeBtn)

    removeBtn.addEventListener('click', () => {
        cloneCard.remove()
    })

    cloneCard.addEventListener("mouseover", mouseOver)
    cloneCard.addEventListener("mouseleave", mouseLeave)


    function mouseOver() {
        cloneCard.style.background = "red";
    }

    function mouseLeave() {
        cloneCard.style.background = "LightGray"
    }


}






fetchDataAndSubmit()

