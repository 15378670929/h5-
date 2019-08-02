window.onload = function() {
    var data = JSON.parse(localStorage.getItem("ordinary"))
    var {ge_name,baosn,ge_idcard,product_name,price,baofei,endtime,baodan,starttime} = data
    $($("table tbody td:odd")[0]).text(ge_name);
    $($("table tbody td:odd")[1]).text(baosn);
    $($("table tbody td:odd")[2]).text(ge_idcard);
    $($("table tbody td:odd")[3]).text(product_name);
    $($("table tbody td:odd")[4]).text(price+"万元");
    $($("table tbody td:odd")[5]).text(starttime);
    $($("table tbody td:odd")[6]).text(baofei+"万元");
    $($("table tbody td:odd")[7]).text(endtime);
    $(".baodan").attr("src",baodan)

    $(".back").on('click',function() {
        window.history.back()
    })
}