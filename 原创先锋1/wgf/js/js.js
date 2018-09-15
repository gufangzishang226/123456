$(function () {
    $('.table>ul>li').mouseenter(function () {
        $(this).addClass('tablel').siblings().removeClass('tablel');
        // $($('.table>ul')[0]).addClass('tablel');
        
        $('.table>ul>li:first').addClass('tablel')

    })
    $('.table>ul>li').mouseleave(function () {
        $(this).removeClass('tablel');
        $('.table>ul>li:first').addClass('tablel')
    })
        $('.logo').animate({'left': '0'},1000)
        $('.topr').animate({'right': '0'},1000)
    $('.ideal1>ul>li').mouseenter(function () {
        $(this).find('span').css('color','#5f5f5f')
        $(this).find('a').css('color','#5f5f5f')
        $(this).find('i').css('color','#5f5f5f')
        $(this).find('p').css('color','#5f5f5f')
    })
    $('.ideal1>ul>li').mouseleave(function () {
        $(this).find('span').css('color','')
        $(this).find('a').css('color','')
        $(this).find('i').css('color','')
        $(this).find('p').css('color','')
    })
    $('.tab>ul>li').mouseover(function(){
        $(this).children('ul').stop().slideDown(500);
    })
    $('.tab>ul>li').mouseout(function(){
        $(this).children('ul').stop().slideUp(500);
    })
    $('.ideal').hide();
    $('.ideal').slideDown(700);
    $('.idear').hide();
    $('.idear').show(700);
    $(window).scroll(function () {
        if($(document).scrollTop() >= 800 && $(document).scrollTop() <= 900){
            $('.ideal').hide();
            $('.ideal').slideDown(400);
        }
    })
    $(window).scroll(function () {
        if($(document).scrollTop() >= 800 && $(document).scrollTop() <= 1000){
            $('.idear').hide();
            $('.idear').fadeIn(500);
        }
    })
    $(window).scroll(function () {
        if($(document).scrollTop() >= 990 && $(document).scrollTop() <= 1200){
            $('.idear1>div').hide();
            $('.idear1>ul>li').hide();
            $('.idear1>div').show(400);
            $('.idear1>ul>li').show(400);
        }
    })
    $('#ewm').mouseenter(function () {
        console.log($(this).parent().find('.imgs'))
        $('.topr :first').stop().slideUp(500);
    })
    $('.lil>ul>li').mouseenter(function () {
        $(this).find('span').css('color','#ff3a3a');
        $(this).find('a').css('color','#ff3a3a');
    })
    $('.lil>ul>li').mouseleave(function () {
        $(this).find('span').css('color','');
        $(this).find('a').css('color','');
    })
    $('#ewm').mouseover(function(){
        $('.topr>img').stop().slideDown(500);
    })
    $('#ewm').mouseout(function(){
        $('.topr>img').stop().slideUp(500);
    })
    $(document).ready(function () {
        $.goup({
            trigger: 100,
            bottomOffset: 10,
            locationOffset: 180,
            titleAsText: true,
            title:'',
        });
    });
})
