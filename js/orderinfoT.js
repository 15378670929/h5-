window.onload = function() {
    $.ajax({
        type: 'get',
        url: "http://192.168.0.110/index.php/index/agent/order_detial",
        data: {
            order_id : window.location.search.slice(1).split("=")[1],
            user_id: localStorage.getItem("agentuser_id")
        },
        success: function(res) {
            console.log(res)
            if (res.code ==0) {
                var datetime = res.data.datetime //开始时间
                var endtime = res.data.endtime   //结束时间
                var ordersn = res.data.ordersn   //保单号
                var name = res.data.ge_name      //保单人
                var baodan = res.data.baodan     //保单图
                var {ge_idcard} = res.data
                console.log($("table tbody tr td:odd"))
                $($("table tbody tr td:odd")[0]).text(name);
                $($("table tbody tr td:odd")[1]).text(ordersn);
                $($("table tbody tr td:odd")[2]).text(ge_idcard);
                $($("table tbody tr td:odd")[5]).text(datetime);
                $($("table tbody tr td:odd")[7]).text(endtime);
                $(".baodan").text(baodan);
            }
        }
    })

    $(".back").on('click',function() {
        window.history.back()
    })

    $(document).ready(function(){
        $(".showimg_btn").on('click',function(){
            $(".backmodal").show()
            $(".baodan").show()
        })
    
        $(".backmodal").on("click",function() {
            $(this).hide()
            $(".baodan").hide()
        })
    })
}