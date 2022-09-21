var global = 0;
function checkUserProfile(id) {
    global = id;
    $.ajax({
        type: "Get",
        url: "https://localhost:44350/ShowUserById/" + id,
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (data) {
            console.log(data);
            $('#FullName4').val(data.FullName);
            $('#EmailId4').val(data.EmailId);
            $('#ContactNo4').val(data.ContactNo);
            $('#Gender4').val(data.Gender);
            $('#City4').val(data.City);
            $('#Password4').val(data.Password);

        }
    });
};



function editMyProfile() {


    var return_val = true;

    if ($('#FullName4').val().trim() == '') {
        $('#FullName4').next('span').show();
        return_val = false;
    } else {
        $('#FullName4').next('span').hide();
        return_val = true;
    }

   

    if ($('#EmailId4').val().trim() == '') {
        $('#EmailId4').next('span').text('Please enter Email').show();
        return_val = false;
    } else {
        $('#EmailId4').next('span').hide();
        if (fnValidateEmail($('#EmailId4').val().trim()) == false) {
            $('#EmailId4').next('span').text('Please enter valid Email').show();
            return_val = false;
        } else {
            $('#EmailId4').next('span').text('Please enter Email').hide();
        }
    }



    if ($('#ContactNo4').val().trim() == '') {
        $('#ContactNo4').next('span').show();
        return_val = false;
    } else {
        $('#ContactNo4').next('span').hide();
        return_val = true;
    }

  
    if ($('#City4').val().trim() == '') {
        $('#City4').next('span').show();
        return_val = false;
    } else {
        $('#City4').next('span').hide();
        return_val = true;
    }

    

    if ($('#Password4').val().trim() == '') {
        $('#Password4').next('span').show();
        return_val = false;
    } else {
        $('#Password4').next('span').hide();
        if (PasswordStrengthCheck($('#Password4').val().trim()) == false) {
            return_val = false;
        }
    }
   


if (!return_val) {
    return return_val;
}

    function PasswordStrengthCheck(password) {
        var return_val = true;
        if (password != '') {
            if (password.length < 8) {
                $('#Password4').next('span').text('Be at least 8 characters').show();
                $('#Password4').focus();
                return_val = false;
            } else if (!password.match(/[A-z]/)) {
                $('#Password4').next('span').text('At least one letter').show();
                $('#Password4').focus();
                return_val = false;
            } else if (!password.match(/[A-Z]/)) {
                $('#Password4').next('span').text('At least one uppercase alphabet').show();
                $('#Password4').focus();
                return_val = false;
            } else if (!password.match(/[a-z]/)) {
                $('#Password4').next('span').text('At least one lowercase alphabet').show();
                $('#Password4').focus();
                return_val = false;
            } else if (!password.match(/\d/)) {
                $('#Password4').next('span').text('At least one number').show();
                $('#Password4').focus();
                return_val = false;
            } else if (!password.match(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
                $('#Password4').next('span').text('At least one special character').show();
                $('#Password4').focus();
                return_val = false;
            } else {
                $('#Password4').next('span').text('').hide();
            }
        } else {
            $('#Password4').next('span').text('Please enter Password').show();
            return_val = false;
        }
        return return_val;
    };

    function fnValidateEmail(email) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test(email);
    };




    var obj = {
        FullName: $('#FullName4').val().trim(),
        EmailId: $('#EmailId4').val().trim(),
        ContactNo: $('#ContactNo4').val().trim(),
        Gender: $('input[name="radioo4"]:checked').val(),
        City: $('#City4').val().trim(),
        Password: $('#Password4').val().trim(),
        Roles: 'User',
        Id: global
    };
    //var str = JSON.stringify(obj);

    $.ajax({
        type: "Put",
        url: "https://localhost:44350/EditUserById/" + obj.Id,
        dataType: "json",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        success: function () {

          
            $('#MyProfileModal').modal('hide')

        },
        error: function () {
            alert("Error while inserting data");
        }
    });
    // location.reload();
};