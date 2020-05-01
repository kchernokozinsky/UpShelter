$( document ).ready(function() {
const URL = "db-handling.php"
function api(type, data, callback)
{
    $.post(URL, {type: type, data: (data)}, response => callback(response));
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var nums = []
while (true){
    if(nums.length===6)
        break
    var num = getRandomInt(1, 28)
    if(check(num)){
        nums.push(num)
    }
}
function check(num){
    for(let i = 0; i<nums.length; ++i){
        if(nums[i]===num){
            return false
        }
    }
    return true
}

api("getOne",nums[0], function (response) {
    document.getElementsByClassName("example__img")[0].innerHTML = "<img class=\""+JSON.parse(response)[0].id+"\" src=\"https://images-up-shelter.s3.amazonaws.com/"+JSON.parse(response)[0].id+".jpg\" alt=\"\">"
    document.getElementsByClassName("item__name")[0].innerHTML = JSON.parse(response)[0].name
    document.getElementsByClassName("example__item")[0].addEventListener("click", function (event) {

        if(event.target.className === "item__name"){
            window.location.href = "pet-details-page.html?id="+event.target.parentElement.children[0].children[0].className

        } else{
            window.location.href ="pet-details-page.html?id="+event.target.className

        }


    })
})
api("getOne",nums[1], function (response) {
    document.getElementsByClassName("example__img")[1].innerHTML = "<img class=\""+JSON.parse(response)[0].id+"\" src=\"https://images-up-shelter.s3.amazonaws.com/"+JSON.parse(response)[0].id+".jpg\" alt=\"\">"
    document.getElementsByClassName("item__name")[1].innerHTML = JSON.parse(response)[0].name
    document.getElementsByClassName("example__item")[1].addEventListener("click", function (event) {
        if(event.target.className === "item__name"){
            window.open("pet-details-page.html?id="+event.target.parentElement.children[0].children[0].className);
        } else{
            window.open("pet-details-page.html?id="+event.target.className);
        }
    })
})
api("getOne",nums[2], function (response) {
    document.getElementsByClassName("example__img")[2].innerHTML = "<img class=\""+JSON.parse(response)[0].id+"\" src=\"https://images-up-shelter.s3.amazonaws.com/"+JSON.parse(response)[0].id+".jpg\" alt=\"\">"
    document.getElementsByClassName("item__name")[2].innerHTML = JSON.parse(response)[0].name
    document.getElementsByClassName("example__item")[2].addEventListener("click", function (event) {
        if(event.target.className === "item__name"){
            window.open("pet-details-page.html?id="+event.target.parentElement.children[0].children[0].className);
        } else{
            window.open("pet-details-page.html?id="+event.target.className);
        }
    })
})
api("getOne",nums[3], function (response) {
    document.getElementsByClassName("example__img")[3].innerHTML = "<img class=\""+JSON.parse(response)[0].id+"\" src=\"https://images-up-shelter.s3.amazonaws.com/"+JSON.parse(response)[0].id+".jpg\" alt=\"\">"
    document.getElementsByClassName("item__name")[3].innerHTML = JSON.parse(response)[0].name
    document.getElementsByClassName("example__item")[3].addEventListener("click", function (event) {
        if(event.target.className === "item__name"){
            window.open("pet-details-page.html?id="+event.target.parentElement.children[0].children[0].className);
        } else{
            window.open("pet-details-page.html?id="+event.target.className);
        }
    })
})
api("getOne",nums[4], function (response) {
    document.getElementsByClassName("example__img")[4].innerHTML = "<img class=\""+JSON.parse(response)[0].id+"\" src=\"https://images-up-shelter.s3.amazonaws.com/"+JSON.parse(response)[0].id+".jpg\" alt=\"\">"
    document.getElementsByClassName("item__name")[4].innerHTML = JSON.parse(response)[0].name
    document.getElementsByClassName("example__item")[4].addEventListener("click", function (event) {
        if(event.target.className === "item__name"){
            window.open("pet-details-page.html?id="+event.target.parentElement.children[0].children[0].className);
        } else{
            window.open("pet-details-page.html?id="+event.target.className);
        }
    })
})
api("getOne",nums[5], function (response) {

    document.getElementsByClassName("example__img")[5].innerHTML = "<img class=\""+JSON.parse(response)[0].id+"\" src=\"https://images-up-shelter.s3.amazonaws.com/"+JSON.parse(response)[0].id+".jpg\" alt=\"\">"
    document.getElementsByClassName("item__name")[5].innerHTML = JSON.parse(response)[0].name
    document.getElementsByClassName("example__item")[5].addEventListener("click", function (event) {
        if(event.target.className === "item__name"){
            window.open("pet-details-page.html?id="+event.target.parentElement.children[0].children[0].className);
        } else{
            window.open("pet-details-page.html?id="+event.target.className);
        }
    })
})

document.getElementsByClassName("btn")[0].addEventListener("click", function () {
    var elementClick = document.getElementsByClassName("section")[0];
    var destination = $(elementClick).offset().top;

    $('body').animate({ scrollTop: destination }, 1100); //1100 - скорость

    $('html').animate({ scrollTop: destination }, 1100);

    return false;
});
document.getElementsByClassName("btn")[1].addEventListener("click", function () {
    window.location.href = "pets-page.html"
});
document.getElementsByClassName("intro__title")[0].addEventListener("click", function () {
    window.location.href = "greeting-page.html"
})
})