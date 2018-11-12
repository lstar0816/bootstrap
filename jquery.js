$(document).ready(function(){
    $("#slect_active li").click(function(){
        $("#slect_active li").removeClass('active');
        $(this).addClass('active');
    })
});