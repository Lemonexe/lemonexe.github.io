var prachy = 5;
//
var strength = 10;
var evasion = 10;
var accuracy = 10;
var defense = 10;

var mana=100;
var manaMax=100;

var hpMax = 100;
var hp = 100;
//
var levl=1;
var expy=10
var spoint=5;
var skillPoint=1;
var aktualniPrisera=0;
var aktualniGeschaft="";
skilly={
  passive:{
    tuhyKorinek:{name:"Tuhý kořínek",popis:"To ti dává regenaraci<br>level/5 sec.",level:0},
    trnitaKuze:{name:"Trnitá kůže",popis:"Na tvé kůži budou trny!<br>vrátí level*2% damage.",level:0},
    kamennaKuze:{name:"Kamenná kůže",popis:"Tvá kůže bude neproniknutelná!<br>Absorbuje 1*level zranění",level:0},
    koncentrace:{name:"Koncentrace",popis:"Soustřeď se na oponenta! Pouze pozornost ti přinese úspěchy!<br>zlepšuje šanci na critical o 0,1*level",level:0},
    presnyZasah:{name:"Přesný zásah",popis:"Když už rána projde, soustřeď se na zranitelná místa.<br>Jinak nevyhraješ!!!",level:0},
  },
  aur:{},
  attHum:{},
  attElf:{},
  attOrk:{},
}
//str	acc	eva	def
//0human,1elf,2ork
ratio=[[3,4,3,5],[4,5,4,2],[5,3,3,4],];
var rasa=0;
var equipy={zbran:"CnKladivo",brneniBody:"armorCnElf",shield:"shieldCnRound",}
/*
WSAD - útok w,a/d a 
*/
//cena stuopá 10x
//Rating,damage,cena
zbraneRatia={
  Kladivo:[10,12,20],Mec:[12,15,30],Zezlo:[16,13,40],
  Obourucak:[22,25,40],Sekyra:[16,32,50],Palice:[25,30,60],
  KratkyLuk:[16,9,45],ElfLuk:[11,14,60],DoubleLuk:[20,10,90],
  Shield:[10,15,65],
  Elf:[30,20,250],Hum:[30,20,250],Ork:[30,20,250],
  
}
inventar = {
  //ONEHANDED ONEHANDED ONEHANDED ONEHANDED ONEHANDED ONEHANDED ONEHANDED ONEHANDED ONEHANDED ONEHANDED ONEHANDED 
  /*10 12;  12 15;  16 12
  */
  CnKladivo:{name:"Kladivo",info:"Krásné kladivo! S ním a s paladinskou modlitbou rozdrtíme nemrtvé!",img:"weapons/kladivo1.png",typ:"oneHanded",      attRating:zbraneRatia.Kladivo[0],attW:zbraneRatia.Kladivo[1],cena:zbraneRatia.Kladivo[2],pocet:1},
  CnMec:{name:"Meč",info:"Krásný ostrý meč.<br>Ať žije klasika!",img:"weapons/mec1.png",typ:"oneHanded",                                            attRating:zbraneRatia.Mec[0],attW:zbraneRatia.Mec[1],cena:zbraneRatia.Mec[2],pocet:0},
  CnZezlo:{name:"Žezlo",info:"Skvělá věc! Je zlatý a má drahokamy, takže dává hodně damage!",img:"weapons/zezlo1.png",typ:"oneHanded",                attRating:zbraneRatia.Zezlo[0],attW:zbraneRatia.Zezlo[1],cena:zbraneRatia.Zezlo[2],pocet:0},
  //
  CwKladivo:{name:"Silné kladivo",info:"Krásné kladivo! S ním a s paladinskou modlitbou rozdrtíme nemrtvé!",img:"weapons/kladivo2.png",typ:"oneHanded",       attRating:zbraneRatia.Kladivo[0]*2,attW:zbraneRatia.Kladivo[1]*2,cena:zbraneRatia.Kladivo[2]*10,pocet:0},
  CwMec:{name:"Velkolepý meč",info:"Krásný ostrý meč.<br>Ať žije klasika!",img:"weapons/mec2.png",typ:"oneHanded",                                             attRating:zbraneRatia.Mec[0]*2,attW:zbraneRatia.Mec[1]*2,cena:zbraneRatia.Mec[2]*10,pocet:0},
  CwZezlo:{name:"Honosné žezlo",info:"Skvělá věc! Je zlatý a má drahokamy, takže dává hodně damage!",img:"weapons/zezlo2.png",typ:"oneHanded",                 attRating:zbraneRatia.Zezlo[0]*2,attW:zbraneRatia.Zezlo[1]*2,cena:zbraneRatia.Zezlo[2]*10,pocet:0},
  //
  ClKladivo:{name:"Drtivé kladivo",info:"Krásné kladivo! S ním a s paladinskou modlitbou rozdrtíme nemrtvé!",img:"weapons/kladivo3.png",typ:"oneHanded",    attRating:zbraneRatia.Kladivo[0]*3,attW:zbraneRatia.Kladivo[1]*3,cena:zbraneRatia.Kladivo[2]*100,pocet:0},
  ClMec:{name:"Svatý meč",info:"Krásný ostrý meč.<br>Ať žije klasika!",img:"weapons/mec3.png",typ:"oneHanded",                                          attRating:zbraneRatia.Mec[0]*3,attW:zbraneRatia.Mec[1]*3,cena:zbraneRatia.Mec[2]*100,pocet:0},
  ClZezlo:{name:"Zlaté žezlo",info:"Skvělá věc! Je zlatý a má drahokamy, takže dává hodně damage!",img:"weapons/zezlo3.png",typ:"oneHanded",              attRating:zbraneRatia.Zezlo[0]*3,attW:zbraneRatia.Zezlo[1]*3,cena:zbraneRatia.Zezlo[2]*100,pocet:0},
  //no shop
  CsKladivo:{name:"Drtivé kladivo Odplaty",info:"Krásné kladivo! S ním a s paladinskou modlitbou rozdrtíme nemrtvé!",img:"weapons/kladivo4.png",typ:"oneHanded",   attRating:zbraneRatia.Kladivo[0]*4,attW:zbraneRatia.Kladivo[1]*4,cena:zbraneRatia.Kladivo[2]*1000,pocet:0},
  CsMec:{name:"Paladinský Svatý meč",info:"Krásný ostrý meč.<br>Ať žije klasika!",img:"weapons/mec4.png",typ:"oneHanded",                                         attRating:zbraneRatia.Mec[0]*4,attW:zbraneRatia.Mec[1]*4,cena:zbraneRatia.Mec[2]*1000,pocet:0},
  CsZezlo:{name:"Královské  žezlo",info:"Skvělá věc! Je zlatý a má drahokamy, takže dává hodně damage!",img:"weapons/zezlo4.png",typ:"oneHanded",             attRating:zbraneRatia.Zezlo[0]*4,attW:zbraneRatia.Zezlo[1]*4,cena:zbraneRatia.Zezlo[2]*1000,pocet:0},
  //
  CoKladivo:{name:"Drtivé kladivo Svaté odplaty",info:"Krásné kladivo! S ním a s paladinskou modlitbou rozdrtíme nemrtvé!",img:"weapons/kladivo5.png",typ:"oneHanded",    attRating:zbraneRatia.Kladivo[0]*5,attW:zbraneRatia.Kladivo[1]*5,cena:zbraneRatia.Kladivo[2]*10000,pocet:0},
  CoMec:{name:"Královský Svatý meč",info:"Krásný ostrý meč.<br>Ať žije klasika!",img:"weapons/mec5.png",typ:"oneHanded",                                          attRating:zbraneRatia.Mec[0]*5,attW:zbraneRatia.Mec[1]*5,cena:zbraneRatia.Mec[2]*10000,pocet:0},
  CoZezlo:{name:"Královské žezlo předků",info:"Skvělá věc! Je zlatý a má drahokamy, takže dává hodně damage!",img:"weapons/zezlo5.png",typ:"oneHanded",              attRating:zbraneRatia.Zezlo[0]*5,attW:zbraneRatia.Zezlo[1]*5,cena:zbraneRatia.Zezlo[2]*10000,pocet:0},
  //
  CpKladivo:{name:"Drtivé kladivo Nejsvětější odplaty",info:"Krásné kladivo! S ním a s paladinskou modlitbou rozdrtíme nemrtvé!",img:"weapons/kladivo6.png",typ:"oneHanded",     attRating:zbraneRatia.Kladivo[0]*6,attW:zbraneRatia.Kladivo[1]*6,cena:zbraneRatia.Kladivo[2]*100000,pocet:0},
  CpMec:{name:"Zlatý Královský Svatý meč ",info:"Krásný ostrý meč.<br>Ať žije klasika!",img:"weapons/mec6.png",typ:"oneHanded",                                           attRating:zbraneRatia.Mec[0]*6,attW:zbraneRatia.Mec[1]*6,cena:zbraneRatia.Mec[2]*100000,pocet:0},
  CpZezlo:{name:"Starobylé Královské žezlo předků",info:"Skvělá věc! Je zlatý a má drahokamy, takže dává hodně damage!",img:"weapons/zezlo6 .png",typ:"oneHanded",               attRating:zbraneRatia.Zezlo[0]*6,attW:zbraneRatia.Zezlo[1]*6,cena:zbraneRatia.Zezlo[2]*100000,pocet:0},
  //
  CbMec:{name:"C.Bugster Luk",info:"Docela dobrý luk!<br>Neužívat vnitřně",img:"weapons/helmaBugsterLuk.png",typ:"weapon",                               attRating:850,attW:160,cena:-500,pocet:0},
  
  
  
  //BOWS BOWS BOWS BOWS BOWS BOWS BOWS BOWS BOWS BOWS BOWS BOWS BOWS BOWS BOWS BOWS BOWS BOWS BOWS BOWS BOWS BOWS BOWS 
  CnKratkyLuk:{name:"Krátký luk",info:"Krátký luk, nepotřebuje šípy!",img:"weapons/bow1.png",typ:"bow",                                      attRating:zbraneRatia.KratkyLuk[0],attW:zbraneRatia.KratkyLuk[1],cena:zbraneRatia.KratkyLuk[2],pocet:1},
  CnElfLuk:{name:"Dlouhý luk",info:"Dlouhý luk dostřelí dál než krátký, to dá rozum!",img:"weapons/long1.png",typ:"bow",                        attRating:zbraneRatia.ElfLuk[0],attW:zbraneRatia.ElfLuk[1],cena:zbraneRatia.ElfLuk[2],pocet:0},
  CnDoubleLuk:{name:"Dvojitý luk",info:"Dvojitý luk samozřejmě dává dvojitý damage!",img:"weapons/double1.png",typ:"bow",                     attRating:zbraneRatia.DoubleLuk[0],attW:zbraneRatia.DoubleLuk[1],cena:zbraneRatia.DoubleLuk[2],pocet:0},
  //
  CwKratkyLuk:{name:"Krátký Lesní luk",info:"Krátký luk, nepotřebuje šípy!",img:"weapons/bow2.png",typ:"bow",                                       attRating:zbraneRatia.KratkyLuk[0]*2,attW:zbraneRatia.KratkyLuk[1]*2,cena:zbraneRatia.KratkyLuk[2]*10,pocet:0},
  CwElfLuk:{name:"Dlouhý luk dlouhých stínů",info:"Dlouhý luk dostřelí dál než krátký, to dá rozum!",img:"weapons/long2.png",typ:"bow",                         attRating:zbraneRatia.ElfLuk[0]*2,attW:zbraneRatia.ElfLuk[1]*2,cena:zbraneRatia.ElfLuk[2]*10,pocet:0},
  CwDoubleLuk:{name:"Dvojitý luk šlahounů",info:"Dvojitý luk samozřejmě dává dvojitý damage!",img:"weapons/double2.png",typ:"bow",                      attRating:zbraneRatia.DoubleLuk[0]*2,attW:zbraneRatia.DoubleLuk[1]*2,cena:zbraneRatia.DoubleLuk[2]*10,pocet:0},
  //
  ClKratkyLuk:{name:"Krátký Kouzelný luk",info:"Krátký luk, nepotřebuje šípy!",img:"weapons/bow3.png",typ:"bow",                                    attRating:zbraneRatia.KratkyLuk[0]*3,attW:zbraneRatia.KratkyLuk[1]*3,cena:zbraneRatia.KratkyLuk[2]*100,pocet:0},
  ClElfLuk:{name:"Dlouhý luk hlubokých stínů",info:"Dlouhý luk dostřelí dál než krátký, to dá rozum!",img:"weapons/long3.png",typ:"bow",                      attRating:zbraneRatia.ElfLuk[0]*3,attW:zbraneRatia.ElfLuk[1]*3,cena:zbraneRatia.ElfLuk[2]*100,pocet:0},
  ClDoubleLuk:{name:"Dvojitý luk rovnováhy",info:"Časem zasáhne úplně všechny! Velmi pwned a neférové!",img:"weapons/double3.png",typ:"bow",                   attRating:zbraneRatia.DoubleLuk[0]*3,attW:zbraneRatia.DoubleLuk[1]*3,cena:zbraneRatia.DoubleLuk[2]*100,pocet:0},
  //
  CsKratkyLuk:{name:"Krátký Kouzelný luk Jarního Vánku",info:"Krátký luk, nepotřebuje šípy!",img:"weapons/bow4.png",typ:"bow",                                   attRating:zbraneRatia.KratkyLuk[0]*4,attW:zbraneRatia.KratkyLuk[1]*4,cena:zbraneRatia.KratkyLuk[2]*1000,pocet:0},
  CsElfLuk:{name:"Dlouhý Soumračný luk",info:"Dlouhý luk dostřelí dál než krátký, to dá rozum!",img:"weapons/long4.png",typ:"bow",                     attRating:zbraneRatia.ElfLuk[0]*4,attW:zbraneRatia.ElfLuk[1]*4,cena:zbraneRatia.ElfLuk[2]*1000,pocet:0},
  CsDoubleLuk:{name:"Dvojitý luk rovnovážné harmonie",info:"Dvojitý luk samozřejmě dává dvojitý damage!",img:"weapons/double4.png",typ:"bow",                  attRating:zbraneRatia.DoubleLuk[0]*4,attW:zbraneRatia.DoubleLuk[1]*4,cena:zbraneRatia.DoubleLuk[2]*1000,pocet:0},
  //
  CoKratkyLuk:{name:"Krátký Kouzelný luk Síly Přírody",info:"Krátký luk, nepotřebuje šípy!",img:"weapons/bow5.png",typ:"bow",                                    attRating:zbraneRatia.KratkyLuk[0]*5,attW:zbraneRatia.KratkyLuk[1]*5,cena:zbraneRatia.KratkyLuk[2]*10000,pocet:0},
  CoElfLuk:{name:"Dlouhý Měsíční luk",info:"Dlouhý luk dostřelí dál než krátký, to dá rozum!",img:"weapons/long5.png",typ:"bow",                      attRating:zbraneRatia.ElfLuk[0]*5,attW:zbraneRatia.ElfLuk[1]*5,cena:zbraneRatia.ElfLuk[2]*10000,pocet:0},
  CoDoubleLuk:{name:"Dvojitý luk harmonie života a smrti",info:"Dvojitý luk samozřejmě dává dvojitý damage!",img:"weapons/double5.png",typ:"bow",                   attRating:zbraneRatia.DoubleLuk[0]*5,attW:zbraneRatia.DoubleLuk[1]*5,cena:zbraneRatia.DoubleLuk[2]*10000,pocet:0},
  //
  CpKratkyLuk:{name:"Krátký Kouzelný luk Duchů Lesa",info:"Krátký luk, nepotřebuje šípy!",img:"weapons/bow6.png",typ:"bow",                                     attRating:zbraneRatia.KratkyLuk[0]*6,attW:zbraneRatia.KratkyLuk[1]*6,cena:zbraneRatia.KratkyLuk[2]*100000,pocet:0},
  CpElfLuk:{name:"Dlouhý Půlnoční luk Měsíční duhy",info:"Dlouhý luk dostřelí dál než krátký, to dá rozum!",img:"weapons/long6.png",typ:"bow",                       attRating:zbraneRatia.ElfLuk[0]*6,attW:zbraneRatia.ElfLuk[1]*6,cena:zbraneRatia.ElfLuk[2]*100000,pocet:0},
  CpDoubleLuk:{name:"Dvojitý Čaromocný luk elfí královny",info:"Dvojitý luk samozřejmě dává dvojitý damage!",img:"weapons/double6a.png",typ:"bow",                    attRating:zbraneRatia.DoubleLuk[0]*6,attW:zbraneRatia.DoubleLuk[1]*6,cena:zbraneRatia.DoubleLuk[2]*100000,pocet:0},
  
 
 
  //TWOHANDED TWOHANDED TWOHANDED TWOHANDED TWOHANDED TWOHANDED TWOHANDED TWOHANDED TWOHANDED TWOHANDED TWOHANDED TWOHANDED 
  CnObourucak:{name:"Obouručný meč",info:"Obrovská čepel a pár klacků jako držák!<br>Vnitřnosti budou lítat!",img:"weapons/obourucak1.png",typ:"twoHanded",          attRating:zbraneRatia.Obourucak[0],attW:zbraneRatia.Obourucak[1],cena:zbraneRatia.Obourucak[2],pocet:1},
  CnSekyra:{name:"Sekery",info:"Dvě sekyry! teď můžu zuřit a ničit!<br>Třeste se přes mocným berserkem!",img:"weapons/sekyra1.png",typ:"twoHanded",          attRating:zbraneRatia.Sekyra[0],attW:zbraneRatia.Sekyra[1],cena:zbraneRatia.Sekyra[2],pocet:0},
  CnPalice:{name:"Palice",info:"Velmi KRUSH KRUSH palice!<br>S tím se dá tolik věcí zničit...",img:"weapons/palice1.png",typ:"twoHanded",               attRating:zbraneRatia.Palice[0],attW:zbraneRatia.Palice[1],cena:zbraneRatia.Palice[2],pocet:0},
  //
  CwObourucak:{name:"Velký Obouručný meč",info:"Obrovská čepel a pár klacků jako držák!<br>Vnitřnosti budou lítat!",img:"weapons/obourucak2.png",typ:"twoHanded",           attRating:zbraneRatia.Obourucak[0]*2,attW:zbraneRatia.Obourucak[1]*2,cena:zbraneRatia.Obourucak[2]*10,pocet:0},
  CwSekyra:{name:"Těžké sekery",info:"Dvě sekyry! teď můžu zuřit a ničit!<br>Třeste se přes mocným berserkem!",img:"weapons/sekyra2.png",typ:"twoHanded",           attRating:zbraneRatia.Sekyra[0]*2,attW:zbraneRatia.Sekyra[1]*2,cena:zbraneRatia.Sekyra[2]*10,pocet:0},
  CwPalice:{name:"Zlostná palice",info:"Velmi KRUSH KRUSH palice!<br>S tím se dá tolik věcí zničit...",img:"weapons/palice2.png",typ:"twoHanded",                attRating:zbraneRatia.Palice[0]*2,attW:zbraneRatia.Palice[1]*2,cena:zbraneRatia.Palice[2]*10,pocet:0},
  //
  ClObourucak:{name:"Vzteklý obouručný meč",info:"Obrovská čepel a pár klacků jako držák!<br>Vnitřnosti budou lítat!",img:"weapons/obourucak3.png",typ:"twoHanded",        attRating:zbraneRatia.Obourucak[0]*3,attW:zbraneRatia.Obourucak[1]*3,cena:zbraneRatia.Obourucak[2]*100,pocet:0},
  ClSekyra:{name:"Bouřlivé sekery",info:"Dvě sekyry! teď můžu zuřit a ničit!<br>Třeste se přes mocným berserkem!",img:"weapons/sekyra3.png",typ:"twoHanded",        attRating:zbraneRatia.Sekyra[0]*3,attW:zbraneRatia.Sekyra[1]*3,cena:zbraneRatia.Sekyra[2]*100,pocet:0},
  ClPalice:{name:"Zuřivá palice ",info:"Velmi KRUSH KRUSH palice!<br>S tím se dá tolik věcí zničit...",img:"weapons/palice3.png",typ:"twoHanded",             attRating:zbraneRatia.Palice[0]*3,attW:zbraneRatia.Palice[1]*3,cena:zbraneRatia.Palice[2]*100,pocet:0},
  //
  CsObourucak:{name:"Rozpálený obouručný meč",info:"Obrovská čepel a pár klacků jako držák!<br>Vnitřnosti budou lítat!",img:"weapons/obourucak4.png",typ:"twoHanded",          attRating:zbraneRatia.Obourucak[0]*4,attW:zbraneRatia.Obourucak[1]*4,cena:zbraneRatia.Obourucak[2]*1000,pocet:0},
  CsSekyra:{name:"Prudké bouřlivé sekery",info:"Dvě sekyry! teď můžu zuřit a ničit!<br>Třeste se přes mocným berserkem!",img:"weapons/sekyra4.png",typ:"twoHanded",          attRating:zbraneRatia.Sekyra[0]*4,attW:zbraneRatia.Sekyra[1]*4,cena:zbraneRatia.Sekyra[2]*1000,pocet:0},
  CsPalice:{name:"Hromová palice ",info:"Velmi KRUSH KRUSH palice!<br>S tím se dá tolik věcí zničit...",img:"weapons/palice4.png",typ:"twoHanded",               attRating:zbraneRatia.Palice[0]*4,attW:zbraneRatia.Palice[1]*4,cena:zbraneRatia.Palice[2]*1000,pocet:0},
  //
  CoObourucak:{name:"Ohnivý obouručný meč",info:"Obrovská čepel a pár klacků jako držák!<br>Vnitřnosti budou lítat!",img:"weapons/obourucak5.png",typ:"twoHanded",           attRating:zbraneRatia.Obourucak[0]*5,attW:zbraneRatia.Obourucak[1]*5,cena:zbraneRatia.Obourucak[2]*10000,pocet:0},
  CoSekyra:{name:"Ničivé bouřlivé sekery",info:"Dvě sekyry! teď můžu zuřit a ničit!<br>Třeste se přes mocným berserkem!",img:"weapons/sekyra5.png",typ:"twoHanded",           attRating:zbraneRatia.Sekyra[0]*5,attW:zbraneRatia.Sekyra[1]*5,cena:zbraneRatia.Sekyra[2]*10000,pocet:0},
  CoPalice:{name:"Ohromná Hromová palice",info:"Velmi KRUSH KRUSH palice!<br>S tím se dá tolik věcí zničit...",img:"weapons/palice5.png",typ:"twoHanded",                attRating:zbraneRatia.Palice[0]*5,attW:zbraneRatia.Palice[1]*5,cena:zbraneRatia.Palice[2]*10000,pocet:0},
  //
  CpObourucak:{name:"Plamenný obouručný meč Planoucí Hněv",info:"Obrovská čepel a pár klacků jako držák!<br>Vnitřnosti budou lítat!",img:"weapons/obourucak6.png",typ:"twoHanded",        attRating:zbraneRatia.Obourucak[0]*6,attW:zbraneRatia.Obourucak[1]*6,cena:zbraneRatia.Obourucak[2]*100000,pocet:0},
  CpSekyra:{name:"Katastrofické sekery Strašlivý Orkán",info:"Dvě sekyry! teď můžu zuřit a ničit!<br>Třeste se přes mocným berserkem!",img:"weapons/sekyra6.png",typ:"twoHanded",        attRating:zbraneRatia.Sekyra[0]*6,attW:zbraneRatia.Sekyra[1]*6,cena:zbraneRatia.Sekyra[2]*100000,pocet:0},
  CpPalice:{name:"Hromsilná palice Hromové Beranidlo",info:"Velmi KRUSH KRUSH palice!<br>S tím se dá tolik věcí zničit...",img:"weapons/palice6.png",typ:"twoHanded",             attRating:zbraneRatia.Palice[0]*6,attW:zbraneRatia.Palice[1]*6,cena:zbraneRatia.Palice[2]*100000,pocet:0},

  
  //SHIELDS
  shieldCnRound:{name:"Dřevěný štít",info:"Pár kusů dřeva sbitých dohromady.",img:"armors/shieldRound.png",typ:"shield",               defAbsorb:zbraneRatia.Shield[0],defRating:zbraneRatia.Shield[1],cena:zbraneRatia.Shield[2],pocet:1},
  shieldCwRound:{name:"Dřevěný štít blokování",info:"Pár kusů dřeva sbitých dohromady.",img:"armors/shieldRound.png",typ:"shield",               defAbsorb:zbraneRatia.Shield[0]*2,defRating:zbraneRatia.Shield[1]*2,cena:zbraneRatia.Shield[2]*10,pocet:0},
  //
  shieldClSquare:{name:"Železný štít odrážení",info:"Velký plát s držákem na odrážení ran!",img:"armors/shieldSquare.png",typ:"shield",      defAbsorb:zbraneRatia.Shield[0]*3,defRating:zbraneRatia.Shield[1]*3,cena:zbraneRatia.Shield[2]*100,pocet:0},
  shieldCsSquare:{name:"Železný štít svaté hvězdy",info:"Velký plát s držákem na odrážení ran!",img:"armors/shieldSquare.png",typ:"shield",      defAbsorb:zbraneRatia.Shield[0]*4,defRating:zbraneRatia.Shield[1]*4,cena:zbraneRatia.Shield[2]*1000,pocet:0},
  //
  shieldCoDelta:{name:"Deltoidní štít ochrany nevinných",info:"Toto je paladinský deltoid! Úžasné!",img:"armors/shieldDelta.png",typ:"shield",          defAbsorb:zbraneRatia.Shield[0]*5,defRating:zbraneRatia.Shield[1]*5,cena:zbraneRatia.Shield[2]*10000,pocet:0},
  shieldCpDelta:{name:"Andělský deltoidní štít ochrany nevinných",info:"Toto je paladinský deltoid! Úžasné!",img:"armors/shieldDelta.png",typ:"shield",          defAbsorb:zbraneRatia.Shield[0]*6,defRating:zbraneRatia.Shield[1]*6,cena:zbraneRatia.Shield[2]*100000,pocet:0},
  
  
  //ARMOR ARMOR ARMOR ARMOR ARMOR ARMOR ARMOR ARMOR ARMOR ARMOR ARMOR ARMOR ARMOR ARMOR ARMOR ARMOR ARMOR ARMOR ARMOR 
  armorCnElf:{name:"Elfská zbroj",info:"Roztrhaná, ale přesto užitečný krám!",img:"armors/elf1.png",typ:"body",       defAbsorb:zbraneRatia.Elf[0],defRating:zbraneRatia.Elf[1],cena:zbraneRatia.Elf[2],pocet:1},
  armorCnHum:{name:"Plátová zbroj",info:"Abys byl méně obratný. Budé se hodit!",img:"armors/human1.png",typ:"body",       defAbsorb:zbraneRatia.Hum[0],defRating:zbraneRatia.Hum[1],cena:zbraneRatia.Hum[2],pocet:1},
  armorCnOrk:{name:"Těžká zbroj",info:"KRHZGRH!!!NIČIT A MLÁTIT!!!",img:"armors/ork1.png",typ:"body",                    defAbsorb:zbraneRatia.Ork[0],defRating:zbraneRatia.Ork[1],cena:zbraneRatia.Ork[2],pocet:1},
  //
  armorCwElf:{name:"Ladná elfská zbroj",info:"Roztrhaná, ale přesto užitečný krám!",img:"armors/elf2.png",typ:"body",        defAbsorb:zbraneRatia.Elf[0]*2,defRating:zbraneRatia.Elf[1]*2,cena:zbraneRatia.Elf[2]*10,pocet:0},
  armorCwHum:{name:"Tvrzená plátová zbroj",info:"Abys byl méně obratný. Budé se hodit!",img:"armors/human2.png",typ:"body",        defAbsorb:zbraneRatia.Hum[0]*2,defRating:zbraneRatia.Hum[1]*2,cena:zbraneRatia.Hum[2]*10,pocet:0},
  armorCwOrk:{name:"Vyztužená těžká zbroj",info:"KRHZGRH!!!NIČIT A MLÁTIT!!!",img:"armors/ork2.png",typ:"body",                     defAbsorb:zbraneRatia.Ork[0]*2,defRating:zbraneRatia.Ork[1]*2,cena:zbraneRatia.Ork[2]*10,pocet:0},
  //
  armorClElf:{name:"Přízračná elfská zbroj",info:"Roztrhaná, ale přesto užitečný krám!",img:"armors/elf3.png",typ:"body",     defAbsorb:zbraneRatia.Elf[0]*3,defRating:zbraneRatia.Elf[1]*3,cena:zbraneRatia.Elf[2]*100,pocet:0},
  armorClHum:{name:"Zlatá plátová zbroj",info:"Abys byl méně obratný. Budé se hodit!",img:"armors/human3.png",typ:"body",     defAbsorb:zbraneRatia.Hum[0]*3,defRating:zbraneRatia.Hum[1]*3,cena:zbraneRatia.Hum[2]*100,pocet:0},
  armorClOrk:{name:"Surová těžká zbroj",info:"KRHZGRH!!!NIČIT A MLÁTIT!!!",img:"armors/ork3.png",typ:"body",                  defAbsorb:zbraneRatia.Ork[0]*3,defRating:zbraneRatia.Ork[1]*3,cena:zbraneRatia.Ork[2]*100,pocet:0},
  //no shop
  armorCsElf:{name:"Čarovná elfská zbroj",info:"Roztrhaná, ale přesto užitečný krám!",img:"armors/elf4.png",typ:"body",    defAbsorb:zbraneRatia.Elf[0]*4,defRating:zbraneRatia.Elf[1]*4,cena:zbraneRatia.Elf[2]*1000,pocet:0},
  armorCsHum:{name:"Paladinská plátová zbroj",info:"Abys byl méně obratný. Budé se hodit!",img:"armors/human4.png",typ:"body",    defAbsorb:zbraneRatia.Hum[0]*4,defRating:zbraneRatia.Hum[1]*4,cena:zbraneRatia.Hum[2]*1000,pocet:0},
  armorCsOrk:{name:"Mohutná těžká zbroj",info:"KRHZGRH!!!NIČIT A MLÁTIT!!!",img:"armors/ork4.png",typ:"body",                 defAbsorb:zbraneRatia.Ork[0]*4,defRating:zbraneRatia.Ork[1]*4,cena:zbraneRatia.Ork[2]*1000,pocet:0},
  //
  armorCoElf:{name:"Stínová zbroj",info:"Roztrhaná, ale přesto užitečný krám!",img:"armors/elf5.png",typ:"body",     defAbsorb:zbraneRatia.Elf[0]*5,defRating:zbraneRatia.Elf[1]*5,cena:zbraneRatia.Elf[2]*10000,pocet:0},
  armorCoHum:{name:"Ceremoniální plátová zbroj",info:"Abys byl méně obratný. Budé se hodit!",img:"armors/human5.png",typ:"body",     defAbsorb:zbraneRatia.Hum[0]*5,defRating:zbraneRatia.Hum[1]*5,cena:zbraneRatia.Hum[2]*10000,pocet:0},
  armorCoOrk:{name:"Pancéřová těžká zbroj",info:"KRHZGRH!!!NIČIT A MLÁTIT!!!",img:"armors/ork5.png",typ:"body",                  defAbsorb:zbraneRatia.Ork[0]*5,defRating:zbraneRatia.Ork[1]*5,cena:zbraneRatia.Ork[2]*10000,pocet:0},
  //
  armorCpElf:{name:"Moudrá elfská zbroj",info:"Roztrhaná, ale přesto užitečný krám!",img:"armors/elf6.png",typ:"body",      defAbsorb:zbraneRatia.Elf[0]*6,defRating:zbraneRatia.Elf[1]*6,cena:zbraneRatia.Elf[2]*100000,pocet:0},
  armorCpHum:{name:"Arciceremoniální plátová zbroj",info:"Abys byl méně obratný. Budé se hodit!",img:"armors/human6.png",typ:"body",      defAbsorb:zbraneRatia.Hum[0]*6,defRating:zbraneRatia.Hum[1]*6,cena:zbraneRatia.Hum[2]*100000,pocet:0},
  armorCpOrk:{name:"Obléhací těžká zbroj",info:"KRHZGRH!!!NIČIT A MLÁTIT!!!",img:"armors/ork6.png",typ:"body",                   defAbsorb:zbraneRatia.Ork[0]*6,defRating:zbraneRatia.Ork[1]*6,cena:zbraneRatia.Ork[2]*100000,pocet:0},
  //
  pochoden:{name:"Pochodeň",info:"Můžu si osvětlit cestu",img:"pochoden.png",typ:"other",onUse: function(){kec('Ale vždyť je den!')},cena:6,pocet:0},
  kuze:{name:"Kožešina",info:"Můžu sellnout za pár glodů!",img:"kuze.png",typ:"other",onUse: function(){kec('Moc miloučká a teplá!')},cena:100,pocet:0},
  fressenJablko:{name:"Jablko",info:"Je to k jídlu!<br>A živě červené!",img:"applered.png",typ:"other",onUse: function(){if(hp<hpMax){inventar['fressenJablko'].pocet--;lecit(25);vypis();}else{kec('Netřeba!');}},cena:5,pocet:1},
  fressenJablko2:{name:"Jablko",info:"Je to k jídlu!<br>A magicky modré",img:"appleblue.png",typ:"other",onUse: function(){if(mana<manaMax){inventar['fressenJablko2'].pocet--;dobit(25);vypis();}else{kec('Netřeba!');}},cena:5,pocet:1},
}

