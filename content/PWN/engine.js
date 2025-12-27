var cheat=0;
//PRE-ESENICÁLNÍ PRE-ESENICÁLNÍ PRE-ESENICÁLNÍ PRE-ESENICÁLNÍ PRE-ESENICÁLNÍ PRE-ESENICÁLNÍ PRE-ESENICÁLNÍ PRE-ESENICÁLNÍ 
function geto(objekt){return document.getElementById(objekt);}
function kec(text){geto('DIValert').innerHTML=text;}
//ESENCIÁLNÍ ESENCIÁLNÍ ESENCIÁLNÍ ESENCIÁLNÍ ESENCIÁLNÍ ESENCIÁLNÍ ESENCIÁLNÍ ESENCIÁLNÍ ESENCIÁLNÍ ESENCIÁLNÍ ESENCIÁLNÍ 
var cestaVolna=true;
var kombat=false;
var kombatBlizkost=false;
var chuze=true;
var rychlostChuze=0;
//šířka a výška obrazovky
  var obrWidth=(64*Math.floor(screen.availWidth/64))/2;
  var obrHeight=(64*Math.floor(screen.availHeight/64))/2;
window.onload = function (){
  window.onkeydown = function(event){keypress(event);};
  window.onkeyup = function(event){keypressSturm(event);};
  geto('player').style.top=(parseInt(geto('player').style.top)+obrHeight)+"px";
  geto('player').style.left=(parseInt(geto('player').style.left)+obrWidth)+"px";
  generaceHranic(128,128);
  vypis();
  demonstrace();
  regenerace();
  geto('IMGmonster').style.left='768px';
}
animace=["human","elf","orc"]
function keypress(event){
  //alert(event.keyCode)
  /*w=87;s=83;a=65;d=68;*/
  if(event.keyCode == 87){move(0);event.stopPropagation();event.preventDefault();return false;}
  if(event.keyCode == 68){move(1);event.stopPropagation();event.preventDefault();return false;}
  if(event.keyCode == 83){move(2);event.stopPropagation();event.preventDefault();return false;}
  if(event.keyCode == 65){move(3);event.stopPropagation();event.preventDefault();return false;}
  /*left=37 up=38 down=39 right=40*/
  if(event.keyCode == 38){move(0);event.stopPropagation();event.preventDefault();return false;}
  if(event.keyCode == 39){move(1);event.stopPropagation();event.preventDefault();return false;}
  if(event.keyCode == 40){move(2);event.stopPropagation();event.preventDefault();return false;}
  if(event.keyCode == 37){move(3);event.stopPropagation();event.preventDefault();return false;}
  /*n=78;b=66;i=73;SPACE=32;Enter=13;tab=9;*/
  if(event.keyCode == 73){
    if(geto('DIVinventar').style.display == "block"){
      geto('DIVinventar').style.display = "none";}
    else{geto('DIVinventar').style.display = "block";}
    event.stopPropagation();event.preventDefault();return false;
  }
  if(event.keyCode == 66){
    if(geto('DIVstats').style.display == "block"){
      geto('DIVstats').style.display = "none";geto('DIVstats1').style.display='block';geto('DIVstats2').style.display='none';geto('DIVstats3').style.display='none';}
    else{geto('DIVstats').style.display = "block";}
    event.stopPropagation();event.preventDefault();return false;
  }
  /*CHEATING*/
  //22.6.1941
  if(event.keyCode == 50 && cheat<2){cheat++;}
  else if(event.keyCode == 190 && cheat==2){cheat++;}
  else if(event.keyCode == 54 && cheat==3){cheat++;}
  else if(event.keyCode == 190 && cheat==4){cheat++;}
  else if(event.keyCode == 49 && cheat==5){cheat++;}
  else if(event.keyCode == 57 && cheat==6){cheat++;}
  else if(event.keyCode == 52 && cheat==7){cheat++;}
  else if(event.keyCode == 49 && cheat==8){
    kec('Operace Barbarossa začala! Vyfasoval si pwnage 30 levelů!');
    spoint+=150;skillPoint+=30;levl+=30;vypis();cheat=0;prachy=2261941;
  vypis();
  }
  else{cheat=0;}
  /*DOST CHEATINGU*/
}
function keypressSturm(event){
  if(event.keyCode == 13){sekej();event.stopPropagation();event.preventDefault();return false;}
}
function move(smer){
  if(smer==0 && (parseInt(geto('player').style.top)>0)){
    for(i in obstacles){if(obrHeight+obstacles[i][0]*32==parseInt(geto('player').style.top)-32&&obrWidth+obstacles[i][1]*32==parseInt(geto('player').style.left)){cestaVolna=false;}}
    for(i in obstaclesTriggers){if(obrHeight+obstaclesTriggers[i][0]*32==parseInt(geto('player').style.top)-32&&obrWidth+obstaclesTriggers[i][1]*32==parseInt(geto('player').style.left)){cestaVolna=false;}}
    for(i in monstra){if(obrHeight+monstra[i].pos[0]*32==parseInt(geto('player').style.top)-32&&obrWidth+monstra[i].pos[1]*32==parseInt(geto('player').style.left)&&monstra[i].hp>0){vyvolejKombat(i);}}
    for(i in veci){if(obrHeight+veci[i][0][0]*32==parseInt(geto('player').style.top)-32&&obrWidth+veci[i][0][1]*32==parseInt(geto('player').style.left)){if(veci[i][2]){veci[i][2]=false;
        inventar[veci[i][1]].pocet++;kec('Sebráno: '+inventar[veci[i][1]].name);vypis();}}
    }
    for(i in efekty){if(obrHeight+efekty[i]['pos'][0]*32==parseInt(geto('player').style.top)-32&&obrWidth+efekty[i]['pos'][1]*32==parseInt(geto('player').style.left)){if(efekty[i]['state']){efekty[i]['eff']();if(efekty[i]['konstant']){}else{efekty[i]['state']=false;};vypisObstacles()}}}
    //
    if(cestaVolna && kombat==false && chuze==false){
      chuze=true;
      geto('player').style.top = (parseInt(geto('player').style.top)-32)+'px';
      sunout(0);
      window.setTimeout("chuze=false;",rychlostChuze);
      geto('player').src = 'img/animace/'+animace[rasa]+'back2.png';
      window.setTimeout("geto('player').src = 'img/animace/'+animace[rasa]+'back1.png';",rychlostChuze/2);
    }
    else{kec('Tudy nemůžeš!');}
    cestaVolna=true;
  }
  else if(smer==1){
    for(i in obstacles){if(obrHeight+obstacles[i][0]*32==parseInt(geto('player').style.top)&&obrWidth+obstacles[i][1]*32==parseInt(geto('player').style.left)+32){cestaVolna=false;}}
    for(i in obstaclesTriggers){if(obrHeight+obstaclesTriggers[i][0]*32==parseInt(geto('player').style.top)&&obrWidth+obstaclesTriggers[i][1]*32==parseInt(geto('player').style.left)+32){cestaVolna=false;}}
    for(i in monstra){if(obrHeight+monstra[i].pos[0]*32==parseInt(geto('player').style.top)&&obrWidth+monstra[i].pos[1]*32==parseInt(geto('player').style.left)+32&&monstra[i].hp>0){vyvolejKombat(i);}}
    for(i in veci){if(obrHeight+veci[i][0][0]*32==parseInt(geto('player').style.top)&&obrWidth+veci[i][0][1]*32==parseInt(geto('player').style.left)+32){if(veci[i][2]){veci[i][2]=false;
        inventar[veci[i][1]].pocet++;kec('Sebráno: '+inventar[veci[i][1]].name);vypis();}}
    }
    for(i in efekty){if(obrHeight+efekty[i]['pos'][0]*32==parseInt(geto('player').style.top)&&obrWidth+efekty[i]['pos'][1]*32==parseInt(geto('player').style.left)+32){if(efekty[i]['state']){efekty[i]['eff']();if(efekty[i]['konstant']){}else{efekty[i]['state']=false;};vypisObstacles()}}}
    //
    if(cestaVolna && kombat==false && chuze==false){
      chuze=true;
      geto('player').style.left = (parseInt(geto('player').style.left)+32)+'px';
      sunout(1);
      window.setTimeout("chuze=false;",rychlostChuze);
      geto('player').src = 'img/animace/'+animace[rasa]+'right2.png';
      window.setTimeout("geto('player').src = 'img/animace/'+animace[rasa]+'right1.png';",rychlostChuze/2);
    }
    else{kec('Tudy nemůžeš!');}
    cestaVolna=true;
  }
  else if(smer==2){
    for(i in obstacles){if(obrHeight+obstacles[i][0]*32==parseInt(geto('player').style.top)+32&&obrWidth+obstacles[i][1]*32==parseInt(geto('player').style.left)){cestaVolna=false;}}
    for(i in obstaclesTriggers){if(obrHeight+obstaclesTriggers[i][0]*32==parseInt(geto('player').style.top)+32&&obrWidth+obstaclesTriggers[i][1]*32==parseInt(geto('player').style.left)){cestaVolna=false;}}
    for(i in monstra){if(obrHeight+monstra[i].pos[0]*32==parseInt(geto('player').style.top)+32&&obrWidth+monstra[i].pos[1]*32==parseInt(geto('player').style.left)&&monstra[i].hp>0){vyvolejKombat(i);}}
    for(i in veci){if(obrHeight+veci[i][0][0]*32==parseInt(geto('player').style.top)+32&&obrWidth+veci[i][0][1]*32==parseInt(geto('player').style.left)){if(veci[i][2]){veci[i][2]=false;
        inventar[veci[i][1]].pocet++;kec('Sebráno: '+inventar[veci[i][1]].name);vypis();}}
    }
    for(i in efekty){if(obrHeight+efekty[i]['pos'][0]*32==parseInt(geto('player').style.top)+32&&obrWidth+efekty[i]['pos'][1]*32==parseInt(geto('player').style.left)){if(efekty[i]['state']){efekty[i]['eff']();if(efekty[i]['konstant']){}else{efekty[i]['state']=false;};vypisObstacles()}}}
    //
    if(cestaVolna && kombat==false && chuze==false){
      chuze=true;
      geto('player').style.top = (parseInt(geto('player').style.top)+32)+'px';
      sunout(2);
      window.setTimeout("chuze=false;",rychlostChuze);
      geto('player').src = 'img/animace/'+animace[rasa]+'front2.png';
      window.setTimeout("geto('player').src = 'img/animace/'+animace[rasa]+'front1.png';",rychlostChuze/2);
    }
    else{kec('Tudy nemůžeš!');}
    cestaVolna=true;
  }
  else if(smer==3 && (parseInt(geto('player').style.left)>0)){
    for(i in obstacles){if(obrHeight+obstacles[i][0]*32==parseInt(geto('player').style.top)&&obrWidth+obstacles[i][1]*32==parseInt(geto('player').style.left)-32){cestaVolna=false;}}
    for(i in obstaclesTriggers){if(obrHeight+obstaclesTriggers[i][0]*32==parseInt(geto('player').style.top)&&obrWidth+obstaclesTriggers[i][1]*32==parseInt(geto('player').style.left)-32){cestaVolna=false;}}
    for(i in monstra){if(obrHeight+monstra[i].pos[0]*32==parseInt(geto('player').style.top)&&obrWidth+monstra[i].pos[1]*32==parseInt(geto('player').style.left)-32&&monstra[i].hp>0){vyvolejKombat(i);}}
    for(i in veci){if(obrHeight+veci[i][0][0]*32==parseInt(geto('player').style.top)&&obrWidth+veci[i][0][1]*32==parseInt(geto('player').style.left)-32){if(veci[i][2]){veci[i][2]=false;
        inventar[veci[i][1]].pocet++;kec('Sebráno: '+inventar[veci[i][1]].name);vypis();}}
    }
    for(i in efekty){if(obrHeight+efekty[i]['pos'][0]*32==parseInt(geto('player').style.top)&&obrWidth+efekty[i]['pos'][1]*32==parseInt(geto('player').style.left)-32){if(efekty[i]['state']){efekty[i]['eff']();if(efekty[i]['konstant']){}else{efekty[i]['state']=false;};vypisObstacles()}}}
    //
    if(cestaVolna && kombat==false && chuze==false){
      chuze=true;
      geto('player').style.left = (parseInt(geto('player').style.left)-32)+'px';
      sunout(3);
      window.setTimeout("chuze=false;",rychlostChuze);
      geto('player').src = 'img/animace/'+animace[rasa]+'left2.png';
      window.setTimeout("geto('player').src = 'img/animace/'+animace[rasa]+'left1.png';",rychlostChuze/2);
    }
    else{kec('Tudy nemůžeš!');}
    cestaVolna=true;
  }
  else{kec('Error, nechoď mimo mapu')}
}
function sunout(smer){
  if(smer==0){window.scrollBy(0,-32);}
  if(smer==1){window.scrollBy(32,0);}
  if(smer==2){window.scrollBy(0,32);}
  if(smer==3){window.scrollBy(-32,0);}
}
//OMÁČKA OMÁČKA OMÁČKA OMÁČKA OMÁČKA OMÁČKA OMÁČKA OMÁČKA OMÁČKA OMÁČKA OMÁČKA OMÁČKA OMÁČKA OMÁČKA OMÁČKA OMÁČKA OMÁČKA OMÁČKA
function vypisInventar(){
  var obsahInventar = "<font style='font-size:20px'><u>Inventář:</u></font>&nbsp;&nbsp;&nbsp;Glody:"+prachy+"<br>";
  for(i in inventar){
    if(inventar[i].pocet > 0){
      obsahInventar += "<span style='font-weight:bold;color:blue;position:relative;left:55px;top:-5px;'>"+inventar[i].pocet+"</span>";
      obsahInventar += "<img onClick='ekvipnout(\""+i+"\");"
      if(inventar[i].typ=="other"){obsahInventar += "inventar[\""+i+"\"].onUse()"}
      obsahInventar +="' id='InvPolozka"+i+"' src='img/inventar/" + inventar[i].img + "' width='64' height='64' title='" + inventar[i].name + "' ";
      obsahInventar += "onmouseover='vypisInventarInfo(\"" + i + "\")'>";
    }
  }
  obsahInventar += "<hr><span id='SPANinventarInfo'></span><br><br><font style='font-size:20px'><u>Equipy:</u></font>";
  obsahInventar += "<br>"+inventar[equipy.zbran].name;
  obsahInventar += "<br>"+inventar[equipy.brneniBody].name;
  if(rasa==0){obsahInventar += "<br>"+inventar[equipy.shield].name;}
  
  vypisStaty();
  geto('DIVinventar').innerHTML = obsahInventar;
}
function vypisInventarInfo(cehoInfo){
  var obsahInventarInfo = "<u>" + inventar[cehoInfo].name + "</u><br>";
  obsahInventarInfo += inventar[cehoInfo].info;
  geto('SPANinventarInfo').innerHTML = obsahInventarInfo;
}
function vypisStaty(){
  geto('DIVcounterInside').style.width=Math.ceil(hp/hpMax*320)+"px";
  geto('DIVcounterInside').innerHTML=hp+"/"+hpMax;
  geto('DIVmcounterInside').style.width=Math.ceil(mana/manaMax*320)+"px";
  geto('DIVmcounterInside').innerHTML=mana+"/"+manaMax;
  /**/
  obsahStats0="";
  if(skillPoint>0){obsahStats0+="<span style='color:red;font-size:28px;background-color:yellow;'>Skill pointy:"+skillPoint+"</span><br>";}
  else{obsahStats0+="";}
  if(spoint>0){obsahStats0+="<span style='color:red;font-size:28px;background-color:yellow;'>Stat pointy:"+spoint+"</span><br>";}
  else{obsahStats0+="";}
  geto('DIVstats0').innerHTML=obsahStats0;
  obsahStats1="<h2>Tvoje postava level <span style='font-family:Arial;font-size:48px;color:orange;' title='"+expy+"/"+(levl*500+5*levl*levl*levl)+"'>";
  obsahStats1+=levl+"</span></h2>Expy:"+expy+"/"+(levl*500+5*levl*levl*levl)+"<br>";
  if(spoint>0){obsahStats1+="<input type='button' value='Naskillovat strength' onClick='pridatstrength()'>";
  obsahStats1+="<input type='button' value='Naskillovat accuracy' onClick='pridataccuracy()'>";
  obsahStats1+="<input type='button' value='Naskillovat evasion' onClick='pridatevasion()'>";
  obsahStats1+="<input type='button' value='Naskillovat defense' onClick='pridatdefense()'><br>";}
  obsahStats1+="<hr>Strength:"+strength+"<br>Accuracy:"+accuracy+"<br>Evasion:"+evasion+"<br>Defense:"+defense+"<hr>";
  obsahStats1+="Damage:"+strength+"*"+inventar[equipy.zbran].attW+"=<b>"+(strength*inventar[equipy.zbran].attW)+"</b><br>";
  obsahStats1+="Attack Rating (šance na hit):"+accuracy+"*"+inventar[equipy.zbran].attRating+"=<b>"+(accuracy*inventar[equipy.zbran].attRating)+"</b><br>";
  
  obsahStats1+="Defense Rating (šance na blok):"+evasion+"*("+inventar[equipy.brneniBody].defRating;
  if(rasa==0){obsahStats1+="+"+inventar[equipy.shield].defRating+")=<b>"+(evasion*(inventar[equipy.brneniBody].defRating+inventar[equipy.shield].defRating))+"</b><br>";}
  else{obsahStats1+=")=<b>"+(evasion*inventar[equipy.brneniBody].defRating)+"</b><br>";}
  
  obsahStats1+="Celková Defense:<b>("+inventar[equipy.brneniBody].defAbsorb;
  if(rasa==0){obsahStats1+="+"+inventar[equipy.shield].defAbsorb+")*"+defense+"="+((inventar[equipy.brneniBody].defAbsorb+inventar[equipy.shield].defAbsorb)*defense)+"</b><br>";}
  else{obsahStats1+=")*"+defense+"="+(inventar[equipy.brneniBody].defAbsorb*defense)+"</b><br>";}
  geto('DIVstats1').innerHTML = obsahStats1;
  /**/
  obsahStats2="<h2>Speciální skilly</h2>";
  //if(skillPoint>0){obsahStats2+="<span style='color:red;font-size:16px;background-color:yellow;'>Skill pointy:"+skillPoint+"</span><br>";}
  for(i in skilly){
    for(y in skilly[i]){
       if(skilly[i][y].level==0){obsahStats2+="Žádný ";}
      else if(skilly[i][y].level>0&&skilly[i][y].level<5){obsahStats2+="Menší ";}
      else if(skilly[i][y].level>=5&&skilly[i][y].level<10){obsahStats2+="Větší ";}
      else if(skilly[i][y].level==10){obsahStats2+="ROAYALNÍ ";}
      obsahStats2+="<u>"+skilly[i][y].name+"</u> LEVEL <span style='font-size:26px'> ";
      if(skilly[i][y].level==0){obsahStats2+=skilly[i][y].level;}
      else if(skilly[i][y].level>0&&skilly[i][y].level<5){obsahStats2+="<span style='font-weight:bold;background-color:green'>"+skilly[i][y].level+"</span>";}
      else if(skilly[i][y].level>=5&&skilly[i][y].level<10){obsahStats2+="<span style='font-weight:bold;background-color:red'>"+skilly[i][y].level+"</span>";}
      else if(skilly[i][y].level==10){obsahStats2+="<span style='font-weight:bold;background-color:gold'>"+skilly[i][y].level+" </span>";}
      obsahStats2+="</span>";
      if(skilly[i][y].level!=10){obsahStats2+="<input type='button' value='Rozšířit!' onClick='trainSkill(\""+i+"\",\""+y+"\")'>";}
      obsahStats2+="<br>"+skilly[i][y].popis+"<br><br>";
    }
  }
  geto('DIVstats2').innerHTML = obsahStats2;
  
}
//výpisem kompletisch všeho jest vypis
function vypis(){
  if (expy >= levl*500+5*levl*levl*levl) {
        levl+=1;
        spoint+=5;
        skillPoint+=1;
        hp=hpMax;
        mana=manaMax;
        kec('Anó! Postoupil si na level ' + levl + '!');
        window.setTimeout("alert('Congratulace! Jsi LeveL '+levl+'!');",700);
        geto('DIVstats').style.display="block";
        vypis();
    }
    vypisStaty();
    vypisInventar();
    vypisObstacles();
}
//výpisem všeho viditelného jest vypisObstacles
function vypisObstacles(){
  var obsahMapy="";
  for(i in obstacles){
    obsahMapy+="<img style='position:absolute;top:"+(obrHeight+obstacles[i][0]*32)+";left:"+(obrWidth+obstacles[i][1]*32)+"' src='img/mapa/"+obstacles[i][2]+"'>";
  }
  for(i in obstaclesTriggers){
    obsahMapy+="<img style='position:absolute;top:"+(obrHeight+obstaclesTriggers[i][0]*32)+";left:"+(obrWidth+obstaclesTriggers[i][1]*32)+"' src='img/mapa/"+obstaclesTriggers[i][2]+"'>";
  }
  for(i in veci){
    if(veci[i][2]){obsahMapy+="<img style='width:32px;height:32px;position:absolute;top:"+(obrHeight+veci[i][0][0]*32)+";left:"+(obrWidth+veci[i][0][1]*32)+"' src='img/inventar/";
    obsahMapy+=inventar[veci[i][1]].img;
    obsahMapy+="'>";}
  }
  for(i in efekty){
    if(efekty[i]['state']){obsahMapy+="<img style='width:32px;height:32px;position:absolute;top:"+(obrHeight+efekty[i]['pos'][0]*32)+";left:"+(obrWidth+efekty[i]['pos'][1]*32)+"' src='"+efekty[i]['img']+"'>";}
  }
  for(i in monstra){
    if(monstra[i].hp>0){
    obsahMapy+="<img title='Class "+monstraTypes[monstra[i].typ].klasse+"' src='img/mobs/"+monstraTypes[monstra[i].typ].src+"' style='position:absolute;top:"+(obrHeight+monstra[i].pos[0]*32)+";left:"+(obrWidth+monstra[i].pos[1]*32)+";width:32px;height:32px;'>";
    }
  }
  geto('DIVmapa').innerHTML=obsahMapy;
}
