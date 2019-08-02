$(".showorder").on('click',function(e) {
    if ($(this).attr("class") == "showorder") {
        return
    }else{
        $(this).removeClass().addClass("showorder");
        $(this).siblings().removeClass().addClass("hideorder");

        $.ajax({
            type: "get",
            url: "http://192.168.0.110/index.php/index/agent/index",
            data: {
                product_keyword: "",
                list_type: 1,
                user_id: localStorage.getItem("agentuser_id")
            },
            success: (res) => {
                console.log(res)
                if (res.code == 0) {
                    let html = ""
                    res.data.map((item,idx) => {
                        html += `<tr data-id='${item.id}' class='${item.status == 0 ? 'unup show' : item.status == 1 ? 'uped' : 'resolve show'}'>
                        <td data-id='${item.id}'>${idx}</td>
                        <td colspan="3">${item.product_name}</td>
                        <td>${item.status == 0 ? '未提交' : item.status == 1 ? '已提交' : '被收回'}</td>
                        <td class='Ungotonews'>查看</td>
                        </tr>
                        `
                    })
                    $("table tbody").html(html)
                    $(".Ungotonews").on('click',function() {
                        window.location.href = "./orderinfoT.html?id="+$($(this).siblings()[0]).data("id")
                    })
                }
            }
        })
    }
})
$(".hideorder").on('click',function(e) {
    if($(this).attr("class") == "hideorder"){
        $(this).removeClass().addClass("showorder");
        $(this).siblings().removeClass().addClass("hideorder");

        $.ajax({
            type: "get",
            url: "http://192.168.0.110/index.php/index/agent/index",
            data: {
                product_keyword: "",
                list_type: 2,
                user_id: localStorage.getItem("agentuser_id")
            },
            success: (res) => {
                console.log(res)
                if (res.code == 0) {
                    let html = ""
                    res.data.map((item,idx) => {
                        html += `<tr data-id='${item.id}' class='${item.status == 0 ? 'unup show' : item.status == 1 ? 'uped' : 'resolve show'}'>
                        <td data-id='${item.id}'>${idx+1}</td>
                        <td colspan="3">${item.product_name}</td>
                        <td>${item.status == 0 ? '未提交' : item.status == 1 ? '已提交' : '被收回'}</td>
                        <td class='Ungotonews'>查看</td>
                        </tr>
                        `
                    })
                    $("table tbody").html(html)
                    $(".Ungotonews").on('click',function() {
                        console.log('asd',$(this).data("id"))
                        window.location.href = "./orderinfoT.html?id="+$($(this).siblings()[0]).data("id")
                    })
                }
            }
        })
    }else{
        return
    }
})

window.onload = function() {
    $(".username").text(localStorage.getItem("agentuser_login"))

    // 获取接口渲染新增订单内容
    $.ajax({
        type: "get",
        url: "http://192.168.0.110/index.php/index/agent/index",
        data: {
            product_keyword: "",
            list_type: 1,
            user_id: localStorage.getItem("agentuser_id")
        },
        success: (res) => {
            console.log(res)
            if (res.code == 0) {
                let html = ""
                res.data.map((item,idx) => {
                    html += `<tr data-id='${item.id}' class='${item.status == 0 ? 'unup show' : item.status == 1 ? 'uped' : 'resolve show'}'>
                    <td data-id='${item.id}'>${idx+1}</td>
                    <td colspan="3">${item.product_name}</td>
                    <td>${item.status == 0 ? '未提交' : item.status == 1 ? '已提交' : '被收回'}</td>
                    <td class='Ungotonews'>查看</td>
                    </tr>
                    `
                })
                $("table tbody").html(html)
                $(".Ungotonews").on('click',function() {
                    console.log('asd',$($(this).siblings()[0]).data("id"))
                    window.location.href = "./orderinfoT.html?id="+$($(this).siblings()[0]).data("id")
                })
            }
        }
    })

    $(".neworder_btn").on('click',function() {
        window.location.href = "./orderlist.html"
    })
}