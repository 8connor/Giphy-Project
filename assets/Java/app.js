$(document).ready(function () {
    $("form").on("submit", function () {
        return false;
    });

    $("#clearButton").hide();

    $(".categoryButton").on("click", function search() {
        $("#gifButtonDiv").empty();
        $("#clearButton").show();
        
        var topics = $(this).attr("data-topics");
        var giphy = "https://api.giphy.com/v1/gifs/search?q="
            + topics
            + "&api_key=TtNtOrejgWgfo7u3qG8DWCOjxAafwZqn";

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
                    var rating = results[i].rating;
                    var p = $("<p>").text("Rating: " + rating);
                    var div = $("<div>");

                    topicImage.attr("src", results[i].images.fixed_height.url);

                    gifButtonDiv.append(div);
                    div.append(p)
                    div.append(topicImage);
                };
            }
        );
    });

    $("#clearButton").on("click", function () {
        $("#gifButtonDiv").empty();
        $(this).hide();
    });

    $("#addButton").on("click", function () {
        var search = $("#userSearch").val()
        var makeButton = $("<button>");

        makeButton.addClass("categoryButton")
        makeButton.attr("data-topics", search)
        makeButton.attr("type", "button")
        makeButton.html(search)

        $(".buttons").append(makeButton)

        $(makeButton).on("click", function search() {
            $("#gifButtonDiv").empty();
            $("#clearButton").show();

            var topics = $(this).attr("data-topics");
            var giphy = "https://api.giphy.com/v1/gifs/search?q="
                + topics
                + "&api_key=TtNtOrejgWgfo7u3qG8DWCOjxAafwZqn";

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
                        var rating = results[i].rating;
                        var p = $("<p>").text("Rating: " + rating);
                        var div = $("<div>");

                        topicImage.attr("src", results[i].images.fixed_height.url);

                        gifButtonDiv.append(div);
                        div.append(p)
                        div.append(topicImage);
                    };
                }
            );
        })
    });
});