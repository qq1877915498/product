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
            $('.nav2Img').attr('src',`img/s${i+1}.jpg`)
        })
        $(value).mouseleave(function(){
            $('.nav2Center2').css('height','0');
        })
    })
    $('.nav2Center a').eq(7).off();
    $('.nav2Center a').eq(8).off();
    class slipe{
        constructor(){
            this.init();
            this.addEvent();
            this.lunbo();
            this.autoplay();
        }
        init(){
            this.ltbtn = document.querySelector('.ltbtn');
            this.gtbtn = document.querySelector('.gtbtn');
            this.box = document.querySelector('.bigImg')
            this.bigImg = document.querySelectorAll('.bigImg li img');
            this.cir = document.querySelectorAll('.cir a');
            this.index = 0;
            this.time = null;
        }
        addEvent(){
            let that = this;
            this.ltbtn.onmouseenter = function(){
                this.style.background = 'url(img/icon-slides.png) no-repeat 0 0';
                this.onmousedown = function(){
                    that.index--;
                    if(that.index==-1){
                        that.index = that.bigImg.length-1;
                    }
                    that.lunbo();
                }
            }
            this.ltbtn.onmouseleave = function(){
                this.style.background = 'url(img/icon-slides.png) no-repeat -84px 0';
            }
            this.gtbtn.onmouseenter = function(){
                this.style.background = 'url(img/icon-slides.png) no-repeat -42px 0';
                this.onmousedown = function(){
                    that.index++;
                    if(that.index==that.bigImg.length){
                        that.index = 0;
                    }
                    that.lunbo();
                }
            }
            this.gtbtn.onmouseleave = function(){
                this.style.background = 'url(img/icon-slides.png) no-repeat -128px 0';
            }
            for(let i = 0;i<this.bigImg.length;i++){
                this.cir[i].onmousedown = function(){
                    that.index = i;
                    that.lunbo();   
                }
            }
        }
        lunbo(){
            for(let i=0;i<this.bigImg.length;i++){
                this.bigImg[i].style.display = 'none';
                this.cir[i].style.border = '2px solid #fff';
                this.cir[i].style.borderColor = 'hsla(0,0%,100%,.3)';
                this.cir[i].style.background = 'rgba(0,0,0,.4)';
            }
                this.bigImg[this.index].style.display = 'block';
                this.cir[this.index].style.background = 'hsla(0,0%,100%,.3)'
                this.cir[this.index].style.borderColor = 'hsla(0,0%,100%,.3)'
        }
        autoplay(){
            let that = this;
            this.time = setInterval(() => {
                that.index++;
                if(that.index == that.bigImg.length){
                that.index = 0;
                }
                this.lunbo();
                that.box.onmouseenter = function(){
                    clearInterval(that.time);
                }
                that.box.onmouseleave = function(){
                    that.autoplay();
                }
            }, 3000);
        }
    }
    new slipe();
   $('#Nav li').each(function(i,value){
       $(value).mouseenter(function(){
        let index = i;
        $('.banImg').css('display','block');
        $('.ltbtn').css('display','none');
        $('.gtbtn').css('display','none');
        $('.banImg ul li a img').attr('src',`img/small${index%6}.webp`);   
       })
       $(value).mouseleave(function(){
        $('.banImg').css('display','none'); 
        $('.ltbtn').css('display','block');
        $('.gtbtn').css('display','block');
       })        
   })

   //倒计时
   function fnJS(){
    let time = null;
    let future = new Date('2020-10-23 14:00:00');
    time=setInterval(() => {
        let now = new Date();
        let seconds = Math.floor((future.getTime() - now.getTime()) / 1000);
        let day = Math.floor(seconds / 60 / 60 / 24);
        let hours = Math.floor((seconds - day * 24 * 60 * 60) / 60 / 60);
        let minutes = Math.floor((seconds - day * 24 * 60 * 60 - hours * 60 * 60) / 60);
        let sec = seconds % 60;
        let span = document.querySelectorAll('.countdown span');
        span[0].innerHTML = hours < 10 ? '0' + hours : hours;
        span[1].innerHTML = minutes < 10 ? '0' + minutes : minutes;
        span[2].innerHTML = sec < 10 ? '0' + sec : sec;
        if(hours==14&&minutes==sec==0){
            future.setDate(future.getDate()+1);
            // span[0].innerHTML='';
            // span[1].innerHTML='';
            // span[2].innerHTML='';
        }
       }, 1000);
   }
   fnJS();
   $('.btn span').eq(1).click(function(){
       $('.secBoxRight ul').css('left','-992px');
   })
   $('.btn span').eq(0).click(function(){
    $('.secBoxRight ul').css('left','0');
})
$('.phoneRight ul').each(function(i,value){
    $(value).find('div').find('img').attr('src',`img/d${i%5}.png`)
})
$('.phoneRight ul').eq(0).find('div').find('img').attr('src','img/s1.jpg');
$('.phoneRight ul').eq(5).find('div').find('img').attr('src','img/s1.jpg');

// $('.phonebtn ul').each(function(i,value){
//     $(value).find('a').mouseenter(function(){
//         $('.phonebtn ul').each(function(i,value){
//             $(value).find('a').css({
//                 borderBottom : "2px solid  #f5f5f5",
//                 color : "#424242"
//             })
//         })
//         $(this).css({
//             borderBottom : "2px solid  #ff6700",
//             color : "#ff6700"
//         })
//     })
// })
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
Cart();
function strToObj(str){
    if(!str){
        return {};
    }else{
        return JSON.parse(str);
    }
}

