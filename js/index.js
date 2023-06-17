$(window).on('load', function() {
    setTimeout(function(){
        $(".loading").fadeOut();
        $('body').css('overflow-y','auto')
        $('html').animate({scrollTop: 0},0);
    }, 1000);

    $(window).resize(() => {
        $('.m-nav-box').css({'z-index': '-1'})
        $('body').css({'width': $(window).width()})
        if($(window).width() <= 680) {
            $('.grid').css({'height': $(window).height() - 150})
            $('.section').css({'height': $(window).height() - 150})
            $('.section .box').css({'height': '100%'})
            $('.m-nav-box').css({'z-index': '-1'})
            }
        else if($(window).width() > 680) {
            $('.section').css({'height':'70rem'})
            $('.section .box').css({'height': '80%'})
            $('.m-nav-box').addClass('nav-box-cls');
            }
        })
        $(window).trigger('resize');

    setTimeout(function(){
        $(function() {

            let navOpn = function(){
                $('.m-nav-box').addClass('nav-box-opn');
                $('.m-nav-box').removeClass('nav-box-cls');
                $('.nav-btn span').css('background-color','#000');
                $('.nav-btn').css('transform','rotate(-180deg)');
                $('.nav-btn span').css('transition','background-color .3s');
                clickCount ++
                console.log('case2')
            };
            let navCls = function(){
                $('.m-nav-box').addClass('nav-box-cls');
                $('.m-nav-box').removeClass('nav-box-opn');
                $('.nav-btn span').css('background-color','#fff');
                $('.nav-btn').css('transform','rotate(0)');
                $('.nav-btn span').css('transition','background-color 1s');
                clickCount ++
                console.log('case3')
            };

            // main--------------------------------------------------------

            $('.main .mokup-img').mouseover(function(){
                $('.main .bg-img').css('animationPlayState','running');
            })
            $('.main .mokup-img').mouseleave(function(){
                $('.main .bg-img').css('animationPlayState','pause');
            })

            let clickCount = 0;

            $('.nav-btn').click(function(){
                if(clickCount == 0) {
                    $('.m-nav-box').addClass('nav-box-opn');
                    $('.m-nav-box').removeClass('nav-box-cls');
                    $('.nav-btn span').css('background-color','#000');
                    $('.nav-btn').css('transform','rotate(-180deg)');
                    clickCount ++
                    console.log('case1')
                }
                else if(clickCount%2 == 0) {
                    navOpn();
                } else {
                    navCls();
                };
                console.log(clickCount)
            });
            // grid-------------------------------------------------------

            $('.grid-contents').hover(function() {
                $(this).addClass('grid-contents-hover')
                $(this).find('.grid-text').children('.title').addClass('grid-contents-hover')
                $(this).find('.grid-text').children('p').addClass('grid-contents-hover')
            },function() {
                $(this).removeClass('grid-contents-hover')
                $(this).find('.grid-text').children('.title').removeClass('grid-contents-hover')
                $(this).find('.grid-text').children('p').removeClass('grid-contents-hover')
            })
            //nav movement
            $('.nav-box > ul > li').click(function(e){
                e.preventDefault();
                n = $(this).index();
        
                distance = $('.section').eq(n).offset().top;
                if(n == 3) {
                    $('html').animate({scrollTop: distance -200},600);
                } else {
                    $('html').animate({scrollTop: distance - 100},600);
                }
                console.log(distance)
            })
            //mobile nav movement
            $('.m-nav-box > ul > li').click(function(e){
                e.preventDefault();
                n = $(this).index();
                if(n == 0) {
                    $('html').animate({scrollTop: 0},600);
                    navCls();
                } else if (n >=1){
                    distance = $('.section').eq(n-1).offset().top;
                    $('html').animate({scrollTop: distance - 100},600);
                    navCls();
                }
                console.log(distance)
            })
        
            $('.grid-contents').click(function(e){
                e.preventDefault();
        
                n = $(this).index();
                distance = $('.section').eq(n).offset().top;
        
                $('html').animate({scrollTop: distance - 100},600);
                // console.log(distance)
            })

            // section-------------------------------------------------------

            $(window).scroll(function() {
                const sct = $(window).scrollTop();
                const h = $(window).height();
                function sectionOffset(section) {
                    var secOff = $(section).offset();
                    return secOff.top;
                }

                if (sct > sectionOffset('.grid')- 800) {
                    $('.grid').addClass('moving');
                }
                if (sct > sectionOffset('.section1')- 800) {
                    $('.section1').children('.box1').addClass('moving')
                    $('.section1').children('.box2').addClass('moving')
                }
                if (sct > sectionOffset('.section2')- 800) {
                    $('.section2').children('.box1').addClass('moving')
                    $('.section2').children('.box2').addClass('moving')
                }
                if (sct > sectionOffset('.section3')- 800) {
                    $('.section3').children('.box1').addClass('moving')
                    $('.section3').children('.box2').addClass('moving')
                }
                if (sct > sectionOffset('.section4')- 800) {
                    $('.section4').children('.box').addClass('moving')
                }

                if(sct <= h-200) {
                    $('nav').removeClass('move');
                    $('.nav-box > ul > li p').removeClass('move');
                }
                if(sct > h-200) {
                    $('nav').addClass('move');
                    $('.nav-box > ul > li p').addClass('move');
                } 
                if (sct < h) {
                    $('nav').removeClass('down');
                    $('.nav-box > ul > li p').removeClass('down');
                }
                if (sct >= h-170) {
                    $('nav').addClass('down');
                    $('.nav-box > ul > li p').addClass('down');
                } 
            })

            $('.box a').mouseover(function() {
                $(this).children('.blur').addClass('goBlur')
                $(this).children('.blur').removeClass('leaveBlur')
                $('.box .blur-text').addClass('on')
            })
            $('.box a').mouseleave(function() {
                $(this).children('.blur').removeClass('goBlur')
                $(this).children('.blur').addClass('leaveBlur')
                $('.box .blur-text').removeClass('on')
            })

        })
    }, 1200);
});