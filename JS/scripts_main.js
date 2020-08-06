

//Efecto Menu
$(document).ready(function(){
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index*600));
    });
});





//Efecto Header
$(document).ready(function(){
    $('header .title').css({
        opacity: 0,
        marginTop: 0
    });

    $('header .title').animate({
        opacity: 1,
        marginTop: '-50px'
    }, 2500);


})




//Menu 2---------




//-----Scroll Parallax---//

$(document).ready(function(){

    $(window).scroll(function(){
        var windowWidth=$(window).width();

        if(windowWidth>400){
            var scroll = $(window).scrollTop();

            $('header .title').css({
                'transform': 'translate(0px,' + scroll/2 + '%)'   
            });

            $('.about-us article').css({
                'transform': 'translate(0px,-' + scroll/4 + '%)'   
            });
        }
    });

    $('#three').click(function(){
    //$(this).toggleClass('on');

    TweenMax.to('#resize',1,{
        top: '0%',
        ease: Power2.easeInOut
    })
    

});

$('#exit').click(function(){
    //$(this).toggleClass('on');

    TweenMax.to('#resize',1,{
        top: '-110%',
        ease: Power2.easeInOut
    });
});

$('#menu2-producto').click(function(){
    TweenLite.to(window,1,{
        scrollTo: '.title'
    });

    TweenMax.to('#resize',1,{
        delay: .8,
        top: '-110%',
        ease: Power2.easeInOut
    });
});

$('#menu2-propiedades').click(function(){
    TweenLite.to(window,1,{
        scrollTo: '.container1'
    });

    TweenMax.to('#resize',1,{
        delay: .8,
        top: '-110%',
        ease: Power2.easeInOut
    });
});

$('#menu2-contacto').click(function(){
    TweenLite.to(window,1,{
        scrollTo: '.contacto'
    });

    TweenMax.to('#resize',1,{
        delay: .8,
        top: '-110%',
        ease: Power2.easeInOut
    });
});








    $(window).resize(function(){
        var windowWidth=$(window).width();
        if(windowWidth<800){
            $('.about-us article').css({
                'transform': 'translate(0px,0px)'   
            });
        }
    })
});





/*---PRELOADER---*/

var loader;
function loadNow(opacity){
    if (opacity <=0) {
        displayContent();
    }
    else{
        loader.style.opacity = opacity;
        window.setTimeout(function(){
            loadNow(opacity -0.06)
        }, 50);
    }
}

function displayContent(){
    loader.style.display='none';
    document.getElementById('all').style.display='block';
}

document.addEventListener("DOMContentLoaded", function(){
    loader = document.getElementById('loader');
    loadNow(1);
})


 





