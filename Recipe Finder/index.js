const url="https://www.themealdb.com/api/json/v1/1/search.php?s=";
const userInput=document.getElementById("dishNameInput");
const searchButton=document.getElementById("searchBtn");
const mealContainer=document.getElementById("resultSection");
const loading=document.getElementById("loading");


const recipes=async()=>{
    try{
        if(userInput.value===""){
            alert("Please enter a dish name");
            return;
        }
        const newUrl=url+userInput.value;
        const response=await fetch(newUrl);
        const data=await response.json();
        createMealCard(data.meals[0]);
    }catch(error){
        console.log("Error in fetching data:",error);
    }
}

searchButton.addEventListener("click",recipes);

function createMealCard(meal){
    const Ingredients=document.createElement("ul");
    Ingredients.classList.add("ingredient-title");
    Ingredients.textContent="Ingredients:";
    console.log(meal);
    for(let i=1;i<=20;i++){
        if(meal[`strIngredient${i}`]!==""){
            const ingredientItem=document.createElement("li");
            ingredientItem.classList.add("ingredient-item");
            ingredientItem.textContent=`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`;
            Ingredients.appendChild(ingredientItem);
        }
    }

    const recipeTitle=document.createElement("h3");
    recipeTitle.textContent="Recipe";
    recipeTitle.classList.add("ingredient-title");
    const recipe=document.createElement("p");
    recipe.classList.add("recipe");
    recipe.textContent=meal[`strInstructions`];

     mealContainer.appendChild(Ingredients);
    mealContainer.appendChild(recipeTitle);
    mealContainer.appendChild(recipe);
   
}

userInput.addEventListener("input",()=>{
    if(userInput.value===''){
        clearResult();
    }
})

function clearResult(){
    mealContainer.textContent="";
}