//---------------------------------------------------------
// Color Picker Script from Flooble.com
// For more information, visit 
//http://www.flooble.com/scripts/colorpicker.php
// Copyright 2003 Animus Pactum Consulting inc.
// You may use and distribute this code freely, as long as
// you keep this copyright notice and the link to flooble.com
// if you chose to remove them, you must link to the page
// listed above from every web page where you use the color
// picker code.
//---------------------------------------------------------
var perline=9;var divSet=false;var curId;var colorLevels=Array('0','3','6','9','C','F');var colorArray=Array();var ie=false;var nocolor='none';if(document.all){ie=true;nocolor=''}function addColor(r,g,b){var a=colorLevels[r];var c=colorLevels[g];var d=colorLevels[b];addColorValue(a,c,d)}function addColorValue(r,g,b){colorArray[colorArray.length]=r+r+g+g+b+b}function setColor(a){var b=document.getElementById(curId);var c=document.getElementById(curId);var d=document.getElementById(curId+'pick');var e=document.getElementById('colorpicker');c.value='0x'+a;d.style.backgroundColor='#'+a;if(a==''){a=nocolor}e.style.display='none';eval(document.getElementById(curId).title)}function setDiv(){if(!document.createElement){return}var a=document.createElement('div');if(typeof(a.innerHTML)!='string'){return}genColors();a.id='colorpicker';a.innerHTML=getColorTable();document.body.appendChild(a);divSet=true}function pickColor(a){if(!divSet){setDiv()}var b=document.getElementById('colorpicker');if(a==curId&&b.style.display=='block'){b.style.display='none';return}curId=a;var c=document.getElementById(a);b.style.top=getAbsoluteOffsetTop(c)+"px";b.style.left=getAbsoluteOffsetLeft(c)+"px";b.style.display='block'}function genColors(){addColorValue('0','0','0');addColorValue('3','3','3');addColorValue('6','6','6');addColorValue('8','8','8');addColorValue('9','9','9');addColorValue('A','A','A');addColorValue('C','C','C');addColorValue('E','E','E');addColorValue('F','F','F');for(a=1;a<colorLevels.length;a++)addColor(0,0,a);for(a=1;a<colorLevels.length-1;a++)addColor(a,a,5);for(a=1;a<colorLevels.length;a++)addColor(0,a,0);for(a=1;a<colorLevels.length-1;a++)addColor(a,5,a);for(a=1;a<colorLevels.length;a++)addColor(a,0,0);for(a=1;a<colorLevels.length-1;a++)addColor(5,a,a);for(a=1;a<colorLevels.length;a++)addColor(a,a,0);for(a=1;a<colorLevels.length-1;a++)addColor(5,5,a);for(a=1;a<colorLevels.length;a++)addColor(0,a,a);for(a=1;a<colorLevels.length-1;a++)addColor(a,5,5);for(a=1;a<colorLevels.length;a++)addColor(a,0,a);for(a=1;a<colorLevels.length-1;a++)addColor(5,a,5);return colorArray}function getColorTable(){var a=colorArray;var b='';b+='<table>';for(i=0;i<a.length;i++){if(i%perline==0){b+='<tr>'}b+='<td><a style="color:#'+a[i]+'; background:#'+a[i]+';" href="javascript:setColor(\''+a[i]+'\');">&nbsp;</a></td>';if(i%perline==perline-1){b+='</tr>'}}if(i%perline!=0){b+='</tr>'}b+='</table>';return b}function getAbsoluteOffsetTop(a){var b=a.offsetTop;var c=a.offsetParent;while(c!=document.body){b+=c.offsetTop;c=c.offsetParent}return b}function getAbsoluteOffsetLeft(a){var b=a.offsetLeft;var c=a.offsetParent;while(c!=document.body){b+=c.offsetLeft;c=c.offsetParent}return b}