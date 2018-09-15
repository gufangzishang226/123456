

//初始化模板选择的下拉框
    var sel = document.getElementById('stylelist');
    for(var key in mapstyles) {
        var style = mapstyles[key];
        var item = new Option(style.title, key);
        sel.options.add(item);

        var map = new BMap.Map("allmap");
        window.map = map;
        var point = new BMap.Point(118.639996, 31.937549);

        map.addControl(new BMap.NavigationControl());               // 添加平移缩放控件
        map.addControl(new BMap.ScaleControl());                    // 添加比例尺控件
        map.addControl(new BMap.OverviewMapControl());              //添加缩略地图控件
        map.enableScrollWheelZoom();                            //启用滚轮放大缩小
        map.addControl(new BMap.MapTypeControl());          //添加地图类型控件
        map.disable3DBuilding();
        map.centerAndZoom(point, 14);

        //代码使用如下,即可. 模板页可以查看http://lbsyun.baidu.com/custom/list.htm
        //map.setMapStyle({style:'midnight'});

        changeMapStyle('grayscale')
        sel.value = 'grayscale';

        function changeMapStyle(style) {
            map.setMapStyle({style: style});
            $('#desc').html(mapstyles[style].desc);
        }

    }
