$(function () {
   $('.tab2 ul.menu li').click(function(){
        //获得当前被点击的元素索引值
         var Index = $(this).index();
		//给菜单添加选择样式
	    $(this).addClass('active').siblings().removeClass('active');
	
		//显示对应的div
		$('.tab2').children('div').eq(Index).show().siblings('div').hide();
   
   });
});