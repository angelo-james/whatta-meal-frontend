const getAllUsers = () => {
    axios.get('http://localhost:3000/users')
    
    .then( result => {
            let res = result
            document.getElementById('users-body').innerHTML = showUsers(res.data);
        }).catch(err => {
            return 'you are an error'
        }) 
}
const createButton = () => {
    let button = document.querySelector('#test-button');
    button.addEventListener('click', getAllUsers)
}

const createForm = () => {
    const userName = document.getElementById('userName')
    const password = document.getElementById('userPassword')
    axios.post('http://localhost:3000/users',
        { 
            "name": userName.value,
            "userId": "Test", 
            "password": password.value, 
            "email": "test@test.com"
        })
        .then(results =>{
            document.getElementById('user-alert').style.display = 'block'
            userName.value = ""
            password.value = ""
            return results
        })
}

document.getElementById('pressHarder').addEventListener('click', createForm)

document.addEventListener('DOMContentLoaded', createButton)