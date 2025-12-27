<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <meta name="generator" content="PSPad editor, www.pspad.com">
  <title>PWN 0.9.6</title>
  <script src="data.js" type="text/javascript">
  </script>
  <script src="engine.js" type="text/javascript">
  </script>
  <script src="funkce.js" type="text/javascript">
  </script>
  <link rel="stylesheet" href="style.css" type="text/css">
  </head>
  <body>
<div id="DIVlista">
  <div id='DIVcounter'><div id='DIVcounterInside'></div></div>
  <div id='DIVmcounter'><div id='DIVmcounterInside'></div></div>
  <span id="DIVlistaRasa"></span>
</div>

<img src="img/postava.png" id="player" style="position:absolute;top:96px;left:32px;width:32px;height:32px;">-

<div id="DIVmapa"></div>
<div id="DIValert">Vyber si rasu!</div>

<!---->
<div id="DIVinventar"></div>
<div id="DIVstats">
  <input type="button" style="font-size:32px;" value="Staty" onClick="geto('DIVstats1').style.display='block';geto('DIVstats2').style.display='none';geto('DIVstats3').style.display='none';">
  <input type="button" style="font-size:32px;" value="Skilly" onClick="geto('DIVstats1').style.display='none';geto('DIVstats2').style.display='block';geto('DIVstats3').style.display='none';">
  <!--<input type="button" value="Equipy" onClick="geto('DIVstats1').display='none';geto('DIVstats2').display='none';geto('DIVstats3').display='block';">-->
  <div id="DIVstats0"></div>
  <div id="DIVstats1" style="display:block"></div>
  <div id="DIVstats2" style="display:none"></div>
  <div id="DIVstats3" style="display:none"></div>
</div>
<!--<div id="DIVtasks"></div>-->
<div id="DIVmonster">
  <div id="DIVinfoMonster">asi padesát životů</div>
  <div id="DIVcombatChar"><img id="IMGcombatChar" src="img/animace/orcfront1.png"></div>
  <img id="IMGmonster" src="img/mobs/slepice.png">
</div>
<div id="DIVrasa">
  Vyber si rasu!<br>
  <table>
    <tr>
      <td><img src="img/animace/humanfront1.png" style="width:256px;height:256px" id="IMGdemoHuman" title="Člověk" onClick="zvolitHuman()"></td>
      <td><img src="img/animace/elffront1.png" style="width:256px;height:256px" id="IMGdemoElf" title="Elf" onClick="zvolitElf()"></td>
      <td><img src="img/animace/orcfront1.png" style="width:256px;height:256px" id="IMGdemoOrk" title="Ork" onClick="zvolitOrk()"></td>
    </tr>
    <tr style="font-size:32px;">
      <td align="center">Člověk</td>
      <td align="center">Elf</td>
      <td align="center">Ork</td>
    </tr>
  </table>
</div>
<div id="DIVobchod">
  Krámy!!!
</div>
<div id="DIVdialog">
  Dialogy, sociální vědy a tak; velmi psycho!!!
</div>
  </body>
</html>
