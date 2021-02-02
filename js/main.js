$( document ).ready(function() {

    //Animated Scroll
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  $('#partnershipSlider').slick({
    infinite: true,
    arrow: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:"<button type='button' class='slick-prev pull-left'><image src='leftArrow.png'/></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><image src='rightArrow.png'/></button>",
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#serviceSlider').slick({
    infinite: false,
    arrow: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:"<button type='button' class='slick-prev pull-left'><image src='leftArrow.png'/></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><image src='rightArrow.png'/></button>",
    responsive: [
      {
        breakpoint: 1470,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('#testimonialSlider').slick({
    infinite: true,
    arrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:"<button type='button' class='slick-prev pull-left'><image src='leftArrow.png'/></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><image src='rightArrow.png'/></button>",
  });
  

    function printError(elemId, hintMsg) {
        document.getElementById(elemId).innerHTML = hintMsg;
    }

    // Defining a function to validate form 
    function validateForm() {
        // Retrieving the values of form elements 
        var name = document.contactForm.name.value;
        var email = document.contactForm.email.value;
        var mobile = document.contactForm.mobile.value;
        var country = document.contactForm.country.value;
        var gender = document.contactForm.gender.value;
        var hobbies = [];
        var checkboxes = document.getElementsByName("hobbies[]");
        for(var i=0; i < checkboxes.length; i++) {
            if(checkboxes[i].checked) {
                // Populate hobbies array with selected values
                hobbies.push(checkboxes[i].value);
            }
        }
        
        // Defining error variables with a default value
        var nameErr = emailErr = mobileErr = countryErr = genderErr = true;
        
        // Validate name
        if(name == "") {
            printError("nameErr", "Please enter your name");
        } else {
            var regex = /^[a-zA-Z\s]+$/;                
            if(regex.test(name) === false) {
                printError("nameErr", "Please enter a valid name");
            } else {
                printError("nameErr", "");
                nameErr = false;
            }
        }
        
        // Validate email address
        if(email == "") {
            printError("emailErr", "Please enter your email address");
        } else {
            // Regular expression for basic email validation
            var regex = /^\S+@\S+\.\S+$/;
            if(regex.test(email) === false) {
                printError("emailErr", "Please enter a valid email address");
            } else{
                printError("emailErr", "");
                emailErr = false;
            }
        }
        
        // Validate mobile number
        if(mobile == "") {
            printError("mobileErr", "Please enter your mobile number");
        } else {
            var regex = /^[1-9]\d{9}$/;
            if(regex.test(mobile) === false) {
                printError("mobileErr", "Please enter a valid 10 digit mobile number");
            } else{
                printError("mobileErr", "");
                mobileErr = false;
            }
        }
        
        // Validate country
        if(country == "Select") {
            printError("countryErr", "Please select your country");
        } else {
            printError("countryErr", "");
            countryErr = false;
        }
        
        // Validate gender
        if(gender == "") {
            printError("genderErr", "Please select your gender");
        } else {
            printError("genderErr", "");
            genderErr = false;
        }
        
        // Prevent the form from being submitted if there are any errors
        if((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
        return false;
        } else {
            // Creating a string from input data for preview
            var dataPreview = "You've entered the following details: \n" +
                            "Full Name: " + name + "\n" +
                            "Email Address: " + email + "\n" +
                            "Mobile Number: " + mobile + "\n" +
                            "Country: " + country + "\n" +
                            "Gender: " + gender + "\n";
            if(hobbies.length) {
                dataPreview += "Hobbies: " + hobbies.join(", ");
            }
            // Display input data in a dialog box before submitting the form
            alert(dataPreview);
        }
    };

    var youtubeVideos = [
        {
            id: 1,
            title: "Scottie Smith and Associates",
            embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TP8NZ3xN97I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            id: 2,
            title: "Scottie Smith II - A New Pathway to Home Ownership",
            embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/PUbFJVx4g_k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            id: 3,
            title: "Building In Dallas with Scottie L Smith",
            embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/BXDgPFXUYgw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        },
        {
            id: 4,
            title: "A Conversation with Scottie Smith II | Empower Series",
            embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/yyLxltekzbI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
    ];

    var selectedVideo = {
        id: 1,
        title: "Scottie Smith and Associates",
        embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TP8NZ3xN97I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }

    $("#video-container").html(selectedVideo.embed);
    
    var list = "";
    for(i = 0; i < youtubeVideos.length; i++){
        list += `<div class="videoTitle ${youtubeVideos[i].id == 1 ? "videoActive" : ""}" id='${youtubeVideos[i].id}'><i class='bi bi-youtube'></i><span>${youtubeVideos[i].title}</span></div>`;
    }
    $("#videoList").append(list);

    $('.videoTitle').on('click', function(e){
        e.preventDefault();

        selectedVideo = youtubeVideos.find(x => x.id == this.id);
        $("#video-container").html(selectedVideo.embed);
        
        $(".videoTitle").removeClass("videoActive");
        $(this).addClass("videoActive");
    })
});