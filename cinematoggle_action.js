var cinemaToggleDiv = $("<div id='cinemaToggleDiv'><span class='glyphicon glyphicon-new-window'></span></div>");

$("body").append(cinemaToggleDiv);

createButtons: function() {
            $('a[onclick*="removeVideo"]').parent().parent().append($("<li>").append($("<a>").attr("href", "javascript:void(0)").attr("onclick", 'javascript:$("#cinematoggle").click()').text("Cinema Mode")));
            $('<div id="cinematoggle"><span class="glyphicon glyphicon-new-window "></span></div>').appendTo("body").click(function() {
                if (!$("body").hasClass("cinemachat")) {
                    if ($("#userlist").is(":visible")) {
                        $("#userlisttoggle").click()
                    }
                }
                $("body").toggleClass("cinemachat");
                if ($("iframe[src*=livestream]").length) {
                    PLAYER.mediaType = "";
                    PLAYER.mediaId = "";
                    socket.emit("playerReady")
                }
                handleWindowResize()
            })
        }
