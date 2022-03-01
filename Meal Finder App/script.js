
const searchButton = document.querySelector('#searchBtn'); 
const randomButton = document.querySelector("#randomBtn");
const alertMessage = document.querySelector('#alertMsg');
const mealResult = document.querySelector('#result');
const textMessage = document.querySelector('.textMsg');
const inputMessage = document.querySelector("#inputMsg");


searchButton.addEventListener('click',(e)=>{
  e.preventDefault()
    const textValue = inputMessage.value
  if (textValue<1) {
    alert("Please Search for Meal")
  } else {
    console.log(textValue)
    mealResult.innerHTML = "";
    textMessage.innerHTML = "No Result Found ";
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ textValue}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.meals.length);
        textMessage.innerHTML = "";
        alertMessage.innerText = `Result for "${textValue}"`;
        for (let i = 0; i < data.meals.length; i++) {
          mealResult.innerHTML += `<div class="card">
                <img src="${data.meals[i].strMealThumb}" alt="">
                <div class="text">
                    <p class="abs">${data.meals[i].strMeal}</p>
                </div>
            </div>`;
        }
      });
  }
})

randomButton.addEventListener('click',(e)=>{
  e.preventDefault()
  const str = 'abcdefghijklmnopqrstuvwxyz';
  const arr = str.split('')
  let value = Math.floor(Math.random()*arr.length)
  mealResult.innerHTML = "";
  textMessage.innerHTML = `<strong>No Result Found</strong>`;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${arr[value]}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.meals.length);
      textMessage.innerHTML = "";
      alertMessage.innerText = `Result for "Random Meal.."`;
      for (let i = 0; i < data.meals.length; i++) {
        mealResult.innerHTML += `<div class="card">
                <img src="${data.meals[i].strMealThumb}" alt="">
                <div class="text">
                    <p class="mealData">${data.meals[i].strMeal}</p>
                </div>
            </div>`;
      }
    });
})
  // .then((data) => console.log(data.meals[0].strMeal));

