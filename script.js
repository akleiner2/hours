
// global firebase object that can always be maintained in scope
var ref = new Firebase("https://timestamp.firebaseio.com"); 


$(document).ready(function(){
   
    var button = $('#submitButton');
    
    button.click(function(){
        var text = $('#login-email').val();
        if(isValidEmail(text) === true){
            alert(isValidEmail(text));
        }
    });
});

$("#registerButton").click(function(e){
    e.preventDefault();
    var password = $("#reg-password").val(); 
    var email = $("#reg-email").val(); 
    var confirm = $("#confirm").val(); 

    if (password === confirm) { // the two passwords are the same
        createUser(email, password); // create the user in the database
        console.log("Something went right!");
    }
    else {
        // there exist some errors on the page 
        // TODO: if not valid email, then highlight, if not valid password then highlight 
        console.log("Something's wrong");
    }

});

$("#reg").click(function(e){
    e.preventDefault();
    $(".login, .register").toggleClass("hide");
});


// helper functions
function isValidEmail(text) {
    "use strict";
        //check for string containing an @ symbol, and a ., followed by a three-char substring.
      if(text.indexOf("@") != -1 && text.indexOf(".") != -1){
            var lastPartOfString = text.substring(text.indexOf(".")+1, text.length); 
            if(lastPartOfString.length == 3){
                return true;
            }
        }
    
    return false;
};

function createUser(user, pass) { 
    ref.createUser({
        email  : user,
        password : pass
    }, function(error, userData) {
        if (error) {
            console.log("Error creating user:", error);
        } 
        else {
            console.log("Successfully created user account with uid:", userData.uid); // do something here later
        }
    });
};

function loginUser(user, pass){ 
    ref.authWithPassword({
        email    : user,
        password : pass
    }, function(error, authData) {
        if (error) {
            console.log("Login Failed!", error);
        } 
        else {
            console.log("Authenticated successfully with payload:", authData);
        }
    });
}

function clearInputs(){
    // get the current page that's visible 
    var curPage = $("article:not(.hidden)");
    var $inputs = curPage.find("input[type='text']");
    for(i in $inputs) { 
        i.val("");
    } 
};


