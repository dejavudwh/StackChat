const electron = window.electron;
const dialog = window.electron.dialog = dialog;

export default function checkUsername(username) {
  if (username == "" || username == null) {
    alert("请填写用户名！");
  } else if (/^\d.*$/.test(username)) {
    // alert("格式不正确，用户名不能以数字开头");
    dialog.showErrorBox("error", "格式不正确，用户名不能以数字开头")
  } else if (!/^.{6,20}$/.test(username)) {
    alert("字符长度有误，合法长度为6-20个字符");
  } else if (!/^[\w_]*$/.test(username)) {
    alert("含有非法字符，用户名只能包含_,英文字母，数字");
  } else if (!/^([a-z]|[A-Z])[\w_]{5,19}$/.test(username)) {
    alert("格式不正确，用户名只能包含_,英文字母，数字");
  }
}
