$(function(){
    if($('#home-slider').length>0 && $('#home-slider-nav').length>0)
    {
        $('#home-slider').cycle({
            fx: 'fade', //scrollHorz 淡入淡出效果
            speed: 500,// 图片渐变效果持续时间
            timeout: 6000, //切换间隔时间
            pager: '#home-slider-nav', //指定页码元素，如多图片滚动时那个数字序号条
            pagerEvent: 'mouseover',//鼠标事件 鼠标滑过
            pagerAnchorBuilder: function(idx, slide) { //用于建立按钮超链接的回调函数
                return '#home-slider-nav dl:eq(' + idx + ')';
            }
        });
                
        var totalW = parseInt($(window).width());
        //$(".slider-item").css("max-width",totalW+"px");
        $("#home-slider").css("width",totalW+"px");

        $('.slider-item img').each(function(){
            var imgObj = $(this);
            var parentBox = $('.slider-item');
            var objImagePreloader = new Image();
            objImagePreloader.onload = function() {
                width =$(".slider-item img").width();
                //alert(width+"--"+totalW);
                var leftpos = (totalW-parseInt(width))/2;
                leftpos = leftpos.toFixed(0);
                parentBox.css({
                    'margin-left' : leftpos+'px'

                });
            };
            objImagePreloader.src = $(this).attr('src');
        });
    };
    

    //滚轮是否滚动到当前视野
     function isScrolledIntoView(elem) {
         //获取纵向滚动条卷曲的高度
        var docViewTop = $(window).scrollTop();
         //获取浏览器底部距离body的距离（等于滚动条卷曲的高度+一屏幕的高度）
        var docViewBottom = docViewTop + $(window).height();
         //获取当前元素具体body的上偏移
        var elemTop = $(elem).offset().top;
         console.log(elemTop + 50,docViewBottom,$(window).height());
         //如果当前元素具体body的上偏移小于浏览器底部距离body的距离则返回true
        if (elemTop < docViewBottom) {
            return true
        } else {
            return false
        }
    }
    function animateShow(item, time,callback) {
        if ($(item).attr('init') == 'false'&& isScrolledIntoView($(item).parent()) ){
            $(item).attr('init', 'true');
            setTimeout(function(){
                $(item).fadeIn(800);
                
            },time)
        }
        }
    function animateFade(item, time,callback) {
    if ($(item).attr('init') == 'false'&& isScrolledIntoView($(item).parent()) ){
        $(item).attr('init', 'true');
        setTimeout(function(){
            //opacity500ms内由0.3到1.0
            $(item).animate({opacity:1.0},500);

        },time)
    }
    }
        
    $(window).scroll(function () {
        //1.在父窗口中操作 选中IFRAME中的所有单选钮
        //$(window.frames["iframe1"].document).find("input[@type='radio']").attr("checked","true");
        //
        //2.在IFRAME中操作 选中父窗口中的所有单选钮
        //$(window.parent.document).find("input[@type='radio']").attr("checked","true");

        //获取
        var cases_dl=$(window.frames["bottomContent"].document).find(".cases_dl");
        animateFade(cases_dl,300);
        animateShow('.partners_table',300);
       
    });
    

    
    //$('.img_case').adipoli({
//                'startEffect' : 'transparent',
//                'hoverEffect' : 'boxRandom'
//            });
    
    //$('.img_partner').adipoli({
//                'startEffect' : 'grayscale',
//                'hoverEffect' : 'normal'
//            });
})

function banner_hover(i)
{
    $("#home-slider-nav>dl").each(function(index){
            if(i==index){
                $(this).addClass("sel");
            }
            else
            {
                $(this).removeClass("sel");
            }
        }
    )
}
    function banner_out()
    {
    $("#home-slider-nav>dl").each(function()
                                           {
                                  $(this).removeClass("sel");
                                           }
    )
}