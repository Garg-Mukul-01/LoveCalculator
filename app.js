let span = document.getElementById("footer-text");
let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let span_text = 0;
span.style.display = "none";


function Calculator(){
    if(name1.value && name2.value){
        span_text = Math.floor((Math.random()*100)+1);
        span.style.display = "initial";
        let str = (name1.value + name2.value).replace(/\s/g,"");
        str = str.toLowerCase();
        if(localStorage.getItem(str)){
            span_text = localStorage.getItem(str);
        }
        else{
            localStorage.setItem(str,span_text);
        }
        span.innerText = span_text+"%";
        name1.value="";
        name2.value="";
    }
    else{
        alert("Please Enter Valid Inputs");
    }
}
