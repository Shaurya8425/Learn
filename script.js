function images_toggle(){
    var x=document.querySelector(".sidebar_images_dropdown");
    if (x.style.display==="block"){
        x.style.display="none";
    } else {
        x.style.display="block";
    }
}
function tutorials_toggle(){
    var x=document.querySelector(".dropdown");
    if (x.style.display==="flex"){
        x.style.display="none";
    } else {
        x.style.display="flex";
    }
}
function links_toggle(){
    var x=document.querySelector(".sidebar_links_dropdown");
    if (x.style.display==="block"){
        x.style.display="none";
    } else {
        x.style.display="block";
    }
}
function tables_toggle(){
    var x=document.querySelector(".tables_dropdown");
    if (x.style.display==="block"){
        x.style.display="none";
    } else {
        x.style.display="block";
    }
}
function lists_toggle(){
    var x=document.querySelector(".lists_dropdown");
    if (x.style.display==="block"){
        x.style.display="none";
    } else {
        x.style.display="block";
    }
}

// function dropdown_function(){
//     var x=document.querySelector(".sidebar_dropdown");
//     if (x.style.display==="block"){
//         x.style.display="none";
//     } else {
//         x.style.display="block";
//     }
// }
function sidebar_toggle(){
    var x=document.querySelector(".side_navbar-outer");
    if (x.style.display==="none"){
        x.style.display="block";
    } else {
        x.style.display="none";
    }
}
function report_error_toggle(){
    var x=document.querySelector(".report_error")
    if (x.style.display==="block"){
        x.style.display="none";
    } else {
        x.style.display="block"
    }
}