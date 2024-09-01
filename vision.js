let mcc=1;
let mxx=2;
let eeee=1;
//    val  max
function inpuV(in1,in2,in3){
let cci=[in1,in2,in3];

for(let x in cci){
let dic= document.getElementById(cci[x]);
if(dic.value==""){

    document.getElementById('errr').innerHTML = "Please Fill All Input Fields..";
    document.getElementById('errr').style.display = 'block';
} else {
    document.getElementById('errr').style.display = 'none';
}


}


}


function ins(id,val){

if (val > 100000 || val < 1) {
    document.getElementById(id).style.backgroundColor = 'red';
    document.getElementById('errr').innerHTML = "Investment must be between 1 and 1,00,000";
    document.getElementById('errr').style.display = 'block';
} else {
    document.getElementById(id).style.backgroundColor = 'white';
    document.getElementById('errr').style.display = 'none';
}


xxx();
}

function ret(id,val){

if (val > 69 || val < 1) {
    document.getElementById(id).style.backgroundColor = 'red';
    document.getElementById('errr').innerHTML = "return rate must be between 1% & 69%..";
    document.getElementById('errr').style.display = 'block';
} else {
    document.getElementById(id).style.backgroundColor = 'white';
    document.getElementById('errr').style.display = 'none';
}


xxx();
}

function ver(val,iid){

if (val > 50 || val < 1) {
    document.getElementById(iid).style.backgroundColor = 'red';
    document.getElementById('errr').innerHTML = "Enter Duration Period Upto 50yrs ";
    document.getElementById('errr').style.display = 'block';
} else {
    document.getElementById(iid).style.backgroundColor = 'white';
    document.getElementById('errr').style.display = 'none';
}


xxx();
}


let dmy= new Date();
let monM=dmy.getMonth()+1;
let dayM=dmy.getDate();
let yearM=dmy.getFullYear();
//alert(monM+"_"+dayM+"_"+yearM)

function ftn(n) {
    let sexx = Math.floor(n / 1000000000000000000000);
    n %= 1000000000000000000000;
    let quint = Math.floor(n / 1000000000000000000);
    n %= 1000000000000000000;
    let quia = Math.floor(n / 1000000000000000);
    n %= 1000000000000000;
    let trill = Math.floor(n / 1000000000000);
    n %= 1000000000000;
    let billion = Math.floor(n / 1000000000);
    n %= 1000000000;
    let crore = Math.floor(n / 10000000);
    n %= 10000000;
    let lakh = Math.floor(n / 100000);
    n %= 100000;
    let thousand = Math.floor(n / 1000);
    n %= 1000;
    let rupees = n;

    let parts = [];
    if (sexx) {
        parts.push(sexx + "<font style='color:red'><sup>S</sup></font>");}
    if (quint) {
        parts.push(quint + "<font style='color:red'><sup>Qi</sup></font>");}
    if (quia) {
        parts.push(quia + "<font style='color:red'><sup>Q</sup></font>");}
    if (trill) {
        parts.push(trill + "<font style='color:red'><sup>T</sup></font>");}
    if (billion) {
        parts.push(billion + "<font style='color:red'><sup>B</sup></font>");
    }
    if (crore) {
        parts.push(crore + "<font style='color:red'><sup>Cr</sup></font>");   }
    if (lakh) {
        parts.push(lakh + "<font style='color:red'><sup>Lk</sup></font>");
           }
    if (thousand) {
        parts.push(thousand + "<font style='color:red'><sup>k</sup></font>"); }
    if (rupees) {
        parts.push(rupees + "<font style='color:red'><sup>rs</sup></font>");
        }

    return parts.join(' ');
}




function ind(number) {
            let numStr = number.toString();
           // alert(numStr);
            let result = '';
            let counter = 0;

            for (let i = numStr.length - 1; i >= 0; i--) {
                result = numStr[i] + result;
                //alert(result);
                counter++;

                if (counter === 3 && i !== 0) {
                    result = ',' + result;
                    counter = 0;
                }
                else if (counter === 2 && i > 0 && numStr.length - i > 3) {
                    result = ',' + result;
                    counter = 0;
                }
            }

            return result;
        }

        function fm(numm) {
            let number = numm;
            let formattedNumber = ind(number);
           // document.getElementById('formattedNumber').innerText = formattedNumber;
           return formattedNumber;
        }
