"use strict"

$(document).ready(function(){
	/*Register Form page-1 form validation */

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
			$(this).siblings('p').show();
		}
		var nameVal = yourFullNameText.val();
		if(typeof nameVal === 'string' && nameVal !== '') {
			finalStatus += ratio;
			yourFullNameText.siblings('p').hide();
			$('#yourFullNameText').parents('.field').find('.thumb-up img').show();
		} else {
			$('#yourFullNameText').parents('.field').find('.thumb-up img').hide();
		}
		
		var countField = 0;
		var rollValue= rollNumberText.val();
		var strNum = parseInt(rollValue);
		var numLength = 10;
		if(typeof strNum === 'number' && rollValue.length == numLength && strNum != '') {
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

		if($(this).attr('id') == 'yourSchoolText' && $(this).val() === ''){
			$(this).siblings('p').show();
		}
		var schoolVal = yourSchoolText.val();
		if($(this).attr('id') == 'yourSchoolText'){
				if(typeof schoolVal === 'string' && schoolVal !== '') {
				finalStatus += ratio;
				yourSchoolText.siblings('p').hide();
				$('#yourSchoolText').parents('.field').find('.thumb-up img').show();
			} else {
				yourSchoolText.siblings('p').show();
				$('#yourSchoolText').parents('.field').find('.thumb-up img').hide();
			}
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
	 			registerFirstForm[i].siblings('p').show();
	 		} 
	 	}
	 	if(count-1 == registerFirstForm.length){
	 		$(this).attr('href', 'register-1.html');
	 	} else {
	 		return false;
	 	}
	});

	/*subject consider add from auto search field*/
 	$('#xiConsiderSubjectAdded').on('click', '.close', function(){
 		$(this).parent().remove();
 		var list = $('#xiConsiderSubjectAdded li');
 		if(list.length == 0){
 			$('#xiConsiderSubjectAdded').parents('.field').find('.thumb-up img').hide();
 		}
 	});

 	var subjectConsider = {
		data: [
			"Mathematics",
			"Physics",
			"Chemistry",
			"Biology",
			"Biotechnology",
			"Engineering Graphics",
			"Economics",
			"Political Science",
			"History",
			"Geography",
			"Business Studies",
			"Accountancy",
			"Home Science",
			"Fine Arts",
			"Agriculture",
			"Computer Science",
			"Multimedia and Web Technology",
			"Sociology",
			"Psychology",
			"Philosophy",
			"Physical Education",
			"Music and Dance",
			"Entrepreneurship",
			"Fashion Studies",
			"Creative Writing and Translation Studies",
			"Heritage Crafts",
			"Graphic Design",
			"Mass Media Studies",
			"Legal Studies",
			"Human Rights and Gender Studies",
			"National Cadet Crops"
		],
		list: {
			sort: {
				enabled: true
			},
			onChooseEvent: function() {
				var value = $("#xiSubjectConsiderText").getSelectedItemData();
				$('#xiConsiderSubjectAdded').append('<li>'+value+' <span class="close"></span></li>');
				$('#xiConsiderSubjectAdded').parents('.field').find('.thumb-up img').show();
			}
		}
	};
	$("#xiSubjectConsiderText").easyAutocomplete(subjectConsider);


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
			{"count": "3", "career": "Paramilitary"}
		],

		getValue: "career",

		list: {
			sort: {
				enabled: true
			},
			onChooseEvent: function() {
				var value = $("#careersInterestedInText").getSelectedItemData().career;
				var count = $('#careersInterestedInAdded > li').length +1;
				$('#careersInterestedInAdded').append('<li class="row"><span class="pull-first"></span><span class="pull-second"></span> <span class="count">' + count + '</span><span class="text">' + value + '</span><span class="close"></span></li>');
				$('#careersInterestedInAdded').parents('.field').find('.thumb-up img').show();
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
});






