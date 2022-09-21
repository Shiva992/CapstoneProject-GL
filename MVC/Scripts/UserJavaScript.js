function AdminFun() {

    var return_val = true;

    if ($('#username').val().trim() == '') {
        $('#username').next('span').show();
        return_val = false;
    } else {
        $('#username').next('span').hide();
        return_val = true;
    }

    if ($('#Password2').val().trim() == '') {
        $('#Password2').next('span').show();
        return_val = false;
    } else {
        $('#Password2').next('span').hide();
        return_val = true;
    }

    if (!return_val) {
        return return_val;
    }

        var credentials = {

            UserName: $('#username').val(),
            Password: $('#Password2').val(),
            grant_type: 'password'

        };

        $.ajax({
            type: "POST",
            url: 'https://localhost:44350/token',

            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            dataType: "json",
            data: credentials,
            success: function (data) {

                console.log(data);

                localStorage.setItem('token', data.access_token);

                if (data)
                    callAction();


            },
            failure: function (data) {
                alert('Check Credentials');
                //  alert(data.responseText);
            },
            error: function (data) {
                //alert("Error while inserting data");
                // alert(data.responseText);
                location.href = "";
            }
        });

    };
    function callAction() {
        // alert(localStorage.getItem('token'));
        $.ajax({
            type: "GET",
            url: "https://localhost:44350/OnlyAdmin",
            contentType: "application/x-www-form-urlencoded;charset=utf-8",
            dataType: "json",
            headers: { 'Authorization': 'bearer ' + localStorage.getItem('token') },
            success: function (data) {
                localStorage.setItem("email", data.EmailId);
                localStorage.setItem("Name", data.FullName);
                localStorage.setItem("Id", data.Id);
                console.log(data);
                //alert(localStorage.getItem(data));
                if (data['Roles'] === 'User') {

                    var x = data['EmailId'];
                    $("#lblUsername").val(x);
                    //$('label').append(sessionStorage.getItem('UserName'));
                    window.location.href = 'https://localhost:44312/Users/AfterLogin';

                    /* windows.location.href = '@Url.Action("Users", "AfterLogin")';*/
                }
                else {
                    window.location.href = "https://localhost:44312/Admin/Index";
                }

            },
            failure: function (data) {
                alert('Check Credentials');
            }, // End of AJAX failure function
            error: function (data) {
                // alert(data.responseText);
            } //End of AJAX Error function

        });

    };

    function LoginAction(obj) {
        // alert(localStorage.getItem('token'));
        $.ajax({
            type: "Post",
            url: "https://localhost:44312/Users/GetDataOfLogin",
            data: obj,
            contentType: "application/json;charset=utf-8",


            success: function (data) {

                alert("abc");




            },
            failure: function (data) {
                alert('Check Credentials');
                // alert(data.responseText);
            }, // End of AJAX failure function
            error: function (data) {
                // alert(data.responseText);
            } //End of AJAX Error function

        });

    
};
