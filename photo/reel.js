
alert("This reel is crafted exclusively for mobile devices to give you the best experience. Please view it on your phone for optimal results!");


async function sloadimg(){
let fetd= await fetch("https://api.github.com/repos/microintel/endgram/contents/photo");
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

let ranPro= await fetch("https://picsum.photos/200/200");
let fxc1= await fetch("https://randomuser.me/api/");
let cxc1= await fxc1.json();
let ranProi=cxc1.results[0]["picture"]["thumbnail"];

let f= await fetch("https://randomuser.me/api/");
let c= await f.json();
let ranUser= await c.results[0]["name"]["first"];
let ranProDes=cxc1.results[0]["location"]["timezone"]["description"];
let ranProMu=cxc1.results[0]["login"]["username"];
let ranProPo=cxc1.results[0]["name"]["last"];

let xxd=`
<div  ondblclick="ccvvi()" class="bdimg">
<img class="rimg"  src="${imglikee}" loading="lazy">
</div>
      <div class="lcs">
      <i class="bi bi-heart-fill" style="font-size: 1.5rem;border-radius: 50%; padding:6px;filter: drop-shadow(2 -6mm 4mm black);"></i><i class="bi bi-chat" style="font-size: 1.5rem;"></i><i class="bi bi-send" onclick="navigator.share({title:'from Endgram',url:this.title});" title="${imglikee}" style="font-size: 1.5rem;"></i><i class="bi bi-three-dots-vertical" style="font-size: 1.5rem;"></i><img src="${imglikee}">
      </div>
      
      <div class="relda">
      <div class="profi">
      <img src="${ranProi}"><p class="userN">${ranUser}</p> <button onclick="this.innerHTML='following';">follow</button>
      </div>
      <div>
      <p class="prodes">${ranProDes}</p>
      </div>
      <div class="mus">
      <p class="bi bi-music-note-beamed" style="display:flex;font-size: 1rem;overflow-x:auto;width:45vw;">_${ranProMu}</p>
      <p class="bi bi-person-fill" style="display:flex;font-size:1rem;overflow-x:auto;width:40vw;">_ ${ranProPo}</p>
      </div>
      </div>
`;

const pa = document.createElement("div");
pa.innerHTML =xxd;
pa.className="reelPo";
document.getElementById("loadi").style.display="none";
document.getElementById("reeel").appendChild(pa);
//document.getElementById("postt").innerHTML+=xxd;

}
}
sloadimg();

/*


<div class="reelPo">
      <center><img class="rimg" src="https://picsum.photos/200/300"></center>
      <div class="lcs">
      <i class="bi bi-heart-fill" style="font-size: 1.5rem;border-radius: 50%; padding:6px;"></i><i class="bi bi-chat" style="font-size: 1.5rem;"></i><i class="bi bi-send" onclick="alert(this.title)" title="h" style="font-size: 1.5rem;"></i><i class="bi bi-three-dots-vertical" style="font-size: 1.5rem;"></i><img src="https://picsum.photos/100/100">
      </div>
      
      <div class="relda">
      <div class="profi">
      <img src="https://picsum.photos/200/200"><p>kdeej</p> <button>dkdnnd</button>
      </div>
      <div>
      <p>nddjdsmjsnsnsjsns</p>
      </div>
      <div class="mus">
      <p class="bi bi-music-note-beamed" style="display:flex;font-size: 1rem;overflow-x:auto;width:30%;"> _dndndnjdnd</p>
      <p class="bi bi-person-fill" style="display:flex;font-size:1rem;overflow-x:auto;width:40%;">_dndjnddjdjdndjjddn</p>
      </div>
      </div>
      </div>
      
      
      */
      
      
      /*
      .bi-heart-fill:hover{
      color:red;
      animation:blihe 0.4s ease;
      }
      
      @keyframes blihe{
      0%{transform:scale(1.0);}
      
      50%{transform:scale(1.4);}
      
      100{transform:scale(1.0);}
      }
      */
      function ccvvi(){
      
      document.getElementById("blht").style.display="block";
      setTimeout(()=>{
      document.getElementById("blht").style.display="none";
      },500);
      
      }
      
      function cvi(x){
      let cnofi=document.getElementById("vii");
      if(x=='h'){
      if(cnofi.className=="bi bi-volume-mute"){
      cnofi.className="bi bi-volume-up";
      }
      else{
      cnofi.className="bi bi-volume-mute";
      }
      }
      }
      
      cvi();