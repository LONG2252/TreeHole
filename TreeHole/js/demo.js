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
        $.post("后台页面", { "username": username, "pwd": pwd }, function (data) {
        if (data == "登陆成功") {
                layer.alert("登陆成功！",
                            {
                                title: '提示',
                                icon:6
                            })
        }
        else {
            layer.alert("登陆失败！",
                            {
                                title: '提示',
                                icon:5
                            })
        }
        })   /*后台验证*/
    }
}
function Register() {
    var username = $.trim($("#txtUserName").val()); //获取用户名
    var pwd = $.trim($("#txtPwd").val()); //获取密码
    if (username == "" || pwd == "" || pwd == "") {
        layer.alert("用户名或密码不能为空！",
            {
                title: '提示',
                icon: 5
            })
    }
    else{
        $.post("后台页面", { "username": username, "pwd": pwd }, function (data) {
            if (data == "账号已存在") {
                layer.alert("账号已存在！",
                            {
                                title: '提示',
                                icon: 5
                            })
            }
            else {
                layer.alert("注册成功！",
                            {
                                title: '提示',
                                icon:6
                            })
            }
        })   /*后台验证*/
    }  
}