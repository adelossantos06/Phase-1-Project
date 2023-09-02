# Country Database 

## Overview
This single page web application written with vanilla javascript uses the restcountries api which returns an array of objects with 250 results of countries and territories. Each object returns the country's flags, name, capital, population, and continents. 

The flags and name keys contain nested objects. The flags key has a value that returns the png, svg, and alt text. The data that is used in this application is the png image and the alt text. The name key has a value that returns the common name, the official name, and the native name. This application uses just the common name. 

The capital key returns a value of an array with most results having an index of 0, in some cases when a country or teritory has more than one capital this application only returns the capital array at the 0 index. The continents key also returns an array but because an instance of a country spanning multiple contintents is rare this application returns all the data within the array. 

Users of this web application can use the search box to search for a country or territory. The search will return either a single card or multiple information cards containting the name, a flag image, and a list of information including the population, the continent and the capital of the country. 

When the user hovers the mouse cursor over the information cards the cards will highlight red. Each card that apppears in the search results contains a save button that will append it to the saved contianer. 

If the user wants to remove a saved card, they can do so by using the remove button at the bottom of the card.

---


## External Links

backround image url : https://wallpaperaccess.com/full/2391514.jpg

API url : https://restcountries.com/v3.1/all?fields=name,flags,population,capital,continents

