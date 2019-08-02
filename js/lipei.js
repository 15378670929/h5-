window.onload = function() {
    let tdarr = $("table tbody tr td:odd")
    console.log(tdarr,$(".order_img p")[1])
    $.ajax({
        type: 'get',
        url: 'http://192.168.0.110:80/index.php/index/group/loss_detial',
        data: {
            loss_id: window.location.search.slice(1).split("=")[1],
            user_id: localStorage.getItem("user_id")
        },
        success: function(res) {
            console.log(res)
            let name = res.data.loss_name
            let ty = res.data.loss_productid[0]
            let data = res.data.loss_time
            let money = res.data.loss_money
            let info = res.data.loss_info
            $(tdarr[0]).text(name);
            $(tdarr[1]).text(ty);
            $(tdarr[2]).text(data);
            $(tdarr[3]).text(money);
            $($(".order_img p")[1]).text(info)
        }
    })
    $(".back").on('click',function() {
        window.history.back()
    })
}