//Make a cocktail automatic carousel using the cocktailDB API.
//Parts of the app: 
//Getting the user inputted drink from the form input
//Use the drink to fectch the data from the cocktailDB API.
//Show the user the first drink from the data
//For the carrousel, let user click a button to show the next drink on the list of drinks gotten back from the data, also show the total number of drinks by that name and the current drink number.
//Extra: 
//1- Allow the user to go back to a previous drink by clicking a button
//2- Show the ingredients used for the drink to the user 
//3- Also the measurement of the ingredients used

document.querySelector('.getDrink').addEventListener('click', getDrink)
document.querySelector('.nextDrink').addEventListener('click', nextDrink)
document.querySelector('.previousDrink').addEventListener('click', prevDrink)
let i = 0
function getDrink(){
    let drink = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.drinks[i])
        document.querySelector('h2').innerText = data.drinks[i].strDrink
        document.querySelector('img').src = data.drinks[i].strDrinkThumb
        document.querySelector('.drinkInstructions').innerText = data.drinks[i].strInstructions
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
function nextDrink(){
  i++
  getDrink()
}
function prevDrink(){
  i--
  getDrink()
}
