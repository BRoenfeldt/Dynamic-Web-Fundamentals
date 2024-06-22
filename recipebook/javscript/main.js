import recipes from './recipe.mjs';


// Start code for adding recipes
function renderRecipes() {
    const recipePlacer = document.getElementById('recipePlacer');
  
    recipes.forEach(recipes => {
      const recipeInsert = `
		<div id="recipes">
			<p id="author">${recipes.author}</p>
			<a href="${recipes.url}"id="url">${recipes.url}</a>
			<p id="isBasedOn">${recipes.isBasedOn}</p>
			<p id="cookTime">${recipes.cookTime}</p>
			<p id="datePublished">${recipes.datePublished}</p>
			<p id="tags">${recipes.tags}</p>
			<p id="description">${recipes.description}</p>
			<img id="image" src="${recipes.image}" alt="recipe image">
			<p id="recipeIngredient">${recipes.recipeIngredient}</p>
			<p id="name">${recipes.name}</p>
			<p id="prepTime">${recipes.prepTime}</p>
			<p id="recipeInstructions">${recipes.recipeInstructions}</p>
			<p id="recipeYield">${recipes.recipeYield}</p>
			<span class="rating" role="img" aria-label="Rating: ${recipes.rating} out of 5 stars">
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star-empty">⭐</span>
				<span aria-hidden="true" class="icon-star-empty">☆</span>
			</span>
		</div>
		<br>		
      `;
  
      recipePlacer.insertAdjacentHTML('beforeend', recipeInsert);
    });
  }

document.addEventListener('DOMContentLoaded', () => {
    renderRecipes();
});
  // End Code for adding multiple recipes
