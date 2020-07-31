
  
  $(document).ready(function () {
    
    $('#carouselExampleIndicators').bind('swipeLeft swipeRight', function(event) {
      alert('ok');
      event.stopPropagation();
    });

    function toggleClass()
    {
        const body = document.querySelector('body');
        body.classList.toggle('light');
    }
    
    const deg = 6;
    const hr = document.querySelector('#hr');
    const mn = document.querySelector('#mn');
    const sc = document.querySelector('#sc');
    
    setInterval(() => {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;
        
        hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
    });

      $('.nav-item').click(function(){
        $( ".title-mobile" ).empty();
        setTimeout(function() {
          if($(".active").hasClass("home_carousel"))
          {
            if ($(".menu-toggle").hasClass("is-active") !== true) {
              $( ".title-mobile" ).append( "<h1>Accueil</h1>" );
            }
            $(".home_carousel").css("visibility","visible");
            $(".accueil").css("display","block");
            $(".citation").css("display","table");
            $(".À_propos").css("display","block");
            $(".icone-active").toggleClass("icone-active");
            $("#icone_accueil").toggleClass("icone-active");
          }
          else{
            
            if($(".active").hasClass("réalisations_carousel"))
            {
              if ($(".menu-toggle").hasClass("is-active") !== true) {
                $( ".title-mobile" ).append( "<h1>Réalisations</h1>" );
              }
              $(".icone-active").toggleClass("icone-active");
              $("#icone_réalisations").toggleClass("icone-active");
              $(".home_carousel").css("display","block");
              $(".home_carousel").css("visibility","hidden");
              $(".accueil").css("display","none");
              $(".citation").css("display","none");
              $(".À_propos").css("display","none");
              new Swiper('.swiper-container', {
                // Disable preloading of all images
                preloadImages: false,
                watchSlidesVisibility: true,
                // Enable lazy loading
                lazy: true,
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 20,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                },
                loop:true,
              });
            }
            else if($(".active").hasClass("compétences_carousel"))
            {
              if ($(".menu-toggle").hasClass("is-active") !== true) {
                $( ".title-mobile" ).append( "<h1>Compétences</h1>" );
              }
              $(".home_carousel").css("display","block");
              $(".home_carousel").css("visibility","hidden");
              $(".accueil").css("display","none");
              $(".citation").css("display","none");
              $(".À_propos").css("display","none");
              $(".icone-active").toggleClass("icone-active");
              $("#icone_compétences").toggleClass("icone-active");
            }
            else if($(".active").hasClass("contact_carousel"))
            {
              if ($(".menu-toggle").hasClass("is-active") !== true) {
                $(".title-mobile" ).append( "<h1>Contact</h1>" );
              }
              $(".home_carousel").css("display","block");
              $(".home_carousel").css("visibility","hidden");
              $(".accueil").css("display","none");
              $(".citation").css("display","none");
              $(".À_propos").css("display","none");
              $(".icone-active").toggleClass("icone-active");
              $("#icone_contact").toggleClass("icone-active");
            }
          }
        }, 700); // 2 sec
      });
      
      $('#button_toggle_menu').click(function(){
        $(".nav").toggleClass("mobile-nav");
        $('#mobile-menu').toggleClass("is-active");
        if($(".menu-toggle").hasClass("is-active")){
          $( ".title-mobile" ).empty();
        }
        else{
        setTimeout(function() {
            if($(".active").hasClass("home_carousel"))
            {
              $( ".title-mobile" ).append( "<h1>Accueil</h1>" );
            }
            else if($(".active").hasClass("réalisations_carousel"))
            {
              $( ".title-mobile" ).append( "<h1>Réalisations</h1>" );
            }
            else if($(".active").hasClass("compétences_carousel"))
            {
              $(".title-mobile" ).append( "<h1>Compétences</h1>" );
            }
            else if($(".active").hasClass("contact_carousel"))
            {
              $(".title-mobile" ).append( "<h1>Contact</h1>" );
            }
          }, 800); // 2 sec
        }
      });

      $('.carousel-control-prev, .carousel-control-next').click(function(){
        $( ".title-mobile" ).empty();
        $(".home_carousel").css("display","block");
        $(".home_carousel").css("visibility","hidden");
        $(".accueil").css("display","none");
        $(".citation").css("display","none");
        $(".À_propos").css("display","none");
        setTimeout(function() {
          if($(".active").hasClass("home_carousel"))
          {
            $(".accueil").css("display","block");
            $(".home_carousel").css("visibility","visible");
            $(".citation").css("display","table");
            $(".À_propos").css("display","block");
            $(".icone-active").toggleClass("icone-active");
            $("#icone_accueil").toggleClass("icone-active");
              if ($(".menu-toggle").hasClass("is-active") !== true) {
                $( ".title-mobile" ).append( "<h1>Accueil</h1>" );
              }
            }
          else{
            
            if($(".active").hasClass("réalisations_carousel"))
            {
              if ($(".menu-toggle").hasClass("is-active") !== true) {
                $( ".title-mobile" ).append( "<h1>Réalisations</h1>" );
              }
              $(".icone-active").toggleClass("icone-active");
              $("#icone_réalisations").toggleClass("icone-active");
              new Swiper('.swiper-container', {
                // Disable preloading of all images
                preloadImages: false,
                // Enable lazy loading
                lazy: true,
                watchSlidesVisibility: true,
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 20,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                },
                loop:true,
              });
            }
            else if($(".active").hasClass("compétences_carousel"))
            {
              if ($(".menu-toggle").hasClass("is-active") !== true) {
                $( ".title-mobile" ).append( "<h1>Compétences</h1>" );
              }
              $(".icone-active").toggleClass("icone-active");
              $("#icone_compétences").toggleClass("icone-active");
            }
            else if($(".active").hasClass("contact_carousel"))
            {
              if ($(".menu-toggle").hasClass("is-active") !== true) {
                $( ".title-mobile" ).append( "<h1>Contact</h1>" );
              }
              $(".icone-active").toggleClass("icone-active");
              $("#icone_contact").toggleClass("icone-active");
            }
          }
        }, 700); // 2 sec
      });

      // // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
      // $(document).on("scroll", function(){

      //   if ($(document).scrollTop() > 100){
      //     $(".navbar").css("padding","0px");
      //     $(".navbar").css("background-color","rgba(72 , 168, 232, .7)");
      //     $(".container-fluid").css("margin-top","0px");
      //     console.log('ok');
      //   } else {
      //     $(".navbar").css("padding","5px");
      //     $(".navbar").css("background-color","rgba(72 , 168, 232, 1)");
      //     // $(".container-fluid").css("margin-top","219px");
      //   }
        
      // });

      $('.indicator').click(function(){
        $("html, body").animate({scrollTop : 1000}, 1500);
      });


           

 });