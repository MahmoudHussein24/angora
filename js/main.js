

// let wScroll = $("#about").offset().top;
// console.log(wScroll)


// $(window).scroll(function(){
//     let myScroll = $(window).scrollTop();
//     console.log(myScroll)

//     if(myScroll > wScroll) {
//         $("header").css("backgroundColor", "red");
//     }else {
//         $("header").css("backgroundColor", "  #3332321f");
//     }
// })

// let servicesScroll = $("#services").offset().top;
// console.log(servicesScroll)

// $('a[href^="#"').click(function(e){
//     let myLink =  $(e.target).attr("href")
//     let linksScroll = $(myLink).offset().top;
//     // console.log(servicesScroll)
//     //     $(window).scrollTop(servicesScroll)
//         $('html , body').animate({scrollTop:linksScroll}, 2000)
// })




$(window).ready(function(){
    $(".center").fadeOut(1000, function(){
        $("#loading").fadeOut( 100, function(){
            $('body').css({ overflowY:"auto"}, 100)
        })
    })
})


let colorItem = $(".color-item");

$(".color-item").eq(0).css("backgroundColor","blue");
$(".color-item").eq(1).css("backgroundColor","green");
$(".color-item").eq(2).css("backgroundColor","#09c");
$(".color-item").eq(3).css("backgroundColor","yellow");
$(".color-item").eq(4).css("backgroundColor","red");
$(".color-item").eq(5).css("backgroundColor","orange");
 
colorItem.click(function(){
    let changeColor = $(this).css("backgroundColor");
    $(".above-heading , p").css("color",changeColor);
})


$(".colorBox i").click(function(){
    let boxWidth = $(".colorBox").innerWidth();
    if($(".colorBox").css("left") == "0px") {
        $(".colorBox").animate({left:-boxWidth},1000)
    }
    else {
        $(".colorBox").animate({left: "0px"}, 1000)
    }
    
})

console.log(false && 1 && []); //logs false
console.log(" " && true && 5); //logs 5



// let x = "3" * "3" 

// console.log(x)
// let myName = window.prompt("enter your name");

// console.log(myName)

(function() {
    console.log("hello i can")
})();

window.console.log("hello")