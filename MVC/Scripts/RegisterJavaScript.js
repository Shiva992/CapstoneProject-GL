function RegisterUser() { 
    $(document).ready(function () {
        //to allow only numberic  
        $('#ContactNo').keypress(function (e) {
            NumericOnly(e);
        });
        $('#City').keypress(function (e) {
            var regex = new RegExp("^[a-zA-Z]+$");
            var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
            if (regex.test(str)) {
                return true;
            }
            else {
                e.preventDefault();
                alert('Please Enter Alphabate');
                return false;
            }
        });
    });  
    var return_val = true;

    if ($('#FullName').val().trim() == '') {
        $('#FullName').next('span').show();
        return_val = false;
    } else {
        $('#FullName').next('span').hide();
        return_val = true;
    }

    if ($('#EmailId').val().trim() == '') {
        $('#EmailId').next('span').show();
        return_val = false;
    } else {
        $('#EmailId').next('span').hide();
        if (fnValidateEmail($('#EmailId').val().trim()) == false) {
            $('#EmailId').next('span').text('Please enter valid Email').show();
            return_val = true;
        }
    }

    if ($('#ContactNo').val().trim() == '') {
        $('#ContactNo').next('span').show();
        return_val = false;
    } else {
        $('#ContactNo').next('span').hide();
        return_val = true;
    }

    if ($('#City').val().trim() == '') {
        $('#City').next('span').show();
        return_val = false;
    } else {
        $('#City').next('span').hide();
        return_val = true;
    }


    if ($('#Password').val().trim() == '') {
        $('#Password').next('span').show();
        return_val = false;
    } else {
        $('#Password').next('span').hide();
        if (PasswordStrengthCheck($('#Password').val().trim()) == false) {
            return_val = false;
        } return_val = true;
        }
    
        
    

  

    if (!return_val) {
        return return_val;
    }






    function PasswordStrengthCheck(password) {
        var return_val = true;
        if (password != '') {
            if (password.length < 8) {
                $('#Password').next('span').text('Be at least 8 characters').show();
                $('#Password').focus();
                return_val = false;
            } else if (!password.match(/[A-z]/)) {
                $('#Password').next('span').text('At least one letter').show();
                $('#Password').focus();
                return_val = false;
            } else if (!password.match(/[A-Z]/)) {
                $('#Password').next('span').text('At least one uppercase alphabet').show();
                $('#Password').focus();
                return_val = false;
            } else if (!password.match(/[a-z]/)) {
                $('#Password').next('span').text('At least one lowercase alphabet').show();
                $('#Password').focus();
                return_val = false;
            } else if (!password.match(/\d/)) {
                $('#Password').next('span').text('At least one number').show();
                $('#Password').focus();
                return_val = false;
            } else if (!password.match(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
                $('#Password').next('span').text('At least one special character').show();
                $('#Password').focus();
                return_val = false;
            } else {
                $('#Password').next('span').text('').hide();
            }
        } else {
            $('#Password').next('span').text('Please enter Password').show();
            return_val = false;
        }
        return return_val;
    };
    // to check email formate   
    function fnValidateEmail(email) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test(email);
    };

    function NumericOnly(e) {
        var regex = new RegExp("^[0-9]+$");
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }
        e.preventDefault();
        return false;
    };  

    

    var obj = {
        FullName: $('#FullName').val().trim(),
        EmailId: $('#EmailId').val().trim(),
        ContactNo: $('#ContactNo').val().trim(),
        Gender: $('input[name="radioo"]:checked').val(),
        City: $('#City').val().trim(),
        Password: $('#Password').val().trim(),
        Roles:'User'
       
    };
    var str = JSON.stringify(obj);
    console.log(str); 
    $.ajax({
        type: "POST",
        url: "https://localhost:44350/Register",
        data: str,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (str) {
            console.log(str);
            alert("Data has been added successfully.");
          

            $('#modal-Create').modal('hide')

        },
        error: function () {
            alert("Error while inserting data");
        }
    });
   // location.reload();
};

