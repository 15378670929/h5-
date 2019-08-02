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
window.onload = function() {
    let tdarr = $("table tbody tr td:odd")
    console.log(tdarr)
    $.get({
        url: "http://192.168.0.110/index.php/index/group/list_details",
        data: {
            id: window.location.search.slice(1).split("=")[1],
            user_id: localStorage.getItem("user_id")
        },
        success: function(res) {
            if (res.code == 1) {
                let jiname = res.data.ji_name
                let baodanimg = res.data.baodan
                let baosn = res.data.baosn
                let endtime = res.data.endtime
                let starttime = res.data.starttime
                let product_name = res.data.product_name
                let price = res.data.price
                let baofei = res.data.baofei
                $(tdarr[0]).text(jiname);
                $(tdarr[1]).text(baosn);
                $(tdarr[2]).text(product_name);
                $(tdarr[4]).text(price);
                $(tdarr[5]).text(starttime);
                $(tdarr[6]).text(baofei);
                $(tdarr[7]).text(endtime)
                $(".baodan").attr("src", baodanimg);
            }
        }
    })

    $(".back").on('click',function() {
        window.history.back()
    })
}
