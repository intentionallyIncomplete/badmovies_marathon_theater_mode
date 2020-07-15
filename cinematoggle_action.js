var cinemaToggleDiv = $("<div id='cinemaToggleDiv'><span class='glyphicon glyphicon-new-window'></span></div>");

$("body").append(cinemaToggleDiv).click(function() {
    if (!$("body").hasClass("cinemachat")) {
        if ($("#userlist").is(":visible")) {
            $("#userlisttoggle").click()
        }
    }
    $("body").toggleClass("cinemachat");
    handleWindowResize()
});
