
var isFirefox = navigator.userAgent.indexOf('Firefox') !== -1 || navigator.userAgent.indexOf('Gecko/') !== -1;
let countPassword=0;
let countUsername=0;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.type == 'toMainIndex'){
        window.location.href="https://"+window.location.host;
    }
    if(request.type=='toFilter'){
        let nowTime=new Date().getTime();
        if(nowTime-request.time>5){
            return;
        }
        try {
            let iframe=window.top.frames['jcdfDiglogDivIframe'];
            if(typeof iframe== "undefined"){
                let frames = window.top.frames;
                if(frames.length>0){
                    for(let i=0;i<frames.length;i++){
                        let frame=frames[i];
                        try {
                            setFormData(frame.document);
                            setSourceForm(frame.document);
                        } catch (e) {
                            console.log(e);
                        }
                    }
                }else{
                    setSourceForm(document);
                }
                return ;
            }
            let frame = window.top.frames['jcdfDiglogDivIframe'].document;
            setFormData(frame);

        } catch (e) {
            console.log(e);
        }
    }
});

function setSourceForm(document){
    document.querySelectorAll('input').forEach((item,index)=>{
        if(item.value){
            return;
        }
        if('请选择'==item.getAttribute("placeholder")){
            item.click();
            setTimeout(function () {
                const ke1 = new KeyboardEvent('keydown', {
                    bubbles: true, cancelable: true, keyCode: 40
                });
                item.dispatchEvent(ke1);
                const ke = new KeyboardEvent('keydown', {
                    bubbles: true, cancelable: true, keyCode: 13
                });
                item.dispatchEvent(ke);
            },index*100);
        }else if(item.classList.contains("el-upload__input")){
            return;
        }else{
            setTimeout(function () {
                if(item.value){
                    return;
                }
                item.value="1";
                setValueForElementByEvent(item);
            },index*200);
        }
    });
    document.querySelectorAll('select').forEach((item,index)=>{
        item.selectedIndex = 1;
        const event = new Event('change');
        item.dispatchEvent(event);
    });
    document.querySelectorAll('textarea').forEach((item,index)=>{
        item.value="测试";
    });
}



