<script>

var cinematoggle_button = document.createElement('div');
var icon_span = document.createElement('span');

icon_span.className = "glyphicon glyphicon-new-window";
cinematoggle_button.appendChild(icon_span);

cinematoggle_button.HTMLElementObject.id = "cinematoggle";

var body = document.getElementByTagName("body").appendChild(cinematoggle_button);

$('<div id="cinematoggle"><span class="glyphicon glyphicon-new-window "></span></div>')



this.style = $("<style>").attr("type", "text/css").attr("id", "cinemaStyle").html(body).appendTo("head")



</script>
