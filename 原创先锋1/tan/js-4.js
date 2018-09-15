$('.container>ul>li').mouseover(function(){
    $(this).children('ul').stop().slideDown(500);
})
$('.container>ul>li').mouseout(function(){
    $(this).children('ul').stop().slideUp(500);
})

$('.bbox').mouseover(function(){
    $(this).find('a').css('color','rgb(204, 72, 72)');
    $(this).children('dd').children('p').children('a').css('border-bottom','3px solid rgb(204, 72, 72)')
})
$('.bbox').mouseout(function(){
    $(this).find('a').css('color','#666');
    $(this).children('dd').children('p').children('a').css('border-bottom','3px solid #fff');
})
// 二维码划入画出
$('.weixin').mouseover(function(){
    $('.erweima').stop().slideDown(500);
})
$('.weixin').mouseout(function(){
    $('.erweima').stop().slideUp(500);
})
// 头部动画

$('.logo').animate({'left':'0','opacity':1},1000);
// $('.logo').fadeIn(800);
// $('.dian').fadeIn(800);
$('.dian').animate({'right':'0','opacity':1},1000);


//黑盒子动画
$('.box_t').animate({'top':'0','opacity':1},1000);
// $('.box_t').fadeIn(800);
$('.box>img').animate({'left':'0','opacity':1},500)
// $('.box img').fadeIn(300)
$('.box p').animate({'right':'0','opacity':1},500)
// $('.box p').fadeIn(300);


//图片
$('.left').animate({'right':'0','opacity':1},1000)
$('.right').animate({'left':'0','opacity':1},1000)


//类型 摆动

//tab 栏切换
$('.tab li a').click(function(){
    $(this).parent().siblings('li').children().removeClass('red');
    $(this).addClass('red');

    // console.dir(this)
    var index = $(this).parent().index();
    $('.bigbox>div:eq('+index+')').siblings('div').removeClass('block');
    $('.bigbox>div:eq('+index+')').addClass('block');
})


// $(window).scroll(function () {
   
    //  if($(document).scrollTop()>=1000){
         
    //     $('.left').animate({'right':'0','opacity':1},1000)
    //     $('.right').animate({'left':'0','opacity':1},1000)
    //  }
    // //  else{
    // //     $('.left').animate({'right':'-50px','opacity':0},1000)
    // //     $('.right').animate({'left':'-50px','opacity':0},1000)
    // //  }
    // })

//滚动事件

    // var p = true;
    // $(window).scroll(function () {
    //     if(p == true) {
    //         if($(window).scrollTop() > 200) {
    //             $('.one,.left').stop().animate({'right':'0','opacity':1},1000)
    //             $('.one,.right').stop().animate({'left':'0','opacity':1},1000)
    //         }
    //         p == false;
    //     }
    // })
    // $(window).scroll(function () {
    //     if(p == true) {
    //         if($(window).scrollTop() > 500) {
    //             $('.two,.left').stop().animate({'right':'0','opacity':1},1000)
    //             $('.two,.right').stop().animate({'left':'0','opacity':1},1000)
    //         }
    //         p == false;
    //     }
    // })
    // $(window).scroll(function () {
    //     if(p == true) {
    //         if($(window).scrollTop() > 800) {
    //             $('.three,.left').stop().animate({'right':'0','opacity':1},1000)
    //             $('.three,.right').stop().animate({'left':'0','opacity':1},1000)
    //         }
    //         p == false;
    //     }
    // })

//     $(window).scroll(function () {
//         var to11111p = $(document).scrollTop()
//     if ( $(document).scrollTop() >= 300 && $(document).scrollTop() < 1600 ) {
       
//         $('.ciron').stop().animate({ 'top': 0, 'opacity': 1 }, 800);
//         $('.ciron1').stop().animate({ 'top': 0, 'opacity': 1 }, 1000);
//         $('.ciron2').stop().animate({ 'top': 0, 'opacity': 1 }, 1400);
//         $('.ciron3').stop().animate({ 'top': 0, 'opacity': 1 }, 2000);
//         $('.ciron4').stop().animate({ 'top': 0, 'opacity': 1 }, 1600);

//         $('.fwzi-lt').stop().animate({ 'top': 0, 'opacity': 1 }, 1000);
//         $('.fwzi-lc').stop().animate({ 'left': 0, 'opacity': 1 }, 1000);
//         $('.fwzi-lv').stop().animate({ 'right': 0, 'opacity': 1 }, 1000);
//     } else if ($(document).scrollTop() >= 1700 || $(document).scrollTop() < 200) {
       
// //         $('.ciron').stop().animate({ 'top': 0, 'opacity': 0 }, 60);
// //         $('.ciron1').stop().animate({ 'top': 0, 'opacity': 0 }, 600);
//         $('.ciron2').stop().animate({ 'top': 0, 'opacity': 0 }, 160);
//         $('.ciron3').stop().animate({ 'top': 0, 'opacity': 0 }, 600);
//         $('.ciron4').stop().animate({ 'top': 0, 'opacity': 0 }, 160);

//         $('.fwzi-lt').stop().animate({ 'top': 0, 'opacity': 0 }, 600);
//         $('.fwzi-lc').stop().animate({ 'left': 0, 'opacity': 0 }, 600);
//         $('.fwzi-lv').stop().animate({ 'right': 0, 'opacity': 0 }, 600);
//     }
//     if ($(document).scrollTop() >= 3200) {
//         $('.ycpin_t').stop().animate({ 'top': 0, 'opacity': 1 }, 1000);
//         $('.ycpin_b p').stop().animate({ 'bottom': 0, 'opacity': 1 }, 1000);

//     }

// })

