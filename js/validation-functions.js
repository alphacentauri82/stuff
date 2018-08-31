$(document).ready(function() {
    $('#test-form').bootstrapValidator({
        //submitButtons: '#postForm',
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            
        },        
        fields: {
            fname: {
             message: 'The name is not valid',
                validators: {
                    notEmpty: {
                        message: '* required'
                    },
                    
                    
                }
            },
			
			
			 lname: {
                validators: {
                    notEmpty: {
                        message: '* required'
                    },
                   
                    
                }
            },
			
            
		
			company: {
                validators: {
                    notEmpty: {
                        message: '* required'
                    },
                   
                    
                }
            },
            address: {
                 validators: {
                    notEmpty: {
                        message: '* required'
                    },
                    
                    
                }
            },
            suggestion: {
                 validators: {
                    notEmpty: {
                        message: '* required'
                    },
                    
                    
                }
            },
            state: {
                 validators: {
                    notEmpty: {
                        message: '* required'
                    },
                   
                }
            },
            city: {
                validators: {
                    notEmpty: {
                        message: '* required'
                    },
                    
                    
                }
            },
            country: {
               validators: {
                    notEmpty: {
                        message: '* required'
                    },
                    
                    
                }
            },
            occupaton: {
                 validators: {
                    notEmpty: {
                        message: '* required'
                    },
                    
                    
                }
            },
            email: {
              validators: {
                    notEmpty: {
                        message: '* required'
                    },
                   
                }
            },
            mobile: {
                validators: {
                    notEmpty: {
                        message: '* required'
                    },
                 
                }
            },
             dob: {
                 validators: {
                  
                  
                }
            },
             zipcode: {
               validators: {
                    notEmpty: {
                        message: '* required'
                    }
                   
                }
            },
             gender: {
                validators: {
                	 
                  
                    
                }
            },
             excustomer: {
                validators: {

                    
                    
                    
                }
            },
              dob: {
                validators: {

                    
                    
                    
                }
            },
              occupation: {
                validators: {

                    
                    
                    
                }
            },
          

        }
    })
    .on('success.form.bv', function(e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        var url = 'https://script.google.com/macros/s/AKfycbxLTnMUG8MAOu_Ngnw43MCh4JeGeRlcKV9DfPy-Vg7w9pQtotQE/exec';
	   
	   $('#postForm').prepend($('<span></span>'));
      $('.msg-1,.msg-2').html("Thank you for subscribing");
	  $('.msg-1,.msg-2').show().delay(500).fadeOut(2500);
      
	  var jqxhr = $.post(url, $form.serialize(), function(data) {
	  	 document.getElementById("testform").reset(); 
            console.log("Success! Data: " + data.statusText);
            $(location).attr('href',redirectUrl);

        })
            .fail(function(data) {
                console.warn("Error! Data: " + data.statusText);
                // HACK - check if browser is Safari - and redirect even if fail b/c we know the form submits.
                if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                    //alert("Browser is Safari -- we get an error, but the form still submits -- continue.");
                    $(location).attr('href',redirectUrl);                
                }
            });
    });
});
