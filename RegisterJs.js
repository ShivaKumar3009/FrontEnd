function validate(){
    var u=document.getElementById('user').value
    var e=document.getElementById('email').value
    var p=document.getElementById('pass').value
    var m=document.getElementById('mob').value
    var ereg=/^([\.-\w]+)@([\.-\w]+).([a-z]{2,10})$/
    var mreg=/^[6-9]\d{9}$/
    if (u.trim()=='' || p.trim()==''){
        alert("enter valid Username or Password")
        return false
    }
    if (!ereg.test(e)){
        alert("Enter valid email id")
        return false
    }
    if (!mreg.test(m)){
        alert("Enter valid mobile number")
        return false
    }
    else{
        return true
    }
}