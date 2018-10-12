const getAllRecipes = () => {
    axios.get('http://localhost:3000/users/recipes')
    
    .then( result => {
            let res = result
            document.getElementById('users-body').innerHTML = showRecipes(res.data);
        }).catch(err => {
            return 'you are an error'
        }) 
}
const createButton = () => {
    let button = document.querySelector('#test-button');
    button.addEventListener('click', getAllUsers)
}
document.addEventListener('DOMContentLoaded', createButton)