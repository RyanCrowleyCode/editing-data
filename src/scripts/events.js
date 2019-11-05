recipeList.addEventListener("click", event => {
    if (event.target.id.startsWith("editRecipe--")) {
        const recipeIdToEdit = event.target.id.split("--")[1]

        /*
            This function will get the recipe from the API
            and populate the form fields (see below)
        */
        updateFormFields(recipeIdToEdit)
    }
})