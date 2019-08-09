
window.addEventListener('load', function() {
// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
let entryPoint = document.querySelector('.cards-container')

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response)=> {
    this.console.log(response)
    response.data.articles.bootstrap.forEach(topic => {
        let newArticle = ArticleCard(topic);
        entryPoint.appendChild(newArticle);        
    });
    return response
})
.then((response)=> {
    this.console.log(response)
    response.data.articles.javascript.forEach(topic => {
        let newArticle = ArticleCard(topic);
        entryPoint.appendChild(newArticle);        
    });
    return response
})
.then((response)=> {
    this.console.log(response)
    response.data.articles.jquery.forEach(topic => {
        let newArticle = ArticleCard(topic);
        entryPoint.appendChild(newArticle);        
    });
    return response
})
.then((response)=> {
    this.console.log(response)
    response.data.articles.node.forEach(topic => {
        let newArticle = ArticleCard(topic);
        entryPoint.appendChild(newArticle);        
    });
    return response
})
.then((response)=> {
    this.console.log(response)
    response.data.articles.technology.forEach(topic => {
        let newArticle = ArticleCard(topic);
        entryPoint.appendChild(newArticle);        
    });
    return response
})

function ArticleCard(article){

    let newCard = document.createElement('div');
    newCard.classList.add('card');

    let headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = article.headline;

    let author = document.createElement('div');
    author.classList.add('author');

    let imgContainer = document.createElement('div');
    imgContainer.classList.add("img-container");
    
    let photo = document.createElement('img');
    photo.src = article.authorPhoto;

    let by = document.createElement('span');
    by.textContent = `By ${article.authorName}`

    newCard.appendChild(headline);
    newCard.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(photo);
    author.appendChild(by);

    return newCard;
}


})