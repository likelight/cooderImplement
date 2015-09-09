/**
 * Created by likelight on 15/9/2.
 */
chrome.runtime.onMessage.addListener(function(message,sender, sendResponse){
   if (message === 'askFordata') {
       if (localStorage) {
           if (localStorage.svnTitle) {
               // console.log(localStorage.svnTitle);

               sendResponse(localStorage);
           }
       }
   }
});