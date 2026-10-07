// Event handling
$(document).ready(function(){
    console.log("jQuery installed!");
    // Directory stuff

    $("#projects").click(function(){
        window.location.href = "../../pages/projects/projects.html";
    });

    $("#experience").click(function(){
        window.location.href = "../../pages/experience/experience.html";
    });

    $("#aboutme").click(function(){
        window.location.href = "../../pages/aboutme/aboutme.html";
    });

    $("#contact").click(function(){
        window.location.href = "../../pages/contact/contact.html";
    });
});