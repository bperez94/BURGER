$(function() {
    $(".devour-burger").on("click", function(event) {
        var id = $(this).data("id");
        console.log(id);
        var myBurger = $(this).data("newBurger");
        console.log(myBurger);

        var newDevouredBurger = {
            devour: myBurger
        };

    $.ajax("/api/burgers" + id, {
        type: "Put",
        data: newDevouredBurger    
    }).then(
        function() {
        console.log("made new burger",myBurger);
        location.reload();
        }
    );
    })},

  $(".btn-primary").on("click",function(event) {
      event.preventDefault();

      var newBurger = {
          burger_name: $("#makeBurger").val().trim(),

      };
    $.ajax("/api/burgers", {
        type:"POST",
        data: newBurger
    })
    .then(
        function() {
        console.log("complete");
        location.reload();
        }
    );
  })
)
