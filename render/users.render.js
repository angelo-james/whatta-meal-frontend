const validateUser = (event) => {
    event.preventDefault();
    let email = document.querySelector("#login-email").value;
    let password = document.querySelector("#login-user-password").value;

    axios.post('https://whatta-meal.herokuapp.com/users/login', {email, password})
        .then(result => {
            if(result.data.length < 1) {
                alert('Invalid login or password.')
            } else {
                localStorage.setItem("userInfo", JSON.stringify(result.data))
                getUserRecipes(result)
            }
        })
}
const createUser = (event) => {
    event.preventDefault();
    let email = document.querySelector("#create-user-email").value;
    let username = document.querySelector("#create-user-name").value;
    let password = document.querySelector("#create-user-password").value;
    let body = {
        "name": username,
        "email": email,
        "password": password 
    }
    axios.post('https://whatta-meal.herokuapp.com/users', body)
        .then(result => {
            if(result.data.length < 1) {
                alert('failed to create user. please try again')
            } else {
                document.querySelector("#create-user-form").style.display = "none";
                viewLoginForm();
            }
        })
}
document.getElementById('createUser').addEventListener('click', createUser)
document.getElementById('login').addEventListener('click', validateUser)