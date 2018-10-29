const recipesTemplate = (result) => {
    let cardRow = document.querySelector('#card-row')
    let userRecipe = result.data
    
    // result.data.forEach(element => {
    userRecipe.forEach(element => {
        let open = document.createElement("div")

        open.innerHTML = 
            ` 
            <div class="card mx-auto w-25 text-center border-success mb-3" id=${element.recipeId}>
                <img class="card-img-top" src="https://source.unsplash.com/1600x90${element.recipeId}/?food" alt="Card image cap">
                <div class="card-body text-center">
                    <h5 class="card-title text-uppercase">${element.recipeName}</h5>
                    <p class="card-text">${element.description}</p>
                    <button onclick="displayRecipeIngredients(${element.recipeId}, ${element.id})" class="btn btn-success">View Recipe</button>
                </div>
            </div>
            `
        cardRow.appendChild(open);
    })

    userTemplate(result);
}

const recipeIngredients = (result) => {
    
    document.querySelector('#recipe-name').innerHTML = `${result[0].recipeName} Ingredients`

    let ul = document.querySelector('ul');
    ul.innerHTML = "";
    result.forEach(element => {
        let li = document.createElement('li');
        
        li.innerHTML = `<b>${element.quantity}</b> ${element.measurement} of ${element.ingredientName}`
        ul.appendChild(li);
        document.querySelector('#delete-button').innerHTML = `<button onclick="delteRecipe(${result[0].userId})" class="card-link btn btn-success">Delete Recipe</button>`
    });
}