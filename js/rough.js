"use strict"


/*Register Form page-1 form validation */

$('#firstStepRegistration input, #firstStepRegistration select').on('blur change', function(){
	registerFirstFormFields();
});

function registerFirstFormFields(){
	var yourFullNameText = $('#yourFullNameText');
	var rollNumberText = $('#rollNumberText');
	var classSelect = $('#classSelect');
	var sectionSelect = $('#sectionSelect');
	var yourSchoolText = $('#yourSchoolText');

	var count = 1;
	var finalStatus = 0;
	var ratio = 20;

	var nameVal = yourFullNameText.val();
	if(typeof nameVal === 'string' && nameVal !== '') {
		finalStatus += ratio;
		yourFullNameText.siblings('p').hide();
		$('#yourFullNameText').parents('.field').find('.thumb-up img').show();
	} else {
		yourFullNameText.siblings('p').show();
		$('#yourFullNameText').parents('.field').find('.thumb-up img').hide();
	}

	var countField = 0;
	var rollValue= rollNumberText.val();
	if(typeof rollValue === 'string' && rollValue !== ''){
		finalStatus  += ratio;
		countField += 1;
	}

	var classVal= classSelect.val();
	if(typeof classVal === 'string' && classVal !== ''){
		finalStatus  += ratio;
		countField += 1;
	}

	var sectionVal= sectionSelect.val();
	if(typeof sectionVal === 'string' && sectionVal !== ''){
		finalStatus  += ratio;
		countField += 1;
	}

	if(countField === 3){
		$('#rollNumberText').parents('.fields-group').find('.thumb-up img').show();
	} else  {
		$('#rollNumberText').parents('.fields-group').find('.thumb-up img').hide();
	}

	var schoolVal = yourSchoolText.val();
	if(typeof schoolVal === 'string' && schoolVal !== '') {
		finalStatus += ratio;
		yourSchoolText.siblings('p').hide();
		$('#yourSchoolText').parents('.field').find('.thumb-up img').show();
	} else {
		yourSchoolText.siblings('p').show();
		$('#yourSchoolText').parents('.field').find('.thumb-up img').hide();
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
