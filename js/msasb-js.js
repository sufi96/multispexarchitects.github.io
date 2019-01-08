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
    location.href = "#home";
   }
   function aboutButton(){
    location.href = "index.html#about";
   }
    function workButton(){
    location.href = "index.html#work";
   }
    function teamButton(){
    location.href = "index.html#team-img-slide";
   }
    function achButton(){
    location.href = "index.html#Ach";
   }
    function contactButton(){
    location.href = "index.html#Contact";
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
    location.href = "Master-Planning.html";
   }
    function instituitionalButton(){
    location.href = "Instituitional.html";
   }
    function commercialButton(){
    location.href = "Commercial.html";
   }
    function hotelResortButton(){
    location.href = "Hotel-Resort.html";
   }
    function residentialButton(){
    location.href = "Residential.html";
   }
    function publicBuildingButton(){
    location.href = "Public-Building.html";
   }
    function industrialButton(){
    location.href = "Industrial.html";
   }
    function interiorButton(){
    location.href = "Interior.html";
   }
    function landscapeButton(){
    location.href = "Landscape.html";
   }
    function bODButton(){
    location.href = "Board-of-Directors.html";
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