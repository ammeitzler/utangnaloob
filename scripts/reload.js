$(document).ready(function() {
    // SET FOR INSTALL // RELOADS EVERY 24 HOURS
    setInterval(function(){ reload_page(); }, 1000 * 60 * 60 * 24);
   // setInterval(function(){ reload_page(); }, 10000);
 });

 function reload_page() {
    window.location.reload(true);
    console.log("reload")
 }
 