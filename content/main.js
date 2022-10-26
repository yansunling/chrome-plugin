
var isFirefox = navigator.userAgent.indexOf('Firefox') !== -1 || navigator.userAgent.indexOf('Gecko/') !== -1;
let countPassword=0;
let countUsername=0;

//content_scripts——>background发送消息
chrome.runtime.sendMessage({type:'getAccount'},function(response) {
    // init(response.data);
    // setPasswordFunc(response.data);
    // setUsernameFunc(response.data);
   /* let url=window.location.href;
    console.log(url);
    if(url.indexOf("https://k8s.test.tuolong56.com/#/login")>=0){
        let passWord="eyJhbGciOiJSUzI1NiIsImtpZCI6InVzUTRIV0txbEpZSVlORU9xY04zU1YwZTIyQTIzWnY2SVpmbXNmc1JSZE0ifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLXJ3anhtIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiIwNDNmZThkYS0wNzcwLTRjOWMtODRiZC0xZGEyNDY3ZDQzZDEiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZS1zeXN0ZW06YWRtaW4tdXNlciJ9.akjJk1XCi9V__Gn_VnVX9lyrFIaWoPiW-PjmDa10Te8YgVmiJR3OeKDV0SHSBx7xnjdqTySL1IXKaQAZLmI3Nt4gtxaOBpr96cU6mCX7i7tIcbnEe-ZcnNJYO1sMOnUPvJ6YKZ6x4IwndZ9ehUbroVgnVBAipZ_fpWbnZ0l1AxcTUpXvfwAVB1e1Ud15k9y0Pm9Fkiz9AUQTq6KBOmzx0Kb_mJsOx2LvNZuhQqSIL3_7zBwNo3ALlPYCen77-oJJFrJ2FrjDQ70Ue4kvi3g-qNMeT0sEgKgTCK_MBnyHdT-5h0lDmK6J6043E3x0qgIx7Zy2XFw-_jdqdOeRtY3mvQ";
        setPassword(passWord);
    }else if(url.indexOf("https://k8s.uat.tuolong56.com/#/login")>=0){
        let passWord="eyJhbGciOiJSUzI1NiIsImtpZCI6ImxYLUdvR2pSeEZoUDRQVWEyRG8xc2RsQVVFZHQ1cFVRYVZ3bjhqck55dTAifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLWxwN2diIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiI1NGIzMjFmMC0wZjgxLTRjNmYtYjExOC1mOGEyMDU3YzFlMTUiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZS1zeXN0ZW06YWRtaW4tdXNlciJ9.F_6icgkZNd3PfSocJmlKqJdF9avMDma8FKzb8Ee9ftA_t9nImM4DbdHjDTtFiSL8As4OkUG71kBaK6uNH-i_cswlNzuZgOEFr00UB2xeTkbZMmv5o561gTBjvgk15Vp03fNfUSbzDrHxdMrb6B42mNNqL1j9q1hOmGuOkxeAoNoOasGxWdMRq70_RxDl0ECBA0uGJMmpPEIeW6aWEP-Y2ZpUT0r8Iz0oTVZV76zK-OxV1V642s5BHlDaNk0cnZ4Uh83Mrq8M8y9G_W-Akthepr6zAXk3l0ILF_5Ef9piEuqFtTciabcTQKBuckdSXttoNRSJKBDG1PVC5Qztjl6JUg";
        setPassword(passWord);
    }else if(url.indexOf("https://k8s.prt.tuolong56.com/#/login")>=0){
        let passWord="eyJhbGciOiJSUzI1NiIsImtpZCI6ImJhNFozMnd1ZFNxY2VBOUxoWVotWkpNR2VhNFJITWt1SXgxcU5aQ3d6VkEifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJ2aWV3LXN5c3RlbS10b2tlbi1nNHNueiIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJ2aWV3LXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6IjY4NzllYjBmLWRjMGYtNDNjMC05OTQ4LTVhMzU0ZDNiZWEzNCIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlcm5ldGVzLWRhc2hib2FyZDp2aWV3LXN5c3RlbSJ9.R0gW1hSxuVlK0boPqQsV1WZGltP4UjveZIB_yQWWClWV09qDYgKKLcwPoqjgj-AZkCsxS8fv1j9PHy3orUzLwJcn4MauQEYZsfZa1825qrQntlwl0I2dZvRSDcqTGhj1-jI48T7Ch3-4I4H0-SMfYlKpde5lNDVZMxYwz6W4qqCrQDh5N65syxfN4aqKdKfcrVpiAHW-q0beS3IVoSD9kXwd84zSG_RF_tZ7P4Kl4ToACpv3-VALVBkeZW5p7WgXYT7oJ9JT-AWOtXJXsX7zh0GpFvGs4wTlAYNo4NGvU1KLy8IcQ9T8uA_4afv6OqH6vbpFWJSeuO8pqi9Gyk2PLw";
        setPassword(passWord);
    }*/
});



