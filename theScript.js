//alert('Kana Jambe!')

let navOver = document.getElementsByName('lielem');

let overNav = function (){
    this.style.fontStyle = 'italic';
};

let outNav = function (){
    this.style.fontStyle = 'normal';
};

navOver.forEach(el=> el.addEventListener("mouseover", overNav));
navOver.forEach(el=> el.addEventListener("mouseout", outNav));

//operarional
//sofware section
let soft=document.getElementById('soft')

let linker = function(){
    window.location.href = '/software.html';
};

soft.addEventListener('click', linker);

let softElem1 = document.getElementById('softelem1');
let softElem2 = document.getElementById('softelem2')


let overSoft = function(){
    soft.style.opacity='0.8';
    softElem1.style.color='#00bfff';
    softElem2.style.color='#00bfff';
    soft.style.margin='1px';

}

let outSoft = function(){
    soft.style.opacity='1';
    softElem1.style.color='white';
    softElem2.style.color='white';
    soft.style.margin='0px';
}

soft.addEventListener('mouseover', overSoft);
soft.addEventListener('mouseout',outSoft);
document.getElementById("soft").style.cursor = "pointer";

//data analysis section

let data=document.getElementById('an');
let dataElem1 = document.getElementById('anelem1');
let dataElem2 = document.getElementById('anelem2');

let linker2 = function(){
    window.location.href = '/data.html';
};

let overData = function(){
    data.style.opacity='0.8';
    dataElem1.style.color='#00bfff';
    dataElem2.style.color='#00bfff';
    data.style.margin='1px';   
};

let outData = function(){
    data.style.opacity='1';
    dataElem1.style.color='white';
    dataElem2.style.color='white';
    data.style.margin='0px';
}

data.addEventListener('click', linker2);
data.addEventListener('mouseover', overData);
data.addEventListener('mouseout', outData);
document.getElementById("an").style.cursor = "pointer";

//ossint section

let oss=document.getElementById('oss')
let ossElem1 = document.getElementById('osselem1');
let ossElem2 = document.getElementById('osselem2');

let linker3 = function(){
    window.location.href = '/ossint.html';
};

let overOss = function(){
    oss.style.opacity='0.8';
    ossElem1.style.color='#00bfff';
    ossElem2.style.color='#00bfff';
    oss.style.margin='1px';
};

let outOss = function(){
    oss.style.opacity='1';
    ossElem1.style.color='white';
    ossElem2.style.color='white';
    oss.style.margin='0px';
}

oss.addEventListener('click', linker3);
oss.addEventListener('mouseover', overOss);
oss.addEventListener('mouseout', outOss);
document.getElementById("oss").style.cursor = "pointer";

//about section

let abt=document.getElementById('abt')
let abtElem1 = document.getElementById('abtelem1');
let abtElem2 = document.getElementById('abtelem2');

let linker4 = function(){
    window.location.href = '/about.html';
};

let overAbt = function(){
    abt.style.opacity='0.8';
    abtElem1.style.color='#00bfff';
    abtElem2.style.color='#00bfff';
    abt.style.margin='1px';
};

let outAbt = function(){
    abt.style.opacity='1';
    abtElem1.style.color='white';
    abtElem2.style.color='white';
    abt.style.margin='0px';
};

abt.addEventListener('click', linker4);
abt.addEventListener('mouseover', overAbt);
abt.addEventListener('mouseout', outAbt);
document.getElementById("abt").style.cursor = "pointer";

//contact section

let ct=document.getElementById('ct');
let ctElem1 = document.getElementById('ctelem1');
let ctElem2 = document.getElementById('ctelem2');

let linker5 = function(){
    window.location.href = '/contact.html';
};

let overCt = function(){
    ct.style.opacity='0.8';
    ctElem1.style.color='#00bfff';
    ctElem2.style.color='#00bfff';
    ct.style.margin='1px';
};

let outCt = function(){
    ct.style.opacity='1';
    ctElem1.style.color='white';
    ctElem2.style.color='white';
    ct.style.margin='0px';
};

ct.addEventListener('click', linker5);
ct.addEventListener('mouseover', overCt);
ct.addEventListener('mouseout', outCt);
document.getElementById("ct").style.cursor = "pointer";

