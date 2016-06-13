"use strict"

$(document).ready(function(){

	/* input type number & Email Validator validate */

	$("input[type='tel']").blur(function(){
		var el = $(this).val();
		var strNum = parseInt(el);
		var numLength = 10;
		if(typeof strNum === 'number' && el.length === numLength && strNum !== '') {
			$(this).parents('.field').find('.error').hide();
		} else if(el.length !== numLength){
			$(this).parents('.field').find('.error').fadeIn();
		}
	});

	$("input[type='email']").blur(function(){
		var el = $(this).val();
		if(validateEmail(el)){
			$(this).parents('.field').find('.error').hide();
		} else{
			$(this).parents('.field').find('.error').fadeIn();
		}
	});

	/*--------------Register Form page-1 form validation ------------------------------------- */

	$('#firstStepRegistration input, #firstStepRegistration select').on('blur change', function(){
		var yourFullNameText = $('#yourFullNameText');
		var rollNumberText = $('#rollNumberText');
		var classSelect = $('#classSelect');
		var sectionSelect = $('#sectionSelect');
		var yourSchoolText = $('#yourSchoolText');

		var count = 1;
		var finalStatus = 0;
		var ratio = 20;

		
		if($(this).attr('id') == 'yourFullNameText' && $(this).val() === ''){
			$(this).parents('.field').find('.error').fadeIn();
		}
		var nameVal = yourFullNameText.val();
		if(typeof nameVal === 'string' && nameVal !== '') {
			finalStatus += ratio;
			$('#yourFullNameText').parents('.field').find('.error').hide();
			$('#yourFullNameText').parents('.field').find('.thumb-up img').show();
		} else {
			$('#yourFullNameText').parents('.field').find('.thumb-up img').hide();
		}
		
		var countField = 0;
		var rollValue= rollNumberText.val();
		if($(this).attr('id') == 'rollNumberText' && $(this).val() === ''){
			$(this).parents('.field').find('.error').fadeIn();
		}
		if(typeof rollValue === 'string' && rollValue != '') {
			finalStatus  += ratio;
			countField += 1;
		}
		
		var classVal= classSelect.val();
		if($(this).attr('id') == 'classSelect' && $(this).val() === ''){
			$(this).parents('.field').find('.error').fadeIn();
		}
		if(typeof classVal === 'string' && classVal !== ''){
			finalStatus  += ratio;
			countField += 1;
		}

		var sectionVal= sectionSelect.val();
		if($(this).attr('id') == 'sectionVal' && $(this).val() === ''){
			$(this).parents('.field').find('.error').fadeIn();
		}
		if(typeof sectionVal === 'string' && sectionVal !== ''){
			finalStatus  += ratio;
			countField += 1;
		}

		if(countField === 3){
			$('#rollNumberText').parents('.fields-group').find('.error').hide();
			$('#rollNumberText').parents('.fields-group').find('.thumb-up img').show();
		} else  {
			$('#rollNumberText').parents('.fields-group').find('.thumb-up img').hide();
		}

		var schoolVal = yourSchoolText.val();
		if($(this).attr('id') == 'yourSchoolText' && $(this).val() === ''){
			$(this).parents('.field').find('.error').fadeIn();
		} 

		if(typeof schoolVal === 'string' && schoolVal !== '') {
			finalStatus += ratio;
			$('#yourSchoolText').parents('.field').find('.error').hide();
			$('#yourSchoolText').parents('.field').find('.thumb-up img').show();
		} else {
			$('#yourSchoolText').parents('.field').find('.thumb-up img').hide();
		}

	 	finalStatus = Math.round(finalStatus);
	 	if(finalStatus > 0){
	 		$('#firstStepProgressReg').addClass('progress-started');
	 	} else {
	 		$('#firstStepProgressReg').removeClass('progress-started');
	 	}
	 	
	 	$('#firstStepProgressReg .progress').css('width', finalStatus + "%");
	 	$('#firstStepStarReg .update').css('width', finalStatus + '%');
	 	
	});


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
	 			registerFirstForm[i].parents('.fields').find('.error').fadeIn();
	 		} 
	 	}
	 	if(count-1 == registerFirstForm.length){
	 		$(this).attr('href', 'register-1.html');
	 	} else {
	 		$('body').animate(
	 		{
	 			scrollTop: 0
	 		}, 600);
	 		return false;
	 	}
	});

	/*subject consider add from auto search field*/
 	$('#xiConsiderSubjectAdded').on('click', '.close', function(){
 		$(this).parent().remove();
 		var list = $('#xiConsiderSubjectAdded li');
 		if(list.length == 0){
 			$('#xiSubjectConsiderText').hide();
 			$('#xiConsiderSubjectAdded').parents('.field').find('.thumb-up img').hide();
 		}
 	});

 	var subjectConsider = {
		data: [	 
		{'title':"Mathematics", 'type':['non_medical', 'commerce_with_maths'] },
		{'title':"Physics", 'type': ['non_medical'] },
		{'title':"Chemistry", 'type': ['non_medical', 'medical'] },
		{'title':"Biology", 'type': ['medical']},
		{'title':"English", 'type': ['non_medical', 'medical', 'commerce_with_maths', 'commerce_without_maths']},
		{'title':"Engineering Graphics", 'type': []},
		{'title':"Accounts", 'type': ['commerce_with_maths', 'commerce_without_maths']},
		{'title':"Economics", 'type': ['commerce_with_maths', 'commerce_without_maths']},
		{'title':"Business Studies", 'type': ['commerce_with_maths', 'commerce_without_maths']},
		{'title':"Computers", 'type': []},
		{'title':"Fashion Studies", 'type': []},
		{'title':"Physical Education", 'type': []},
		{'title':"Geography ", 'type': []},
		{'title':"Political Science", 'type': []},
		{'title':"History", 'type': []},
		{'title':"Home Science", 'type': []},
		{'title':"Fine Arts", 'type': []},
		{'title':'Agriculture','type': []},
		{'title':'Multimedia and Web Technology','type': []},
		{'title':'Sociology','type': []},
		{'title':'Music and Dance','type': []},
		{'title':'Entrepreneurship','type': []},
		{'title':'Heritage Crafts','type': []},
		{'title':'Mass Media Studies','type': []},
		{'title':'Legal Studies','type': []},
		{'title':'Human Rights and Gender Studies','type': []},
		{'title':'National Cadet Crops','type': []}
	],

		getValue: "title",
		list: {
			maxNumberOfElements: 8,
			matchResponseProperty:'title',
			onChooseEvent: function() {
				var value = $("#xiSubjectConsiderText").getSelectedItemData().title;
				var checkVal = false;
				$('#xiConsiderSubjectAdded li').each(function(i, el){
					if($(this).text().trim() === value){
						checkVal = true;
						return false
					} 
				});
				if(checkVal !== true) {
					$('#xiConsiderSubjectAdded').append('<li>'+value+' <span class="close"></span></li>');
				}
				
				$('#xiConsiderSubjectAdded').parents('.field').find('.thumb-up img').show();
				$("#xiSubjectConsiderText").val('');
			},
			match: {
				enabled: true
			}
		}
	};

	$("#xiSubjectConsiderText").easyAutocomplete(subjectConsider);

	function getSubjectByType(type){
	  return subjectConsider.data.filter(function(d){
			return (d.type.indexOf(type) !== -1);
		}).map(function(d){
			var d = JSON.parse(JSON.stringify(d));
			d.editable = false;
			return d;
		});
	}

	var selectStreem = {
		data:[
			{"type": "non_medical", "career": "Non Medical"},
			{"type": "medical", "career": "Medical"},
			{"type": "commerce_with_maths", "career": "Commerce With Maths"},
			{"type": "commerce_without_maths", "career": "Commerce Without Maths"},
			{"type": "commerce_without_maths", "career": "Commerce Without Maths"}
		],

		getValue: "career",

		list: {
			maxNumberOfElements: 8,
			onChooseEvent: function() {
				var streamvalue = $("#xiSubjectConsiderSelect").getSelectedItemData().type;
				var subjects = getSubjectByType(streamvalue);
				$('#xiConsiderSubjectAdded').empty();
				subjects.forEach(function(sub){
					$('#xiConsiderSubjectAdded').append('<li>'+ sub.title +' <span class="close"></span></li>');
				});
				$('#xiConsiderSubjectAdded').parents('.field').find('.thumb-up img').show();
				$('#xiSubjectConsiderText').show();

				$("#xiSubjectConsiderSelect").val('');
			},
			match :  {
				enabled: true
			}
		}
	};

	$("#xiSubjectConsiderSelect").easyAutocomplete(selectStreem);

	

	/*Career you are interested in search field*/
	$('#careersInterestedInAdded').on('click', '.close', function(){
 		$(this).parent().remove();
 		var list = $('#careersInterestedInAdded li');
 		if(list.length == 0){
 			$('#careersInterestedInAdded').parents('.field').find('.thumb-up img').hide();
 		}
 	});

 	var careerConsider = {
		data:[
			{"count": "1", "career": "Doctor"},
			{"count": "2", "career": "Electrical Engineer"},
			{"count": "3", "career": "Paramilitary"},
			{"count": "4", "career": "Teacher"},
			{"count": "5", "career": "Mechanical Engineer"},
			{"count": "6", "career": "Civil Engineer"},
			{"count": "7", "career": "Civil Architect"},
			{"count": "8", "career": "Mechanical"}
		],

		getValue: "career",

		list: {
			maxNumberOfElements: 8,
			onChooseEvent: function() {
				var value = $("#careersInterestedInText").getSelectedItemData().career;
				var count = $('#careersInterestedInAdded > li').length +1;
				$('#careersInterestedInAdded').append('<li class="row"><span class="pull-first"></span><span class="pull-second"></span> <span class="count">' + count + '</span><span class="text">' + value + '</span><span class="close"></span></li>');
				$('#careersInterestedInAdded').parents('.field').find('.thumb-up img').show();
				$("#careersInterestedInText").val('');
			},
			match :  {
				enabled: true
			}
		}
	};
	$("#careersInterestedInText").easyAutocomplete(careerConsider);

	/*soring functionality for career selection listed items*/

	function updateCount(){
		$('#careersInterestedInAdded > li').each(function(i, el){
			$(this).find('.count').html(i+1);
		});	
	}
	$('#careersInterestedInAdded').on('click', '.pull-first', function(){
		var prev = $(this).parent().prev();
		var item = $(this).parent().detach();
		prev.before(item);
		updateCount();
	});
	$('#careersInterestedInAdded').on('click', '.pull-second', function(){
		var next = $(this).parent().next();
		var item = $(this).parent().detach();
		next.after(item);
		updateCount();
	});


