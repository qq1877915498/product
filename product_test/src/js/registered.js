//手机号码验证
$('.seclect').click(function(){
    $('.area').css('display','block');
    $('.area ul li').each(function(i,value){
        $(this).mouseenter(function(){
            $(this).css('background','#e8e8e8');
        })
        $(this).mouseleave(function(){
            $(this).css('background','');
        })
        $(this).click(function(){
            $('.seclect p').text($(this).text());
            $('.area').css('display','');
        })
    })
})

let arr = false;
$('#phone').blur(function(){
    let str = $(this).val();
    let re = /^1\d{10}$/;
    if(str!=''){
        if(re.test(str)){
            arr = true;
        }else{
            arr = false;
            alert('只认识11位的手机号码以1开头')
        }
    }
})
//以手机号为key 账号密码为value
$('#btn').click(function(){
    if(arr){
        $(this).attr('href','registered1.min.html');
    }else{
        alert('正确输入');     
    }
})

let  arr1 = [false,false,false];
$('.phone1 input').eq(0).blur(function(){
    let str = $(this).val();
    let re = /^[a-z0-9]{6,12}$/i;
    if(str!=''){
        if(re.test(str)){
            arr1 = true;
        }else{
            arr1 = false;
            alert('账号是6-12位的字母数字组成')
        }
    }
})
$('.phone1 input').eq(1).blur(function(){
    let str = $(this).val();
    let re = /^[a-z0-9]{6,12}$/i;
    if(str!=''){
        if(re.test(str)){
            arr1 = true;
        }else{
            arr1 = false;
            alert('密码是6-12位的字母数字组成')
        }
    }
})
$('.phone1 input').eq(2).blur(function(){
    let str = $(this).val();
    let re = $('.phone1 input').eq(1).val();
    if(str!=''){
        if(re===str){
            arr1 = true;
        }else{
            arr1 = false;
            alert('两次输入不一样');
        }
    }
})
$('#login').click(function(){
    console.log($.inArray(false,arr1))
    if($.inArray(false,arr1) == -1){
        let storage = window.localStorage;
        let uname = $('.phone1 input').eq(0).val();
        let upwd = $('.phone1 input').eq(1).val();
        let str = storage.getItem('users') ? storage.getItem('users') : '';
        let obj = strToObj(str);
        //key = users
        //value = {uname:uname,upwd:upwd}
        if(obj[uname] in obj){
            alert('您注册的用户已存在！');
            return;
       }else{
                obj[uname] = upwd;
                storage.setItem('users',JSON.stringify(obj));
                alert('注册成功');
                $(this).attr('href','login.min.html');
       }
    }else{
        alert('注册失败')
    }
})

function strToObj(str){
    if(!str){
        return {};
    }else{
        return JSON.parse(str);
    }
}