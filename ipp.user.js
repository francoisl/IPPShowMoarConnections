// ==UserScript==
// @name            IPP Show Moar Connections
// @author          Francois Laithier
// @description     In the Intuit Partner Platform app portal, add an option to show all your connections.
// @license         MIT License
// @version         1.0.2
// @include         https://developer.intuit.com/v2/ui#/connection/detailedreport*
// ==/UserScript==

/* globals console, angular */

window.addEventListener('load', fixConnectionsPagination, false);

function fixConnectionsPagination(){

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
    var newOption = selector.firstElementChild.cloneNode();

    // Update the values and append it to the selector
    newOption.value = "9999999";
    newOption.text = "ALL OF THEM";
    selector.appendChild(newOption);
}
