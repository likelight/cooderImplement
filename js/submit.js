/**
 * Created by likelight on 15/9/1.
 */
$(function() {
    // if (localStorage.svnTitle) {
    //     $('#svn_title').val(localStorage.svnTitle);
    // }
    // if (localStorage.svnUrl) {
    //     $('#svn_url').val(localStorage.svnUrl);
    // }
    // if (localStorage.svnComment) {
    //     $('#svn_comment').val(localStorage.svnComment);
    // }
    // if (localStorage.svnReader) {
    //     $('#svn_reader').val(localStorage.svnReader);
    // }
    var arrayStr = ['version', 'title', 'url', 'comment', 'reader'];
    if (localStorage.count) {
        var time = parseInt(localStorage.count);
        var j = 0;
        var html = '';
        var strRadio = '';
        var versionName = '';
        var node = '';
        for (j = 0; j < time; j++) {
            strRadio = 'version' + j;
            versionName = localStorage[strRadio];
            node = "<input type='radio' name='sinanType' value='" + j + "'>" + versionName;
            $('#version').append(node);
        }
        if (localStorage.selectIndex === 0 || localStorage.selectIndex) {
            var selected = parseInt(localStorage.selectIndex);
            $('input:radio[name="sinanType"]').get(selected).checked = true;
        } else {
            if (time === 0) {

            } else {
                $('input:radio[name="sinanType"]').get(0).checked = true;
            }
        }
            
        $('input:radio[name="sinanType"]').change(function () {
            var checkValue = $('input:radio[name="sinanType"]:checked').val();
            var str = arrayStr[0] + checkValue;
            var str1 = arrayStr[1] + checkValue;
            var str2 = arrayStr[2] + checkValue;
            var str3 = arrayStr[3] + checkValue;
            var str4 = arrayStr[4] + checkValue;
            localStorage.svnTitle = localStorage[str1];
            localStorage.svnUrl = localStorage[str2];
            localStorage.svnComment = localStorage[str3];
            localStorage.svnReader = localStorage[str4];
            localStorage.selectIndex = checkValue;
            console.log(checkValue);
        });
    } else {
        localStorage.count = 0;

    }
    $('#submit').click(function () {
        var versionTitle = $('#sinan_version').val();
        var svnTitle = $('#svn_title').val();
        var svnUrl = $('#svn_url').val();
        var svnComment = $('#svn_comment').val();
        var svnReader = $('#svn_reader').val();
        var count = parseInt(localStorage.count);
        var i = 0;
        for (i = 0; i < count; i++) {
            var str = 'version' + i ;
            if (localStorage[str] === versionTitle) {
                var str1 = 'title' + i;
                var str2 = 'url' + i;
                var str3 = 'comment' + i;
                var str4 = 'reader' + i; 
                localStorage[str1] = svnTitle;
                localStorage[str2] = svnUrl;
                localStorage[str3] = svnComment;
                localStorage[str4] = svnReader;
                return;
            }
        }
           
        if (i == count) {
            str = 'version' + count;
            str1 = 'title' + count;
            str2 = 'url' + count;
            str3 = 'comment' + count;
            str4 = 'reader' + count; 
            localStorage[str] = versionTitle;
            localStorage[str1] = svnTitle;
            localStorage[str2] = svnUrl;
            localStorage[str3] = svnComment;
            localStorage[str4] = svnReader;
            count ++;
            localStorage.count = count;
        }

        alert('提交成功!');
        var time = parseInt(localStorage.count);
        var j = 0;
        var html = '';
        var strRadio = '';
        var versionName = '';
        var node = '';
        $('#version').html('');
        for (j = 0; j < time; j++) {
            strRadio = 'version' + j;
            versionName = localStorage[strRadio];
            node = "<input type='radio' name='sinanType' value='" + j + "'>" + versionName;
            $('#version').append(node);
        }
        
        $('input:radio[name="sinanType"]').change(function () {
            var checkValue = $('input:radio[name="sinanType"]:checked').val();
            var str = arrayStr[0] + checkValue;
            var str1 = arrayStr[1] + checkValue;
            var str2 = arrayStr[2] + checkValue;
            var str3 = arrayStr[3] + checkValue;
            var str4 = arrayStr[4] + checkValue;
            localStorage.svnTitle = localStorage[str1];
            localStorage.svnUrl = localStorage[str2];
            localStorage.svnComment = localStorage[str3];
            localStorage.svnReader = localStorage[str4];
            localStorage.selectIndex = checkValue;
        });

    });

    
    

})