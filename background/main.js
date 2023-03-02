



// chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
//
//     console.log(window.location.host)
//
// });


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    if(tab.url=='https://tlwl.uat.tuolong56.com/portalv-page/#/homePage'&&changeInfo.status == "loading"){
        chrome.tabs.sendMessage(tabId,{type:'toMainIndex', tab:tab}, function(response){
            console.log('来自content的回复：'+response);
        });
    }
});
