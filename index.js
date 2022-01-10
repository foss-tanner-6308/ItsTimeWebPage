
var modal = document.getElementById("create-twit-modal");
var modal_background = document.getElementById("modal-backdrop");

var btn_1 = document.getElementById("create-twit-button");
var btn_2 = document.getElementsByClassName("modal-footer")[0];
var btn_2_1 = btn_2.children[0]
var btn_3 = document.getElementsByClassName("modal-header")[0];
var btn_3_1 = btn_3.children[1];
var btn_4_1 = btn_2.children[1];
var btn_5 = document.getElementById("navbar-search-button");

function insertTwit(text, author) {

    var twitArticle = document.createElement('article');
    twitArticle.classList.add("twit");
    twitArticle.setAttribute('id', 'new-twit');

    var twitIconDiv = document.createElement('div');
    twitIconDiv.classList.add("twit-icon");
    twitArticle.appendChild(twitIconDiv);

    var bullhorn = document.createElement('i');
    bullhorn.classList.add("fas");
    bullhorn.classList.add("fa-bullhorn");
    twitIconDiv.appendChild(bullhorn);

    var twitContentDiv = document.createElement('div');
    twitContentDiv.classList.add("twit-content");
    twitArticle.appendChild(twitContentDiv);

    var twitText = document.createElement('p');
    twitText.classList.add("twit-text");
    twitText.textContent = text;
    twitContentDiv.appendChild(twitText);

    var twitAuthor = document.createElement('p');
    twitAuthor.classList.add("twit-author");
    twitAuthor.textContent = author;
    twitContentDiv.appendChild(twitAuthor);

    console.log("== twitArticle:", twitArticle)

    var twitContainer = document.getElementsByClassName("twit-container")[0];
    twitContainer.appendChild(twitArticle);
}

btn_1.onclick = function () {
    modal.style.display = "block";
    modal_background.style.display = "block";
    var x_1 = document.getElementById("twit-text-input").value = "";
    var y_1 = document.getElementById("twit-attribution-input").value = "";
}
btn_2_1.onclick = function () {
    modal.style.display = "none";
    modal_background.style.display = "none";
}
btn_3_1.onclick = function () {
    modal.style.display = "none";
    modal_background.style.display = "none";
}
btn_4_1.onclick = function () {
    var x_2 = document.getElementById("twit-text-input").value;
    var y_2 = document.getElementById("twit-attribution-input").value;
    if (x_2 == '') {
        alert("Please enter a twit.");
    }
    if (y_2 == '') {
        alert("Please enter an author.");
    }
    if (x_2 != '' && y_2 != '') {
        insertTwit(x_2, y_2);
        modal.style.display = "none";
        modal_background.style.display = "none";
    }
}

function search() {
    var searchContent = document.getElementById("navbar-search-input").value;
    document.querySelectorAll('.twit-content').forEach(function (item) {
        document.getElementsByClassName("twit-content");
        var a = item.innerText.includes(searchContent);
        if (!a) {
            item.parentNode.remove();
        }
    })
}

btn_5.onclick = function () {
    search();
    document.getElementById("navbar-search-input").value = "";
}