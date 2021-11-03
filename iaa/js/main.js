let i = 0;
let Timer


$(function () {
    $(".picImg").eq(0).show().siblings().hide()
    TimerBanner()
    lunBo()
    time()


    $(".car-cover").click(function (event) {
        let src1 = $(".car-detail").attr("src")
        $(".car-detail").attr("src", this.src)
        this.src = src1
        $(".car-logo img").attr("src", this.dataset.carLogo)

    })

    $(".btn-s").click(()=>{
        $(".sidebar").toggleClass("show")
    })
})


function TimerBanner() {
    Timer = setInterval(function () {
        i++;
        if (i == 5) {
            i = 0
        }
        showPic()
    }, 2000)

}

function showPic() {
    $(".picImg").eq(i).fadeIn().siblings().hide();
    $(".tab li").eq(i).addClass("bg").siblings().removeClass("bg")
}

function lunBo() {
    //点击红圈
    $(".tab li").hover(function () {
        clearInterval(Timer);
        i= $(this).index();
        showPic();
    },function () {
        TimerBanner()
    })

    $(".btn1").click(function () {
        clearInterval(Timer)
        i--;
        if (i==-1){
            i=4
        }
        showPic()
        TimerBanner()
    })
    $(".btn2").click(function () {
        clearInterval(Timer)
        i++;
        if (i==5){
            i=0
        }
        showPic()
        TimerBanner()
    })
}
function time(){
    let time = new Date("2020-11-12 18:00").getTime() - new Date().getTime()
    let sec=time/1000;
    let min=sec/60;
    let hour=min/60;
    let day =hour/24;

    $(".day").html(~~day);
    $(".hour").html(~~(hour%24));
    $(".min").html(~~(min%60));
    $(".sec").html(~~(sec%60));
}

setInterval( ()=> {
        time()
},1000)