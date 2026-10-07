// Event handling
$(document).ready(function(){
    console.log("jQuery installed!");
    // Directory stuff

    $("#projects").click(function(){
        window.location.href = "../projects/projects.html";
    });

    $("#experience").click(function(){
        window.location.href = "../experience/experience.html";
    });

    $("#aboutme").click(function(){
        window.location.href = "../aboutme/aboutme.html";
    });

    $("#contact").click(function(){
        window.location.href = "../contact/contact.html";
    });
});