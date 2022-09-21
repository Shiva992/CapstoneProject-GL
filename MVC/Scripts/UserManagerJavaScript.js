
var global = 0;
function checkUserAdmin(id) {
    global = id;
    $.ajax({
        type: "Get",
        url: "https://localhost:44350/ShowUserById/" + id,
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (data) {
            console.log(data);
            $('#FullName3').val(data.FullName);
            $('#EmailId3').val(data.EmailId);
            $('#ContactNo3').val(data.ContactNo);
            $('#Gender3').val(data.Gender);
            $('#City3').val(data.City);
            $('#Password3').val(data.Password);
            
        }
    });
};



function editUserManage() {

    var return_val = true;

    if ($('#FullName3').val().trim() == '') {
        $('#FullName3').next('span').show();
        return_val = false;
    } else {
        $('#FullName3').next('span').hide();
        return_val = true;
    }

    if ($('#EmailId3').val().trim() == '') {
        $('#EmailId3').next('span').show();
        return_val = false;
    } else {
        $('#EmailId3').next('span').hide();
        return_val = true;
    }

    if ($('#ContactNo3').val().trim() == '') {
        $('#ContactNo3').next('span').show();
        return_val = false;
    } else {
        $('#ContactNo3').next('span').hide();
        return_val = true;
    }

    if ($('#City3').val().trim() == '') {
        $('#City3').next('span').show();
        return_val = false;
    } else {
        $('#City3').next('span').hide();
        return_val = true;
    }

    if ($('#Password3').val().trim() == '') {
        $('#Password3').next('span').show();
        return_val = false;
    } else {
        $('#Password3').next('span').hide();
        return_val = true;
    }

    if (!return_val) {
        return return_val;
    }


    var obj = {
        FullName: $('#FullName3').val().trim(),
        EmailId: $('#EmailId3').val().trim(),
        ContactNo: $('#ContactNo3').val().trim(),
        Gender: $('input[name="radioo3"]:checked').val(),
        City: $('#City3').val().trim(),
        Password: $('#Password3').val().trim(),
        Roles: 'User',
        Id:global
    };
    //var str = JSON.stringify(obj);

    $.ajax({
        type: "Put",
        url: "https://localhost:44350/EditUserById/" + obj.Id,
        dataType: "json",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        success: function () {

            alert("Data has been added successfully.");
            $('#UserEditModal').modal('hide')

        },
        error: function () {
            alert("Error while inserting data");
        }
    });
    // location.reload();
};


function deleteUser(id) {

    DeleteData();
    function DeleteData() {
        $.ajax({
            type: "Delete",
            url: "https://localhost:44350/DeleteUser/" + id,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function () {
                alert("Deleted");

            }

        });
        location.reload();
    }
}




















$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "https://localhost:44350/ShowAllUser",

        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var elem =
                $.each(data, function (i, item) {
                    console.log(item.Id);
                    var row = "<tr>"
                        + "<td>" + item.FullName + "</td>"
                        + "<td>" + item.EmailId + "</td>"
                        + "<td>" + item.ContactNo+ "</td>"
                        + "<td>" + item.Gender + "</td>"
                        + "<td>" + item.City + "</td>"
                        + "<td>" + item.Password + "</td>"
                        + "<td>" + item.Roles + "</td>"
                        + "<td>" + '<button type="button" id="Edit2" data-bs-toggle="modal" data-bs-target="#UserEditModal" class="btn btn-warning" onclick="checkUserAdmin(' + item.Id + ') " > Edit </button > ' + "</td>"
                        + "<td>" + '<button type="button" /*id="Delete"*/  class="btn btn-danger" onclick="deleteUser(' + item.Id + ') " > Delete </button > ' + "</td>"
                        + "</tr>";
                    $('#UserManagerBody').append(row);

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