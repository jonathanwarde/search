/**
* Search box/icon toggle for global Search input
* by Jon Warde
*/

window.addEventListener('load', function(evt) {
	'use strict';
	// Set vars
	var searchAreaOuter = document.getElementById('search-area'),
		searchSubmitBtn = document.getElementById('searchSubmit'),
		searchInnerWrapper = document.getElementById('search-inner-wrapper'),
		searchTextInput = searchInnerWrapper.getElementsByTagName('input')[0],
		searchIsFocussed = false;

	// Is the search box in focus?
	searchTextInput.addEventListener('focus', function(){
		searchIsFocussed = true;
	}); // end searchTextInput in focus check

	var doSearchToggle = function(){
		if(searchAreaOuter.classList.contains('search-toggle')){
			searchAreaOuter.classList.remove('search-toggle');
		} else {
			searchAreaOuter.classList.add('search-toggle');
		}
	}; // end doSearchToggle


	searchSubmitBtn.addEventListener('click', function(e){
		if(searchIsFocussed === false) {
			e.preventDefault();
			doSearchToggle();
		} else if (searchTextInput.value === "") {
			e.preventDefault();
			doSearchToggle();
		} else {

		}
	}); // end searchSubmitBtn click handler

	document.addEventListener('click', function(e){
	// Close outside the search area to close (if its open)
		if(event.target.id !== '#search-area' && event.target !== searchSubmitBtn && event.target !== searchTextInput){
        	if(searchAreaOuter.classList.contains('search-toggle')){
        		searchAreaOuter.classList.remove('search-toggle');
			}
        }
	}); // end click outside to close

});
