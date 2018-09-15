$(function () {
    $(".webanli_b_al>li").mouseover(function() {
        $(this).children('.webanli_span').stop().animate({'bottom':'0'},300);
    })    
    $(".webanli_b_al>li").mouseout(function() {
        $(this).children('.webanli_span').stop().animate({'bottom':'-30px'},300);
    })
})
$(function() {
    $(".webanli_b_al>li>a>img").zoomImgRollover();
})
$(function() {
    $('.webkflc_b_box>li').mouseover(function(){
        $(this).find(".webkflc_b_box_img1").hide();
        $(this).find(".webkflc_b_box_img2").show();
    })    
    $('.webkflc_b_box>li').mouseout(function(){
        $(".webkflc_b_box_img1").show();
        $(".webkflc_b_box_img2").hide();
    })
})

// 闪
$(function () {
    $('.webkflc_a').mouseover(function () {
        $('.webkflc_b_box>li').find(".webkflc_b_box_img1").fadeOut(250,function() {
            $('.webkflc_b_box>li').find(".webkflc_b_box_img2").fadeIn(250,function() {
                $('.webkflc_b_box>li').find(".webkflc_b_box_img2").fadeOut(250,function(){
                    $('.webkflc_b_box>li').find(".webkflc_b_box_img1").fadeIn(250,function(){})
                }) 
            });
        });

    })    
    $('.webkflc_a').mouseout(function () {
        $('.webkflc_b_box>li').find(".webkflc_b_box_img1").show();
        $('.webkflc_b_box>li').find(".webkflc_b_box_img2").hide();
    })
})

$(function () {
    $(".webjjfa_li").mouseover(function () {
        $(this).find('.webjjfa_li_img2').show();
        $(this).find('.webjjfa_li_img1').hide();
    })    
    $(".webjjfa_li").mouseout(function () {
        $(this).find('.webjjfa_li_img1').show();
        $(this).find('.webjjfa_li_img2').hide();
    })
})

// 弹跳
$(function () {
    var tp = $(".webanli_t").offset();
    var p = true;
    $(window).scroll(function () {
        if(p == true) {
            if($(window).scrollTop() > tp.top + 100) {
                $(".img").animate({"top":"30px"},300,function () {
                    $(".img").animate({"top":"-20"},200,function () {
                        $(".img").animate({"top":"30px"},200,function () {
                            $(".img").animate({"top":"10px"},200,function(){
                                $(".img").animate({"top":"30px"},200);
                            })
                        });
                    })
                })
                p = false;
            }
        }
    })
})

// 左进入
$(function () {
    var p = true;
    $(window).scroll(function () {
        if(p == true) {
            if($(window).scrollTop() > $(".webadvantage").offset().top - 350) {
                $(".div1").animate({"left":"0","opacity":"1"},180,function () {
                    $(".div2").animate({"left":"0","opacity":"1"},180,function () {
                        $(".div3").animate({"left":"0","opacity":"1"},180)
                    })
                })
            }
            p == false;
        }
    })
})

// 右进入
$(function () {
    var p = true;
    $(window).scroll(function () {
        if(p == true) {
            if($(window).scrollTop() > $(".webadvantage").offset().top - 200) {
                $(".div4").animate({"left":"0","opacity":"1"},180,function () {
                    $(".div5").animate({"left":"0","opacity":"1"},180,function () {
                        $(".div6").animate({"left":"0","opacity":"1"},180)
                    })
                })
            }
            p == false;
        }
    })
})


// 下拉菜单
$(function () {
    $('.container>ul>li').mouseover(function(){
        $(this).children('ul').stop().slideDown(500);
    })
    $('.container>ul>li').mouseout(function(){
        $(this).children('ul').stop().slideUp(500);
    })
    
})

// 二维码划入画出
$(function () {
    $('.weixin').mouseover(function(){
    $('.erweima').stop().slideDown(500);
})
$('.weixin').mouseout(function(){
    $('.erweima').stop().slideUp(500);
})
})
// 头部动画
$(function () {
    $('document').ready(function(){

    })
    $('.logo').animate({'left':'0','opacity':1},1000);
    // $('.logo').fadeIn(800);
    // $('.dian').fadeIn(800);
    $('.dian').animate({'right':'0','opacity':1},1000);
})

