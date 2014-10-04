/**
 * When loading / refreshing the page where should we start? If true then the first page displayed will the last / more recent. 
 *
 * If the client has a deep catalog of content and are mainly focued on meme'ing the most recent, this save a couple of clicks. 
 */
var setupLastFirst = false;

/**
 * If you want to allow for variations use the setupStyles array (else make = false or = '').
 *
 * The ezMemeQuote.js will use this array to create a select (aka dropdown). As selects are made a
 * class will be added to the <body> tag. The class value is 'style-' {append} index++. 
 *
 * Example: For the example array below, the selecting of Black would result in <body class="style-2">
 *
 * With the body class set you can define variations within your CSS
 */ 
 
var setupStyles = ['ezBlue', 'Black', 'Red'];

/**
 * In the JSON you can specify if the font size of the idea should be resized. The default unit is %. Or you can use em, rem, px, etc. 
 */
var setupIdeaSizeUnit = '%';

/**
 * In the JSON there's a property for what text is used for the option of the select. If nothing is specified in the JSON then this is the default value. 
 */ 
var setupNoSelect = 'No Summary Provided';

/**
 * Define your quotation marks style.
 *
 * Note: This will typically result in the CSS needing to be updated. 
 *
 * Ref: http://www.danshort.com/HTMLentities/index.php?w=dingb
 *
 * Ref: http://fontawesome.io
 */
var setupQuoteLeft = '<span class="w3-quote w3-quote-left">&#8220;</span>';
var setupQuoteRight = '<span class="w3-quote w3-quote-right">&#8221;</span>';

/**
 * Define the dash that precedes the "who" and the "note".
 *
 * Note: In the CSS the note is display: none. This keep the left justification of "who" and "note" consistent. 
 */
var setupDashWho = '<span class="w3-dash w3-dash-who">&mdash;</span>';
var setupDashNote = '<span class="w3-dash w3-dash-note">&mdash;</span>';

/**
 * Define the various social media icons and links for the "caption" below the "image". Add or adjust as you see fit. 
 *
 * Note: It's possible to override these on a quote by quote basis. 
 */
var setupCaption = new Object;

setupCaption.c1 = '<a href="http://autd.co/LRUcp" target="_blank"><i class="fa fa-twitter-square"></i> ChiefAlchemist1</a>'; 
setupCaption.c2 = '<a href="http://autd.co/Yyls6" target="_blank"><i class="fa fa-facebook-square"></i> ChiefAlchemist</a>';
setupCaption.c3 = '<a href="http://autd.co/o2bUY" target="_blank"><i class="fa fa-pinterest-square"></i> ChiefAlchemist</a>';
setupCaption.c4 = '<a href="http://autd.co/5NZ0u" target="_blank"><i class="fa fa-globe"></i> ChiefAlchemist.com</a>';
setupCaption.c5 = '<a href="#" target="_blank"><i class="fa fa-linkedin-square"></i> ChiefAlchemist</a>';
setupCaption.c6 = '<a href="#" target="_blank"><i class="fa fa-instagram"></i> ChiefAlchemist</a>';

/**
 * Of the icons / links defined above, which do you actually want to use for this brand.
 */
var setupCaption = setupCaption.c1 + setupCaption.c2 + setupCaption.c3 + setupCaption.c4; //+ setupCaption5 + setupCaption6;


/**
 * Should the list be read / processed in reverse order? That is, the one at the bottom of my-quotes.js will be listed first.  
 */
var setupReverse = true;

/**
 * It actually possible to request a page by #hash. 
 * 
 * For example myMQuote.com#3 would display page 3 *if* there is a page 3.
 * If there's no page 3 then this function would display the error message defined. 
 */
function functOops( hashPage ){
  alert('Oops? Page: ' + hashPage + ' can\'t be found. Redirecting to the first page.');
}
