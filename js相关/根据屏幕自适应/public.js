// set_window
function get_window_width(){
	var win_arr  = new Array();
	win_arr[0]   = $(window).width();
	win_arr[1]   = $(window).height();
	win_arr[2]   = $('body').height();	
	return win_arr;
}
//set_header
function set_header(){
	var win_val = get_window_width(),h_subtop;
	h_subtop = $('#subtitle');
	h_subtop.css('width',win_val[0]+'px');
}
//set_footer
function set_footer(){
	var win_val = get_window_width(),f_tool;
	f_tool      = $('#footer_tool');
	f_tool.css('width',win_val[0]+'px');
}
//change line bgcolor
function change_bgcolor(change_obj,color_val){
	$(change_obj+':odd').css('background-color',color_val);	
}
//change_tab
// onclick="change_tab(this,'#order_c1','.order_content','tab_hover','#big_tab_box')"
function change_tab(_this,cont_obj,public_c,class_name,pa_obj){
	var _this_obj,lip_obj,p_obj,c_obj,pc_obj,class_name=class_name;
	_this_obj = $(_this);
	lip_obj   = _this_obj.parent();
	p_obj     = $(pa_obj);
	c_obj     = $(cont_obj);
	pc_obj    = p_obj.find(public_c);
	lip_obj.find('li').removeClass(class_name);
	_this_obj.addClass(class_name);
	pc_obj.hide(0);
	c_obj.show(0);
}
//show_cover
function show_cover(){
	var win_val = get_window_width(),_height;
	_height = win_val[1] < win_val[2] ? win_val[2] : win_val[1];
	$('#cover_screen').css({'width':win_val[0]+'px','height':_height+'px'}).show(0);
}
//show_loading
function show_loading(str){
	var win_val = get_window_width(),_html,_loading,_loading_text,_width,_height,_top,_left;
	_html = typeof(str) == 'undefined' ? '正在加载....' : str;
	_loading = $('#loading_text');
	_loading_text = _loading.find('span').html(_html);
	_width   = _loading.width();
	_height  = _loading.height();
	_top     = (win_val[1]-_height)/2-22;
	_left    = (win_val[0]-_width)/2-20;
	_loading.css({'top':_top+'px','left':_left+'px'}).show(0);
	$(window).scroll(function(){
		if(_loading.is(':visible')){
			_loading.css({'top':(_top+$(window).scrollTop())+'px'});	
		}
	});
}
//show_tips
function show_tips(str){
	var win_val = get_window_width(),_html,_loading,_loading_text,_detop,_left;
	_html = typeof(str) == 'undefined' ? '服务器繁忙...' : str;
	_loading = $('#cover_tips');
	_loading.find('p').html(_html);
	_loading.css('width',(win_val[0]-16)+'px').show(0).animate({'top':0+'px','left':0+'px'});
	$(window).scroll(function(){
		if(_loading.is(':visible')){
			_loading.css({'top':($(window).scrollTop())+'px'});	
		}
	});
}
//hide_type 	hide_type('#cover_tips');
function hide_type(_id){
	var _obj;
	_obj = $(_id);
	if(typeof(_obj) != 'undefined'){
		setTimeout(function(){
			_obj.hide(0);
		},1000);
	}		
}
function sub_show(_this){//show_list
	var _this_obj,sub_list;
	_this_obj = $(_this);
	sub_list  = _this_obj.next();
	if(sub_list.is(':visible')){//hide
		sub_list.hide(0);
	}else{//show
		sub_list.show(0);
	}
}
//click_person
function click_person(_this){//click && hide list
	var _this_obj,sub_list,_id,person_obj,default_html;
	_this_obj    = $(_this);
	sub_list     = _this_obj.parent();
	_id          = _this_obj.attr('data-id');
	default_html = sub_list.prev();
	person_obj   = $('#person_id');
	person_obj.val(_id);
	default_html.html(_this_obj.html());
	sub_list.hide(0);
}