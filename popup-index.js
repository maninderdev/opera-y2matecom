document.getElementById('convert-y2matecom').addEventListener('click', async function () {
    console.log('asdhjkahsdk');
    chrome.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
        var URL = tabs[0].url;
        var video = false;

        if (URL.indexOf('youtube.com/shorts/') > -1) {
            var video = /\/([a-zA-Z0-9\-\_]{11})/.exec(URL);
        } else if (URL.indexOf('youtube.com/') > -1) {
            var video = /v\=([a-zA-Z0-9\-\_]{11})/.exec(URL);
        }

        if (!video || video == null) {
            document.querySelectorAll('#popup div:last-of-type')[0].style.display = 'none';
            document.querySelectorAll('#popup div:first-of-type')[0].style.display = 'block';
        } else {
            chrome.tabs.create({ url: 'https://www.y2matecom.com/watch?v=' + video[1] });

            window.close();
        }
    });

});