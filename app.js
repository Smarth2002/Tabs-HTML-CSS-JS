const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

//added event listener to parent (about) 
about.addEventListener("click", function (e) {

    //e.currentTarget Returns the element whose event listeners triggered the event
    //e.target Returns the element that triggered the event
    //on clicking anywhere in about article if that element has dataset id attribute then its a button click
    //else its dataset id is undefined
    const id = e.target.dataset.id;

    if (id) {

        //remove active class from all buttons
        btns.forEach(btn => {
            btn.classList.remove("active");
        });

        const currBtn = e.target; //and set active class for current button
        currBtn.classList.add("active");

        //remove active class from all articles
        articles.forEach(article => {
            article.classList.remove("active");
        });
        //and set active class for current article using id dataset attribute of button
        const currArticle = document.getElementById(id);
        currArticle.classList.add("active");
    }
});