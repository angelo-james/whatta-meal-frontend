
const userTemplate = (result) => {
    //set lets
    let userName = result.data[0].name
    document.querySelector("#login-form").style.display = "none";
    document.querySelector("#navigation-bar").style.display = "block";
    document.querySelector("#recipe-display").style.display = "block";
    
    document.querySelector("#user-name").appendChild(`<h1>Hello ${userName.toUpperCase()}</h1>`)


    getUserRecipes();
}