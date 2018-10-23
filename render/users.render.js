const validateUser = (event) => {
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#userPassword").value;

    axios.post('http://localhost:3000/users/login', {email, password})
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