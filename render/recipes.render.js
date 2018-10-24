const getUserRecipes = (result) => {
    let userId = result
    axios.get(`https://whatta-meal.herokuapp.com/recipes/${userId}`)

    .then(result => {
        recipesTemplate(result)
    })
}

// const delteRecipe = (recipeId) => {
// axios.del
// }

// const updateRecipe = () => {
    
// }