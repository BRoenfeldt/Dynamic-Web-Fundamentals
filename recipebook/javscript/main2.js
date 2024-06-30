import recipes from './recipes.mjs';

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

function recipeTemplate(recipes) {
	return `
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
			tags: ${tagsTemplate(recipes.tags)}
			rating: ${ratingTemplate(recipes.rating)}
		</div>
		<br>		
      `;
}

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

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
	
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
	document.getElementById('recipePlacer').innerHTML = recipeList.map(recipeTemplate).join('');
	// Set the HTML strings as the innerHTML of our output element.

}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();


function filter(query) {
    const filtered = recipes.filter(recipes => {
        return recipes.name.toLowerCase().includes(query) || recipes.description.toLowerCase().includes(query) || (recipes.tags && recipes.tags.find(tag => tag.toLowerCase().includes(query))) || (recipes.recipeIngredient && recipes.recipeIngredient.find(recipeIngredient => recipeIngredient.toLowerCase().includes(query)));
    });

    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
}

function searchHandler(e) {
	e.preventDefault();
    const searchBar = document.getElementById('search').value.toLowerCase();
    const filteredRecipes = filter(searchBar);
    renderRecipes(filteredRecipes);

}

document.getElementById('searchButton').addEventListener('click', searchHandler);
document.addEventListener('DOMContentLoaded', init);