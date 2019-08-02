$(".input_sub").on("click",function(){
    var user = $(".user").val()
    var pass = $(".pwd").val()

    // 登录接口
    $.ajax({
        type: 'post',
        url:"http://192.168.0.110/index.php/index/index/agent_login",
        data:{
            user_login: user,
            user_pass: pass
        },
        success:(res)=>{
            if (res.code == 1) {
                document.cookie = "user_login="+user;
                localStorage.setItem('agentuser_id',res.user.user_id)
                localStorage.setItem('agentuser_login',res.user.user_login)
                window.location.href = './Unorders.html';
            }
        }
    })

    return false;
})

