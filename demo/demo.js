var $ = function(id){
    return document.getElementById(id);
};
var joinList = function () {
    var emailAddress1 = $("email_address1") .value;
    var emailAddress2 = $("email_address2") .value;
    var isVaild = true;

    if(emailAddress1 == "" ){
        $("email_address1_error").firstChild.nodeValue = "this field is required.";
        isVaild = false;
    } else {$ ("email_address1_error").firstChild.nodeValue = ""; }

    if (emailAddress1 != emailAddress2) {
        $("email_address2_error").firstChild.nodeValue = "this entry must equal first entry."
        isVaild = false;
    } else {$("email_address2_error").firstChild.nodeValue = ""; }

    if ($("first_name").value == "") {
        $("first_name_error").firstChild.nodeValue = "This field is required.";
        isVaild = false;
    }
    else{ $("first_name_error").firstChild.nodeValue = ""; }
    
    if(isVaild) {
        //submit the form if all entries are valid
        $("email_form").submit();}
};
window.onload = function(){
    $("join_list").onclick = joinList;
    $("first_name").focus();
};