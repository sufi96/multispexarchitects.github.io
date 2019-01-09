function validateForm(){
    if( document.forms['contactForm']['Cname'].value === '' )
     {
        alert("Please Enter Name!");
        // document.getElementById("errorName").style.display="block";
        return false;
     }
     
     if( document.forms['contactForm']['Cemail'].value === '' )
     {
        alert("Please Enter Email!");
        // document.forms["contactForm"]["Cemail"].style.border = "1px solid red";
        // document.getElementById("errorEmailEmpty").innerHTML = "Not a valid e-mail address";
        return false;
     }
     if( Cemail.value.indexOf("@",0)<0)
     {
        alert("Please Enter valid Email!");
        document.contactForm.Cemail.focus() ;
        return false;
     }
     if(Cemail.value.indexOf(".",0)<0)
     {
        alert("Please Enter valid Email!");
        document.contactForm.Cemail.focus() ;
        return false;
     }

     if( document.forms['contactForm']['Csubject'].value === '' )
     {
        alert( "Please provide your subject!" );
        document.contactForm.Csubject.focus() ;
        return false;
     }
              
     if( document.forms["contactForm"]["Cmsg"].value == "-1" )
     {
        alert( "Please enter something!" );
        return false;
     }
    alert( "Your message has been sent. Thank you for contacting us!" );
    return( true );
  } 
  // ************************ FORM VALIDATION **********************
// $("contactForm").each(function(){
//   var form = this;

//   form.addEventListner("invalid", function(event){
//     event.preventDefault();
//   }, true);

//   $(form).on("submit", function(event){
//     if (!this.checkValidity()){
//       event.preventDefault();
//     }
//   });

//   $("input, textarea, select", form)
//     .on("blur", function(){
//       var field = $(this);
//       if( field.data("kendoTooltip")){
//         if(this.validity.valid){
//           field.kendoTooltip("destroy");
//         } else {
//           field.kendoTooltip("hide");
//         }
//       }
//     })
//     .on("focus", function(){
//       var field = $(this);
//       if( field.data("kendoTooltip")){
//         field.kendoTooltip("show");
//       }
//     });
//     $("input[type=submit]", form).on("click", function(event) {
//       $("input, select, textarea", form).each( function(){
//         var field = $(this);
//       if( field.data("kendoTooltip")){
//         field.kendoTooltip("destroy");
//       }
//     });

//     var invalidFields = $(":invalid", form).each( function(){
//       var field = $( this).kendoTooltip({
//         content: function(){
//           return field[0].validationMessage;
//         }
//       });
//     });
//     invalidFields.first().trigger("focus").eq(0).focus();
//   });
// });
 // ************************ FORM VALIDATION JQUERY **********************

  $(document).ready(function()
  {
    $("a").on('click',function(event)
    {
      if(this.hash !=="")
      {
        event.preventDefault();
        var hash = this.hash;

        $('html,body').animate({
          scrollTop: $(hash).offset().top},
          800, function()
          //number of millisec the page scroll
          {
            location.hash = hash;
          }
        );
      }
    });
  });
  // ************************ SMOOTH SCROLLING **********************
  
  $(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');
  });
   // ************************ BACK TO TOP **********************
   function homeButton(){
    location.href = "http://multispexarchitects.com/#home";
   }
   function aboutButton(){
    location.href = "http://multispexarchitects.com/#about";
   }
    function workButton(){
    location.href = "http://multispexarchitects.com/#work";
   }
    function teamButton(){
    location.href = "http://multispexarchitects.com/#team-img-slide";
   }
    function achButton(){
    location.href = "http://multispexarchitects.com/#Ach";
   }
    function contactButton(){
    location.href = "http://multispexarchitects.com/#Contact";
   }
   // ************************ TOOLBAR BUTTON **********************

   function linkedInButton(){
    location.href = "https://www.linkedin.com/company/multi-spex-architects/";
   }
   function facebookButton(){
    location.href = "https://www.facebook.com/multi-spex-architects/";
   }
   // ************************ SOCIAL MEDIA BUTTON **********************
    function masterPlanningButton(){
    location.href = "http://multispexarchitects.com/Master-Planning/";
   }
    function instituitionalButton(){
    location.href = "http://multispexarchitects.com/Instituitional/";
   }
    function commercialButton(){
    location.href = "http://multispexarchitects.com/Commercial/";
   }
    function hotelResortButton(){
    location.href = "http://multispexarchitects.com/Hotel-and-Resort/";
   }
    function residentialButton(){
    location.href = "http://multispexarchitects.com/Residential/";
   }
    function publicBuildingButton(){
    location.href = "http://multispexarchitects.com/Public-Building/";
   }
    function industrialButton(){
    location.href = "http://multispexarchitects.com/Industrial/";
   }
    function interiorButton(){
    location.href = "http://multispexarchitects.com/Interior/";
   }
    function landscapeButton(){
    location.href = "http://multispexarchitects.com/Landscape/";
   }
    function bODButton(){
    location.href = "http://multispexarchitects.com/Board-of-Directors/";
   }
   // ************************ DROPDOWN MENU BUTTON **********************

   function toolbarSmartphone() {
    var x = document.getElementById("navbar-mobile");
    if (x.className === "container-fluid") {
        x.className += " responsive";
    } else {
        x.className = "container-fluid";
    }
}