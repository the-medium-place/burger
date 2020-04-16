$(function () {
    $(".devour").on("click", function (event) {
        const id = $(this).data("id");
        console.log(id);



        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {devoured: true}
        }).then(
            function () {
                console.log("you ate it!");
                location.reload();
            }
        )
    })

});
