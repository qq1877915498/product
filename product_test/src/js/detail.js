class Slipe{
    constructor(){
        this.time = null;
        this.init();
        this.addEvent();
        this.sli();
        this.autoplay();   
    }
    init(){
        this.bigBox = document.querySelector('.imgLeft ul');
        this.bigImg = document.querySelectorAll('.imgLeft ul li');
        this.cir = document.querySelectorAll('.cir a');
        this.ltbtn = document.querySelector('.ltbtn');
        this.gtbtn = document.querySelector('.gtbtn');
        this.index = 0;
    }
    addEvent(){
        let that = this;
        this.ltbtn.onmouseenter = function(){
            this.style.background = 'url(//i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat 0  50%';
        }
        this.gtbtn.onmouseenter = function(){
            this.style.background = 'url(//i1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -42px  50%';
        }
        this.ltbtn.onmouseleave = function(){
            this.style.background = '';
        }
        this.gtbtn.onmouseleave = function(){
            this.style.background = '';
        }
        this.ltbtn.onmousedown = function(){
            that.index--;
            if(that.index==-1){
                that.index = that.bigImg.length-1;
            }
            that.sli();
        }
        this.gtbtn.onmousedown = function(){
            that.index++;
            if(that.index == that.bigImg.length){
                that.index = 0;
            }
            that.sli();
        }
    }
    sli(){
        let that = this;
        for(let i=0;i<this.bigImg.length;i++){
            that.bigImg[i].style.display = 'none';
            this.cir[i].style.background = '';
        }
        this.bigImg[this.index].style.display = 'block';
        this.cir[this.index].style.background = 'rgba(0,0,0,.4)';
    }
    autoplay(){
        let that = this;
        this.time=setInterval(() => {
            that.index++;
            if(that.index==that.bigImg.length){
                that.index=0;
            }
            that.bigBox.onmouseenter = function(){
                clearInterval(that.time);
            }
            that.bigBox.onmouseleave = function(){
                that.autoplay();
            }
            that.sli();
        }, 3000);
    }
}
new Slipe();
 window.onscroll = function(){
     let top = document.documentElement.scrollTop || document.body.scrollTop;
     if(top>200){
         document.querySelector('.nav3').style.cssText = "position:fixed;top:0;trasition:all .3s";
     }
     if(top<200){
        document.querySelector('.nav3').style.cssText = "";
    }
 }
 let text = document.getElementById('text');
let ul = document.getElementById('ul');
    text.onkeyup = function(){
        ul.style.display = 'block'
        let sc = document.createElement('script');
        sc.src = `https://suggest.taobao.com/sug?code=utf-8&q=${this.value}&_ksTS=1600939711016_326&callback=Fn&k=1&area=c2c&bucketid=8`;
        document.body.append(sc);
    }
    function Fn(date){
        ul.innerText='';
        date.result.forEach((value)=> {
            let li = document.createElement('li');
            li.innerHTML = value[0];
            ul.appendChild(li);
        });
    }
    text.onblur = function(){
        ul.innerText='';
        ul.style.display = 'none';
    }
    $('.nav2Center a').each(function(i,value){
        $(value).mouseenter(function(){
            $('.nav2Center2').css('height','212px');
            $('.nav2Img').attr('src',`../img/s${i+1}.jpg`)
        })
        $(value).mouseleave(function(){
            $('.nav2Center2').css('height','0');
        })
    })
    $('.nav2Center a').eq(7).off();
    $('.nav2Center a').eq(8).off();
    $('.inport1 a').eq(0).css({
                color:'#ff6700',
                borderColor:'#ff6700'
    })
    $('.inport2 a').eq(0).css({
        color:'#ff6700',
        borderColor:'#ff6700'
    })  
    $('.inport1 a').each(function(i,value){
        $(this).click(function(){
            $('.inport1 a').each(function(i,value){
                $(value).css({
                    color:'',
                    borderColor:''
                })
            })
            $(this).css({
                color:'#ff6700',
                borderColor:'#ff6700'
            })
        })
    })
    $('.inport2 a').each(function(i,value){
        $(this).click(function(){
            $('.inport2 a').each(function(i,value){
                $(value).css({
                    color:'',
                    borderColor:''
                })
            })
            $(this).css({
                color:'#ff6700',
                borderColor:'#ff6700'
            })
        })
    })
    // $('.inport a').mouseenter(function(){
    //     $(this).css({
    //         color:'#ff6700',
    //         borderColor:'#ff6700'
    //     })
    // })
    // $('.inport a').mouseleave(function(){
    //     $(this).css({
    //         color:'#757575',
    //         borderColor:'rgba(0,0,0,0)'
    //     })
    // })
    Cart()
    $('.btnbox a').eq(0).click(function(){
        let good_id = $('.add p').attr('data-good-id');
        let good_name = $('.daRight h2').text();
        let good_price = $('.add p span').text();
        let good_img = '../img/phone10.jpg';
        let str = $.cookie('carts') ? $.cookie('carts') : '';
        let obj = strToObj(str);
        if(good_id in obj){
            obj[good_id].num++;
            console.log(obj[good_id].num,obj)
        }else{
                obj[good_id] = {
                name : good_name,
                price : good_price,
                img : good_img,
                num : 1
            }
        }
        $.cookie('carts',JSON.stringify(obj),{expires : 1,path : '/'});
        Cart()
    })
    function Cart(){
        let str = $.cookie('carts') ? $.cookie('carts') : '';
        //转对象
        let obj = strToObj(str);
        //总和
        let sum  = 0;
        for(let key in obj){
            sum += obj[key].num;
        }
        $('.cart_num').text(sum);
        $('.cart_num').css('display','block');
        if(sum==0){
         $('.cart_num').css('display','');
        }
    }

    function strToObj(str1){
        if(!str1){
            return {};
        }else{
            return JSON.parse(str1);
        }
    }