document.addEventListener("DOMContentLoaded", () => console.log("We are connected!"))

const countries = document.querySelector("#countires")

function fetchData() {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
        .then(res => res.json())
        .then(data => {
            console.log("data", data)
            console.log((data[0]))
            const countryLi = document.createElement('li')

        })
}

fetchData()

