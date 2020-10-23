// {/* <div class="listHead">
// <span class="col check"><input type="checkbox" name="" id="">1</span>
// <span class="col img"><img src="../img/phone10.jpg" alt=""></span>
// <span class="col name">小米10至尊纪念版</span>
// <span class="col price">5599元</span>
// <span class="col num">1</span>
// <span class="col total">5599元</span>
// <span class="col action"><a href="javascript:;">X</a></span>
// </div> */}
    let str = $.cookie('carts') ? $.cookie('carts') : '';
    let obj = strToObj(str);
        for(let key in obj){
            let good = obj[key];
        $('.itembox').append(`<div class="listHead" data-good-id="${key}">
        <span class="col check"><input type="checkbox"  id="">1</span>
        <span class="col img"><img src="../img/phone10.jpg" alt=""></span>
        <span class="col name">${good.name}</span>
        <span class="col price">${good.price}</span>
        <span class="col num num1"><div id="numbtn"><a>-</a><input type="text" value="${good.num}" id=""><a>+</a></div></span>
        <span class="col total">${parseInt(good.price)*good.num}元</span>
        <span class="col action"><a href="javascript:;">X</a></span>
        </div>`)
        $('.total-price em').text(parseInt(good.price)*good.num);

            $('.action a').click(function(){
                $('.listHead').remove();
                let id = $(this).parents('.listHead').attr('data-good-id');
                delete obj[id];
                $.cookie('carts',JSON.stringify(obj),{expires : 2,path : '/'});
                Cart()
            })
            $('#numbtn a').eq(0).click(function(){
                let id = $(this).parents('.listHead').attr('data-good-id');
                let str = $.cookie('carts') ? $.cookie('carts') : '';
                let obj = strToObj(str);
                    obj[id].num--
                    $.cookie('carts',JSON.stringify(obj),{expires : 2,path : '/'});
                    $(this).next().val(obj[id].num);
                    $(this).parents('.num1').next().text(parseInt(obj[id].price)*obj[id].num);
                    Cart();
                    $('.total-price em').text(parseInt(obj[id].price)*obj[id].num);
            })
            $('#numbtn a').eq(1).click(function(){
                let id = $(this).parents('.listHead').attr('data-good-id');
                let str = $.cookie('carts') ? $.cookie('carts') : '';
                let obj = strToObj(str);
                    obj[id].num++
                    $.cookie('carts',JSON.stringify(obj),{expires : 2,path : '/'});
                    $(this).prev().val(obj[id].num);
                    $(this).parents('.num1').next().text(parseInt(obj[id].price)*obj[id].num);
                    Cart();
                    $('.total-price em').text(parseInt(obj[id].price)*obj[id].num);
            })
            $('#numbtn input').blur(function(){
                let id = $(this).parents('.listHead').attr('data-good-id');
                let str = $.cookie('carts') ? $.cookie('carts') : '';
                let obj = strToObj(str);
                    if(/^\d+$/.test($(this).val())){
                        obj[id].num = $(this).val();
                    }else{
                        obj[id].num = 1;
                    }
                    $.cookie('carts',JSON.stringify(obj),{expires : 2,path : '/'});
                    $(this).val(obj[id].num);
                    $(this).parents('.num1').next().text(parseInt(obj[id].price)*obj[id].num);
                    Cart();
                    $('.total-price em').text(parseInt(obj[id].price)*obj[id].num);
            })
        }
        
        

function Cart(){
    let str = $.cookie('carts') ? $.cookie('carts') : '';
    //转对象
    let obj = strToObj(str);
    //总和
    let sum  = 0;
    for(let key in obj){
        sum += obj[key].num;
    }
    if(sum==0){
        $('.cart_num').css('display','');
    }
    $('.cart_num').text(sum);
    $('.cart_num').css('display','block');
}
Cart()
function strToObj(str1){
    if(!str1){
        return {};
    }else{
        return JSON.parse(str1);
    }
}