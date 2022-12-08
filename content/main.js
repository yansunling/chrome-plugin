
var isFirefox = navigator.userAgent.indexOf('Firefox') !== -1 || navigator.userAgent.indexOf('Gecko/') !== -1;
let countPassword=0;
let countUsername=0;

//content_scripts——>background发送消息
// chrome.runtime.sendMessage({type:'getAccount'},function(response) {
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
// });





setTimeout(function () {
    let url=window.location.href;
    if(url.indexOf("https://k8s.test.tuolong56.com/#/login")>=0){
        let passWord="eyJhbGciOiJSUzI1NiIsImtpZCI6IkFMR1NGZWRVTTZnb3VrOEs2TGZxWXRfbHRjR09IVVNqZk1QekpmY2x4YUUifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiXSwiZXhwIjo1MjY3MjA2ODIxLCJpYXQiOjE2NjcyMTA0MjEsImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsInNlcnZpY2VhY2NvdW50Ijp7Im5hbWUiOiJhZG1pbi11c2VyIiwidWlkIjoiMDI2OTYyMWQtN2M0MC00ODE5LTg0MGMtZjE0MTNhMDA4MmRjIn19LCJuYmYiOjE2NjcyMTA0MjEsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlcm5ldGVzLWRhc2hib2FyZDphZG1pbi11c2VyIn0.kD2Bukwk_5Jf6lBU96p39s0qjrg3t3yehWgvZiJ0fsIDlhIA_7ENEkEXPNZ4IYOKgxHyCswqEbv0ahzulLe3H8rqbZ7jAxJsxL8K4ozMPf1pcWpJg71lBed1rIVeYIe7yM5Unpvs6YSpbiKfOfxo-87UpD_Tpz5kSNzQm_CeFCEUet6cCdiq71ok-J7OrAFiKSRr_lZGaml7ILFLTclwY3hxhgUgR0rQJ2EPAgKJ_PqPXIyjMewUXpM7We3UPfatJCgdBUnA-J0ce893gJ7qWgSuXchCtd96XxRzGOHFFn96YVsuWtD8dyWo8wYDMpzidkhyttiRPE1djyxXsAkv5w";
        setPassword(passWord);
    }else if(url.indexOf("https://k8s.prt.tuolong56.com/#/login")>=0){
        let passWord="eyJhbGciOiJSUzI1NiIsImtpZCI6Im1zTXZqZnBVY1dpMGFUMXVzZVRRdXdESUhDX25XLUg0Q042RUViNi10OEEifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiXSwiZXhwIjo1MjY5MjQ2NDAzLCJpYXQiOjE2NjkyNTAwMDMsImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsInNlcnZpY2VhY2NvdW50Ijp7Im5hbWUiOiJ2aWV3LXN5c3RlbSIsInVpZCI6ImFiZjllZmE5LTkwYmMtNDU0Yy05MDgyLThlNTIzNzM4ZWI1ZiJ9fSwibmJmIjoxNjY5MjUwMDAzLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZXJuZXRlcy1kYXNoYm9hcmQ6dmlldy1zeXN0ZW0ifQ.MQ0Wf-Ld35P8bXdKXdB5Cq5Aa-FrLEOOOslNX6oidxTUza9amC7QNucJKiA0BvSHfPY7UvFh40pjQQPF4LXUMYxs9BLdUWIU6ASjy8t4wjKlO9p1Ybp0VO9QvTEFfbRyo_C1t0zRtW8YYujhEq0ipDDo3Fc2cRtO3tMX5KdzEDmCoPWVQHYqY1nHCb9da6wHLuDADnc7hbP4rTm4PKkmZhC_3cnV6anbRKxopSH5saQSvVeYn2xuy1eIaWWdlwszKKihGIavUf3V2-sCVXfkq_4m-EwZ5F-53aDW9qfBctwOPmygXDhoZVtQbivXVeqdHCItgIltKwjYdYFPeuIUIA";
        setPassword(passWord);
        setTimeout(function () {
            window.location.href="https://k8s.prt.tuolong56.com/#/overview?namespace=tlwl";
        },2000);

    }else if(url.indexOf("https://172.16.17.101/#/login")>=0){//k8s uat环境新的地址
        let passWord="eyJhbGciOiJSUzI1NiIsImtpZCI6IkhJVE9qT3c5NXl1amhuR0FfX3BnNE5BazhfSWtoNEhxUFNEMkVZcy1jQkkifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiXSwiZXhwIjo1MjY3MzQ4NTY4LCJpYXQiOjE2NjczNTIxNjgsImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsInNlcnZpY2VhY2NvdW50Ijp7Im5hbWUiOiJhZG1pbi11c2VyIiwidWlkIjoiYTFhMDY3ODctMzc2NS00ZThhLTkyMzgtMzVjNGJhMDkzZWVjIn19LCJuYmYiOjE2NjczNTIxNjgsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlcm5ldGVzLWRhc2hib2FyZDphZG1pbi11c2VyIn0.KdYZ_F5N6VNIGK1znssVouvrWTkNS0tEIB9Mg6dTukCPl10LaCcFxmSrQGMkADiQFGY54Ul0aj1ZZ9mAmdq9SLiyXfTFYn2ps45RyMLKh4wzPgYP9OYUgykc5EwPyVPAgudv6fSZHzBYV1l0AcYS7P8zM2szZGdNiMmNfm-tsL7Az4g0f8BoxkjRkA1b3bfSzOKXpL8n7lQ5dwLeUUfdkcYcU6kApXaEa5VdCxDYZ_LRKjsiMdonGI72Rc27Gr5NLFdYTiU7ReAE30p_Dp_GbeqEyFJCYGvA41xnSlP0NSWrCSLobjGRVO-e4hnyZ7v-DnxzbhJEC3kPjSJQcT0ttQ";
        setPassword(passWord);
        setTimeout(function () {
            window.location.href="https://172.16.17.101/#/workloads?namespace=tlwl-uat";
        },2000);
    }else if(url.indexOf('https://172.16.17.101/#/workloads?namespace=default')>=0){//k8s 命名称空间默认跳转到tlwl-uat
        window.location.href="https://172.16.17.101/#/pod?namespace=tlwl-uat";
    }else if(url=='https://k8s.prt.tuolong56.com/#/overview?namespace=default'||url=='https://k8s.prt.tuolong56.com/#/workloads?namespace=default'){//k8s 命名称空间默认跳转到tlwl-uat
        window.location.href="https://k8s.prt.tuolong56.com/#/pod?namespace=tlwl";
    }else if(url=="https://tlwl.uat.tuolong56.com/query/"||url=='https://kp.tuolong56.com/query/'||url=='http://localhost/crmx/login.html'){
            $("#authIframe").contents().find("#username").val("T1113");
            $("#authIframe").contents().find("#password").val("0834");
            $("#authIframe").contents().find("input[name='submit']")[0].click();
    }else if(url=='https://tlwl.uat.tuolong56.com/portalv-page/#/homePage'||url=='https://kp.tuolong56.com/portalv-page/#/homePage'){
        window.location.href="https://"+window.location.host;
    }else if(url=="https://tlwl.uat.tuolong56.com/tempLogin?token=backdoor"||url=='https://kp.tuolong56.com/tempLogin?token=backdoor'){
        $("#userName").val("T1113");
        $("#password").val("0834");
        $("#submitBtn").click();
    }
},500);








function setPassword(passWord){
    setTimeout(function () {
        document.querySelectorAll('input').forEach((item,index)=>{
            if(item.type=='password'){
                setValueForElement(item);
                item.value=passWord;
                setValueForElementByEvent(item);

                $("button")[0].click();


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