function setFormData(frame){
    let script = frame.createElement("script");
    script.type="text/javascript";
    script.innerHTML = 'var setData=function () {' +
        'try {' +
        'var maxNum=1;' +
        'var Rand = Math.random();' +
        '$(".easyui-numberbox").each(function () {' +
        'let value = $(this).numberbox("getValue");' +
        'if (!value) {' +
        '$(this).numberbox("setValue", 1);' +
        '}' +
        '});' +
        '$(".easyui-validatebox").each(function () {' +
        'let clazz = $(this).attr("class");' +
        'if (clazz.indexOf("numberbox") > 0) {' +
        'let value = $(this).numberbox("getValue");' +
        'if (!value) {' +
        '$(this).numberbox("setValue", 1);' +
        '}' +
        '} else {' +
        'let value = $(this).val();' +
        'if (!value) {' +
        'let id = $(this).attr("id");' +
        'if (id.indexOf("mobile") >= 0) {' +
        'let mineId = Math.round(Rand * 1000000000);' +
        '$(this).val("13" + mineId);' +
        '} else if (id.indexOf("other_contact") >= 0) {' +
        'let mineId = Math.round(Rand * 100000000);' +
        '$(this).val(mineId);' +
        '} else {' +
        'var result = "";\n' +
        '  for (var i = 0; i < 3; i++) {\n' +
        '   var char = Math.floor(Math.random() * 100 + 19968);' +
        ' result += String.fromCharCode(char);\n' +
        '  }' +
        '$(this).val(result);' +
        '}' +
        '}' +
        '}' +
        '});' +
        '$(".easyui-queryCombobox,.easyui-mulQueryCombobox ").each(function (index) {' +
        'let that = $(this);' +
        'if(maxNum<index){' +
        'maxNum=index;' +
        '}' +
        'setTimeout(function () {' +
        'let value = that.queryCombobox("getValue");' +
        'if (!value) {' +
        'let combobox = that.combobox("getData");' +
        'let valueField = that.combobox("options").valueField;' +
        'if (combobox.length > 0) {' +
        'that.combobox("setValue", combobox[0][valueField]);' +
        '}' +
        '}' +
        '}, index * 300);' +
        '});' +
        '$(".easyui-combobox").each(function (index) {' +
        'let that = $(this);' +
        'if(maxNum<index){' +
        'maxNum=index;' +
        '}' +
        'setTimeout(function () {' +
        'let value = that.combobox("getValue");' +
        'if (!value) {' +
        'let combobox = that.combobox("getData");' +
        'let valueField = that.combobox("options").valueField;' +
        'if (combobox.length > 0) {' +
        'that.combobox("setValue", combobox[0][valueField]);' +
        '}' +
        '}' +
        '}, index * 100);' +
        '});' +
        '$(".easyui-datebox").each(function (index) {' +
        'try {' +
        '$(this).datebox("setValue", $$.dateFormat(new Date(), "yyyy-MM-dd"));' +
        '} catch (e) {' +
        '}' +
        '});' +
        'let checkList=[];' +
        '$("input[type=\\"checkbox\\"]").each(function (index) {' +
        '                let name=$(this).attr("name");' +
        '                if(name&&checkList.indexOf(name)<0){' +
        '                    $(this).attr("checked","true");' +
        'checkList.push(name);' +
        '                }' +
        '});' +
        '$("input[type=\'radio\']").each(function (index) {' +
        'let name=$(this).attr("name");' +
        'if(name&&checkList.indexOf(name)<0){' +
        '$(this).attr("checked","true");' +
        'checkList.push(name);' +
        '}' +
        '});' +
        '' +
        '} catch (e) {' +
        'console.log(e);' +
        '}' +
        'return maxNum;' +
        '};' +
        'var nextTime=setData();' +
        'setTimeout(function () {' +
        'setData();' +
        '},nextTime*50);';
    frame.body.appendChild(script);
}









