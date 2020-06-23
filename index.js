console.log("This is my index.js");
// 7ab5ce6070124c7d9b88f1ad4372dbe5

let newsAccordion = document.getElementById("newsAccordion");

const apiKey = "7ab5ce6070124c7d9b88f1ad4372dbe5";
let source = "bbc-news";

const xhr = new XMLHttpRequest();
//Create an ajax  get request

xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  true
);

xhr.onload = function () {
  if (this.status == 200) {
    let json = JSON.parse(this.responseText);
    console.log(json);
    let articles = json.articles;
    console.log(articles);

    let newsHTML=" ";

    articles.forEach((element,index) => {
      
      let news = `<div class="card">
        <div class="card-header" id="heading${index}">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapse${index}"
              aria-expanded="true"
              aria-controls="collapse${index}"
            >
            <b>Breaking News ${index+1} :</b> ${element['title']}
            </button>
          </h2>
        </div>

        <div
          id="collapse${index}"
          class="collapse "
          aria-labelledby="heading${index}"
          data-parent="#newsAccordion"
        >
          <div class="card-body">
          ${element['content']} <a  target="_blank" href=${element['url']}>Read more here</a>
          </div>
        </div>
      </div>`;
      newsHTML+=news;
    
      
    }); 
    let newsAccordion = document.getElementById('newsAccordion');
    newsAccordion.innerHTML=newsHTML;
    
    
  } else {
    console.log("Some Error occurred");
  }
};

xhr.send();
