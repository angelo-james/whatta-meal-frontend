const viewRecipes = () => {
    document.querySelector("#recipe-display").style.display = "block";
    document.querySelector("#recipe-form").style.display = "none";
}

const viewRecipeForm = () => {
    document.querySelector("#recipe-display").style.display = "none";
    document.querySelector("#recipe-form").style.display = "block";
}

const viewLoginForm = () => {
    localStorage.clear();
    document.querySelector("#login-form").style.display = "block";
    document.querySelector("#navigation-bar").style.display = "none";
    document.querySelector("#recipe-display").style.display = "none";
    document.querySelector("#recipe-form").style.display = "none";
}

document.getElementById('view-recipes').addEventListener('click', viewRecipes)
document.getElementById('view-recipe-form').addEventListener('click', viewRecipeForm)
document.getElementById('view-login-form').addEventListener('click', viewLoginForm)