setTimeout(function () {
    let url=window.location.href;
    if(url.indexOf("https://k8s.test.tuolong56.com/#/login")>=0){
        let passWord="eyJhbGciOiJSUzI1NiIsImtpZCI6IkFMR1NGZWRVTTZnb3VrOEs2TGZxWXRfbHRjR09IVVNqZk1QekpmY2x4YUUifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiXSwiZXhwIjo1MjY3MjA2ODIxLCJpYXQiOjE2NjcyMTA0MjEsImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsInNlcnZpY2VhY2NvdW50Ijp7Im5hbWUiOiJhZG1pbi11c2VyIiwidWlkIjoiMDI2OTYyMWQtN2M0MC00ODE5LTg0MGMtZjE0MTNhMDA4MmRjIn19LCJuYmYiOjE2NjcyMTA0MjEsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlcm5ldGVzLWRhc2hib2FyZDphZG1pbi11c2VyIn0.kD2Bukwk_5Jf6lBU96p39s0qjrg3t3yehWgvZiJ0fsIDlhIA_7ENEkEXPNZ4IYOKgxHyCswqEbv0ahzulLe3H8rqbZ7jAxJsxL8K4ozMPf1pcWpJg71lBed1rIVeYIe7yM5Unpvs6YSpbiKfOfxo-87UpD_Tpz5kSNzQm_CeFCEUet6cCdiq71ok-J7OrAFiKSRr_lZGaml7ILFLTclwY3hxhgUgR0rQJ2EPAgKJ_PqPXIyjMewUXpM7We3UPfatJCgdBUnA-J0ce893gJ7qWgSuXchCtd96XxRzGOHFFn96YVsuWtD8dyWo8wYDMpzidkhyttiRPE1djyxXsAkv5w";
        setPassword(passWord);
        setTimeout(function () {
            window.location.href="https://k8s.test.tuolong56.com/#/pod?namespace=tlwl-test";
        },2000);
    }else if(url.indexOf('https://k8s.test.tuolong56.com/#/workloads?namespace=default')>=0){//k8s 命名称空间默认跳转到tlwl-uat
        window.location.href="https://k8s.test.tuolong56.com/#/pod?namespace=tlwl-test";
    }else if(url.indexOf("https://k8s.prt.tuolong56.com/#/login")>=0){
        let passWord="eyJhbGciOiJSUzI1NiIsImtpZCI6Im1zTXZqZnBVY1dpMGFUMXVzZVRRdXdESUhDX25XLUg0Q042RUViNi10OEEifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiXSwiZXhwIjo1MjY5MjQ2NDAzLCJpYXQiOjE2NjkyNTAwMDMsImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsInNlcnZpY2VhY2NvdW50Ijp7Im5hbWUiOiJ2aWV3LXN5c3RlbSIsInVpZCI6ImFiZjllZmE5LTkwYmMtNDU0Yy05MDgyLThlNTIzNzM4ZWI1ZiJ9fSwibmJmIjoxNjY5MjUwMDAzLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZXJuZXRlcy1kYXNoYm9hcmQ6dmlldy1zeXN0ZW0ifQ.MQ0Wf-Ld35P8bXdKXdB5Cq5Aa-FrLEOOOslNX6oidxTUza9amC7QNucJKiA0BvSHfPY7UvFh40pjQQPF4LXUMYxs9BLdUWIU6ASjy8t4wjKlO9p1Ybp0VO9QvTEFfbRyo_C1t0zRtW8YYujhEq0ipDDo3Fc2cRtO3tMX5KdzEDmCoPWVQHYqY1nHCb9da6wHLuDADnc7hbP4rTm4PKkmZhC_3cnV6anbRKxopSH5saQSvVeYn2xuy1eIaWWdlwszKKihGIavUf3V2-sCVXfkq_4m-EwZ5F-53aDW9qfBctwOPmygXDhoZVtQbivXVeqdHCItgIltKwjYdYFPeuIUIA";
        setPassword(passWord);
        setTimeout(function () {
            window.location.href="https://k8s.prt.tuolong56.com/#/pod?namespace=tlwl";
        },2000);

    }else if(url.indexOf("https://k8s.uat.tuolong56.com/#/login")>=0){//k8s uat环境新的地址
        let passWord="eyJhbGciOiJSUzI1NiIsImtpZCI6IkhJVE9qT3c5NXl1amhuR0FfX3BnNE5BazhfSWtoNEhxUFNEMkVZcy1jQkkifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiXSwiZXhwIjo1MjY3MzQ4NTY4LCJpYXQiOjE2NjczNTIxNjgsImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsInNlcnZpY2VhY2NvdW50Ijp7Im5hbWUiOiJhZG1pbi11c2VyIiwidWlkIjoiYTFhMDY3ODctMzc2NS00ZThhLTkyMzgtMzVjNGJhMDkzZWVjIn19LCJuYmYiOjE2NjczNTIxNjgsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlcm5ldGVzLWRhc2hib2FyZDphZG1pbi11c2VyIn0.KdYZ_F5N6VNIGK1znssVouvrWTkNS0tEIB9Mg6dTukCPl10LaCcFxmSrQGMkADiQFGY54Ul0aj1ZZ9mAmdq9SLiyXfTFYn2ps45RyMLKh4wzPgYP9OYUgykc5EwPyVPAgudv6fSZHzBYV1l0AcYS7P8zM2szZGdNiMmNfm-tsL7Az4g0f8BoxkjRkA1b3bfSzOKXpL8n7lQ5dwLeUUfdkcYcU6kApXaEa5VdCxDYZ_LRKjsiMdonGI72Rc27Gr5NLFdYTiU7ReAE30p_Dp_GbeqEyFJCYGvA41xnSlP0NSWrCSLobjGRVO-e4hnyZ7v-DnxzbhJEC3kPjSJQcT0ttQ";
        setPassword(passWord);
        setTimeout(function () {
            window.location.href="https://k8s.uat.tuolong56.com/#/pod?namespace=tlwl-uat";
        },2000);
    }else if(url.indexOf('https://k8s.uat.tuolong56.com/#/workloads?namespace=default')>=0){//k8s 命名称空间默认跳转到tlwl-uat
        window.location.href="https://k8s.uat.tuolong56.com/#/pod?namespace=tlwl-uat";
    }else if(url=='https://k8s.prt.tuolong56.com/#/overview?namespace=default'||url=='https://k8s.prt.tuolong56.com/#/workloads?namespace=default'){//k8s 命名称空间默认跳转到tlwl-uat
        window.location.href="https://k8s.prt.tuolong56.com/#/pod?namespace=tlwl";
    }else if(url.indexOf("/query/")>0||url.indexOf("/crmx/")>0){
            if( $("#authIframe").length>0){
                $("#authIframe").contents().find("#username").val("T1113");
                $("#authIframe").contents().find("#password").val("0834");
                $("#authIframe").contents().find("input[name='submit']")[0].click();
            }else{
                document.cookie = "cip_c_c_c_=a+fTVzkV0fg=";
                $("#username").val("T1113");
                $("#password").val("0834");
                $("#passcode").val("5308");
                $("input[name='submit']").click();
            }
    }else if(url=='https://tlwl.uat.tuolong56.com/portalv-page/#/homePage'||url=='https://kp.tuolong56.com/portalv-page/#/homePage'){
        window.location.href="https://"+window.location.host;
    }else if(url=="https://tlwl.uat.tuolong56.com/tempLogin?token=backdoor"||url=='https://kp.tuolong56.com/tempLogin?token=backdoor'
                ||url=='https://tlwl.uat.tuolong56.com/portalv-page/#/login_bk'){
        if($("#submitBtn").length>0){
            $("#userName").val("T1113");
            $("#password").val("0834");
            $("#submitBtn").click();
        }else{
            document.querySelectorAll('input').forEach((item,index)=>{
                if(index==0){
                    setValueForElement(item);
                    item.value="T1113";
                    setValueForElementByEvent(item);
                }else   if(index==1){
                    setValueForElement(item);
                    item.value="0834";
                    setValueForElementByEvent(item);
                }
            });
            $("button")[0].click();
        }


    }else if(url.indexOf('http://kn.cj7a.com/task/')>=0){
        document.cookie = "cip_c_c_c_=a+fTVzkV0fg=";
        $("#username").val("5498");
        $("#password").val("1234");
        $("#passcode").val("5308");
        $("input[name='submit']").click();
    }else if(url.indexOf('/task/')>0||url.indexOf('/gms/')>0||url.indexOf('/dts/')>0) {
        document.cookie = "cip_c_c_c_=a+fTVzkV0fg=";
        $("#username").val("T1113");
        $("#password").val("0834");
        $("#passcode").val("5308");
        $("input[name='submit']").click();
    }else if(url.indexOf('archery.cj7a.com/login')>0){
        $("#inputUsername").val("T1113");
        $("#inputPassword").val("0834");
        $("#btnLogin").click();
    }else if(url.indexOf('/auth/')>0){
        document.cookie = "cip_c_c_c_=a+fTVzkV0fg=";
        $("#username").val("T1113");
        $("#password").val("0834");
        $("#passcode").val("5308");
        $("input[name='submit']").click();
    }else if(url.indexOf('/mdms/')>0) {
        document.cookie = "cip_c_c_c_=a+fTVzkV0fg=";
        $("#username").val("root");
        $("#password").val("1111");
        $("#passcode").val("5308");
        $("input[name='submit']").click();
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
