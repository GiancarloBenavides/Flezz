function havingClass(elem,cname)
{
	var classes = $(elem).attr('class').split(' ');
	for(var i=0; i<classes.length; i++) {
	   if(classes[i] == cname)
		return true;
	}
	return false;
}
/* handle beakpoints starts */
	$(window).bind('exitBreakpoint321',function() {
		
	});
	$(window).bind('enterBreakpoint321',function() {
		$('body').removeClass('mini_nav');
		var hasSelectedMenu = 0;
		$('.left_nav a').each(function () {
			if($(this).hasClass('menu_selected')) { hasSelectedMenu = 1;}
		});	
		if(hasSelectedMenu)	
		{
			$('.has-sub .menu_selected+ul').show();
			$('.menu_active+ul').hide();
		}else {
			$('.menu_active+ul').show();
		}		
	});

	$(window).bind('exitBreakpoint481',function() {
		
	});
	$(window).bind('enterBreakpoint481',function() {
		$('body').removeClass('mini_nav');
		var hasSelectedMenu = 0;
		$('.left_nav a').each(function () {
			if($(this).hasClass('menu_selected')) { hasSelectedMenu = 1;}
		});	
		if(hasSelectedMenu)	
		{
			$('.has-sub .menu_selected+ul').show();
			$('.menu_active+ul').hide();
		}else {
			$('.menu_active+ul').show();
		}
	});
	$(window).bind('exitBreakpoint641',function() {
		
	});
	$(window).bind('exitBreakpoint641',function() {
		
	});
	$(window).bind('enterBreakpoint641',function() {
		$('body').removeClass('max_nav');
		$('body').addClass('mini_nav');
		$('.menu_active+ul').hide();
		$('.has-sub .menu_selected+ul').hide();
	});
	$(window).bind('exitBreakpoint961',function() {
		
	});
	$(window).bind('enterBreakpoint961',function() {
		$('body').removeClass('mini_nav');
		$('body').addClass('max_nav');
		var hasSelectedMenu = 0;
		$('.left_nav a').each(function () {
			if($(this).hasClass('menu_selected')) { hasSelectedMenu = 1;}
		});	
		if(hasSelectedMenu)	
		{
			$('.has-sub .menu_selected+ul').show();
			$('.menu_active+ul').hide();
		}else {
			$('.menu_active+ul').show();
		}
	});
	
	$(window).bind('exitBreakpoint1025',function() {
		
	});
	$(window).bind('enterBreakpoint1025',function() {
		$('body').removeClass('mini_nav');
		$('body').addClass('max_nav');
		var hasSelectedMenu = 0;
		$('.left_nav a').each(function () {
			if($(this).hasClass('menu_selected')) { hasSelectedMenu = 1;}
		});	
		if(hasSelectedMenu)	
		{
			$('.has-sub .menu_selected+ul').show();
			$('.menu_active+ul').hide();
		}else {
			$('.menu_active+ul').show();
		}
	});
	$(window).bind('exitBreakpoint1281',function() {
		
	});
	$(window).bind('enterBreakpoint1281',function() {
		$('body').removeClass('mini_nav');
		$('body').addClass('max_nav');
		var hasSelectedMenu = 0;
		$('.left_nav a').each(function () {
			if($(this).hasClass('menu_selected')) { hasSelectedMenu = 1;}
		});	
		if(hasSelectedMenu)	
		{
			$('.has-sub .menu_selected+ul').show();
			$('.menu_active+ul').hide();
		}else {
			$('.menu_active+ul').show();
		}
	});	
	
	$(window).setBreakpoints();

