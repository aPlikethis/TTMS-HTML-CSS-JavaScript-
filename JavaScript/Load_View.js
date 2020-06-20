var user = document.querySelector('.username');
var password = document.querySelector(".password");
user.addEventListener('focus', function() {
    if(this.value == 'username') {
        this.value = '';
        this.style.color = 'black';
    }
});
password.addEventListener('focus', function() {
    if(this.value == 'password') {
        this.type = 'password';
        this.value = '';
        this.style.color = 'black';
    }
});

user.addEventListener('blur', function() {
    if(this.value == '') {
        this.value = 'username';
        this.style.color = 'grey';
    }
});
password.addEventListener('blur', function() {
    if(this.value == '') {
        this.value = 'password';
        this.type = 'text';
        this.style.color = 'grey';
    }
});


var load = document.querySelector("a.load");
var Main_Load = document.querySelector("div.Main_Load_View");
load.onclick = function() {
    Main_Load.style.display = "none";
}