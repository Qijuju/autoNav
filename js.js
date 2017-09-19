/**
 * Created by oranq on 2017/9/18.
 */
var oBtn = document.getElementById("submit");
var ul = document.getElementById("ul");

oBtn.onclick = function () {
    var str = document.getElementsByTagName("input")[0].value;
    if (str === ""){
        return false;
    }else {
        ul.innerHTML += "<li>"+ str+"</li>&nbsp;"
    }

};
