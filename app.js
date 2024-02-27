//API used will be (www.thecocktaildb.com/api/json/v1/1/random.php)

window.onload = () => {
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
        let ingredients = []
        for (let i = 1; i <= 15; i++) {
          const ingredient = json.drinks[0]["strIngredient" + i]
          const measure = json.drinks[0]["strMeasure" + i]
          if (ingredient && measure) {
            ingredients.push(` ${measure} ${ingredient}`)
          }
        }
        const list = document.querySelector("#list")
        list.innerText = ingredients


    },
    (err) => {
        console.log(err)
    }
   )
})
}
