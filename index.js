const container = document.querySelector(".container")
const outerCountryDiv = document.querySelector(".outer")
const form = document.querySelector('#search-submit')
const searchBar = document.querySelector('#searchBar')

//let countries

function fetchData() {
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log('submitted')

        //const renderdFilterdCountries = renderCountries(filteredData)
        // fetchData(renderdFilterdCountries)

        fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,capital,continents")
            .then(res => res.json())
            .then(data => {
                // console.log('data', data)
                countries = data
                // renderCountries(data)
                const filteredData = countries.filter(country => country.name.common.includes(searchBar.value))
                console.log(filteredData)

                //outerCountryDiv.innerHTML = '';

                renderCountries(filteredData)
            })
    })
}

//         .catch(err => ('Request Failed', err));
// }


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

// function handleFilterSubmit(e) {
//     e.preventDefault()
// const filterCriteria = e.target.value
// // fetchData()
// //     .then(data => {
// //         console.log('data', data)
// const filteredData = data.filter(country => country.name.common.includes(filterCriteria))

//         console.log('filterd', filteredData)
//renderCountries(filteredData)
//     })

// }



//form.addEventListener("submit", handleFilterSubmit)




//form.addEventListener("submit", handleFilterSubmit)

// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     console.log('submitted')
//     const filteredData = countries.filter(country => country.name.common.includes(searchBar.value))
//     console.log(filteredData)
//     const renderdFilterdCountries = renderCountries(filteredData)
//     fetchData(renderdFilterdCountries)
// })

// function handleFilterSubmit(e) {
//     e.preventDefault()
//     const filteredData = countries.filter(country => country.name.common.includes(searchBar.value))
//     console.log(filteredData)
//     fetchData(filteredData)
// }
fetchData()

//handleFilterSubmit()