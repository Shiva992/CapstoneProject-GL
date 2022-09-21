

function CreateContactDetails() {
    var return_val = true;

    if ($('#contactName').val().trim() == '') {
        $('#contactName').next('span').show();
        return_val = false;
    } else {
        $('#contactName').next('span').hide();
        return_val = true;
    }

    if ($('#contactEmail').val().trim() == '') {
        $('#contactEmail').next('span').show();
        return_val = false;
    } else {
        $('#contactEmail').next('span').hide();
        return_val = true;
    }


    if ($('#contactMessage').val().trim() == '') {
        $('#contactMessage').next('span').show();
        return_val = false;
    } else {
        $('#contactMessage').next('span').hide();
        return_val = true;
    }
    if (!return_val) {
        return return_val;
    }

    var obj = {

        Name: $('#contactName').val().trim(),
        EmailId: $('#contactEmail').val().trim(),
        Message: $('#contactMessage').val().trim()
    };
    var str = JSON.stringify(obj);
    $.ajax({
        type: "POST",
        url: "https://localhost:44350/ContactCreate",
        data: str,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (str) {
          
            window.location.href = "https://localhost:44312/Users/Index";
        },
        error: function () {
            alert("Error while inserting data");
        }
    })
}