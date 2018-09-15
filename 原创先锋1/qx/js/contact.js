

$(function () {
    $('.logo').hide();
    $('.logo').show(1500);
    $('.head-r').animate({'right': '0px'}, 1500);

    $('.bar>ul>li').mousemove(function () {
        $(this).children('ul').stop().slideDown(500);
    })
    $('.bar>ul>li').mouseout(function () {
        $(this).children('ul').stop().slideUp(500);
    })
    $('#imgss').mouseover(function () {
        $('.erweima').stop().slideDown(500);
    })
    $('#imgss').mouseout(function () {
        $('.erweima').stop().slideUp(500);
    })

    $('#con_img').animate({'left': '-50px'}, 1000, function () {
        $('#con_img').animate({'left': '0'}).addClass('trans')
    })
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 400 && $(document).scrollTop() <= 1100) {
            $('#join_img').animate({'left': '0px'},500).addClass('trans')
        }
        else {
            $('#join_img').css('left','-50px').removeClass('trans')
        }

    })
    //var username=document.cookie.split(";")[0].split("=")[1];
//JS操作cookies方法!
//写cookies
//    function setCookie(name,value) {
//        var Days = 30;
//        var exp = new Date();
//        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
//        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
//    }
//    function getCookie(name)
//    {
//        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
//        if(arr=document.cookie.match(reg)) {
//            console.log(arr);
//            return unescape(arr[2]);
//        }
//        else
//            return null;
//    }

})


