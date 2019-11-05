// Add Id to Button Element
// Just like when you implemented the delete functionality, you needed the recipe id added to the end of the id attribute of the delete button. The edit button needs the same thing so that you can capture which recipe to edit.

const createRecipeCard = recipe => `
    <section class="recipe--${recipe.id}">
        <header class="recipe__title">
            ${recipe.title}
        </header>
        <div class="recipe__instructions">
            ${recipe.instructions}
        </div>
        <button id="editRecipe--${recipe.id}">
            Edit Recipe
        </button>
        <button id="deleteRecipe--${recipe.id}">
            Delete Recipe
        </button>
    </section>
`