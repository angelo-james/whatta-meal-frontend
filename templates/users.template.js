
const userTemplate = (result) => {
    //set lets
    document.querySelector("#navigation-bar")
    document.querySelector("#login-form").style.display = "none";
    document.querySelector("#navigation-bar").style.display = "block";
    document.querySelector("#recipe-display").style.display = "block";
    getUserRecipes();
}