
// $("button").click(function(){
//   $(this).next().slideToggle()
//   $("button").removeClass("act")
//   $(this).addClass("act")
// })

$("#tabmenu button").click(function(){
    let btIn = $(this).attr("dt");
    var pnl = [...$(".panel")]
     $(".panel").hide()
     $(pnl[btIn]).slideDown(500)
})