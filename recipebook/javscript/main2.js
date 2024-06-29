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
	document.getElementById('recipePlacer').innerHTML = recipeList.map(recipeTemplate).join('');
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings

	// Set the HTML strings as the innerHTML of our output element.

}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();




const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('submit', searchHandler)
function filter(query) {
	const filtered = recipes.filter(filterFunction)
	// sort by name
	const sorted = filtered.sort(sortFunction)
		return sorted

}

function searchHandler(e) {
	e.preventDefault()
	// get the search input
	const searchInput = document.getElementById('search').value
	filter(searchInput)
  // convert the value in the input to lowercase
  searchInput = searchInput.toLowerCase()
  // use the filter function to filter our recipes
  const filtered = filter(searchInput)
  // render the filtered list
  renderRecipes(filtered)

}
