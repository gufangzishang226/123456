(function(jQuery){ 
 
	jQuery.fn.zoomImgRollover = function(options) {
 
		var defaults = {
			percent:20,//放大百分比
			duration:800//延迟时间
		}; 
 
		var opts = jQuery.extend(defaults, options);//扩展一个对象
		
		// static zoom function
		function imageZoomStep(jZoomImage, x, origWidth, origHeight)
		{
			var width = Math.round(origWidth * (.5 + ((x * opts.percent) / 200))) * 2;
			var height = Math.round(origHeight * (.5 + ((x * opts.percent) / 200))) * 2;
				
			var left = (width - origWidth) / 2;
			var top = (height - origHeight) / 2;
		
			jZoomImage.css({width:width, height:height, top:-top, left:-left});
		}
 
		return this.each(function()
		{
			var jZoomImage = jQuery(this);
			var origWidth = jZoomImage.width();
			var origHeight = jZoomImage.height();
			
			// add css ness. to allow zoom
			jZoomImage.css({position: "relative"});
			jZoomImage.parent().css({overflow: "hidden", display:"block", position: "relative", width: origWidth, height: origHeight});
			
			jZoomImage.mouseover(function()
			{
				// jZoomImage.parent().siblings('img').stop().animate({'opacity':.3},800);
				jZoomImage.stop().animate({dummy:1},{duration:opts.duration, step:function(x)
				{
					imageZoomStep(jZoomImage, x, origWidth, origHeight)
				}});
			});
 
			jZoomImage.mouseout(function()
			{				
				// jZoomImage.parent().siblings('img').stop().animate({'opacity':0},800);

				jZoomImage.stop().animate({dummy:0},{duration:opts.duration, step:function(x)
				{
					imageZoomStep(jZoomImage, x, origWidth, origHeight)
				}});
			});
		});
	};
 
})(jQuery);