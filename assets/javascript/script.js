$(document).ready(function(){
    $("#contactInfo").hide();
    $("#portInfo").hide();
    $("#aboutInfo").hide();
/* 
    $("#topBit").addClass("animated", "bounceInLeft");
    $("#content").addClass("animated", "bounceInLeft"); */

    $("#aboutButton").click(function(){
        $("#contactInfo").hide();
        $("#portInfo").hide();
        $("#aboutInfo").show();
        event.preventDefault();
    })
    $("#contactButton").click(function(){
        $("#contactInfo").show();
        $("#portInfo").hide();
        $("#aboutInfo").hide();
        event.preventDefault();
    })
    $("#portfolioButton").click(function(){
        $("#contactInfo").hide();
        $("#portInfo").show();
        $("#aboutInfo").hide();
        event.preventDefault();
    })
    event.preventDefault();
});


