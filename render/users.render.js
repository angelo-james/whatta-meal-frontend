const validateUser = (event) => {
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#userPassword").value;

    axios.post('http://localhost:3000/users/login', {email, password})
    .then(result => {
            localStorage.setItem('userInfo', JSON.stringify(result.data));
            userTemplate(result);
        }).catch(err => {
            return err;
        }) 
}

const createForm = () => {
    const userName = document.getElementById('email')
    const password = document.getElementById('userPassword')
    axios.get('http://localhost:3000/users',
        { 
            "name": userName.value,
            "userId": "Test", 
            "password": password.value, 
            "email": "test@test.com"
        })
}

document.getElementById('pressHarder').addEventListener('click', createForm)