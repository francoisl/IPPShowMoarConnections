// ==UserScript==
// @name            IPP Show Moar Connections
// @author          Francois Laithier
// @description     In the Intuit Partner Platform app portal, show all your connections by default, instead of just 10.
// @license         MIT License
// @version	        1.0
// @include         http://www.example.org/*
// @include         https://developer.intuit.com/v2/ui#/connection/detailedreport*
// ==/UserScript==

(function(){

    // Get the div that contains the selector, since it almost nothing has an ID
    var selectorContainers = document.getElementsByClassName('ngRowCountPicker');

    if(!selectorContainers.length) {
        console.info('Page size selector not found');
        return;
    }

    var selectors = selectorContainers[0].getElementsByTagName('select');

    if(!selectors.length) {
        console.info('Page size selector not found');
        return;
    }

    // Create a new option by cloning one, to have all the classes and stuff
    var selector = selectors[0];
    var newOption = selector.getElementsByTagName('option')[0].cloneNode();

    newOption.value = "9999999";
    newOption.text = "ALL OF THEM";

    selector.appendChild(newOption);
})();
