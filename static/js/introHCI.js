'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").toggleClass("active");
	});

	$("a.thumbnail").click(projectClick);
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

$('#project1').click(projectClick); 

function projectClick(e) {
	e.preventDefault();

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
		if (description.length == 0) {
			$('#project1').text("Here we go again!!")
			$(containingProject).append("<div class = project-description'><p>Description of the project.</p></div>");
	} 
	else {
		$(description).fadeOut()
	}
}