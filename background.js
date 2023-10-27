chrome.browserAction.onClicked.addListener(function(tab) {
    const domain = new URL(tab.url).hostname;
    const apiUrl = `http://localhost:5000/?domain=${domain}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
});
