var dmg=0;
var demoPromena=0;
var criticalRatio=3.5;
var critDmg=2;
var kombatBlizkost=false;
var kombat=false;
function generaceHranic(iM,yM){
  a=obstacles.length+1;
  for(i=0;i<=iM;i++){
    obstacles[a]=[1,i,"kamen1.png"];
    a++;
    obstacles[a]=[1+yM,i,"kamen1.png"];
    a++;
  }
  for(y=0;y<=yM;y++){
    obstacles[a]=[1+y,0,"kamen1.png"];
    a++;
    obstacles[a]=[1+y,iM,"kamen1.png"];
    a++;
  }
}
function ekvipnout(co){
//;geto('InvPolozka'+co).style.border="3px blue solid";
  if(inventar[co].typ=="weapon"){
    equipy.zbran=co;
    vypisInventar();vypisStaty();
    kec('Equipnuto!');
  }
  if(inventar[co].typ=="oneHanded"){
    if(rasa==0){
      equipy.zbran=co;
      vypisInventar();vypisStaty();
    kec('Equipnuto!');
    }
    else{kec('Na takovou kravinu je tvá rasa příliš dokonalá a vyvinutá, tohle nepoužívá!!!');}
  }
  if(inventar[co].typ=="bow"){
    if(rasa==1){
      equipy.zbran=co;
      vypisInventar();vypisStaty();
    kec('Equipnuto!');
    }
    else{kec('Na takovou kravinu je tvá rasa příliš dokonalá a vyvinutá, tohle nepoužívá!!!');}
  }
  if(inventar[co].typ=="twoHanded"){
    if(rasa==2){
      equipy.zbran=co;
      vypisInventar();vypisStaty();
    kec('Equipnuto!');
    }
    else{kec('Na takovou kravinu je tvá rasa příliš dokonalá a vyvinutá, tohle nepoužívá!!!');}
  }
  if(inventar[co].typ=="shield"){
    if(rasa==0){
      equipy.shield=co;
      vypisInventar();vypisStaty();
    kec('Equipnuto!');
    }
    else{kec('Na takovou kravinu je tvá rasa příliš dokonalá a vyvinutá, tohle nepoužívá!!!');}
  }
  if(inventar[co].typ=="body"){
    equipy.brneniBody=co;
    vypisInventar();vypisStaty();
    kec('Equipnuto!');
  }
}
function vyvolejKombat(sKerou){
  if(kombat==false && chuze==false){
    kombat=true;
    geto('IMGmonster').src="img/mobs/"+monstraTypes[monstra[sKerou].typ].src;
    geto('DIVmonster').style.display="block";
    geto('DIVinfoMonster').innerHTML="Mob <u>"+monstraTypes[monstra[sKerou].typ].name+"</u> má ještě "+monstra[sKerou].hp+" HP!"
    aktualniPrisera=sKerou;
    priseraSeka();
    if(rasa!=1){geto('IMGmonster').style.left='256px';oscilace();}
    else{
      kombatBlizkost=false;
      geto('IMGmonster').style.left='768px';
      window.setTimeout("geto('IMGmonster').style.left='512px';",1000);
      window.setTimeout("geto('IMGmonster').style.left='256px';kombatBlizkost=true;oscilace();kec('COMBAT ZAČÍNÁ');",2000);
    }
  }
}
function oscilace(){
  if(rasa!=1 || kombatBlizkost==true){
    geto('IMGmonster').style.top='64px';
    window.setTimeout("geto('IMGmonster').style.top='0px';",500);
    window.setTimeout("oscilace();",1000);
  }
}
function priseraSeka(){
  if(rasa==0){stitRating=inventar[equipy.shield].defRating;stitAbsorb=inventar[equipy.shield].defAbsorb;}
  else{stitRating=0;stitAbsorb=0;}
  if(rasa!=1 || kombatBlizkost==true){
    if(monstra[aktualniPrisera].hp>0 && hp>0){
      if(monstraTypes[monstra[aktualniPrisera].typ].attRating*Math.sqrt(Math.random())>=criticalRatio*(evasion*(inventar[equipy.brneniBody].defRating+stitAbsorb))*Math.sqrt(Math.random())){
        dmg=4*Math.round((monstraTypes[monstra[aktualniPrisera].typ].strength*(Math.sqrt(Math.random())+critDmg))/(defense*(inventar[equipy.brneniBody].defAbsorb+stitAbsorb)));
        //skilly
        if(dmg>skilly.passive.kamennaKuze.level){dmg-=skilly.passive.kamennaKuze.level;}
        else{dmg=0;}
        monstra[aktualniPrisera].hp-=Math.ceil((dmg/50)*skilly.passive.trnitaKuze.level);
        geto('DIVinfoMonster').innerHTML="Mob <u>"+monstraTypes[monstra[aktualniPrisera].typ].name+"</u> má ještě "+monstra[aktualniPrisera].hp+" HP!"
        /*dmg*/hp-=dmg;/*dmg*/
        vypisStaty();
        kec('Příšera dala CRITICAL hit za '+dmg);
        dmg=0;
      }
      else if(monstraTypes[monstra[aktualniPrisera].typ].attRating*Math.sqrt(Math.random())>=(evasion*(inventar[equipy.brneniBody].defRating+stitAbsorb))*Math.sqrt(Math.random())){
        dmg=4*Math.round((monstraTypes[monstra[aktualniPrisera].typ].strength*(Math.sqrt(Math.random())))/(defense*(inventar[equipy.brneniBody].defAbsorb+stitAbsorb)));
        //skilly
        if(dmg>skilly.passive.kamennaKuze.level){dmg-=skilly.passive.kamennaKuze.level;}
        else{dmg=0;}
        monstra[aktualniPrisera].hp-=Math.ceil((dmg/10)*skilly.passive.trnitaKuze.level);
        geto('DIVinfoMonster').innerHTML="Mob <u>"+monstraTypes[monstra[aktualniPrisera].typ].name+"</u> má ještě "+monstra[aktualniPrisera].hp+" HP!"
        /*dmg*/hp-=dmg;/*dmg*/
        vypisStaty();
        kec('Příšera dala hit za '+dmg);
        dmg=0;
      }
      else{
        kec('Příšera missnula')
      }
    }
  }
  if(hp>0){window.setTimeout("priseraSeka()",1000)}
  else{stirb();}
}

