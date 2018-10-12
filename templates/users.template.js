const showUsers = (users) => {
    let content = '';
    users.forEach(user => {
        content += renderUser(user)
    })
    return `<ul class="list-group">${content}</ul>` 
}

const renderUser = (user) => {
    return `<li class="list-group-item">${user.name}</li>`;

}