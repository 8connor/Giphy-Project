$(document).ready(function () {

    var topics = ["Motorcycles",
        "cats",
        "cars",
        "computers",
    ]

    var topics1 = "";
    
    var giphy = "https://api.giphy.com/v1/gifs/search?q=" + topics1 + "&api_key=TtNtOrejgWgfo7u3qG8DWCOjxAafwZqn";
   

    $.ajax(
    {
        url: giphy,
        method: "GET",
    })
    .then(function (response) 
    {
        for (var i = 0; i < topics.length; i++) {
            topics1 = topics[i]
            var gifButton = $("button");
            var headerButtons = $(".buttons");

            gifButton.html(topics[i]).appendTo(headerButtons);

        }
    });




});