function sekej(){
  if(kombat==true){
      if(monstra[aktualniPrisera].hp>=0){
      //
        if((accuracy*inventar[equipy.zbran].attRating)*Math.sqrt(Math.random())>=(criticalRatio-(skilly.passive.koncentrace.level*0.2))*monstraTypes[monstra[aktualniPrisera].typ].defRating*Math.sqrt(Math.random())){
          dmg=4*Math.round((strength*(Math.sqrt(Math.random())+critDmg+(skilly.passive.presnyZasah.level*0.1))*inventar[equipy.zbran].attW)/(monstraTypes[monstra[aktualniPrisera].typ].defense*Math.sqrt(Math.random())));
          monstra[aktualniPrisera].hp-=dmg;
          geto('DIVinfoMonster').innerHTML="Mob <u>"+monstraTypes[monstra[aktualniPrisera].typ].name+"</u> má ještě "+monstra[aktualniPrisera].hp+" HP!"
          kec('CRITICAL ZA '+dmg);
          dmg=0;
          mrtvaPrisera();
        }
        else if((accuracy*inventar[equipy.zbran].attRating)*Math.sqrt(Math.random())>=monstraTypes[monstra[aktualniPrisera].typ].defRating*Math.sqrt(Math.random())){
          dmg=4*Math.round((strength*Math.sqrt(Math.random())*inventar[equipy.zbran].attW)/(monstraTypes[monstra[aktualniPrisera].typ].defense*Math.sqrt(Math.random())));
          monstra[aktualniPrisera].hp-=dmg;
          geto('DIVinfoMonster').innerHTML="Mob <u>"+monstraTypes[monstra[aktualniPrisera].typ].name+"</u> má ještě "+monstra[aktualniPrisera].hp+" HP!"
          kec('Dal jsi dimidžů '+dmg);
          dmg=0;
          mrtvaPrisera();
        }
        else{
          kec('Missnul jsi')
        }
      }
  }
  else{
    kec('Nejsi v combatu!')
  }
}
function stirb(){
  kec('Zemřel jsi!');
  geto('player').style.top=parseInt(96+obrHeight)+"px";
  geto('player').style.left=parseInt(32+obrWidth)+"px";
  kombat=false;
  kombatBlizkost=false;
  geto('DIVmonster').style.display="none";
  geto('IMGmonster').style.left="768px";
  hp=20;
  vypis();
}
function mrtvaPrisera(){
  if(monstra[aktualniPrisera].hp<=0){
    kec('Máš frag! Příšera byla killnuta!');
    kombat=false;
    expy+=monstraTypes[monstra[aktualniPrisera].typ].expy;
    a=Math.round(monstraTypes[monstra[aktualniPrisera].typ].lootGlody*Math.random());
    b=Math.round((monstraTypes[monstra[aktualniPrisera].typ].loot.length-1)*Math.random());
    //alert(b);
    c=monstraTypes[monstra[aktualniPrisera].typ].loot[b];
    prachy+=a;
    inventar[c].pocet++;
    monstraTypes[monstra[aktualniPrisera].typ].onKill();
    window.setTimeout("kec('Vydropnul si '+a+' glodů a '+inventar[monstraTypes[monstra[aktualniPrisera].typ].loot[b]].name);",600)
    geto('DIVmonster').style.display="none";
    if(monstraTypes[monstra[aktualniPrisera].typ].respawn!==false){
      window.setTimeout("monstra['"+aktualniPrisera+"'].hp=monstraTypes[monstra["+aktualniPrisera+"].typ].hpMax;vypis();",monstraTypes[monstra[aktualniPrisera].typ].respawn*1000)
    }
    vypis();
  }
}
function pridatstrength(){
  if(spoint>0){spoint--;strength+=ratio[rasa][0];vypisStaty();kec('Naskilována strength!');}
  else{kec('Nemáš statpointy!');}
}
function pridataccuracy(){
  if(spoint>0){spoint--;accuracy+=ratio[rasa][1];vypisStaty();kec('Naskilována dexterity!');}
  else{kec('Nemáš statpointy!');}
}
function pridatevasion(){
  if(spoint>0){spoint--;evasion+=ratio[rasa][2];vypisStaty();kec('Naskilována dexterity!');}
  else{kec('Nemáš statpointy!');}
}
function pridatdefense(){
  if(spoint>0){spoint--;defense+=ratio[rasa][3];vypisStaty();kec('Naskilováno defense!');}
  else{kec('Nemáš statpointy!');}
}
function trainSkill(oblast,ktery){
  if(skillPoint>0&&skilly[oblast][ktery].level<10){
    skillPoint--;
    skilly[oblast][ktery].level++;
    vypisStaty();
    kec('Úspěšně naskilováno!');
  }
  kec('Nemáš skillpointy')
}
function demonstrace(){
  //alert(geto('IMGdemoElf').src)
  if(demoPromena==0){
    geto('IMGdemoElf').src="img/animace/elfoption2.png";
    geto('IMGdemoHuman').src="img/animace/humanoption2.png";
    geto('IMGdemoOrk').src="img/animace/orcoption2.png";
    demoPromena=1;
  }
  else{
    geto('IMGdemoElf').src="img/animace/elfoption1.png";
    geto('IMGdemoHuman').src="img/animace/humanoption1.png";
    geto('IMGdemoOrk').src="img/animace/orcoption1.png";
    demoPromena=0;
  }
  if(demoPromena<2){window.setTimeout("demonstrace()",800);}
}
function zvolitHuman(){
  rasa=0;
  demoPromena=2;
  strength+=10;
  geto('DIVrasa').style.display='none';
  geto('player').src='img/animace/humanfront1.png';
  ekvipnout('CnKladivo');
  vypis();
  kec('Hra začala!');
  chuze=false;
  geto('IMGcombatChar').src="img/animace/humanfront1.png";
  geto('DIVstats').style.display = "block";
  geto('DIVlistaRasa').innerHTML = "HUMAN";
}
function zvolitElf(){
  rasa=1;
  demoPromena=2;
  accuracy+=5;evasion+=5;
  geto('DIVrasa').style.display='none';
  geto('player').src='img/animace/elffront1.png';
  ekvipnout('CnKratkyLuk');
  vypis();
  kec('Hra začala!');
  chuze=false;
  geto('IMGcombatChar').src="img/animace/elffront1.png";
  geto('DIVstats').style.display = "block";
  geto('DIVlistaRasa').innerHTML = "ELF";
}
function zvolitOrk(){
  rasa=2;
  demoPromena=2;
  defense+=10;
  geto('DIVrasa').style.display='none';
  geto('player').src='img/animace/orcfront1.png';
  ekvipnout('CnObourucak');
  vypis();
  kec('Hra začala!');
  chuze=false;
  geto('IMGcombatChar').src="img/animace/orcfront1.png";
  geto('DIVstats').style.display = "block";
  geto('DIVlistaRasa').innerHTML = "ORK";
}
function goShopping(kam){
  chuze=true;
  akutalGeschaft=kam;
  obsahObchodu="<h1>Obchod, jenž zove se "+shops[kam][1]+"</h1>Glody:"+prachy+"<table><tr><td width='640'><h2>Nákup</h2>";
  for(i in shops[kam][0]){
    obsahObchodu += "<img onClick='buy(\""+shops[kam][0][i]+"\")' src='img/inventar/"+inventar[shops[kam][0][i]].img+"' width='64' height='64'"
    obsahObchodu += "title='"+inventar[shops[kam][0][i]].name+","+inventar[shops[kam][0][i]].cena+"'>";
  }
  obsahObchodu+="</td><td width='64'></td><td width='580'><h2>Prodej</h2>";
  for(i in inventar){
    if(inventar[i].pocet > 0){
      obsahObchodu += "<span style='font-weight:bold;color:blue;position:relative;left:55px;top:-5px;'>"+inventar[i].pocet+"</span>";
      obsahObchodu += "<img onClick='sell(\""+i+"\")' src='img/inventar/"+inventar[i].img+"' width='64' height='64'";
      obsahObchodu += " title='"+inventar[i].name+","+(inventar[i].cena/2)+"'>";
    }
  }
  obsahObchodu+="</td></tr></table>";
  obsahObchodu+="<a onClick='chuze=false;geto(\"DIVobchod\").style.display=\"none\";' style='position:fixed;top:100px;right:200px;font-family:Arial;font-size:60px'>X</a>";
  geto('DIVobchod').innerHTML=obsahObchodu;
  geto('DIVobchod').style.display="block";
}
function buy(was){
  if(prachy>inventar[was].cena){
    prachy-=inventar[was].cena;
    inventar[was].pocet++;
    vypis();
    goShopping(akutalGeschaft);
  }
  else{
    kec('LOL!Not enough glods, co? You suck, noob!');
  }
}
function sell(was){
  sellable=true;
  //for(i in inventar){
    if(equipy.zbran==was&&inventar[was].pocet==1){sellable=false;}
    if(equipy.brneniBody==was&&inventar[was].pocet==1){sellable=false;}
     if(equipy.shield==was&&inventar[was].pocet==1&&rasa==0){sellable=false;}
  //}
  if(sellable){
    prachy+=Math.floor(inventar[was].cena/2);
    inventar[was].pocet--;
    vypis();
    goShopping(akutalGeschaft);
  }
  else{
    kec('Ale to mám ekviplé!');
  }
}
function lecit(kolik){
  if(hp+kolik>=hpMax){kec('Vyhealováno '+(hpMax-hp)+' HP!');hp=hpMax;}
  else{hp+=kolik;kec('Vyhealováno '+kolik+' HP!');}
  vypisStaty();}
