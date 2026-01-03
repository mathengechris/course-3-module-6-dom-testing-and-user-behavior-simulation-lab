// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

function simulateClick(elemId, text){
    const elementId= document.getElementById(elemId)
     elementId.textContent=text
 }


 
function handleFormSubmit(formId, outputId){
    const output= document.getElementById(outputId)
    const errors=document.getElementById('error-message')
    const userInput= document.getElementById('user-input').value
         if(!userInput){
           errors.textContent='Input cannot be empty'
           errors.classList.remove('hidden')
           return
         }

         errors.classList.add('hidden')
         output.textContent=userInput
}


// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.


 function addElementToDOM(dynamicId, text){
     const dynamic= document.getElementById(dynamicId)
     if(dynamic){
        dynamic.textContent=text
     }
 }

 
 function removeElementFromDOM(nodeId){
    const elem= document.getElementById(nodeId)
   if(elem){
    elem.remove()
   }
 }

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
