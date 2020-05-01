$( document ).ready(function() {
    const URL = "db-handling.php"
    var dogs = []
    var names = []
    var shelters = []
    var params = "1a8,,,,"
    getReady()

    document.getElementsByClassName("load")[0].style.display = "block"
    api("animal", params, function (response) {
        console.log(response)
        console.log(typeof (response))

        if (response !== "null") {
            dogs = dogs.concat(JSON.parse(response))
            update()
        }
    })

    function reset() {

        api("animal", params, function (response) {

            names = []
            console.log(response)
            console.log(typeof (response))
            if (response !== "null") {
                dogs = (JSON.parse(response))
            } else
                dogs = []
            var temp = document.getElementsByClassName("row")[0].children
            for (var i = temp.length - 1; i >= 0; --i) {
                if (temp[i].className !== "sorry" && temp[i].className !== "load") {
                    temp[i].remove()
                }

            }

            update()
        })
    }

    function update() {
        var max = 0

        if (dogs.length === 0) {
            document.getElementsByClassName("more")[0].style.display = "none";
            document.getElementsByClassName("sorry")[0].style.display = "block"

        } else {
            document.getElementsByClassName("load")[0].style.display = "block"
            document.getElementsByClassName("sorry")[0].style.display = "none"

            for (var i = 0; i < dogs.length; ++i) {
                if (names.includes(dogs[i].name)) {
                    continue
                }
                names.push(dogs[i].name)

                let div = document.createElement('div');
                div.className = ".col-1 .col-sm-2 .col-md-4 .col-lg-6 .col-xl-12 product";
                div.style.display = "none"

                div.innerHTML = "<div class=\"example__item\">" +
                    "<div class=\"example__img\">" +
                    "<img id =\"" + dogs[i].url + "\" class=\"" + dogs[i].id + "\" src=\"https://images-up-shelter.s3.amazonaws.com/" + dogs[i].id + ".jpg\" alt=\"\"/> </div> </div>" +
                    "<div class=\"pet__name\" style=\"text-align: center\">" + dogs[i].name + "</div>"


                document.getElementsByClassName("row")[0].append(div);
                document.getElementById(dogs[i].url).addEventListener("click", function (event) {
                    window.open("pet-details-page.html?id=" + event.target.className);
                })
            }
            document.getElementsByClassName("load")[0].style.display = "none"
            for (var j = 0; j < document.getElementsByClassName("product").length; ++j) {
                document.getElementsByClassName("product")[j].style.display = "block"
            }
            document.getElementsByClassName("more")[0].style.display = "block";
        }
        api("max", params, function (response) {

            max = parseInt(response)
            if (max === names.length) {
                document.getElementsByClassName("more")[0].style.display = "none";
            }
            console.log(max)
            console.log(names.length)
        })


    }

    var btn = document.getElementsByClassName("more")[0]
    btn.addEventListener("click", function () {
        param(`${names.length + 1}a${names.length + 8}`, 0)


        api("animal", params, function (response) {

            dogs = dogs.concat(JSON.parse(response))
            update()

        })
    })

    function api(type, data, callback) {
        $.post(URL, {type: type, data: (data)}, response => callback(response));
    }

    function getReady() {
        api("shelter", "", function (response) {
            var temp = JSON.parse(response)
            let shelter = document.createElement('button');
            shelter.className = "dropdown-item";

            shelter.innerHTML = "-"
            shelter.addEventListener("click", function (event) {

                document.getElementsByClassName("shelter")[0].innerHTML = event.target.innerHTML;
                param("", 4)
                console.log(params)
                param("1a8", 0)
                reset()
            })
            document.getElementsByClassName("shelter")[1].append(shelter);
            for (var i = 0; i < temp.length; ++i) {
                shelters[temp[i].id] = temp[i].name
                let shelter = document.createElement('button');
                shelter.className = "dropdown-item";

                shelter.innerHTML = temp[i].name
                shelter.addEventListener("click", function (event) {

                    document.getElementsByClassName("shelter")[0].innerHTML = event.target.innerHTML;
                    param(shelters.indexOf(event.target.innerHTML), 4)
                    param("1a8", 0)
                    console.log(params)
                    reset()
                })
                document.getElementsByClassName("shelter")[1].append(shelter);
            }

        })
        let any1 = document.createElement('button');
        any1.className = "dropdown-item";

        any1.innerHTML = "-";
        any1.addEventListener("click", function () {
            document.getElementsByClassName("type")[0].innerHTML = "-";
            param("", 1)
            param("1a8", 0)
            console.log(params)
            reset()
        })
        document.getElementsByClassName("type")[1].append(any1);
        let dog = document.createElement('button');
        dog.className = "dropdown-item";

        dog.innerHTML = "Собака";
        dog.addEventListener("click", function () {
            document.getElementsByClassName("type")[0].innerHTML = "Собака";
            param("dog", 1)
            param("1a8", 0)
            reset()
            console.log(params)
        })

        document.getElementsByClassName("type")[1].append(dog);
        let cat = document.createElement('button');
        cat.className = "dropdown-item";

        cat.innerHTML = "Кіт";
        cat.addEventListener("click", function () {
            document.getElementsByClassName("type")[0].innerHTML = "Кіт";
            param("cat", 1)
            param("1a8", 0)
            console.log(params)
            reset()
        })
        document.getElementsByClassName("type")[1].append(cat);
        let any = document.createElement('button');
        any.className = "dropdown-item";

        any.innerHTML = "-";
        any.addEventListener("click", function () {
            document.getElementsByClassName("sex")[0].innerHTML = "-";
            param("", 2)
            param("1a8", 0)
            console.log(params)
            reset()
        })
        document.getElementsByClassName("sex")[1].append(any);
        let boy = document.createElement('button');
        boy.className = "dropdown-item";

        boy.innerHTML = "Хлопчик";
        boy.addEventListener("click", function () {
            document.getElementsByClassName("sex")[0].innerHTML = "Хлопчик";
            document.getElementsByClassName("sex")[0].innerHTML = "Хлопчик";
            param("Хлопчик", 2)
            param("1a8", 0)
            console.log(params)
            reset()
        })
        document.getElementsByClassName("sex")[1].append(boy);
        let girl = document.createElement('button');
        girl.className = "dropdown-item";

        girl.innerHTML = "Дівчинка";
        girl.addEventListener("click", function () {
            document.getElementsByClassName("sex")[0].innerHTML = "Дівчинка";
            param("Дівчинка", 2)
            param("1a8", 0)
            reset()
            console.log(params)
        })
        document.getElementsByClassName("sex")[1].append(girl);
        let age = document.createElement('button');
        age.className = "dropdown-item";

        age.innerHTML = "-";
        age.addEventListener("click", function () {
            document.getElementsByClassName("age")[0].innerHTML = "-";
            param("", 3)
            param("1a8", 0)
            reset()
            console.log(params)
        })
        document.getElementsByClassName("age")[1].append(age);
        let age1 = document.createElement('button');
        age1.className = "dropdown-item";

        age1.innerHTML = "До 1 року";
        age1.addEventListener("click", function () {
            document.getElementsByClassName("age")[0].innerHTML = "До 1 року";
            param("1", 3)
            param("1a8", 0)
            reset()
            console.log(params)
        })
        document.getElementsByClassName("age")[1].append(age1);
        let age2 = document.createElement('button');
        age2.className = "dropdown-item";

        age2.innerHTML = "Від 1 до 3 років";
        age2.addEventListener("click", function () {
            document.getElementsByClassName("age")[0].innerHTML = "Від 1 до 3 років";
            param("2", 3)
            param("1a8", 0)
            reset()
            console.log(params)
        })
        document.getElementsByClassName("age")[1].append(age2);
        let age3 = document.createElement('button');
        age3.className = "dropdown-item";

        age3.innerHTML = "Від 4 до 7 років";
        age3.addEventListener("click", function () {
            document.getElementsByClassName("age")[0].innerHTML = "Від 4 до 7 років";
            param("3", 3)
            param("1a8", 0)
            reset()
            console.log(params)
        })
        document.getElementsByClassName("age")[1].append(age3);
        let age4 = document.createElement('button');
        age4.className = "dropdown-item";

        age4.innerHTML = "Більше 7-и років";
        age4.addEventListener("click", function () {
            document.getElementsByClassName("age")[0].innerHTML = "Більше 7-и років";
            param("4", 3)
            param("1a8", 0)
            reset()
            console.log(params)
        })
        document.getElementsByClassName("age")[1].append(age4);

        let div = document.createElement('div');

        div.style = "color: #888a8b; font-size: 45px";
        div.className = "sorry";
        div.innerHTML = "Немає результатів";
        div.style.display = "none"
        document.getElementsByClassName("row")[0].append(div);
        let div1 = document.createElement('div');

        div1.style = "color: #888a8b; font-size: 50px";
        div1.className = "load";
        div1.innerHTML = "Завантаження...";
        div1.style.display = "none"
        document.getElementsByClassName("row")[0].append(div1);
        document.getElementsByClassName("header__title")[0].addEventListener("click", function () {
            window.location.href = "greeting-page.html"
        })
    }

    function param(newP, pos) {
        params = params.split(",")
        params[pos] = newP
        params = params.join()
    }
})
