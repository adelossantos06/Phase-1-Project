document.addEventListener("DOMContentLoaded", () => console.log("We are connected!"))

function fetchData() {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
        .then(res => res.json())
        .then(data => {
            console.log("data", data)
        })
}

fetchData()