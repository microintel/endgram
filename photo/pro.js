async function sloadimg(){
let fetd= await fetch("https://api.github.com/repos/microintel/endgram/contents/photo");

let con=await fetd.json();
let ranN=await Math.floor(Math.random()*parseInt(con.length));
// alert(ranN);
document.getElementById('proim').src=con[ranN]["download_url"];
document.getElementById('tpost').innerHTML=con.length+"<br>posts";
document.getElementById('tfol').innerHTML=ranN*15+"<br>followers";
document.getElementById('tflw').innerHTML=ranN*20+"<br>following";
document.getElementById('abbt').innerHTML=con[ranN]["sha"];
document.getElementById('loadd').style.display="none";



const max = parseInt(con.length-2);;
        const unar = [];
        
        while (unar.length <= max) {
        const rann = Math.floor(Math.random() * (max + 1));
        if (!unar.includes(rann)) {
        unar.push(rann);
        }
        }
        
        
for(let xm in unar){

let imgli=con[unar[xm]]["download_url"];

let imgna=con[unar[xm]]["name"];

if (imgna == "xxx.html" || imgna == "index.html" || imgna == "home.html" || imgna == "home.css" || imgna == "home.js" || imgna == "pro.html" || imgna == "pro.css" || imgna == "pro.js" || imgna == "search.html" || imgna == "search.css" || imgna == "search.js" || imgna == "ctus.html") {
    continue;
} else {
    console.log("html files not included");
}

const pa = document.createElement("img");
pa.className ="imaggg";
pa.loading="lazy";
pa.src=imgli;
document.getElementById("po").appendChild(pa);
//document.getElementById("postt").innerHTML+=xxd;

}

}
sloadimg();

function fff(x){
document.getElementById('po').style.opacity="0.4";
document.getElementById('cat').style.opacity="0.4";
document.getElementById('esp').style.opacity="0.4";
document.getElementById('pf').style.opacity="0.4";
document.getElementById('idd').style.opacity="0.4";

document.getElementById('imm').src=x;
document.getElementById('con').style.display='block';

}   

function hi(){
document.getElementById('po').style.opacity="1.0";
document.getElementById('cat').style.opacity="1.0";
document.getElementById('esp').style.opacity="1.0";
document.getElementById('pf').style.opacity="1.0";
document.getElementById('idd').style.opacity="1.0";
document.getElementById('con').style.display="none";
}

