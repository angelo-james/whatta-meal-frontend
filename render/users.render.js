const validateUser = (event) => {
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#userPassword").value;

    axios.post('https://whatta-meal.herokuapp.com/users/login', {email, password})
    .then(result => {
        if(result.data.length < 1) {
            alert('Invalid login or password.')
        } else {
            localStorage.setItem('userInfo', JSON.stringify(result.data))
            userTemplate(result)
        }
    })
}

document.getElementById('login').addEventListener('click', validateUser)