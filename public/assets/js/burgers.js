$(function () {
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");

    var newDevourState = {
      devoured: true,
    };

    $.ajax("/api/burgers/" + id, { type: "PUT", data: newDevourState }).then(
      function () {
        // console.log("changed devoured to", newDevourState);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
    };
    // console.log(newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("Inserted a new burger");

      location.reload();
    });
  });
});
