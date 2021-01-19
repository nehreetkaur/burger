// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devourness").on("click", function(event) {
    var id = $(this).data("id");
    //var newSleep = $(this).data("newsleep");

    var newState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id,
     {
      type: "PUT",
      data: newState
     }
    ).then(
      function(){
       
        console.log("burger devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    )
  });

  $(".b-input").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name:$("#newBurger").val().trim(),
      devoured:"false"
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then( function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

//   $(".delete-cat").on("click", function(event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax("/api/cats/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         console.log("deleted cat", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
});
