function pp(c) {
            let cz = document.getElementById(c.id);
            if (cz.paused) {
                cz.play();
            } else {
                cz.pause();
            }
        }
function pus(x){
document.getElementById('str').style.display='none';
let vc=document.getElementById(x);
vc.pause();
}
function plyvid(x,s){

let vc=document.getElementById(x);
vc.src=s;

if(vc.paused){

vc.play();
}
else{
vc.pause();
}

}
function disto(xxx){
document.getElementById('lik').src="https://img.icons8.com/?size=100&id=87&format=png&color=FFFFFF";
document.getElementById('str').style.display='block';
document.getElementById('strp').innerHTML=xxx+"'s new Stoery";
document.getElementById('cmts').src="https://img.icons8.com/?size=100&id=2837&format=png&color=FFFFFF";

}


let infi=10000;
async function loadimg(){
let fetd= await fetch("https://api.github.com/repos/microintel/Resources/contents/photo");
let con=await fetd.json();
document.getElementById('load').style.display='none';

const max = parseInt(con.length-2);
        const unar = [];
        
        while (unar.length <= max) {
        const rann = Math.floor(Math.random() * (max + 1));
        if (!unar.includes(rann)) {
        unar.push(rann);
        }
        }


for(let xm in unar){

let imglike=con[unar[xm]]["download_url"];
let imgdown=con[unar[xm]]["name"];

let imgnam=con[unar[xm]]["name"];
if(imgnam.includes('.jpg')){
imgnam=con[unar[xm]]["name"].replaceAll('.jpg','@');
}
if(imgnam.includes('.png')){
imgnam=con[unar[xm]]["name"].replaceAll('.png','_');
}
if (imgnam == "xxx.html" || imgnam == "index.html" || imgnam == "home.html" || imgnam == "home.css" || imgnam == "home.js" || imgnam == "pro.html" || imgnam == "pro.css" || imgnam == "pro.js" || imgnam == "search.html" || imgnam == "search.css" || imgnam == "search.js" || imgnam == "ctus.html") {
    continue;
} else {
    console.log("html files not included");
}

let shha=con[unar[xm]]["sha"];
let xxd=`
<center>
<div>
<div>
<img class="iii" src="${imglike}" loading="lazy">
<h6 style="display:flex;align-items:center;width:220px;overflow-x:auto;">${imgnam}</h6>
</div style="display:flex;justify-content:center;align-items:center;">
<span><img src="https://img.icons8.com/?size=100&id=102729&format=png&color=FFFFFF" width="25px" height="25px"></span>
<br><br>
</div>
<img class="boi" src="${imglike}" loading="lazy">

<div class="deta">
<div><span style="opacity:1.0;"><img style="opacity:1.0;" src="https://img.icons8.com/?size=100&id=87&format=png&color=FFFFFF" width="25px" onclick="this.src='https://img.icons8.com/?size=100&id=uG-gOKWvvi8T&format=png&color=000000'" height="25px"></span><span><img style="border-radius:1px;" src="https://img.icons8.com/?size=100&id=HtMJD4UUPVM3&format=png&color=FFFFFF" width="25px" height="25px"></span><span><img style="border-radius:1px;" src="https://img.icons8.com/?size=100&id=12582&format=png&color=FFFFFF" name="${imglike}" onclick="navigator.share({url:this.name});" width="21px" height="21px"></span>
</div>

<a href="${imgnam}" download><span><img src="https://img.icons8.com/?size=100&id=gbp6jdMV7Uzb&format=png&color=FFFFFF" onclick="this.src='https://img.icons8.com/?size=100&id=7690&format=png&color=FA5252'" width="25px" height="25px"></span></a>
</div>

<div class="det">
<h6>${shha}</h6>
</div>
</center>
`;

const pa = document.createElement("section");
pa.innerHTML =xxd;
document.getElementById("postt").appendChild(pa);
//document.getElementById("postt").innerHTML+=xxd;

}


if(!infi==0){

loadimg();
infi=infi-1;
}

}
loadimg();

function hi(){
document.getElementById('pari').style.opacity="1.0";
document.getElementById('con').style.display="none";
}
function fff(x,m){
document.getElementById('imm').src=x;
document.getElementById('gfgf').name=x;
document.getElementById('ghgh').href=m;
document.getElementById('pari').style.opacity="0.4";
document.getElementById('con').style.display='block';

}
