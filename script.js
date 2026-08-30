const search = document.getElementById("search");

search.addEventListener("keyup", function () {

    const word = search.value.toLowerCase();

    const links = document.querySelectorAll("li");

    links.forEach(item => {

        if(item.innerText.toLowerCase().includes(word)){
            item.style.display="list-item";
        }else{
            item.style.display="none";
        }

    });

});
