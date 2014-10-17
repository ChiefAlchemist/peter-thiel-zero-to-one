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
  
    {
	  'index'		: 7,
	  'title'		: '',
	  'idea_size'	: 105,
	  'idea'		: "There's no reason why the future should happen only at Stanford, or in college, or in Silicon Valley.",
	  'quotes'		: true,
	  'select'		: 'The Future',
	  'who'			: 'Peter Thiel',
	  'note'		: 'Zero to One - Preface',
	  'caption'		: setupCaption
    },  
  
    {
	  'index'		: 6,
	  'title'		: '',
	  'idea_size'	: 105,
	  'idea'		: "Indeed, the single most powerful pattern I have noticed is that successful people find value in unexpected places, and they do this by thinking about business from first principles instead of formulas.",
	  'quotes'		: true,
	  'select'		: 'Successful people',
	  'who'			: 'Peter Thiel',
	  'note'		: 'Zero to One - Preface',
	  'caption'		: setupCaption
    },
	
    {
	  'index'		: 5,
	  'title'		: '',
	  'idea_size'	: 105,
	  'idea'		: "The paradox of teaching entrepreneurship is that such a formula necessarily cannot exist; because every innovation is new and unique, no authority can prescribe in concrete terms how to be innovative.",
	  'quotes'		: true,
	  'select'		: 'Teaching entrepreneurship',
	  'who'			: 'Peter Thiel',
	  'note'		: 'Zero to One - Preface',
	  'caption'		: setupCaption
    },
  
    {
	  'index'		: 4,
	  'title'		: '',
	  'idea_size'	: 105,
	  'idea'		: "Actually, if American business is going to succeed, we are going to need hundreds, or even thousands, of miracles. This would be depressing but for one crucial fact: humans are distinguished from other species by our ability to work miracles. We call these miracles technology.",
	  'quotes'		: true,
	  'select'		: 'Miracles',
	  'who'			: 'Peter Thiel',
	  'note'		: 'Zero to One - Preface',
	  'caption'		: setupCaption
    },
  
    {
	  'index'		: 3,
	  'title'		: '',
	  'idea_size'	: 116,
	  'idea'		: "Today's &ldquo;best practices&rdquo; lead to dead ends; the best paths are new and untried.",
	  'quotes'		: true,
	  'select'		: 'The best paths',
	  'who'			: 'Peter Thiel',
	  'note'		: 'Zero to One - Preface',
	  'caption'		: setupCaption
    },
	
    {
	  'index'		: 2,
	  'title'		: '',
	  'idea_size'	: 105,
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