/*--------------Register Form page-2 form validation ------------------------------------- */
function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

$('#secondStepRegistration input').on('blur change', function(){
	var yourPhoneNumberText = $('#yourPhoneNumberText');
	var yourEmailAddressText = $('#yourEmailAddressText');

	var count = 1;
	var finalStatus = 0;
	var ratio = 50;
	

	var phoneValue = yourPhoneNumberText.val();
	var strNum = parseInt(phoneValue);
	var numLength = 10;
	if($(this).attr('id') === 'yourPhoneNumberText' && phoneValue.length !== numLength  && phoneValue === '') {
		$(this).parents('.field').find('.error').fadeIn();
	}

	if(typeof strNum === 'number' && phoneValue.length === numLength && strNum !== '') {
		finalStatus  += ratio;
		$('#yourPhoneNumberText').parents('.field').find('.error').hide();
		$('#yourPhoneNumberText').parents('.field').find('.thumb-up img').show();
	} else if(phoneValue.length !== numLength){
		$('#yourPhoneNumberText').parents('.field').find('.thumb-up img').hide();
	}

	var emailVal = yourEmailAddressText.val();
	if($(this).attr('id') === 'yourEmailAddressText' && emailVal === '' && validateEmail(emailVal) === false){
		$('#yourEmailAddressText').parents('.field').find('.error').fadeIn();
	}
	if(validateEmail(emailVal)){
		finalStatus  += ratio;
		$('#yourEmailAddressText').parents('.field').find('.error').hide();
		$('#yourEmailAddressText').parents('.field').find('.thumb-up img').show();
	} else{
		$('#yourEmailAddressText').parents('.field').find('.thumb-up img').hide();
	}

 	finalStatus = Math.round(finalStatus);
 	if(finalStatus > 0){
 		$('#secondStepProgressReg').addClass('progress-started');
 	} else {
 		$('#secondStepProgressReg').removeClass('progress-started');
 	}
 	
 	$('#secondStepProgressReg .progress').css('width', finalStatus + "%");
 	$('#secondStepStarReg .update').css('width', finalStatus + '%');
 	
});