let monIA= document.getElementById('miv');
let monN=  document.getElementById('mivn');
let annR=  document.getElementById('ar');
let annN=   document.getElementById('arn');
let yrs=  document.getElementById('ip');
let yrsN=  document.getElementById('ipn');

//alert(annN.value);




function exar(va){
annN.value=va;
xxx();
}
function  inv(va){
monN.value=va;
xxx();
}
function iy(va){
yrsN.value=va;
xxx();
}
function xxx(){
document.getElementById('mrrrr').style.display="block";
document.getElementById('tabbb').style.display="block";
document.getElementById('fc').style.display="block";


let mr=parseFloat(annN.value/12/100);
let i=parseFloat(monN.value);
let y=parseFloat(yrsN.value);
let xxxc=i * ((((1 +mr)**(y*12))-1) * (1 +mr))/mr;
let toti=i*y*12;
let e=xxxc-toti;
//alert("total value "+xxxc.toFixed(2)+"<br><br><br>"+"tital investment "+toti.toFixed(2)+"<br><br><br>"+"earned "+e.toFixed(2));
//document.write(i);

let fcinv = parseFloat(toti.toFixed(2)); // total inv
let fce = parseFloat(e.toFixed(2)); // earn

let redforti = ((fcinv) / (fcinv + fce) * 100).toFixed(2);
//alert(redforti+"___");

let totalin = parseFloat(redforti);
let totalearn = (100 - totalin).toFixed(2);
//alert(totalearn+"$$$$");
eeee=totalearn;
xxxv();
let cccc="conic-gradient(var(--xx) 0%, var(--xx) "+redforti+"%,var(--cc) "+redforti+"%, var(--cc) 100%)";
//alert(cccc);

document.getElementById('pi').style.background=cccc;
document.getElementById('pi').style.display='none';

document.getElementById('ina').innerHTML= ftn(parseInt(fm(toti.toFixed(0)).replace(/,/g,""),10));
document.getElementById('retu').innerHTML=ftn(parseInt(fm(e.toFixed(0)).replace(/,/g,""),10));
document.getElementById('tea').innerHTML=ftn(parseInt(fm(xxxc.toFixed(0)).replace(/,/g,""),10));

fut(y);
}

let root = document.documentElement;
let ran= Math.floor(Math.random()*4);
let cd={
//    invest    earn     bubg       buc     bgg
"0":["#00BF63","#C1FF72","#FFDE59","black","#FFDE59"],
"1":["#5E17EB","#5CE1E6","#5E17EB","white","#5E17EB"],
"2":["#C1FF72","#FFFFFF","#C1FF72","black","#C1FF72"],
"3":["#5E17EB","#FF914D","#FF914D","#FFFFFF","#5E17EB"],
};

let cccv=cd[ran];
root.style.setProperty("--br",cd[ran][2]);
root.style.setProperty("--bc",cd[ran][3]);
root.style.setProperty('--cc', cd[ran][0]);
root.style.setProperty('--xx', cd[ran][1]);
root.style.setProperty("--bgg",cd[ran][4]);

mcc=cd[ran][0];
mxx=cd[ran][1];
  
function futx(yr){

let mr=parseFloat(annN.value/12/100);
let i=parseFloat(monN.value);
let y=parseFloat(yr);
let xxxc=i * ((((1 +mr)**(y*12))-1) * (1 +mr))/mr;
let toti=i*y*12;
let e=xxxc-toti;
//alert("total value "+xxxc.toFixed(2)+"<br><br><br>"+"tital investment "+toti.toFixed(2)+"<br><br><br>"+"earned "+e.toFixed(2));
//document.write(i);

let fcinv = parseFloat(toti.toFixed(2)); // total inv
let fce = parseFloat(e.toFixed(2)); // earn

let redforti = ((fcinv) / (fcinv + fce) * 100).toFixed(2);
//alert(redforti+"___");

let totalin = parseFloat(redforti);
let totalearn = (100 - totalin).toFixed(2);
//alert(totalearn+"$$$$");
let dataa=[fm(toti.toFixed(0)),fm(e.toFixed(0)),fm(xxxc.toFixed(0))];
return dataa;

}

//alert(parseInt(futx(50)[2].replace(),10));

