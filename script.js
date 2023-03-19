function resume(){
    window.open("https://drive.google.com/file/d/1-JHAHmvYocVyqqX-49Z8s4rdF6rKDrnw/view?usp=sharing","_blank")
  }


  $(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
    $('a[href*="#"]').on('click',function(e){
  
        e.preventDefault();
    
        $('html, body').animate({
    
          scrollTop : $($(this).attr('href')).offset().top,
    
        },
          500, 
          'linear'
        );
    
      });
    
    });