$('#secondStepRegistrationBtn').click(function(){
	var yourPhoneNumberText = $('#yourPhoneNumberText');
	var yourEmailAddressText = $('#yourEmailAddressText');

	var count = 1;
	var finalStatus = 0;
	var ratio = 50;
	
	var rollValue = yourPhoneNumberText.val();
	var strNum = parseInt(rollValue);
	var numLength = 10;
	if(typeof strNum === 'number' && rollValue.length === numLength && strNum !== '') {
		$('#yourPhoneNumberText').parents('.field').find('.error').hide();
		count++;
	} else if(rollValue.length !== numLength && rollValue === ''){
		$('#yourPhoneNumberText').parents('.field').find('.error').fadeIn();
	}

	var emailVal = yourEmailAddressText.val();
	if(validateEmail(emailVal)){
		$('#yourEmailAddressText').parents('.field').find('.error').hide();
		$('#yourEmailAddressText').siblings('p').hide();
		count++;
	} else{
		$('#yourEmailAddressText').parents('.field').find('.error').fadeIn();
	}

 	if(count-1 === 2){
 		
 	} else {
 		$('body').animate({
 			scrollTop: 0
 		},600);
 		return false;
 	}
});
	
	/* parents section data show in gurdian section */
$('#dadCareerGuideCheckbox').change(function(){
	if($(this).is(':checked')){
		var dadNameText = $('#dadNameText').val();
		var dadPhoneNumberText = $('#dadPhoneNumberText').val();
		var dadEmailAddress = $('#dadEmailAddress').val();
		$('#guardianNameText').val(dadNameText);
		$('#guardianPhoneNumberText').val(dadPhoneNumberText);
		$('#guardianEmailAddress').val(dadEmailAddress);
		$('#momCareerGuideCheckbox').attr('checked', false);
	}
});


