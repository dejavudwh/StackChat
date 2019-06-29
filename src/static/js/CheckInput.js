const { dialog  } = require('electron').remote;

export function isCorrectName(username) {
  if (username === "" || username === null) {
    dialog.showMessageBox({
      title: '提示',
      message: '请填写用户名！'
    })
    return false;
  } else if (/^\d.*$/.test(username)) {
    dialog.showMessageBox({
      title: '提示',
      message: '格式不正确，用户名不能以数字开头'
    })
    return false;
  } else if (!/^.{6,20}$/.test(username)) {
    dialog.showMessageBox({
      title: '提示',
      message: '字符长度有误，用户名合法长度为6-20个字符'
    })
    return false;
  } else if (!/^[\w_]*$/.test(username)) {
    dialog.showMessageBox({
      title: '提示',
      message: '含有非法字符，用户名只能包含_,英文字母，数字'
    })
    return false;
  } else if (!/^([a-z]|[A-Z])[\w_]{5,19}$/.test(username)) {
    dialog.showMessageBox({
      title: '提示',
      message: '格式不正确，用户名只能包含_,英文字母，数字'
    })
    return false;
  }

  return true;
}

export function isCorrectEmail(email){
  if(email === null || email === ""){
    dialog.showMessageBox({
      title: '提示',
      message: '请输入E-mail地址!'
    })
    return false; 
  }
  var regExp = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  if(!regExp.test(email)){
    dialog.showMessageBox({
      title: '提示',
      message: '您输入的E-mail地址不正确!'
    })
    return false; 
  }

  return true;
}
