




chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    if(tab.url=='https://tlwl.uat.tuolong56.com/portalv-page/#/homePage'&&changeInfo.status == "loading"){
        chrome.tabs.sendMessage(tabId,{type:'toMainIndex', tab:tab}, function(response){
            console.log('来自content的回复：'+response);
        });
    }
});


//快捷方式自动填充
chrome.commands.onCommand.addListener((command) => {
   if(command=='myCommand'){
       chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
           console.log(tabs);
           chrome.tabs.sendMessage(tabs[0].id, {type:'toFilter', tab:tabs[0],time:new Date().getTime()}, function (response) {
               console.log("Send Success");
           });
       });
   }
});
