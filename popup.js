document.getElementById('clickme').onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        var currentUrl = tab.url
        if(currentUrl.startsWith("https://github.com")){
            var urlToOpen = currentUrl.replace(/github/g, "github1s")
            chrome.tabs.update(tab.id, {url: urlToOpen});
    }
    });
};

