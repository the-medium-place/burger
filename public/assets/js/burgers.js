$(function () {
    $(".devour").on("click", function (event) {
        const id = $(this).data("id");
        console.log(id);



        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: { devoured: true }
        }).then(
            function () {
                console.log("you ate it!");
                location.reload();
            }
        )
    })

    $("#add-burger").click((event) => {
        event.preventDefault();
        // get value of input field and save
        console.log("clicked button");
        const newBurg = $("#burger-text").val().trim();
        
        // send post request to create burger route
        $.ajax("/api/burgers/", {
            type: "POST",
            data: {
                burger_name: newBurg,
                devoured: false
            }
        }).then(() => {
            console.log("sounds good")
            location.reload();
        })


        // reload
    })

});