/* handle beakpoints ends */

	/*accordion style left menu */
	$('.left_nav  ul  li:has(ul)').addClass("has-sub");
	
	$('.left_nav  ul  li  a').click(function() {
		if ($(this).parent('li').hasClass('has-sub') && $("body").hasClass("mini_nav")) {return false; }
		var checkElement = $(this).next();
		
		if ($(this).parent('li').hasClass('has-sub')){
			if(!$(this).hasClass('menu_active theme_color_bg')){ 
				$('.left_nav li > a').removeClass('menu_selected');
				$(this).addClass('menu_selected'); 
				if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
					$('.left_nav .has-sub span i').removeClass('fa-angle-down');
					$('.left_nav .has-sub span i').addClass('fa-angle-right');					
					$('.left_nav ul ul:visible').slideUp('fast');						
					checkElement.slideDown('fast');
					$(this).find('span i').removeClass('fa-angle-right');
					$(this).find('span i').addClass('fa-angle-down');					
				}
				else if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
					checkElement.slideUp('fast');
					$(this).find('span i').removeClass('fa-angle-down');
					$(this).find('span i').addClass('fa-angle-right');	
					$(this).removeClass('menu_selected');					
				}
				return false;
			}

		}
		
		$('.left_nav li > a').removeClass('menu_selected');
		
		if($(this).parent('li').hasClass('has-sub')){ 
			$('.left_nav li > a').removeClass('menu_active');
			//$('.left_nav li > a').removeClass('theme_border');		
		
			$(this).addClass('menu_active');
			//$(this).addClass('theme_border');
			
		}
		else {
			$(this).addClass('left_nav_child_active');
		}
		$(this).closest('li').find('a span i').removeClass('fa-angle-down');
		$(this).closest('li').find('a span i').addClass('fa-angle-right');		

		if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
			$(this).closest('li').removeClass('menu_active');
			//$(this).closest('li > a').removeClass('theme_border');
			$(this).closest('li').find('a span i').removeClass('fa-angle-right');
			$(this).closest('li').find('a span i').addClass('fa-angle-down');	
			checkElement.slideUp('fast');
		}

		if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
			$('.left_nav ul ul:visible').slideUp('fast');
			checkElement.slideDown('fast');
		}

		if (checkElement.is('ul')) {
			return false;
		} else {
			return true;	
		}
	});	
			
	/*accordion style left menu ends */

