/**
 * Created by likelight on 15/9/1.
 */
$(function() {
    if (localStorage.svnTitle) {
        $('#svn_title').val(localStorage.svnTitle);
    }
    if (localStorage.svnUrl) {
        $('#svn_url').val(localStorage.svnUrl);
    }
    if (localStorage.svnComment) {
        $('#svn_comment').val(localStorage.svnComment);
    }
    if (localStorage.svnReader) {
        $('#svn_reader').val(localStorage.svnReader);
    }
    $('#submit').click(function () {
        var svnTitle = $('#svn_title').val();
        var svnUrl = $('#svn_url').val();
        var svnComment = $('#svn_comment').val();
        var svnReader = $('#svn_reader').val();
        window.localStorage.test = '12';

        localStorage.svnTitle = svnTitle;
        localStorage.svnUrl = svnUrl;
        localStorage.svnComment = svnComment;
        localStorage.svnReader = svnReader;
        localStorage.time = '12';
        alert('提交成功!');

    });
})