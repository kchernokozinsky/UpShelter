$( document ).ready(function() {
    document.getElementsByClassName("header__title")[0].addEventListener("click", function () {
        window.location.href = "index.html"
    })
    const URL = "chat.php"
    var id = window.location.search.replace("?id=","")
    function api(type, data, callback)
    {
        $.post(URL, {type: type, data: (data)}, response => callback(response));
    }
    document.getElementsByClassName("image")[0].innerHTML = "<img src=\"https://images-origin-shelter.s3.amazonaws.com/"+id+".jpg\" style=\"max-height: 700px; max-width: 700px\" alt=\"\">"
    api("getOne",id, function (response) {
        var pet = (JSON.parse(response)[0])
        {

        }
        document.getElementsByClassName("pet__name")[0].innerHTML = pet.name
        if(pet.type==="dog"){
            document.getElementsByClassName("char__text")[0].innerHTML = "Собака"
        } else{
            document.getElementsByClassName("char__text")[0].innerHTML = "Кіт (кішка)"
        }

        document.getElementsByClassName("char__text")[1].innerHTML = pet.sex
        document.getElementsByClassName("char__text")[2].innerHTML = "Вік: "+pet.age
        document.getElementsByClassName("button")[0].addEventListener("click", function () {
            window.open(pet.url);
        })
        api("shelter","", function (response) {

            document.getElementsByClassName("char__text")[3].innerHTML =  JSON.parse(response)[pet.shelter-1].name
            api("file",id, function (response) {
                console.log(response)
                document.getElementsByClassName("description")[0].innerHTML =  JSON.parse(response)

                document.getElementById("load").style.display = "none"
                document.getElementById("middle").style.display = "grid"
            })

        })
    } )
});

