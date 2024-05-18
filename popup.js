let runtimeObj;
if( typeof browser !== 'undefined' && typeof browser.runtime !== 'undefined' )
{
	runtimeObj = browser.runtime;
   console.log('broswre');
}
else if( typeof chrome !== 'undefined' && typeof chrome.runtime !== 'undefined' )
{
	runtimeObj = chrome.runtime;
   console.log('chrome');
}
else
{
	throw new Error( 'Did not find an API for runtime' );
}
console.log('Start', runtimeObj);
