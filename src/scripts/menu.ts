const menu = document.querySelector('.menu')

// ?. is Optional Chaining operator
// It is a safety feature that prevents your JavaScript 
// from crashing if an element doesn't exist on the page.
menu?.addEventListener('click', () => {
    const isExpanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', `${!isExpanded}`)
})


// key learning
// You had previously used some JavaScript to build parts of your site:

// Defining your page title and heading dynamically
// Mapping through a list of skills on the About page
// Conditionally displaying HTML elements
// Those commands are all executed at build time to create static HTML for your site, 
// and then the code is “thrown away.”

// The JavaScript in a <script> tag is sent to the browser, and is available to run, 
// based on user interactions like refreshing a page or toggling an input.