const search = document.getElementById("search");
const results = document.getElementById("search-results");

search.addEventListener("input", function(){

const keyword = this.value.toLowerCase();

results.innerHTML="";

if(keyword==="") return;

articles.forEach(article=>{

if(article.title.toLowerCase().includes(keyword)){

results.innerHTML += `
<div class="result">
<a href="${article.url}">
${article.title}
</a>
<span>${article.category}</span>
</div>
`;

}

});

});