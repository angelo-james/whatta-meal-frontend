const getUserRecipes = () => {
    let userId = JSON.parse(localStorage.getItem('userInfo'))[0].id;
    
    axios.get(`http://localhost:3000/users/${userId}/recipes`)

    .then(result => {
        recipesTemplate(result)
    })
}