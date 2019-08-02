// 获取查询接口


$(".input_sub").on('click',function() {
    var bao = $(".inputO input").val()
    var tel = $(".inputT input").val()
    $.ajax({
        type: "post",
        url: "http://192.168.0.110/index.php/index/index/ordinary",
        data: {
            baosn: bao,
            ge_mobile: tel
        },
        success: (res) => {
            console.log(res)
            if(res.code == 1){
                localStorage.setItem("ordinary",JSON.stringify(res.data))
                window.location.href = "./orderpeople.html"
            }else{
                // alert(res.msg)
            }
        }
    })

    return false;
})