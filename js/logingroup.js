$(".input_sub").on("click",function(){
    var user = $(".user").val()
    var pass = $(".pwd").val()

    // 登录接口
    $.post({
        url:"http://192.168.0.110:80/index.php/index/index/group_login",
        // url:"http://192.168.0.14:84/index.php/index/index/test",
        data:{
            user_login: user,
            user_pass: pass
        },
        success:(res)=>{
            console.log(res)
            if (res.code == 1) {
                document.cookie = "user_login="+user;
                localStorage.setItem('user_id',res.user.user_id)
                window.location.href = './event.html';
            }
        }
    })

    return false;
})

