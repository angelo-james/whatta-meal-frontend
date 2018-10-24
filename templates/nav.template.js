const viewRecipes = () => {
    document.querySelector("#recipe-display").style.display = "block";
    document.querySelector("#recipe-form").style.display = "none";
    document.querySelector("#display-recipe-ingredients").style.display = "none";
}

const viewRecipeForm = () => {
    document.querySelector("#recipe-display").style.display = "none";
    document.querySelector("#recipe-form").style.display = "block";
    document.querySelector("#display-recipe-ingredients").style.display = "none";
}

const viewLoginForm = () => {
    localStorage.clear();
    document.querySelector("#login-form").style.display = "block";
    document.querySelector("#navigation-bar").style.display = "none";
    document.querySelector("#recipe-display").style.display = "none";
    document.querySelector("#recipe-form").style.display = "none";
    document.querySelector("#display-recipe-ingredients").style.display = "none";
    document.querySelector("#create-user-form").style.display = "none";
}
const showCreateUser = () => {
    document.querySelector("#login-form").style.display = "none";
    document.querySelector("#create-user-form").style.display = "block";
}
const closeCreateUserForm = () => {
    document.querySelector("#login-form").style.display = "block";
    document.querySelector("#create-user-form").style.display = "none";
}

document.getElementById('close-create-user-form').addEventListener('click', closeCreateUserForm)
document.getElementById('create-user').addEventListener('click', showCreateUser)
document.getElementById('view-recipes').addEventListener('click', viewRecipes)
document.getElementById('view-recipe-form').addEventListener('click', viewRecipeForm)
document.getElementById('view-login-form').addEventListener('click', viewLoginForm)