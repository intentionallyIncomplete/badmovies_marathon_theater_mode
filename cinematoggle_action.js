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
        },
        createStyle: function(body) {
            this.style = $("<style>").attr("type", "text/css").attr("id", "cinemaStyle").html(body).appendTo("head")