$(document).ready(function() {	
	init();
		
	$('.tab_btn').click(function() {
	
		var hasSelectedMenu = 0;
		$('.left_nav a').each(function () {
			if($(this).hasClass('menu_selected')) { hasSelectedMenu = 1;}
		});	
		var windowWidth = $(window).width();
		if(windowWidth <= 640 )
		{ 
			if($(".left_nav").is(':visible'))
			{
				$('body').removeClass('max_nav');
			}
			else
			{
				$('body').addClass('max_nav');
				if(hasSelectedMenu)	
				{
					$('.has-sub .menu_selected+ul').show();
					$('.menu_active+ul').hide();
				}else {
					$('.menu_active+ul').show();
				}	
				//$('.chat_window').removeClass('nomargin');
				//$('.chat_window').addClass('setmargin');
				$('.top_nav').removeClass('notification_margin');
				$('.page_content').removeClass('notification_margin');					
			}
			
			if(havingClass($('body'),'chat_visible')){
				$('body').removeClass('chat_visible');
				$('body').addClass('chat_hidden');
			}
		}
		else
		{
			var leftNavWidth = $(".left_nav").width();
			if(leftNavWidth <= 60)
			{
				if(windowWidth >= 641 && windowWidth <= 961)
				{
					if(havingClass($('body'),'chat_visible')) {
						$('body').removeClass('chat_visible'); $('body').addClass('chat_hidden');	
						$('body').removeClass('mini_nav_hidden');				
						
						{
							$('body').addClass('mini_nav');				
						}
					}
					else
					{
						$('body').removeClass('mini_nav_hidden');
						$('body').removeClass('mini_nav');
						$('body').addClass('max_nav');
						if(hasSelectedMenu)	
						{
							$('.has-sub .menu_selected+ul').show();
							$('.menu_active+ul').hide();
						}else {
							$('.menu_active+ul').show();
						}
					}
				}else{ 
					if(havingClass($('body'),'chat_visible')) {	$('body').removeClass('chat_visible'); $('body').addClass('chat_hidden'); }				
					$('body').removeClass('mini_nav_hidden');
					$('body').removeClass('mini_nav');
					$('body').addClass('max_nav');
					if(hasSelectedMenu)	
					{
						$('.has-sub .menu_selected+ul').show();
						$('.menu_active+ul').hide();
					}else {
						$('.menu_active+ul').show();
					}
					
					$('.top_nav').removeClass('notification_margin');
					$('.page_content').removeClass('notification_margin');	
				}
			}
			else
			{
				if(havingClass($('body'),'chat_visible')) {
					$('body').removeClass('chat_visible'); 
					$('body').addClass('chat_hidden');	
					$('body').removeClass('max_nav_hidden');				
					$('body').addClass('max_nav_visible'); 
					$('body').addClass('max_nav');				
				}
				else
				{ 
					$('body').removeClass('max_nav');
					$('body').addClass('mini_nav');
					$('.menu_active+ul').hide();
					$('.has-sub .menu_selected+ul').hide();
				}
			}		
		}		
		
	
	});
	
	$('.fullscreen_expand').click(function() {
		$(document).toggleFullScreen();
	});
	
	$('.right_panel_setting').click(function() {
			var leftNavWidth = $('.left_nav').width();
			var windowWidth = $(window).width();
			
			if (!$('.left_nav').is(':visible'))
			{
				if($('.chat_panel').css('right')=='0px'){
					$('body').removeClass('chat_visible');	
					$('body').addClass('chat_hidden');
				}
				else
				{
					$('body').removeClass('chat_hidden');	
					$('body').addClass('chat_visible');
				}
			}
			else if(leftNavWidth <= 60)
			{
				if($('.chat_panel').css('right')=='0px' || $('.chat_panel').css('left')=='0px'){
					if(havingClass($('body'),'mini_nav_hidden')) {$('body').removeClass('mini_nav_hidden'); $('body').addClass('mini_nav');	}
					$('body').removeClass('chat_visible');	
					$('body').addClass('chat_hidden');	
				}
				else
				{
					$('body').removeClass('mini_nav_visible');
					$('body').removeClass('chat_hidden');
					$('body').addClass('chat_visible');
					$('body').addClass('mini_nav_hidden');
				}			
			}
			else if(leftNavWidth <=225)
			{
				if($('.chat_panel').css('right')=='0px' || $('.chat_panel').css('left')=='0px'){
					if(havingClass($('body'),'max_nav_hidden')) {$('body').removeClass('max_nav_hidden'); $('body').addClass('max_nav');	}
					$('body').removeClass('chat_visible');	
					$('body').addClass('chat_hidden');	
				}
				else
				{
					$('body').removeClass('max_nav_visible');
					$('body').removeClass('chat_hidden');
					$('body').addClass('max_nav_hidden');
					$('body').addClass('chat_visible');		
				}
			}			
	});
	
	/* chat window handler starts*/
	$('.chat_heading > div').click(function() { 
		$('.chat_heading >div').removeClass('active');
		$(this).addClass('active');
		$('.chatbox_content > div').removeClass('active');
		var tabId = $(this).attr('id');
		$('#'+tabId+'_pane').addClass('active');
	});
	$('.chat_btn1').click(function() { 
		$('.chat_btn2').removeClass('chat_active_title');
		$('.chat_btn1').addClass('chat_active_title');
	});
	$('.chat_btn2').click(function() { 
		$('.chat_btn1').removeClass('chat_active_title');
		$('.chat_btn2').addClass('chat_active_title');
	});
	
	/* chat window handler ends*/	
	
});	

function init()
{
	$('.chatbox_content >div:first').addClass('active');
	
	var leftNavHeight = $(window).height() - 130;
	$(".left_nav").height(leftNavHeight);	
	var containerHeight = $(".right_container").height();
	if(containerHeight < leftNavHeight){$(".right_container").height(leftNavHeight-40);	}
	
	
}

