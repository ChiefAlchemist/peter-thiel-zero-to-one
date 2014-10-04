/**
 * Note: Please scroll to the bottom for more details. The top has been reserved for notes and such.
 *
 * <br> = return
 * <br><br> = paragraph break
 *
 * ** If you're not familar with programming and how that relates to apostrophes, single quotes and double quotes then please use: **
 *
 * - apostrophe = &#39;
 *
 * - left single quote = &lsquo;
 * - right single quote = &rsquo;
 *
 * - left double quote = &ldquo;
 * - right double quote = &rdquo;
 *
 * Other special characters: http://www.degraeve.com/reference/specialcharacters.php
 */
 
var ezMQ = {
  "ezobj":[
  
	// copy & paste a row at a time. 
    {
	  'index'		: 2,
	  'title'		: '',
	  'idea_size'	: 120,
	  'idea'		: "Of course, it's easier to copy a model than to make something new. Doing what we already know how to do takes the world from 1 to n, adding more of something familiar. But ever time we create something new, we go from 0 to 1. The art of creation is singular, as is the moment of creation, and the result is something fresh and strange.",
	  'quotes'		: true,
	  'select'		: '1 to n vs 0 to 1',
	  'who'			: 'Peter Thiel',
	  'note'		: 'Zero to One - Preface',
	  'caption'		: setupCaption
    },
	// ---------
    {
	  'index'		: 1,
	  'title'		: '', 
	  'idea'		: '<img src="img/cover.jpg" alt="Cover: Zero to One - Peter Thiel">',
	  'quotes'		: false,
	  'select'		: 'Cover: Zero to One - Peter Thiel',
	  'who'			: '',
	  'note'		: '',
	  'caption'		: setupCaption
    }
  ]}
  

  
/**
 *
 * * * * * * * IMPORTANT  * * * * * * * 
 * * * Order is oldest on the bottom, newest on top. 
 * * * This is done so adding a new "page" doesn't require scrolling. Instead just stack it on top.
 *
 *
 * {
 *  'index'			: 1,   				// strictly for internal use. Makes it easier to find a page after the fact. 
 *  'title'			: '', 				// title
 *  'idea'			: '',  				// the main idea, aka the quote
 *	'idea_size'		: 100,				// you can change the font-size of the idea using this. Greater than 100 is larger, smaller than 100 will make the default smaller.
 *  'quotes'		: true, 			// use quotation marks? default value: true. '', false or no 'quote' property will all result in quotes not being applied to the 'idea'
 *  'select'		: '',				// *Short* description to appear in the select that lists the pages
 *  'who'			: '',				// 'who' (or what) said it. basically the first line under / after the quote
 *  'note'			: '',				// 'note' on where, when, why, etc. they said it. and the line under 'who' is some further details is required. 
 *  'caption'		: setupCaption		// setupCaption is the caption defined in js/setup.js, else override it here.
 * },
 *
 */