/*TYGŘI TRIGŘI*/
efekty = {
  kovarnaBilla:{pos:[9,9],img:"img/mapa/blank.png",eff:function(){goShopping('prvniKovarna');vypisInventar();},konstant:true,state:true,},
  dialogPastyr:{pos:[5,24],img:"img/mapa/blank.png",eff:function(){openDialog('questPastyr');},konstant:true,state:true,},
  bugKamen1:{pos:[3,12],img:"img/mapa/kamen1.png",eff:function(){kec('Ten kámen je nějakej divnej......Á, konečně zmizel!');},konstant:false,state:true,},
  bugKamen2:{pos:[2,12],img:"img/mapa/kamen1.png",eff:function(){kec('Ten kámen je nějakej divnej......Á, konečně zmizel!');},konstant:false,state:true,},
  bugHelma:{pos:[2,11],img:"img/mapa/kamen1.png",eff:function(){inventar.CbMec.pocet++;vypisInventar();kec('S velkou power prichází velká zodpovědnost! BUG!');},konstant:false,state:true,},
}
veci = [
  //Vjeci
  [[2,4],"CwMec",true],
  [[2,5],"fressenJablko",true],
  [[11,4],"fressenJablko2",true],
  [[2,7],"fressenJablko",true],
  [[5,5],"pochoden",true],
  [[7,7],"pochoden",true],
  [[5,2],"armorCwOrk",true],
  [[4,3],"armorCwHum",true],
  [[7,3],"shieldCwRound",true],
  [[10,9],"shieldCnRound",true],
  [[2,8],"shieldClSquare",true],
  [[3,3],"CwKratkyLuk",true],
  [[3,4],"CwObourucak",true],
  [[10,1],"ClObourucak",true],
  [[9,3],"ClZezlo",true],
  [[8,6],"ClKratkyLuk",true],
  [[2,9],"armorClElf",true],
  [[6,15],"kuze",true],
  [[7,1],"kuze",true],
]
/*ETWAS ZUM EINSCHLAGEN*/
monstraTypes={
  Ovce:{name:"Ovce",klasse:"1 (Noob)",src:"sheep.png",respawn:15,expy:90,onKill:function(){},lootGlody:25,loot:['CnMec','fressenJablko','fressenJablko2',],hpMax:100,strength:280,defRating:70,attRating:300,defense:60,},
  Slepice:{name:"Slepice",klasse:"1 (Noob",src:"slepice.png",respawn:15,expy:50,onKill:function(){},lootGlody:50,loot:['pochoden','fressenJablko','fressenJablko2','CnZezlo',],hpMax:50,strength:100,defRating:150,attRating:80,defense:30,},
  //
  Mrchozrout:{name:"Mrchožrout",klasse:"2 (Low)",src:"scavenger.png",respawn:30,expy:200,onKill:function(){},lootGlody:500,loot:['armorCnOrk','CwMec','shieldCnRound','fressenJablko','fressenJablko2',],hpMax:100,strength:760,defRating:120,attRating:710,defense:260,},
  Kostlivec:{name:"Kostlivec",klasse:"2 (Low)",src:"skeleton.png",respawn:30,expy:140,onKill:function(){},lootGlody:400,loot:['armorCwElf','CnObourucak','pochoden','shieldCwRound'],hpMax:100,strength:420,defRating:320,attRating:490,defense:300,},
  Vlk:{name:"Vlk",klasse:"2 (Low)",src:"wolf.png",respawn:30,expy:150,onKill:function(){},lootGlody:400,loot:['kuze','armorCnHum','CwObourucak','fressenJablko','fressenJablko2',],hpMax:100,strength:490,defRating:220,attRating:650,defense:250,},
  //
  Zombie:{name:"Zombie",klasse:"3 (Loller)",src:"zombie.png",respawn:60,expy:650,onKill:function(){},lootGlody:800,loot:['shieldClSquare','shieldCnRound','pochoden','fressenJablko','ClKladivo'],hpMax:160,strength:1940,defRating:750,attRating:950,defense:1480,},
  Prase:{name:"Prase",klasse:"3 (Loller)",src:"boar.png",respawn:60,expy:500,onKill:function(){},lootGlody:900,loot:['kuze','fressenJablko','armorClOrk','CwZezlo','ClKratkyLuk',],hpMax:150,strength:1150,defRating:1400,attRating:1500,defense:850,},
  //
  Medved:{name:"Medvěd",klasse:"4 (Skiller)",src:"bear.png",respawn:120,expy:2500,onKill:function(){},lootGlody:1700,loot:['kuze','armorCwElf','armorCsHum','ClObourucak','CwKratkyLuk','shieldCsSquare',],hpMax:200,strength:3650,defRating:3100,attRating:2960,defense:1640,},
  //
  MedvedGreat:{name:"Ohromný medvěd",klasse:"5 (Ownage)",src:"bear2.png",respawn:240,expy:11600,onKill:function(){},lootGlody:5000,loot:['kuze','armorCoElf','CsSekyra','ClDoubleLuk','armorCwHum','CsElfLuk',],hpMax:300,strength:9650,defRating:4860,attRating:8160,defense:9960,},
  Trojan:{name:"Trojan",klasse:"5 (Ownage)",src:"trojan.png",respawn:240,expy:13200,onKill:function(){},lootGlody:6000,loot:['pochoden','shieldCoDelta','armorCoOrk','armorClElf','CsZezlo','shieldClSquare'],hpMax:300,strength:6630,defRating:6700,attRating:9960,defense:9960,},
  //kvests
  Playa1:{name:"Playa",klasse:"3 (Loller)",src:"playa1.png",respawn:false,expy:800,onKill:function(){dialogz.questPastyr.mod=2;},lootGlody:3000,loot:['fressenJablko','armorClOrk','CwObourucak'],hpMax:100,strength:1800,defRating:900,attRating:1600,defense:1500,},
};