window.onload=function () {

    setTimeout(function () {
        let url=window.location.href;
        if(url.indexOf("https://k8s.test.tuolong56.com/#/login")>=0){
            let passWord="eyJhbGciOiJSUzI1NiIsImtpZCI6InVzUTRIV0txbEpZSVlORU9xY04zU1YwZTIyQTIzWnY2SVpmbXNmc1JSZE0ifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLXJ3anhtIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiIwNDNmZThkYS0wNzcwLTRjOWMtODRiZC0xZGEyNDY3ZDQzZDEiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZS1zeXN0ZW06YWRtaW4tdXNlciJ9.akjJk1XCi9V__Gn_VnVX9lyrFIaWoPiW-PjmDa10Te8YgVmiJR3OeKDV0SHSBx7xnjdqTySL1IXKaQAZLmI3Nt4gtxaOBpr96cU6mCX7i7tIcbnEe-ZcnNJYO1sMOnUPvJ6YKZ6x4IwndZ9ehUbroVgnVBAipZ_fpWbnZ0l1AxcTUpXvfwAVB1e1Ud15k9y0Pm9Fkiz9AUQTq6KBOmzx0Kb_mJsOx2LvNZuhQqSIL3_7zBwNo3ALlPYCen77-oJJFrJ2FrjDQ70Ue4kvi3g-qNMeT0sEgKgTCK_MBnyHdT-5h0lDmK6J6043E3x0qgIx7Zy2XFw-_jdqdOeRtY3mvQ";
            setPassword(passWord);
        }else if(url.indexOf("https://k8s.uat.tuolong56.com/#/login")>=0){
            let passWord="eyJhbGciOiJSUzI1NiIsImtpZCI6ImxYLUdvR2pSeEZoUDRQVWEyRG8xc2RsQVVFZHQ1cFVRYVZ3bjhqck55dTAifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJhZG1pbi11c2VyLXRva2VuLWxwN2diIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQubmFtZSI6ImFkbWluLXVzZXIiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiI1NGIzMjFmMC0wZjgxLTRjNmYtYjExOC1mOGEyMDU3YzFlMTUiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZS1zeXN0ZW06YWRtaW4tdXNlciJ9.F_6icgkZNd3PfSocJmlKqJdF9avMDma8FKzb8Ee9ftA_t9nImM4DbdHjDTtFiSL8As4OkUG71kBaK6uNH-i_cswlNzuZgOEFr00UB2xeTkbZMmv5o561gTBjvgk15Vp03fNfUSbzDrHxdMrb6B42mNNqL1j9q1hOmGuOkxeAoNoOasGxWdMRq70_RxDl0ECBA0uGJMmpPEIeW6aWEP-Y2ZpUT0r8Iz0oTVZV76zK-OxV1V642s5BHlDaNk0cnZ4Uh83Mrq8M8y9G_W-Akthepr6zAXk3l0ILF_5Ef9piEuqFtTciabcTQKBuckdSXttoNRSJKBDG1PVC5Qztjl6JUg";
            setPassword(passWord);
        }else if(url.indexOf("https://k8s.prt.tuolong56.com/#/login")>=0){
            let passWord="eyJhbGciOiJSUzI1NiIsImtpZCI6ImJhNFozMnd1ZFNxY2VBOUxoWVotWkpNR2VhNFJITWt1SXgxcU5aQ3d6VkEifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJ2aWV3LXN5c3RlbS10b2tlbi1nNHNueiIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJ2aWV3LXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6IjY4NzllYjBmLWRjMGYtNDNjMC05OTQ4LTVhMzU0ZDNiZWEzNCIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlcm5ldGVzLWRhc2hib2FyZDp2aWV3LXN5c3RlbSJ9.R0gW1hSxuVlK0boPqQsV1WZGltP4UjveZIB_yQWWClWV09qDYgKKLcwPoqjgj-AZkCsxS8fv1j9PHy3orUzLwJcn4MauQEYZsfZa1825qrQntlwl0I2dZvRSDcqTGhj1-jI48T7Ch3-4I4H0-SMfYlKpde5lNDVZMxYwz6W4qqCrQDh5N65syxfN4aqKdKfcrVpiAHW-q0beS3IVoSD9kXwd84zSG_RF_tZ7P4Kl4ToACpv3-VALVBkeZW5p7WgXYT7oJ9JT-AWOtXJXsX7zh0GpFvGs4wTlAYNo4NGvU1KLy8IcQ9T8uA_4afv6OqH6vbpFWJSeuO8pqi9Gyk2PLw";
            setPassword(passWord);
        }
    },100);
};







