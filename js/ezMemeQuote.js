/**
 * Important: Noting to edit / change here, unless of course you've forked it.
 *
 * *Not* min'ed (yet) because load is minimal and time to re-min short. mikn it ia a TODO but hardly a deal breaker.
 */
window.onload = function (){
  document.getElementById('page-wrap').style.opacity="0";

// setup the SIMPLE paging controls

  if ( typeof setupStyles != 'undefined' && setupStyles instanceof Array ){

    var selectStyle = document.createElement("select");
    selectStyle.setAttribute("id", "select-style");
  
    // setup the select for the style variation
    for (i = 0; i < setupStyles.length; i++) {
      option = document.createElement("option");
	  option.setAttribute("value", (i + 1));
	  option.innerHTML = setupStyles[i];
	  selectStyle.appendChild(option);
    }  
    document.getElementById('styles').appendChild(selectStyle);
  }

  if ( document.getElementById('select-style') instanceof Object) {
    // has the select been changed?
    objIdSelectStyle = document.getElementById('select-style');
    objIdSelectStyle.onchange=function(){
      document.getElementsByTagName('body')[0].className = 'style-' + objIdSelectStyle.value;
    };
  }

// setup the select
if (typeof setupReverse != 'undefined'){
  if (setupReverse != false){
    ezMQ.ezobj.reverse();
  }
}else{
  ezMQ.ezobj.reverse();
}
for (i = 0; i < ezMQ.ezobj.length; i++) {
  if ( 'select' in ezMQ.ezobj[i] === false ){
    thisSummary = setupNoSelect
  }else{
    thisSummary = ezMQ.ezobj[i].select;
  }
  document.form1.page.options[i] = new Option( (i + 1) + ' - ' + thisSummary, (i + 1) );
}

// cheat and use the #hash as the page number
var hashPage = window.location.hash;
if (hashPage == ''){
  if (setupLastFirst === true){
    currentPage = ezMQ.ezobj.length;
  } else {
    currentPage = 1
  }
} else {
  hashPage = hashPage.substring(1);
  if ( typeof ezMQ.ezobj[hashPage-1] === 'undefined' ){
    functOops(hashPage);
    currentPage = 1;
	window.location.hash = '#' + currentPage;
  }else{
    currentPage = hashPage;
  }
}
doPage(currentPage,ezMQ);
objIdPage = document.getElementById('page');
objIdPage.options[currentPage-1].selected = true;

// has the select been changed?
objIdPage.onchange=function(){
  doPage(objIdPage.value, ezMQ);
  currentPage = objIdPage.value;
  window.location.hash = '#' + currentPage;
};

// next / down
document.getElementById('next-down').onclick = function() {
  if (currentPage >= ezMQ.ezobj.length){
    currentPage = ezMQ.ezobj.length;
  } else {
    currentPage = parseInt(currentPage) + 1;
	doPage(currentPage, ezMQ);
	objIdPage.options[currentPage-1].selected = true;
	window.location.hash = '#' + currentPage;
  }
  return false;
}

// prev / up
document.getElementById('prev-up').onclick = function() {  
  if (currentPage < 2){
    currentPage = 1;
  } else {
    currentPage = parseInt(currentPage) - 1;
	doPage(currentPage, ezMQ);
	objIdPage.options[currentPage-1].selected = true;
	window.location.hash = '#'+ currentPage;
  }
  return false;
}

// display the new "page"
function doPage(thisPage, ezMQ){
  // adjust for js starting at 0
  pg = parseInt(thisPage) - 1;
  var theWrap = document.getElementById('wrap');
  theWrap.setAttribute("class", 'wrap wrap-'  + (pg + 1)); //For Most Browsers
  theWrap.setAttribute("className", 'wrap wrap-' + (pg + 1)); //For IE; harmless to other browsers

  objIdTitle = document.getElementById('title');
  if ( 'title' in ezMQ.ezobj[pg] === false || ezMQ.ezobj[pg].title == '' || ezMQ.ezobj[pg].title == false ) {	
    objIdTitle.innerHTML = '';
	objIdTitle.style.display = "none";
  } else {
    objIdTitle.style.display = "block";
    objIdTitle.innerHTML = ezMQ.ezobj[pg].title;
  }
	
	objIdIdea = document.getElementById('idea');
	if ( ezMQ.ezobj[pg].idea_size == '' || ezMQ.ezobj[pg].idea_size == false || 'idea_size' in ezMQ.ezobj[pg] === false ) {	
	  objIdIdea.style.fontSize = '100%';
	} else {
	  objIdIdea.style.fontSize = ezMQ.ezobj[pg].idea_size + setupIdeaSizeUnit;
	} 
	
	if ( ezMQ.ezobj[pg].idea == '' || ezMQ.ezobj[pg].idea == false || 'idea' in ezMQ.ezobj[pg] === false ) {
	  objIdIdea.innerHTML = '';
	  objIdIdea.style.display = "none";
	} else {
	   objIdIdea.style.display = "block";
	  if ( ezMQ.ezobj[pg].quotes == '' || ezMQ.ezobj[pg].quotes == false || 'quotes' in ezMQ.ezobj[pg] === false ){
	    objIdIdea.innerHTML = ezMQ.ezobj[pg].idea;
	  } else { 
	    objIdIdea.innerHTML = setupQuoteLeft + ezMQ.ezobj[pg].idea + setupQuoteRight;
	  }	
	}
	
	objIdWho = document.getElementById('who');
	if ( ezMQ.ezobj[pg].who == '' || ezMQ.ezobj[pg].who == false || 'who' in ezMQ.ezobj[pg] === false ) {	
	  objIdWho.innerHTML = '';
	  objIdWho.style.display = "none";
	} else {
	  objIdWho.style.display = "block";
	  objIdWho.innerHTML = setupDashWho + ezMQ.ezobj[pg].who;
	}
	
	objIdNote = document.getElementById('note');
	if ( ezMQ.ezobj[pg].note == '' || ezMQ.ezobj[pg].note == false || 'note' in ezMQ.ezobj[pg] === false ) {
	  objIdNote.innerHTML = '';
	  objIdNote.style.display = "none";
	} else {
	  objIdNote.style.display = "block";
	  objIdNote.innerHTML = setupDashNote + ezMQ.ezobj[pg].note;
	} 
	
	objIdCaption = document.getElementById('caption');
	if ( ezMQ.ezobj[pg].caption == '' || ezMQ.ezobj[pg].caption == false || 'caption' in ezMQ.ezobj[pg] === false ) {
	 objIdCaption.innerHTML = ''; 
	 objIdCaption.style.display = "none";
	} else {
	  objIdCaption.style.display = "block";
	  objIdCaption.innerHTML = ezMQ.ezobj[pg].caption;
	} 
}

document.getElementById('page-wrap').style.opacity="1";
}