//API used will be (www.thecocktaildb.com/api/json/v1/1/random.php)

window.onload = () => {
   fetch('www.thecocktaildb.com/api/json/v1/1/random.php').then
   (
        (data) => {
            console.log(data);
            return data.json;
        },
        (err) => {
            console.log("Error: ", err)
        }
   ).then(
    (json) => {
        console.log("JSON DATA: ", json)
        const name = document.querySelector('#name');
        name.innerText = json.strDrink
        const para = document.querySelector('#para');
        para.innerText = json.strInstructions
    },
    (err) => {
        console.log(err)
    }
   )
}
