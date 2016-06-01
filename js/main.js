"use strict"


/*Register Form page-1 form validation */

$('#firstStepRegistration input, #firstStepRegistration select').on('blur change', function(){
	registerFirstFormFields();
	if($(this).val() == "") {
		$(this).siblings('p').show();	
	} else {
		$(this).siblings('p').hide();
	}
});

function registerFirstFormFields(){
	var yourFullNameText = $('#yourFullNameText');
	var rollNumberText = $('#rollNumberText');
	var classSelect = $('#classSelect');
	var sectionSelect = $('#sectionSelect');
	var yourSchoolText = $('#yourSchoolText');

	var registerFirstForm = [yourFullNameText, rollNumberText, classSelect, sectionSelect, yourSchoolText];
	var count = 1;
	var finalStatus = 0;
 	for(var i=0; i<registerFirstForm.length; i++){
 		var str = registerFirstForm[i].val();
 		if(typeof str === 'string' && str !== '') {
 			var ratio = 20;
 			var getStatus = ratio * count;
 			finalStatus = getStatus;
 			count++;
 		} 
 	}

 	finalStatus = Math.round(finalStatus);
 	$('#firstStepProgressReg').addClass('progress-started');
 	$('#firstStepProgressReg .progress').css('width', finalStatus + "%");
 	$('#firstStepStarReg .update').css('width', finalStatus + '%');
 	
};

$('#firstStepRegistrationBtn').click(function(){
	var yourFullNameText = $('#yourFullNameText');
	var rollNumberText = $('#rollNumberText');
	var classSelect = $('#classSelect');
	var sectionSelect = $('#sectionSelect');
	var yourSchoolText = $('#yourSchoolText');

	var registerFirstForm = [yourFullNameText, rollNumberText, classSelect, sectionSelect, yourSchoolText];
	var count = 1;
	var finalStatus = 0;
 	for(var i=0; i<registerFirstForm.length; i++){
 		var str = registerFirstForm[i].val();
 		if(typeof str === 'string' && str !== '') {
 			var ratio = 20;
 			var getStatus = ratio * count;
 			finalStatus = getStatus;
 			count++;
 		} else if(str === "" || str === null) {
 			registerFirstForm[i].siblings('p').show();
 		} 
 	}
 	if(count-1 == registerFirstForm.length){
 		$(this).attr('href', 'register-1.html');
 	} else {
 		return false;
 	}
});

/* auto complete filelds*/
$('.auto-search input').focus(function(){
	$(this).siblings('.auto-search-field').slideDown();
});

$('.auto-search input').blur(function(){
	$(this).siblings('.auto-search-field').slideUp();
});

/*$('#xiSubjectConsiderText').focus(function(){
	$('#xiSubjectConsiderAuto').slideToggle();
});
*/
