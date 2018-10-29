
const userTemplate = (result) => {
    let userName = `Welcome back ${result.data[0].name}`
    if (!result) {
        document.querySelector("#login-form").style.display = "none";
        document.querySelector("#navigation-bar").style.display = "block";
        document.querySelector("#recipe-display").style.display = "block";
        
        document.querySelector("#user-name").innerHTML = userName
    } else {
    let userName = `Welcome back ${result.data[0].name}`
    
    document.querySelector("#login-form").style.display = "none";
    document.querySelector("#navigation-bar").style.display = "block";
    document.querySelector("#recipe-display").style.display = "block";
    
    document.querySelector("#user-name").innerHTML = userName
    }

    // getUserRecipes(result.data[0].id);
}