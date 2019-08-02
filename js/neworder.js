window.onload = function() {
    console.log(window.location.search.slice(1).split("=")[1])

    $.ajax({
        type: "get",
        url: "http://192.168.0.110/index.php/index/agent/product_detial",
        data: {
            product_id: 1,
            user_id: localStorage.getItem("agentuser_id")
        },
        success: function(res) {
            console.log(res)
            if (res.code == 1) {
                $(".productinfo ul li:eq(0)").html($(".productinfo ul li:eq(0)").html()+ 'info:' + res.product.info)
                $(".productinfo ul li:eq(1)").html($(".productinfo ul li:eq(1)").html()+ 'name:' + res.product.name)
                $(".neworder_input label:eq(0) input").val(res.product.other_key)
                console.log($(".neworder_input label:eq(0) input"))
            }
        }
    })

    $(".savebtn").on('click',function() {
        var neworder_name = $(".name").val();
        var neworder_num = $(".num").val();
        var objData = {}
        var formData = new FormData()
        formData.append('file',$(".baodan")[0].files[0])
        formData.forEach((value, key) => objData[key] = value);
        $.ajax({
            type: "post",
            url: "http://192.168.0.110/index.php/index/agent/add_order",
            // contentType:false,
            // processData:false,
            // cache: false,
            data: {
                product_id: window.location.search.slice(1).split("=")[1],
                is_submit: 1,
                user_id: localStorage.getItem("agentuser_id"),
                baodan: JSON.stringify(objData),
                price: 12312,
                baofei: 1213,
                ge_name: neworder_name,
                wx_nickname: "ewq",
                ge_mobile: 12354,
                ge_idcard: neworder_num,
                starttime: Date.now(),
                endtime: 2100-01-01,
            },
            success: function(res) {
                console.log(res)
                if (res.code == 1) {
                    alert(res.data)
                }
            },
        })
    })

    $(".submitbtn").on('click',function() {
        var neworder_name = $(".name").val();
        var neworder_num = $(".num").val();
        var objData = {}
        var formData = new FormData()
        formData.append('file',$(".baodan")[0].files[0])
        formData.forEach((value, key) => objData[key] = value);
        $.ajax({
            type: "post",
            url: "http://192.168.0.110/index.php/index/agent/add_order",
            // contentType:false,
            // processData:false,
            // cache: false,
            data: {
                product_id: window.location.search.slice(1).split("=")[1],
                is_submit: 2,
                user_id: localStorage.getItem("agentuser_id"),
                baodan: JSON.stringify(objData),
                price: 12312,
                baofei: 1213,
                ge_name: neworder_name,
                wx_nickname: "ewq",
                ge_mobile: 12354,
                ge_idcard: neworder_num,
                starttime: Date.now(),
                endtime: 2100-01-01,
            },
            success: function(res) {
                console.log(res)
                if (res.code == 1) {
                    alert(res.data)
                }
            },
        })
    })
}