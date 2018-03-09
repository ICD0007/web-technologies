
document.getElementById('hp').onmouseover = function() {
    console.log("ds");
    document.getElementById('hp').style.color = "black";
    document.getElementById('hp').style.backgroundColor = "white";
};
document.getElementById('hp').onmouseout = function() {
    console.log("ds");
    document.getElementById('hp').style.color = "white";
    document.getElementById('hp').style.backgroundColor = "#383E4C";
};
document.getElementById('au').onmouseover = function() {
    console.log("ds");
    document.getElementById('au').style.color = "black";
    document.getElementById('au').style.backgroundColor = "white";
};
document.getElementById('au').onmouseout = function() {
    console.log("au");
    document.getElementById('au').style.color = "white";
    document.getElementById('au').style.backgroundColor = "#383E4C";
};
document.getElementById('Sr').onmouseover = function() {
    console.log("ds");
    document.getElementById('Sr').style.color = "black";
    document.getElementById('Sr').style.backgroundColor = "white";
};
document.getElementById('Sr').onmouseout = function() {
    console.log("ds");
    document.getElementById('Sr').style.color = "white";
    document.getElementById('Sr').style.backgroundColor = "#383E4C";
};
document.getElementById('ct').onmouseover = function() {
    console.log("ds");
    document.getElementById('ct').style.color = "black";
    document.getElementById('ct').style.backgroundColor = "white";
};
document.getElementById('ct').onmouseout = function() {
    console.log("au");
    document.getElementById('ct').style.color = "white";
    document.getElementById('ct').style.backgroundColor = "#383E4C";
};
document.getElementById('catpoo').onmouseover = function() {
    console.log("ds");
    document.getElementById('catpoo').style.color = "black";
    document.getElementById('catpoo').style.backgroundColor = "white";
};
document.getElementById('catpoo').onmouseout = function() {
    console.log("au");
    document.getElementById('catpoo').style.color = "white";
    document.getElementById('catpoo').style.backgroundColor = "#383E4C";
};
function onbuttonclick() {
    isitEmpty();
    window.alert(document.getElementById("comment").value);
    console.log("working!!");

}
function isitEmpty() {
    if (document.getElementById("name").value == "") {
        window.alert("name empty");
    }
    if (document.getElementById("mail").value == "") {
        window.alert("mail empty");
    }
    if (document.getElementById("subject").value == "") {
        window.alert("subject empty");
    }
}
document.getElementById("greenbttn").onclick = function greenbttn() {
    document.getElementById("greenbttn").style.backgroundColor = "black";
}


document.getElementById("mygithub").onclick = function my() {
    location.href = "https://github.com/bassmanity12"
}