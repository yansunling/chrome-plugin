

$(function () {
   $("#button").click(function(){
       chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
           console.log(tabs);
           chrome.tabs.sendMessage(tabs[0].id, {type:'toFilter', tab:tabs[0],time:new Date().getTime()}, function (response) {
               console.log("Send Success");
           });
       });
   });
});




