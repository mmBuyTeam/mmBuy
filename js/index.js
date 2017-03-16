window.onload = function (){
	// 导航栏加载
	$.ajax({
		type: 'get',
		data: '{}',
		async: false,
		url: 'http://192.168.15.164:3000/api/getindexmenu',
		dataType: 'jsonp',
		success: function(data){
			var html = template('tmp',data);
			$('#nav').html(html);
			var count = 1;
			$('#nav>ul>li').eq(7).on('click',function(){
				// .toggle('flex')
				count++;
				if(count%2 != 1){
					$('#nav ul li:nth-child(n+9)').css('display','flex');
				}else{
					$('#nav ul li:nth-child(n+9)').css('display','none');
				}
			});
		}
	});
	$.ajax({
		type: 'get',
		data: '{}',
		async: false,
		url: 'http://192.168.15.164:3000/api/getmoneyctrl',
		dataType: 'jsonp',
		success: function(data){
			var html = template('tem',data);
			$('.goods').find('h3').eq(0).after(html);
		}
	});

}