const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
    {
        id: 3,
        title: 'The Hunger Games',
        date: 'September 14, 2008',
        description: 'The Hunger Games is a thrilling trilogy that will keep you on the edge of your seat.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/d/dc/The_Hunger_Games.jpg',
        imgAlt: 'Book cover for The Hunger Games',
        ages: '12-16',
        genre: 'Dystopian',
        stars: '⭐⭐⭐⭐⭐'
    }
]

function renderArticles() {
    const articleList = document.getElementById('content');
  
    articles.forEach(article => {
      const articleHTML = `

      <div id="gridContainter">
        <div id="bookInfoLeft">
            <p id="bookDate">${article.date}</p>
            <p id="bookAge">${article.ages}</p>
            <p id="bookGenre">${article.genre}</p>
            <p id="stars">${article.stars}</p>
        </div>
        <div id="bookInfoCenter">
            <h1 id="bookTitle">${article.title}</h1>
            <img src="${article.imgSrc}" alt="${article.imgAlt}">
            <p id="bookDescription">${article.description}</p>
        </div>
        <p id="filter">Filter will go here later</p>
      </div>
       

      `;
  
      articleList.insertAdjacentHTML('beforeend', articleHTML);
    });
  }

document.addEventListener('DOMContentLoaded', () => {
    renderArticles();
});