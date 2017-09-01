$("#theForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
 
    $.ajax({
        type: "GET",
        url: "/api/greeter",
        data: "name=" + name,
        success : function(text){
                formSuccess(text);
        }
    });
}
function formSuccess(text){
    $( "#msgSubmit" ).removeClass( "hidden" );
    $( "#msgSubmit" ).text(text);
}

