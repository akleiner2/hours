/*
 * TODO: 
 *
 * 1. Come back and fix the input checking and use regular-expressions instead. 
 * 2. Clean up code just a little bit.
 *
 * This is just a quick hacky example to make sure that some sort of error handling is in place for a valid username. It's mostly to see whether or not the bottom 
 * error portion comes up when you run the example. I'll come back to this a little later and tidy it up. 
*/



$(document).ready(function(){
   /*$('#submitButton').click(function(){
       if(isValidEmail($('#username').val()){
           $('.approve-container').append(typeof $('#username').val() == 'string');
       }
   });*/
    var button = $('#submitButton');
    
    button.click(function(){
        var text = $('#username').val();
        if(isValidEmail(text) == true){
            alert(isValidEmail(text));
    });
});

function isValidEmail(userString) {
    "use strict";
        //check for string containing an @ symbol, and a ., followed by a three-char substring.
        if(userString.indexOf("@") != -1 && userString.indexOf(".") != -1){
            var lastPartOfString = userString.substring(userString.indexOf(".")+1, userString.length); 
            if(lastPartOfString.length == 3){
                return true;
            }
        }
    
    return false;
}