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

  createStyle: function(body) {
    this.style = $("<style>").attr("type", "text/css").attr("id", "cinemaStyle").html(body).appendTo("head")

  host: "https://gitcdn.link/repo/intentionallyIncomplete/quiglys_movie_repo/master/cinematoggle.css",
          initialize: function() {
              if (CLIENT.cinemaMode) {
                  return
              } else {
                  CLIENT.cinemaMode = this
              }
              this.loadStyle()

loadStyle: function() {
            $.ajax(this.host).done((data=>{
                this.createStyle(data);
                if (localStorage.getItem(`${CHANNEL.name}_cinemaHidePolls`) !== null) {
                    if (parseInt(localStorage.getItem(`${CHANNEL.name}_cinemaHidePolls`))) {
                        $("body").addClass("cinema-nopoll")
                    }
                }
            }
            ))
        }
