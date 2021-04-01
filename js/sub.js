$(function(){      

    var delta, num=$(window).width();
    
    $(window).on('mousewheel DOMMouseScroll',function(e){
        delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        
        if(delta<0){
            //down
            if(-($('.sub_02').width() - $(window).width() )< num) num-=100;
        }else{
            //up
            if($(window).width() > num) num+=100;
        }
        $('.sub_02').css({transform:'translateX('+num+'px)'});

        console.log($('.spot_04').offset().left)

        //콘텐츠 나타남
        $('.in').each(function(){
            if($(this).offset().left < $(window).width() ){
                $(this).addClass('active');
            }
        });
        
    });
    
    $('.article_06 a').on('click',function(){
        $('.sub_02').css({transform:'translateX(100vw)'});
    })
    

});
