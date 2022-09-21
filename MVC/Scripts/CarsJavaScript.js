var global = 0;

function CreateCar() {
    var return_val = true;

    if ($('#Title').val().trim() == '') {
        $('#Title').next('span').show();
        return_val = false;
    } else {
        $('#Title').next('span').hide();
        return_val = true;
    }

    if ($('#Brand').val().trim() == '') {
        $('#Brand').next('span').show();
        return_val = false;
    } else {
        $('#Brand').next('span').hide();
        return_val = true;
    }

    if ($('#Description').val().trim() == '') {
        $('#Description').next('span').show();
        return_val = false;
    } else {
        $('#Description').next('span').hide();
        return_val = true;
    }

    if ($('#PricePerDay').val().trim() == '') {
        $('#PricePerDay').next('span').show();
        return_val = false;
    } else {
        $('#PricePerDay').next('span').hide();
        return_val = true;
    }

    if ($('#FuelType').val().trim() == '') {
        $('#FuelType').next('span').show();
        return_val = false;
    } else {
        $('#FuelType').next('span').hide();
        return_val = true;
    }

    if ($('#ModelYear').val().trim() == '') {
        $('#ModelYear').next('span').show();
        return_val = false;
    } else {
        $('#ModelYear').next('span').hide();
        return_val = true;
    }

    if (!return_val) {
        return return_val;
    }
    var obj = {
        Title:       $('#Title').val().trim(),
        Brand:       $('#Brand').val().trim(),
        Description: $('#Description').val().trim(), 
        PricePerDay: $('#PricePerDay').val().trim(),
        FuelType:    $('#FuelType').val().trim(),
        ModelYear:   $('#ModelYear').val().trim(),

    };
    var str = JSON.stringify(obj);
    console.log(str);
    $.ajax({
        type: "POST",
        url: "https://localhost:44350/CreateCar",
        data: str,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (str) {
            console.log(str);
            alert("Data has been added successfully.");
            $('#CarAddModal').modal('hide')

        },
        error: function () {
            alert("Error while inserting data");
        }
    });
    // location.reload();
};


function check(id) {
    global = id;
    $.ajax({
        type: "Get",
        url: "https://localhost:44350/ShowCar/" + id,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        
        success: function (data) {
            console.log(data);
            $('#Title1').val(data.Title);
            $('#Brand1').val(data.Brand);
            $('#Description1').val(data.Description);
            $('#PricePerDay1').val(data.PricePerDay);
            $('#FuelType1').val(data.FuelType);
            $('#ModelYear1').val(data.ModelYear);
        }
    });
};



function editCar() {

    var return_val = true;

    if ($('#Title1').val().trim() == '') {
        $('#Title1').next('span').show();
        return_val = false;
    } else {
        $('#Title1').next('span').hide();
        return_val = true;
    }

    if ($('#Brand1').val().trim() == '') {
        $('#Brand1').next('span').show();
        return_val = false;
    } else {
        $('#Brand1').next('span').hide();
        return_val = true;
    }

    if ($('#Description1').val().trim() == '') {
        $('#Description1').next('span').show();
        return_val = false;
    } else {
        $('#Description1').next('span').hide();
        return_val = true;
    }

    if ($('#PricePerDay1').val().trim() == '') {
        $('#PricePerDay1').next('span').show();
        return_val = false;
    } else {
        $('#PricePerDay1').next('span').hide();
        return_val = true;
    }

    if ($('#FuelType1').val().trim() == '') {
        $('#FuelType1').next('span').show();
        return_val = false;
    } else {
        $('#FuelType1').next('span').hide();
        return_val = true;
    }

    if ($('#ModelYear1').val().trim() == '') {
        $('#ModelYear1').next('span').show();
        return_val = false;
    } else {
        $('#ModelYear1').next('span').hide();
        return_val = true;
    }

    if (!return_val) {
        return return_val;
    }


    var obj = {
        Title: $('#Title1').val().trim(),
        Brand: $('#Brand1').val().trim(),
        Description: $('#Description1').val().trim(),
        PricePerDay: $('#PricePerDay1').val().trim(),
        FuelType: $('#FuelType1').val().trim(),
        ModelYear: $('#ModelYear1').val().trim(),
        Id:global
    };
    //var str = JSON.stringify(obj);
    
    $.ajax({
        type: "Put",
        url: "https://localhost:44350/EditCar/" + obj.Id,
        dataType: "json",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        success: function () {
         
            alert("Data has been added successfully.");
            $('#CarEditModal').modal('hide')

        },
        error: function () {
            alert("Error while inserting data");
        }
    });
    // location.reload();
};


function deleteCar(id) {

    DeleteData();
    function DeleteData() {
        $.ajax({
            type: "Delete",
            url: "https://localhost:44350/DeleteCar/" + id,
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
        url: "https://localhost:44350/ShowCars",
        
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var elem =
                $.each(data, function (i, item) {
                    console.log(item.Id);
                    var row = "<tr>"
                        + "<td>" + item.Title + "</td>"
                        + "<td>" + item.Brand + "</td>"
                        + "<td>" + item.PricePerDay + "</td>"
                        + "<td>" + item.FuelType + "</td>"
                        + "<td>" + item.ModelYear + "</td>"
                        + "<td>" + item.Description + "</td>"
                        + "<td>" + '<button type="button" id="Edit1" data-bs-toggle="modal" data-bs-target="#CarEditModal" class="btn btn-warning" onclick="check(' + item.Id + ') " > Edit </button > ' + "</td>" 
                        + "<td>" + '<button type="button" /*id="Delete"*/  class="btn btn-danger" onclick="deleteCar(' + item.Id + ') " > Delete </button > ' + "</td>"
                        + "</tr>";
                    $('#CarBody').append(row);

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
