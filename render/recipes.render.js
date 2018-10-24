const getUserRecipes = (result) => {
    let userId = result.data[0].id
    axios.get(`https://whatta-meal.herokuapp.com/recipes/${userId}`)
    
    .then(result => {
        console.log(JSON.stringify(result).status)
        if(JSON.stringify(result).status === 404) {
            userTemplate();
        } else {
            recipesTemplate(result)
        }
    })
}

const displayRecipeIngredients = (recipeId, userId) => {
    document.querySelector("#display-recipe-ingredients").style.display = "block";
    document.querySelector("#recipe-display").style.display = "none";
    
    axios.get(`https://whatta-meal.herokuapp.com/users/${userId}/recipes/${recipeId}`)
        .then(result => {
            recipeIngredients(result.data)
        })
}

const delteRecipe = (recipeId) => {
    if (confirm('Are you sure you want to delete this recipe?')) {
        axios.delete(`https://whatta-meal.herokuapp.com/recipes/${recipeId}`)
            .then(result => {
                console.log(result)
            })
    }
}
// const updateRecipe = () => {
    
// }

document.getElementById('display-recipe-ingredients').addEventListener('click', displayRecipeIngredients)