function dobit(kolik){
  if(mana+kolik>=manaMax){kec('Dobito '+(manaMax-mana)+' Many!');mana=manaMax;}
  else{mana+=kolik;kec('Dobito '+kolik+' Many!');}
  vypisStaty();}

function openDialog(ktery){
  geto('DIVdialog').style.display="block";
  chuze=true;
  textDialogu="<h1>Rozhovor ohledně: "+dialogz[ktery].name+"</h1>";
  textDialogu+="<h2>On říká:</h2>"+dialogz[ktery].pole[dialogz[ktery].mod].text+"<hr><h2><u>Povolené</u> odpovědi:</h2>";
  for(i in dialogz[ktery].pole[dialogz[ktery].mod].ans){
    textDialogu+=dialogz[ktery].pole[dialogz[ktery].mod].ans[i].text+"<br><input type='button' value='Zvolit tuto odpověď' onClick='dialogz[\""+ktery+"\"].pole[dialogz[\""+ktery+"\"].mod].ans[\""+i+"\"].eff();'><br><br>";
  }
  geto('DIVdialog').innerHTML=textDialogu;
  vypis();
}
function closeDialog(){
  geto('DIVdialog').style.display="none";
  chuze=false;
  vypis();
}
function regenerace(){
  if(skilly.passive.tuhyKorinek.level>0&&hp<hpMax){lecit(skilly.passive.tuhyKorinek.level);};
  window.setTimeout("regenerace();",5000);
}


