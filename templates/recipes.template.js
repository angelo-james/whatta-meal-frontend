const recipesTemplate = (result) => {
    let cardRow = document.querySelector('#card-row')
    
    result.data.forEach(element => {
        let card = ` 
            <div class="card mx-auto w-25 text-center border-success">
            <img class="card-img-top" src="https://source.unsplash.com/1600x901/?food" alt="Card image cap">
            <div class="card-body text-center">
                <h5 class="card-title">${element.recipeName}</h5>
                <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quaerat ea cupiditate exercitationem, odit, suscipit incidunt enim porro nesciunt, quos quam sit animi magnam ullam.</p>
                <a href="#" class="btn btn-success">View Recipe</a>
                <buton id=onclick="deleteRecipe()"</button>
                <buton onclick="updateRecipe()"</button>
            </div>
            </div>
        `
        cardRow.append(card);
    });
}