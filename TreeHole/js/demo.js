function LoginBox()
{
    layer.open({
        type:1,
        title:"登录",
        area:["214px", "200px"],
        content:$("#loginbox")
    })
}

function Login() {
    var username = $.trim($("#txtUserName").val()); //获取用户名
    var pwd = $.trim($("#txtPwd").val()); //获取密码
    if (username == "" || pwd == "") {
        layer.alert("用户名或密码不能为空！",
            {
                title: '提示',
                icon:5
            })
    }
    else {
        $.post("后台页面",{"username":username,"pwd":pwd}, function(data){})   /*后台验证*/
    }
}