monstra = [
  {pos:[4,23],typ:"Ovce",hp:100},
  {pos:[5,26],typ:"Ovce",hp:100},
  {pos:[6,22],typ:"Ovce",hp:100},
  
  //
  {pos:[5,3],typ:"Slepice",hp:50},
  //LOW
  {pos:[5,4],typ:"Mrchozrout",hp:100},
  {pos:[10,4],typ:"Mrchozrout",hp:100},
  
  //
  {pos:[7,4],typ:"Kostlivec",hp:100},
  {pos:[20,11],typ:"Kostlivec",hp:100},
  {pos:[18,12],typ:"Kostlivec",hp:100},
  {pos:[14,4],typ:"Kostlivec",hp:100},
  
  //
  {pos:[8,8],typ:"Vlk",hp:100},
  {pos:[8,3],typ:"Vlk",hp:100},
  {pos:[9,2],typ:"Vlk",hp:100},
  {pos:[10,6],typ:"Vlk",hp:100},
  {pos:[5,9],typ:"Vlk",hp:100},
  {pos:[8,10],typ:"Vlk",hp:100},
  //LOLLER
  {pos:[4,11],typ:"Zombie",hp:160},
  {pos:[4,12],typ:"Zombie",hp:160},
  {pos:[4,13],typ:"Zombie",hp:160},
  
  //
  {pos:[6,6],typ:"Prase",hp:150},
  {pos:[10,10],typ:"Prase",hp:150},
  {pos:[19,14],typ:"Prase",hp:150},
  
  //SKILLER
  {pos:[19,12],typ:"Medved",hp:200},
  {pos:[8,24],typ:"Medved",hp:200},
  
  //OWNAGE
  {pos:[25,50],typ:"Trojan",hp:300},
  {pos:[20,45],typ:"MedvedGreat",hp:300},
  
  //KVESTOVÉ KVESTOVÉ
  {pos:[5,31],typ:"Playa1",hp:100},
];
/*ROZHOVORY*/
dialogz={
  //
questPastyr:{
  name:"Pastýřův quest",
  pole:[
    {text:"Konečně přišla pomoc! Jsem olupován a drancován zlým drancířem, říká si Playa a je to ork destroyer! Musíš ho zničit, skiluje na mých ovcích a já pak nemám co jíst!",
    ans:[{text:"Pomůžu chránit nevinným jejich domovy! Přijímám úkol!",eff:function(){obstaclesTriggers.branaPlaya[0]-=1;dialogz.questPastyr.mod=1;openDialog('questPastyr');}},{text:"Určitě ti pomůžu, ale ne dneska!",eff:function(){closeDialog();},}]},
      
    {text:"Děkuji, udatná osobo! Skrývá se v černém močálu na východě!",
    ans:[{text:"O.K.",eff:function(){closeDialog();}},]},
      
    {text:"Ó děkuji! Budeš oslavován a já ti dávám vše, co jen mohu postrádat(jablka a 672 zlaťáků)! Můžeš teď skilovat na mých ovcích, tady na Květě ti ukážu, jak přesněji trefovat!<br>BÉÉÉÉÉÉ",
    ans:[{text:"Bylo mi potěšením trestat lolečky, co zabíjejí farmářům ovce!",eff:function(){dialogz.questPastyr.mod=3;expy+=3500;accuracy+=5;prachy+=673;inventar.fressenJablko.pocet+=8;inventar.fressenJablko2++;closeDialog();}},]},
  
    {text:"Už si zase tu? Já na tebe nezapomněl a stále ti děkuji!",
    ans:[{text:"Tak zase nashledanou!",eff:function(){closeDialog();}},{text:"Jak se mají ovce?",eff:function(){dialogz.questPastyr.mod=4;openDialog('questPastyr');}},]},
    
    {text:"No Květa se už moc dobře nemá, Běta nějak špatně jí, ale zato Miluše se má dobře a hezky příbírá na váze. Ale to asi hrdinu nezajímá...",
    ans:[{text:"Tak zase nashledanou!",eff:function(){dialogz.questPastyr.mod=3;closeDialog();}},]},
  
  ],mod:0,},
  //
}
/*EINKAUFEN*/
shops = {
  prvniKovarna:[[
    "CnKladivo","CnMec","CnZezlo","CnKratkyLuk","CnElfLuk","CnDoubleLuk","CnObourucak","CnSekyra","CnPalice",
    "CwKladivo","CwMec","CwZezlo","CwKratkyLuk","CwElfLuk","CwDoubleLuk","CwObourucak","CwSekyra","CwPalice",
    "ClKladivo","ClMec","ClZezlo","ClKratkyLuk","ClElfLuk","ClDoubleLuk","ClObourucak","ClSekyra","ClPalice",
    "shieldCnRound","shieldCwRound","shieldClSquare",
    "armorCnElf","armorCnHum","armorCnOrk",
    "armorCwElf","armorCwHum","armorCwOrk",
    "armorClElf","armorClHum","armorClOrk",
  ],"Kovárna Billa"],
}
/*MAPA*/
obstaclesTriggers={
  branaPlaya:[5,29,"kamen1.png"],
}
obstacles = [
  [3,2,"kamen1.png"],
  [4,2,"kamen1.png"],
  [4,1,"kamen1.png"],
  [2,6,"kamen1.png"],
  [4,4,"kamen1.png"],
  [6,3,"kamen1.png"],
  [3,5,"kamen1.png"],
  [6,5,"kamen1.png"],
  [6,4,"kamen1.png"],
  [4,5,"kamen1.png"],
  [4,6,"kamen1.png"],
  [3,6,"kamen1.png"],
  [4,7,"kamen1.png"],
  [5,7,"kamen1.png"],
  [6,7,"kamen1.png"],
  [8,1,"kamen1.png"],
  [8,2,"kamen1.png"],
  [8,4,"kamen1.png"],
  [8,5,"kamen1.png"],
  [7,5,"kamen1.png"],
  [9,5,"kamen1.png"],
  [9,6,"kamen1.png"],
  
  [11,1,"kamen1.png"],
  [11,2,"kamen1.png"],
  [11,3,"kamen1.png"],
  [12,4,"kamen1.png"],
  [11,5,"kamen1.png"],
  [11,6,"kamen1.png"],
  [8,7,"kamen1.png"],
  [11,7,"kamen1.png"],
  [10,8,"kamen1.png"],
  [10,2,"kamen1.png"],
  [7,10,"kamen1.png"],
  [5,8,"kamen1.png"],
  [6,10,"kamen1.png"],
  [5,10,"kamen1.png"],
  [4,10,"kamen1.png"],
  [3,10,"kamen1.png"],
  [2,10,"kamen1.png"],
  [1,10,"kamen1.png"],
  [3,9,"kamen1.png"],
  [3,11,"kamen1.png"],
  [2,13,"kamen1.png"],
  [3,13,"kamen1.png"],
  //
  [18,11,"kamen1.png"],
  [20,13,"kamen1.png"],
  [20,12,"kamen1.png"],
  [17,14,"kamen1.png"],
  [19,10,"kamen1.png"],
  [19,11,"kamen1.png"],
  //
  [4,24,"poustevnik.png"],
  [5,25,"blank.png"],
  [5,24,"blank.png"],
  [4,25,"blank.png"],
  [4,32,"kamen1.png"],
  [5,32,"kamen1.png"],
  [6,32,"kamen1.png"],
  [4,31,"kamen1.png"],
  [4,30,"kamen1.png"],
  [6,31,"kamen1.png"],
  [6,30,"kamen1.png"],
  //
  [9,9,"kovar.png"],
]
