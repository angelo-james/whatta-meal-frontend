const getUserRecipes = () => {
    let userId = JSON.parse(localStorage.getItem('userInfo'))[0].id;
    
    axios.get(`https://whatta-meal.herokuapp.com/${userId}`)

    .then(result => {
        recipesTemplate(result)
    })
}

const delteRecipe = (recipeId) => {
axios.del
}

const updateRecipe = () => {
    
}