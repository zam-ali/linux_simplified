var timeout;

function load_debian() {
    document.getElementById('origin_dis_wrapper').className = 'go-away';
    timeout = setTimeout(debian_based, 1000);
}

function debian_based() {
    document.getElementById('origin_dis_wrapper').style.display = "none";
    document.getElementById('debian').style.display = "grid";
    document.getElementById("debian").className = "come";
}
function load_red() {
    document.getElementById('origin_dis_wrapper').className = 'go-away';
    timeout = setTimeout(red_based, 1000);
}

function red_based() {
    document.getElementById('origin_dis_wrapper').style.display = "none";
    document.getElementById('red').style.display = "grid";
    document.getElementById("red").className = "come";
}
function load_arch() {
    document.getElementById('origin_dis_wrapper').className = 'go-away';
    timeout = setTimeout(arch_based, 1000);
}

function arch_based() {
    document.getElementById('origin_dis_wrapper').style.display = "none";
    document.getElementById('arch').style.display = "grid";
    document.getElementById("arch").className = "come";
}





function load_origin_deb() {
    document.getElementById('debian').className = 'go-away';
    timeout = setTimeout(go_origin_deb, 1000);
}
function go_origin_deb(){
    document.getElementById('debian').style.display = "none";
    document.getElementById("origin_dis_wrapper").style.display = "grid";
    document.getElementById("origin_dis_wrapper").className = "come";
    
}
function load_origin_arch() {
    document.getElementById('arch').className = 'go-away';
    timeout = setTimeout(go_origin_arch, 1000);
}
function go_origin_arch(){
    document.getElementById('arch').style.display = "none";
    document.getElementById("origin_dis_wrapper").style.display = "grid";
    document.getElementById("origin_dis_wrapper").className = "come";
    
}
function load_origin_red() {
    document.getElementById('red').className = 'go-away';
    timeout = setTimeout(go_origin_red, 1000);
}
function go_origin_red(){
    document.getElementById('red').style.display = "none";
    document.getElementById("origin_dis_wrapper").style.display = "grid";
    document.getElementById("origin_dis_wrapper").className = "come";
    
}



