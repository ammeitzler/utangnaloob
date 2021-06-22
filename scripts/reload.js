$(document).ready(function(){
    //reloads site every 24 hours
    setInterval(function(){ reload_page(); }, 1000 * 60 * 60 * 24);
 });

 function reload_page()
 {
    window.location.reload(true);
 }