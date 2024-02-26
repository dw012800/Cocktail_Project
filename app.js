//API used will be (www.thecocktaildb.com/api/json/v1/1/random.php)

window.onload = () => {
    // document.querySelector('form').addEventListener('submit', (e) => {
    //     e.preventDefault()

    // })
    document.querySelector('.btn').addEventListener('click', (event) => {
        event.preventDefault()
   fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(
        (data) => {
            console.log(data);
            return data.json();
        },
        (err) => {
            console.log("Error: ", err)
        }
   ).then(
    (json) => {
        console.log("JSON data:", json)
        const name = document.querySelector('#name')
        name.innerText = json.drinks[0].strDrink
        const recipe = document.querySelector('#instructions')
        recipe.innerText = json.drinks[0].strInstructions
        const img = document.querySelector("img")
        img.src = json.drinks[0].strDrinkThumb
        let ingredients = [];
        for(let i = 17; i < json.drinks[0] - 19; i++){
            ingredients.push(json.drinks[0][i])
        }
        console.log(ingredients)
    },
    (err) => {
        console.log(err)
    }
   )
})
}
