let articleList = document.getElementById("articleList")



// let filteredArticles = news.articles.map(function(article){

// })
let liItems = news.articles.map(function(article) {


    //let r = article.imageUrl == null ? `<img/>` : `<img src="https://cdn.shopify.com/s/files/1/0885/7466/products/smiley-decal_1200x1200.png?v=1537890800"/>`

    let img = ``

    if(article.urlToImage == null) {
      img = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" />`
    } else {
      img = `<img class="images" src='${article.urlToImage}' />`
    }

    let author = ``
    if(article.author == null) {
    author = ``
    } else {
    author = article.author
    }
  
    let title = ``
    if(article.title == null) {
    title = ``
    } else {
    title = article.title
    }

    let description = ``
    if(article.description == null) {
    description = ``
    } else {
    description = article.description
    }


    return `
    <li><h1>${title}</h1> 
    <h2>${author}</h2>
    <p>${article.url}</p>
    <p>Published at: ${article.publishedAt}</p>
    <div class="picdescription">${img} ${description}</div>
    </li>`
  })

//     return `<li>
//             <h3>${article.author}</h3>
//             <h1>${article.title}</h1>
//             <img src="${article.urlToImage}"></img>
//             <img src="${r}"></img>
//             <p>Hello</p>
//             </li>`
// })
articleList.innerHTML = liItems.join('')


