$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "https://localhost:44350/ContactRead",

        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var elem =
                $.each(data, function (i, item) {
                    console.log(item.Id);
                    var row = "<tr>"
                        + "<td>" + item.Name + "</td>"
                        + "<td>" + item.EmailId + "</td>"
                        + "<td>" + item.Message + "</td>"
                        + "<td>" + '<button type="button" /*id="Delete"*/  class="btn btn-danger" onclick="deleteContact(' + item.Id + ') " > Delete </button > ' + "</td>"
                        + "</tr>";
                    $('#ContactAdminBody').append(row);

                });

        },
        failure: function (data) {
            alert(data.responseText);
        },
        error: function (data) {
            alert(data.responseText);
        }


    });


});

function deleteContact(id) {

    DeleteData();
    function DeleteData() {
        $.ajax({
            type: "Delete",
            url: "https://localhost:44350/ContactDelete/" + id,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function () {
                alert("Deleted");

            }

        });
        location.reload();
    }
}