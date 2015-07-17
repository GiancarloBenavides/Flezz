$(document).ready(function(){
	var leftNavHeight = $(window).height() - 130;
	$(".fixed_nav .left_nav_hold").height(leftNavHeight);
	
	/*$(".left_nav_fixed .left_nav_hold").mCustomScrollbar({
		scrollButtons:{
			enable:true
		}
	});	*/
	
	$(".fixed_nav .left_nav_hold").slimscroll({
	  height: leftNavHeight
	});
	
	var chatPanelHeight = $(window).height() - 60;
	$(".chatbox_content").height(chatPanelHeight);
	
	$(".chatbox_content").slimscroll({
	  height: chatPanelHeight
	});		

});			