$(function(){
    $('.menu>li:eq(5)').css('border-right','1px solid #ccc')
})


$(function(){
    var fan = $('.fanhui');
    function mo (){
        $('html,body').animate({
            scrollTop:0
        },800);
    }
    fan.on('click',mo);
    $(window).on('scroll',function(){
        if($(window).scrollTop()>$(window).height())
        fan.fadeIn();
        else
        fan.fadeOut();
    });
    $(window).trigger('scroll');
    
})
$(function(){
    $('#pc').mouseover(function(){
        $('#qaq').slideDown(1000)

    })
    $('#pc').mouseout(function(){
        $('#qaq').slideUp(1000)
    })
})
$(function(){
    $('.dingzhi_bt>a').mouseover(function(){
        $(this).fadeOut(500,function(){
            $(this).fadeIn(300).stop()
        })
    })
})






