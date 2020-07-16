/*!
**|   Extended Layout Options
**|   Copyright Xaekai 2014 - 2016
**|   Version 2016.10.04.0100
**|
**@preserve
*/
"use strict";
(function(CyTube_Layout) {
    return CyTube_Layout(window, document, window.jQuery, String)
}
)(function(window, document, $, String, undefined) {
    $('nav.navbar a[href="#"][onclick]').attr("href", "javascript:void(0)");
    if (!$('a[onclick*="removeUntilNext"]').length) {
        $('a[onclick*="removeVideo"]').parent().parent().append($("<li>").append($("<a>").attr("href", "javascript:void(0)").attr("onclick", "javascript:removeUntilNext()").text("Remove Video Until Next")))
    }
    if (!$('a[onclick*="toggleChat"]').length) {
        $('a[onclick*="chatOnly"]').parent().after($("<li>").append($("<a>").attr("href", "javascript:void(0)").attr("onclick", "javascript:toggleChat()").text("Remove Chat")))
    }
    ({
        host: "https://gitcdn.link/cdn/intentionallyIncomplete/quiglys_movie_repo/6bdec3a73ca1719c1f2c49ad76e6bceef4bf7210/cinematoggle.css",
        initialize: function() {
            if (CLIENT.cinemaMode) {
                return
            } else {
                CLIENT.cinemaMode = this
            }
            this.loadStyle()
        },
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
        },
        createStyle: function(body) {
            this.style = $("<style>").attr("type", "text/css").attr("id", "cinemaStyle").html(body).appendTo("head")
        },
        handleCommand(message, target) {
            var params = message.substring(1).replace(/cinema ?/, "").trim();
            if (!params.length) {
                $("#cinematoggle").click()
            }
            if (params === "nopolls") {
                $("body").addClass("cinema-nopoll");
                $("#messagebuffer").trigger("whisper", `Cinema: Poll overlay disabled`);
                localStorage.setItem(`${CHANNEL.name}_cinemaHidePolls`, 1)
            }
            if (params === "polls") {
                $("body").removeClass("cinema-nopoll");
                $("#messagebuffer").trigger("whisper", `Cinema: Poll overlay enabled`);
                localStorage.setItem(`${CHANNEL.name}_cinemaHidePolls`, 0)
            }
        },
        registerCommand() {
            $("#chatline").trigger("registerCommand", ["cinema", this.handleCommand.bind(this)])
        },
        loadStyle: function() {
            $.ajax(this.host).done((data=>{
                this.createButtons();
                this.createStyle(data);
                this.registerCommand();
                if (localStorage.getItem(`${CHANNEL.name}_cinemaHidePolls`) !== null) {
                    if (parseInt(localStorage.getItem(`${CHANNEL.name}_cinemaHidePolls`))) {
                        $("body").addClass("cinema-nopoll")
                    }
                }
            }
            ))
        }
    }).initialize()
});
