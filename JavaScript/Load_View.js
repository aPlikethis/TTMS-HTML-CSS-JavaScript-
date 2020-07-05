var user = document.querySelectorAll('.username');
var password = document.querySelectorAll(".password");
for(var j = 0; j < user.length; j++) {
    user[j].addEventListener('focus', function() {
        if(this.value == 'username') {
            this.value = '';
            this.style.color = 'black';
        }
    });
}
for(var j = 0; j < password.length; j++) {
    password[j].addEventListener('focus', function() {
        if(this.value == 'password') {
            this.type = 'password';
            this.value = '';
            this.style.color = 'black';
        }
    });
}

for(var j = 0; j < user.length; j++) {
    user[j].addEventListener('blur', function() {
        if(this.value == '') {
            this.value = 'username';
            this.style.color = 'grey';
        }
    });
}

for(var j = 0; j < password.length; j++) {
    password[j].addEventListener('blur', function() {
        if(this.value == '') {
            this.value = 'password';
            this.type = 'text';
            this.style.color = 'grey';
        }
    });
    
}

var load = document.querySelector("a.load");
var Main_Load = document.querySelector("div.Main_Load_View");
load.onclick = function() {
    Main_Load.style.display = "none";
}

var InitViewBtn = document.querySelector("#initviewbtn");
var InitView = document.querySelector("#init");
var LoadView = document.querySelector("#load");
var InitBtn = document.querySelector("#initbtn");
InitViewBtn.addEventListener("click", function() {
    InitView.style.display = "block";
    LoadView.style.display = "none";
});
InitBtn.addEventListener("click", function() {
    InitView.style.display = "none";
    LoadView.style.display = "block";
});