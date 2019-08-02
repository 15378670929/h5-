window.onload = function() {
    $.ajax({
        type: 'get',
        url: 'http://192.168.0.110/index.php/index/agent/products',
        data: {
            user_id: localStorage.getItem("agentuser_id")
        },
        success: function(res) {
            console.log(res)
            if (res.code == 1) {
                var html = ""
                res.data.map(item => {
                    html += `<li data-id='${item.id}'>
                        <div class="showlist">${item.info}</div>
                        <p>${item.name}</p>
                    </li>`
                })
                $(".list").html(html)
                $(".list li").on('click',function() {
                    console.log($(this).data("id"))
                    window.location.href = "./neworder.html?id="+$(this).data("id")
                })
            }
        }
    })
}