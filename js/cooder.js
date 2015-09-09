/**
 * Created by likelight on 15/9/1.
 */
$(function() {
    chrome.runtime.sendMessage('askFordata',function(localStorage) {
        console.log(localStorage);
        if (localStorage.svnTitle) {
            $('#id_subject').val(localStorage.svnTitle);
        }
        if (localStorage.svnUrl) {
            $('#id_base').val(localStorage.svnUrl);
        }
        if (localStorage.svnComment) {
            $('#id_description').val(localStorage.svnComment);
        }
        if (localStorage.svnReader) {
            $('#id_reviewers').val(localStorage.svnReader);
        }
    });
})