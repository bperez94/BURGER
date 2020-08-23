$(function() {
    $(".bugerSubmit").on("submit", function(event) {
        event.preventDefault();
        var burger = {
            name: $("#makeBurger").val().trim()
        };
        console.log(burger);
    })

    $.ajax("/api/burgers", {
        type: "POST",
        data: burger
    }).then(
        function() {
        console.log("made new burger");
        location.reload();
        }
    );

    $(".devour-button").on("click", function(event) {
        var id = $(this).attr("id");
        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function() {
            console.log("deboured burger");
            location.reload();
            }
        );
        console.log(id);
    })
});
