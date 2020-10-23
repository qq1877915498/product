$('.bit').click(function(){
        let storage = window.localStorage;
        let uname = $('.phone input').eq(0).val();
        let upwd = $('.phone input').eq(1).val();
        let str = storage.getItem('users') ? storage.getItem('users') : '';
        let obj = strToObj(str);
        if(obj[uname] in obj){
            if(obj[uname]===upwd){
                location.href = '../index.html';
            }else{
                alert('密码不正确');
            }
        }else{
            alert('账号不存在');
        }
})



//串转对象
function strToObj(str){
    if(!str){
        return {};
    }else{
        return JSON.parse(str);
    }
}