function setPassword(passWord){
    setTimeout(function () {
        document.querySelectorAll('input').forEach((item,index)=>{
            console.log(item);
            if(item.type=='password'){
                setValueForElement(item);
                item.value=passWord;
                setValueForElementByEvent(item);
            }
        })
    },800);
}








// 初始赋值
function init({username,password}){
    
    let passwordIndex=0;
    if(document.querySelector('input[type=password]')){
        document.querySelectorAll('input').forEach((item,index)=>{
            
            if(item.type=='password'){

                passwordIndex=index;

                setValueForElement(item);
                item.value=password;
                setValueForElementByEvent(item);

                
            }
        })
        document.querySelectorAll('input').forEach((item,index)=>{
            if(index<passwordIndex){
                if(item.type === 'text' || item.type === 'email' || item.type === 'tel') {
                    setValueForElement(item);
                    item.value=username;
                    setValueForElementByEvent(item);
                }
            }
        });
        setTimeout(()=>{
            count++;
            init({username,password})
        },1000)

    }else{
        if(count<20){
            setTimeout(()=>{
                count++;
                init({username,password})
            },1000)
        }
    }
    
}

function setPasswordFunc({username,password}){
    if(document.querySelector('input[type=password]')){
        document.querySelectorAll('input').forEach((item,index)=>{
            if(item.type=='password'){
                setValueForElement(item);
                item.value=password;
                setValueForElementByEvent(item);
            }
        })
    }else{
        if(countPassword<20){
            setTimeout(()=>{
                countPassword++;
                setPasswordFunc({username,password})
            },1000)
        }
    }
}

function setUsernameFunc({username,password}){

    let usernameEle=null;
    let passwordIndex=0;
    document.querySelectorAll('input').forEach((item,index)=>{
            
        if(item.type=='password'){

            passwordIndex=index;
            
        }
    })
    document.querySelectorAll('input').forEach((item,index)=>{
        if(index<passwordIndex){
            if(item.type === 'text' || item.type === 'email' || item.type === 'tel') {
                usernameEle=item;
                
            }
        }
    });

    if(usernameEle){
        setValueForElement(usernameEle);
        usernameEle.value=username;
        setValueForElementByEvent(usernameEle);
    }else{
        if(countUsername<20){
            setTimeout(()=>{
                countUsername++;
                setUsernameFunc({username,password})
            },1000)
        }
    }
}

// set value of the given element
function setValueForElement(el) {
    var valueToSet = el.value;
    // clickElement(el);
    // doFocusElement(el, false);
    el.dispatchEvent(normalizeEvent(el, 'keydown'));
    el.dispatchEvent(normalizeEvent(el, 'keypress'));
    el.dispatchEvent(normalizeEvent(el, 'keyup'));
    el.value !== valueToSet && (el.value = valueToSet);
}

// set value of the given element by using events
function setValueForElementByEvent(el) {
    var valueToSet = el.value,
        ev1 = el.ownerDocument.createEvent('HTMLEvents'),
        ev2 = el.ownerDocument.createEvent('HTMLEvents');

    el.dispatchEvent(normalizeEvent(el, 'keydown'));
    el.dispatchEvent(normalizeEvent(el, 'keypress'));
    el.dispatchEvent(normalizeEvent(el, 'keyup'));
    ev2.initEvent('input', true, true);
    el.dispatchEvent(ev2);
    ev1.initEvent('change', true, true);
    el.dispatchEvent(ev1);
    el.blur();
    el.value !== valueToSet && (el.value = valueToSet);
}

// normalize the event since firefox handles events differently than others
function normalizeEvent(el, eventName) {
    var ev;
    if (isFirefox) {
        ev = document.createEvent('KeyboardEvent');
        ev.initKeyEvent(eventName, true, false, null, false, false, false, false, 0, 0);
    }
    else {
        ev = el.ownerDocument.createEvent('Events');
        ev.initEvent(eventName, true, false);
        ev.charCode = 0;
        ev.keyCode = 0;
        ev.which = 0;
        ev.srcElement = el;
        ev.target = el;
    }

    return ev;
}
