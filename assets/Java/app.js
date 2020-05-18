$(document).ready(function () {
    $("#clearButton").hide();
    $(".categoryButton").on("click", function () {
        $("#gifButtonDiv").empty();
        $("#clearButton").show();
        var topics = $(this).attr("data-topics");

        var giphy = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=TtNtOrejgWgfo7u3qG8DWCOjxAafwZqn";

        $.ajax(
            {
                url: giphy,
                method: "GET",
            })
            .then(function (response) {

                var results = response.data;

                console.log(response);

                for (var i = 0; i < results.length; i++) {
                    var gifButtonDiv = $("#gifButtonDiv");

                    var topicImage = $("<img>");

                    topicImage.attr("src", results[i].images.fixed_height.url);

                    gifButtonDiv.append(topicImage);
                };
            });
        });

        $("#clearButton").on("click", function(){
            $("#gifButtonDiv").empty();
        });
    
});