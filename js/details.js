window.onload = function() {
    let arr =window.location.search.slice(1).split("&").map(item => {
        return item.split("=")
    })
    var id = arr[0][1]
    var list_type = arr[1][1]
    $.ajax({
        type: "get",
        url: "http://192.168.0.110:80/index.php/index/group/index",
        data:{
            list_type: list_type,
            keyword: "",
            user_id: localStorage.getItem("user_id")
        },
        dataType: "json",
        success: function(res) {
            if (res.code == 1) {
                $(".projectname").text(res.data[0].project_jiname)
                $(".projectdata").text(res.data[0].starttime)   
                res.data.map(item => {
                    if (item.id == id) {
                        var html = ""
                        item.order_list.map((n,d) => {
                            html += `<tr>
                            <td data-id='${n.id}'>${d+1}</td>
                            <td colspan="2">${n.product_name}</td>
                            <td class='baodangotoorderinfo'>查看</td>
                            </tr>
                            `;
                        })
                        $(".baodan tbody").html(html)
                        $(".baodangotoorderinfo").on('click',function() {
                            window.location.href = './orderinfo.html?id='+$($(this).siblings()[0]).data("id")
                        })
                    }
                })
            }
        },
        error: function(resp) {
            // alert("暂无数据")
        }
    })

    $.ajax({
        type: "get",
        url: "http://192.168.0.110:80/index.php/index/group/getloss",
        data:{
            orderid: id,
            user_id: localStorage.getItem("user_id")
        },
        dataType: "json",
        success: function(res) {
            if (res.code == 1) {
                var html = ""
                res.data.map((item,d) => {
                    html += `<tr>
                    <td data-id='${item.id}'>${d+1}</td>
                    <td colspan="2">${item.loss_name}</td>
                    <td class='lipeigotoorderinfo'>查看</td>
                    </tr>
                    `
                })
                $(".lipei tbody").html(html)
                $(".lipeigotoorderinfo").on('click',function() {
                    window.location.href = './lipei.html?id='+$($(this).siblings()[0]).data("id")
                })
            }
        },
        error: function(resp) {
            // alert("暂无数据")
        }
    })
}