function fut(yr){

document.getElementById('fv11').textContent= (dayM)+"/"+(monM)+"/"+(yearM)+" [ 1y ]";
document.getElementById('fv12').innerHTML=ftn(parseInt(futx(2)[0].replace(/,/g,""),10));
document.getElementById('fv13').innerHTML= ftn(parseInt(futx(2)[1].replace(/,/g,""),10));
document.getElementById('fv14').innerHTML= ftn(parseInt(futx(2)[2].replace(/,/g,""),10));

document.getElementById('fv21').innerHTML=  (dayM)+"/"+(monM)+"/"+(yearM+5)+" [ 5y ]";;
document.getElementById('fv22').innerHTML= ftn(parseInt(futx(5)[0].replace(/,/g,""),10));
document.getElementById('fv23').innerHTML=ftn(parseInt(futx(5)[1].replace(/,/g,""),10));
document.getElementById('fv24').innerHTML= ftn(parseInt(futx(5)[2].replace(/,/g,""),10));

document.getElementById('fv31').innerHTML=  (dayM)+"/"+(monM)+"/"+(yearM+10)+" [ 10y ]";;
document.getElementById('fv32').innerHTML= ftn(parseInt(futx(10)[0].replace(/,/g,""),10));
document.getElementById('fv33').innerHTML= ftn(parseInt(futx(10)[1].replace(/,/g,""),10));
document.getElementById('fv34').innerHTML= ftn(parseInt(futx(10)[2].replace(/,/g,""),10));

document.getElementById('fv41').innerHTML= (dayM)+"/"+(monM)+"/"+(yearM+15)+" [ 15y ]";;
document.getElementById('fv42').innerHTML= ftn(parseInt(futx(15)[0].replace(/,/g,""),10));
document.getElementById('fv43').innerHTML= ftn(parseInt(futx(15)[1].replace(/,/g,""),10));
document.getElementById('fv44').innerHTML=ftn(parseInt(futx(15)[2].replace(/,/g,""),10));

document.getElementById('fv51').innerHTML=  (dayM)+"/"+(monM)+"/"+(yearM+20)+" [ 20y ]";;
document.getElementById('fv52').innerHTML=  ftn(parseInt(futx(20)[0].replace(/,/g,""),10));
document.getElementById('fv53').innerHTML= ftn(parseInt(futx(20)[1].replace(/,/g,""),10));
document.getElementById('fv54').innerHTML=  ftn(parseInt(futx(20)[2].replace(/,/g,""),10));

document.getElementById('fv61').innerHTML=  (dayM)+"/"+(monM)+"/"+(yearM+25)+" [ 25y ]";;
document.getElementById('fv62').innerHTML= ftn(parseInt(futx(25)[0].replace(/,/g,""),10));
document.getElementById('fv63').innerHTML= ftn(parseInt(futx(25)[1].replace(/,/g,""),10));
document.getElementById('fv64').innerHTML= ftn(parseInt(futx(25)[2].replace(/,/g,""),10));

document.getElementById('fv71').innerHTML= (dayM)+"/"+(monM)+"/"+(yearM+30)+" [ 30y ]";;
document.getElementById('fv72').innerHTML= ftn(parseInt(futx(30)[0].replace(/,/g,""),10));
document.getElementById('fv73').innerHTML= ftn(parseInt(futx(30)[1].replace(/,/g,""),10));
document.getElementById('fv74').innerHTML= ftn(parseInt(futx(30)[2].replace(/,/g,""),10));


}







function xxxv(){
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

let eeb=parseInt(eeee);
//alert(eeb);
let vvc=100-eeb;
// Set Data
const data = google.visualization.arrayToDataTable([
  ['name', 'vision'],
  ['Invest',vvc],
  ['Earn',eeb],
]);

//alert(mcc);
var options = {
legend:'none',
         //is3D: true,
          pieHole: 0.56,
          backgroundColor: 'transparent',
          legend:'none',
          pieSliceTextStyle:{ color:'transparent'},
          titleTextStyle: { color:'transparent' },
          pieSliceBorderColor: 'black',
          slices: {
          0: { color: mxx }, 
          1: { color: mcc}
          },
          chartArea: {
          left:50,
          top: 50,
          width: '70%',
          height: '70%'
          },
        };
        
const chart = new google.visualization.PieChart(document.getElementById('myChart'));
chart.draw(data,options);

}
}
