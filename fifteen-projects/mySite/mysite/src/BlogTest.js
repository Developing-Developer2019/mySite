/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
let open = document.getElementById("openElement");
let close = document.getElementById("closeElement");

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    open.className += " hide";
    close.className += " closebtn"
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "20px";
    document.getElementById("main").style.marginLeft = "20px";
    close.className += "hide";
    open.className += "closebtn"
}