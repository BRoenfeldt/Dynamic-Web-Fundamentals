import recipes from './recipes.mjs';

// Start code for adding recipes
function renderRecipes() {
	const recipePlacer = document.getElementById('recipePlacer');
	let recipeNum = 0
	recipes.forEach(recipes => {
		recipeNum += 1;
		const recipeInsert = `
		<div id="recipes">
			<div id="${recipeNum}"></div>
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
			tags: ${tagsTemplate(recipes.tags)}
			rating: ${ratingTemplate(recipes.rating)}
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

// Start code for adding a tags list
function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
	let html = `<ul class="tags">`
	tags.forEach(tag => {
		html += `<li class="tag">${tag}</li>`
	})
	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars">`
	// our ratings are always out of 5, so create a for loop from 1 to 5
	// check to see if the current index of the loop is less than our rating
	// if so then output a filled star
	rating = Math.floor(rating);
	//console.log(rating);
	for (let i = 0; i < 5; i++) {
		if (i < rating) {
			html += `<span aria-hidden="true" class="icon-star">⭐</span>`
		} else { 		// else output an empty star
			html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
		}
	}
	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html;
}
// End code for adding a tags list



//Start code for picking a random recipe
function random(num) {
	return Math.floor(Math.random() * 5);

}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}
//console.log(getRandomListEntry(recipes));
//end code for picking a random recipe

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();