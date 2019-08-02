var list_type

$(".showorder").on('click',function(e) {
    if ($(this).attr("class") == "showorder") {
        return
    }else{
        $.ajax({
            type: "get",
            url: "http://192.168.0.110:80/index.php/index/group/index",
            data:{
                list_type: 1,
                keyword: "",
                user_id: localStorage.getItem("user_id")
            },
            dataType: "json",
            success: function(res) {
                console.log(res)
                if (res.code == 1) {
                    let jiname = res.data[0].project_jiname;
                    $(".username").text(jiname);
                    let list = res.data;
                    let html = "<tr class='show'>";
                    list.map((item,idx) => {
                        html += `<td data-listid='${item.id}'>${idx+1}</td>
                        <td>${item.project_name}</td>
                        <td>${item.starttime}</td>
                        <td>${item.endtime}</td>
                        <td class="gotodetails">查看详情</td>
                        </tr>
                        `
                    })
                    $("table tbody").html(html);
                    $(".gotodetails").on('click',function(){
                        var list_id = $($(this).siblings()[0]).data("listid");
                        console.log(list_id)
                        window.location.href = './details.html?id='+list_id+'&list_type='+1;
                    })
                }
            },
            error: function(resp) {
                // alert("暂无数据")
            }
        })
        $(this).removeClass().addClass("showorder");
        $(this).siblings().removeClass().addClass("hideorder");
    }
})
$(".hideorder").on('click',function(e) {
    if($(this).attr("class") == "hideorder"){
        $.ajax({
            type: "get",
            url: "http://192.168.0.110:80/index.php/index/group/index",
            data:{
                list_type: 2,
                keyword: "",
                user_id: localStorage.getItem("user_id")
            },
            dataType: "json",
            success: function(res) {
                console.log(res)
                if (res.code == 1) {
                    let jiname = res.data[0].project_jiname;
                    $(".username").text(jiname);
                    let list = res.data;
                    let html = "<tr class='show'>";
                    list.map((item,idx) => {
                        html += `<td data-listid='${item.id}'>${idx+1}</td>
                        <td>${item.project_name}</td>
                        <td>${item.starttime}</td>
                        <td>${item.endtime}</td>
                        <td class="gotodetails">查看详情</td>
                        </tr>
                        `
                    })
                    $("table tbody").html(html);
                    $(".gotodetails").on('click',function(){
                        var list_id = $($(this).siblings()[0]).data("listid");
                        console.log(list_id)
                        window.location.href = './details.html?id='+list_id+'&list_type='+1;
                    })
                }else {
                    let html = ""
                    $("table tbody").html(html);
                }
            },
            error: function(resp) {
                // alert("暂无数据")
            }
        })
        $(this).removeClass().addClass("showorder");
        $(this).siblings().removeClass().addClass("hideorder");
    }else{
        return
    }
})

window.onload = function() {
    $.ajax({
        type: "get",
        url: "http://192.168.0.110:80/index.php/index/group/index",
        data:{
            list_type: 1,
            keyword: "",
            user_id: localStorage.getItem("user_id")
        },
        dataType: "json",
        success: function(res) {
            console.log(res)
            if (res.code == 1) {
                let list_type = 1
                let jiname = res.data[0].project_jiname;
                $(".username").text(jiname);
                let list = res.data;
                let html = "<tr class='show'>";
                list.map((item,idx) => {
                    html += `<td data-listid='${item.id}'>${idx+1}</td>
                    <td>${item.project_name}</td>
                    <td>${item.starttime}</td>
                    <td>${item.endtime}</td>
                    <td class="gotodetails">查看详情</td>
                    </tr>
                    `
                })
                $("table tbody").html(html);
                $(".gotodetails").on('click',function(){
                    var list_id = $($(this).siblings()[0]).data("listid");
                    console.log(list_id)
                    window.location.href = './details.html?id='+list_id+'&list_type='+list_type;
                })
            }
        },
        error: function(resp) {
            // alert("暂无数据")
        }
    })
}
