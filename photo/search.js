async function sloadimg(){
let fetd= await fetch("https://api.github.com/repos/microintel/Resources/contents/photo");
let con=await fetd.json();

const max = parseInt(con.length-2);;
        const unar = [];
        
        while (unar.length <= max) {
        const rann = Math.floor(Math.random() * (max + 1));
        if (!unar.includes(rann)) {
        unar.push(rann);
        }
        }
        
        
for(let xm in unar){

let imglikee=con[unar[xm]]["download_url"];

let imgna=con[unar[xm]]["name"];


if (imgna == "xxx.html" || imgna == "index.html" || imgna == "home.html" || imgna == "home.css" || imgna == "home.js" || imgna == "pro.html" || imgna == "pro.css" || imgna == "pro.js" || imgna == "search.html" || imgna == "search.css" || imgna == "search.js" || imgna == "ctus.html") {
    continue;
} else {
    console.log("html files not included");
}


let xxd=`
<img class="imaggg" name="${imgna}" onclick="fff(this.src,this.name)" src="${imglikee}" loading="lazy">
`;

const pa = document.createElement("div");
pa.innerHTML =xxd;
pa.id="fffl";
document.getElementById("ddddi").appendChild(pa);
//document.getElementById("postt").innerHTML+=xxd;

}



}
sloadimg();

function see() {
    let da = document.getElementById('wht').value;
    let xxx = document.getElementsByClassName('imaggg');
    for (let c = 0; c < xxx.length; c++) {
        if (xxx[c].name.includes(da)) {
            xxx[c].style.display = "block";
        } else {
            xxx[c].style.display = "none";
        }
    }
}
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