$('#momCareerGuideCheckbox').change(function(){
	if($(this).is(':checked')){
		var momNameText = $('#momNameText').val();
		var momPhoneNumberText = $('#momPhoneNumberText').val();
		var momEmailAddress = $('#momEmailAddress').val();
		$('#guardianNameText').val(momNameText);
		$('#guardianPhoneNumberText').val(momPhoneNumberText);
		$('#guardianEmailAddress').val(momEmailAddress);
		$('#dadCareerGuideCheckbox').attr('checked', false);
	}
});




/*--------------Register Form page-3 form validation ------------------------------------- */
	var agreeToAttend = $("#agreeToAttendProgram input[type='radio']");
	$("#agreeToAttendProgram input[type='radio']").click(function(){
		if(agreeToAttend.is(':checked')){
			var finalStatus = 100;
			$(this).parents('.field').find('.thumb-up img').show();
			$(this).parents('.field').find('.error').hide();
		}
		$('#thirdStepProgressReg').removeClass('progress-started').addClass('progress-completed');
		$('#thirdStepProgressReg .progress').css('width', finalStatus + "%");
 		$('#thirdStepStarReg .update').css('width', finalStatus + '%');
	});
	
	$('#thirdStepRegistrationBtn').click(function(){
		if(agreeToAttend.is(':checked')){
			return false;
		} else{
			$('#agreeToAttendProgram').siblings('.thumb-up').find('.error').fadeIn();
			return false;
		}
	});

