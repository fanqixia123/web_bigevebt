$(function () {
  //点击去注册账号的链接
  $('#link_reg').on('click', function () {
    $('.login-box').hide()
    $('.reg-box').show()
  })
  // 点击去登录的链接
  $('#link_login').on('click', function () {
    $('.login-box').show()
    $('.reg-box').hide()
  })
  //从layui中获取form对象
  var form = layui.form
  // 通过form.verify()函数自定义规则
  form.verify({
    pwd: [/^[\s]{6,12}$/, '密码必须6-12位,且不能出现空格'],
    repwd: function (value) {
      //通过形参拿到的确认密码框的内容
      // 还需要拿到密码框的内容
      // 然后进行一次等于的判断
      // 如果判断失败,return提示
      var pwd = $('.reg-box [name=password]').val()
      if (pwd !== value) {
        return '俩次密码不一样!'
      }
    }
  })







})