/*--------------Feedback page-1 form validation ------------------------------------- */
	$('#firstStepFeedbackBtn').click(function(){
		var yourFullNameTextEdit = $('#yourFullNameTextEdit');
		var rollNumberTextEdit = $('#rollNumberTextEdit');
		var classSelectEdit = $('#classSelectEdit');
		var sectionSelectEdit = $('#sectionSelectEdit');
		var yourSchoolTextEdit = $('#yourSchoolTextEdit');

		var registerFirstForm = [yourFullNameTextEdit, rollNumberTextEdit, classSelectEdit, sectionSelectEdit, yourSchoolTextEdit];
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

	 			registerFirstForm[i].parents('.field').find('.error').fadeIn();
	 		} 
	 	}
	 	if(count-1 == registerFirstForm.length){
	 		
	 	} else {
	 		$('body').animate({
	 			scrollTop: 0
	 		},600);
	 		return false;
	 	}
	});

	$('#firstStepFeedback input, #firstStepFeedback select').on('blur change', function(){
		var yourFullNameTextEdit = $('#yourFullNameTextEdit');
		var rollNumberTextEdit = $('#rollNumberTextEdit');
		var classSelectEdit = $('#classSelectEdit');
		var sectionSelectEdit = $('#sectionSelectEdit');
		var yourSchoolTextEdit = $('#yourSchoolTextEdit');

		var count = 1;
		var finalStatus = 0;
		var ratio = 20;

		
		if($(this).attr('id') == 'yourFullNameTextEdit' && $(this).val() === ''){
			$(this).parents('.field').find('.error').fadeIn();
		}
		var nameVal = yourFullNameTextEdit.val();
		if(typeof nameVal === 'string' && nameVal !== '') {
			finalStatus += ratio;
			$('#yourFullNameTextEdit').parents('.field').find('.error').hide();
			$('#yourFullNameTextEdit').parents('.field').find('.thumb-up img').show();
		} else {
			$('#yourFullNameTextEdit').parents('.field').find('.thumb-up img').hide();
		}
		
		var countField = 0;
		var rollValue= rollNumberTextEdit.val();
		if($(this).attr('id') == 'rollNumberTextEdit' && $(this).val() === ''){
			$(this).parents('.field').find('.error').fadeIn();
		}
		if(typeof rollValue === 'string' && rollValue != '') {
			finalStatus  += ratio;
			countField += 1;
		}
		
		var classVal= classSelectEdit.val();
		if($(this).attr('id') == 'classSelectEdit' && $(this).val() === ''){
			$(this).parents('.field').find('.error').fadeIn();
		}
		if(typeof classVal === 'string' && classVal !== ''){
			finalStatus  += ratio;
			countField += 1;
		}

		var sectionVal= sectionSelectEdit.val();
		if($(this).attr('id') == 'sectionSelectEdit' && $(this).val() === ''){
			$(this).parents('.field').find('.error').fadeIn();
		}
		if(typeof sectionVal === 'string' && sectionVal !== ''){
			finalStatus  += ratio;
			countField += 1;
		}

		if(countField === 3){
			$('#rollNumberTextEdit').parents('.field').find('.error').hide();
			$('#rollNumberTextEdit').parents('.fields-group').find('.thumb-up img').show();
		} else  {
			$('#rollNumberTextEdit').parents('.fields-group').find('.thumb-up img').hide();
		}

		var schoolVal = yourSchoolTextEdit.val();
		if($(this).attr('id') == 'yourSchoolTextEdit' && $(this).val() === ''){
			$(this).parents('.field').find('.error').fadeIn();
		}
		if(typeof schoolVal === 'string' && schoolVal !== '') {
			finalStatus += ratio;
			$('#yourSchoolTextEdit').parents('.field').find('.error').hide();
			$('#yourSchoolTextEdit').parents('.field').find('.thumb-up img').show();
		} else {
			$('#yourSchoolTextEdit').parents('.field').find('.thumb-up img').hide();
		}

	 	finalStatus = Math.round(finalStatus);
	 	if(finalStatus > 0){
	 		$('#firstStepProgressReg').addClass('progress-started');
	 	} else {
	 		$('#firstStepProgressReg').removeClass('progress-started');
	 	}
	 	
	 	$('#firstStepProgressReg .progress').css('width', finalStatus + "%");
	 	$('#firstStepStarReg .update').css('width', finalStatus + '%');
	});

	/* click on edit button fields enable */

	$('.edit-field .edit').click(function(){
		$(this).parents('.edit-field').find('select, input').attr('disabled', false);
		if($(this).siblings('select').length > 0){
			$(this).hide();
		}
	});

	$('#careersInterestedInLabel .edit').click(function(){
		$(this).parents('.field').find('input').attr('disabled', false);
		$('#careersInterestedInAdded').removeClass('disabled');
	});

	/* disabled button default */
	$('#careersInterestedInAdded span').click(function(){
		if($('#careersInterestedInAdded').hasClass('disabled')){
			return false	
		}
		
	});

	/* Code for Star Rating */
	$(".star-rating-radio input[type='radio']").on('change', function(){
		$(this).parent().prevAll("label").addClass('active');
		$(this).parent().addClass('active');
		$(this).parent().nextAll("label").removeClass('active');
	});

	/*--------------Feedback page-2 form validation ------------------------------------- */
	
	$('#secondStepFeedback input, #secondStepFeedback textarea').on('change blur', function(){
		secondStepFeedbackFormFields();
	});

	function secondStepFeedbackFormFields(){
		var starRating = $('#secondStepFeedback .star-rating-radio input[type="radio"]');
		var didYouLikeClassRoom = $('#didYouLikeClassRoom input[type="checkbox"]');
		var awareOfTheCarreer = $('#awareOfTheCarreer input[type="radio"]');


		var finalStatus = 0;
		if(starRating.is(':checked')) {
			finalStatus += 33;		
			$('.star-rating-radio').siblings('.error').hide();
		} 

		if(didYouLikeClassRoom.is(':checked')){
			finalStatus += 33;	
			$('#didYouLikeClassRoom').parents('.field').find('.error').hide();
		}

		if(awareOfTheCarreer.is(':checked')){
			finalStatus += 33;	
			$('#awareOfTheCarreer').parents('.field').find('.error').hide();
		}

		$('#secondStepProgressReg .progress').css('width', finalStatus + "%");
	 	$('#secondStepStarReg .update').css('width', finalStatus + '%');
	};

	/* in didYouLikeClassRoom field None. I did’t really like the session. selected textbox show hide*/
	$('#classroomSession_6').change(function(){
		if($(this).is(':checked')) {
			$('#notLikeAboutSession').slideDown();	
		} else {
			$('#notLikeAboutSession').slideUp();
		}
	});


	$('#secondStepFeedbackBtn').click(function(){
		var starRating = $('#secondStepFeedback .star-rating-radio input[type="radio"]');
		var didYouLikeClassRoom = $('#didYouLikeClassRoom input[type="checkbox"]');
		var awareOfTheCarreer = $('#awareOfTheCarreer input[type="radio"]');


		var finalStatus = 0;
		if(starRating.is(':checked')) {
			finalStatus += 33;		
		} else {
			$('.star-rating-radio').siblings('.error').fadeIn();
		}

		if(didYouLikeClassRoom.is(':checked')){
			finalStatus += 33;	
		} else {
			$('#didYouLikeClassRoom').parents('.field').find('.error').fadeIn();	
		}

		if(awareOfTheCarreer.is(':checked')){
			finalStatus += 33;	
		} else {
			$('#awareOfTheCarreer').parents('.field').find('.error').fadeIn();
		}
		if(finalStatus === 99){
			
		} else {
			$('body').animate({
				scrollTop: 0
			},600);
			return false;
		}
	});


});






