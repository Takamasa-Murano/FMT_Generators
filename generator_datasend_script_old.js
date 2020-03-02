function testLinkOpen(output, link){
  if(document.getElementById(output).value == null) return;
  document.getElementById(link).style.display = "block";
}

function codeTaketoTestPage(zoneTypeName, zoneTypeNo, STBNo, po, ao, to, zo){
  var lstorage = localStorage;
  var p = document.getElementById(po).value,
      a = document.getElementById(ao).value,
      t = document.getElementById(to).value,
      zt = 0;
  var ztv = document.getElementById(zo).value;
  if(ztv == zoneTypeName) zt = zoneTypeNo;
  else zt = STBNo;
  lstorage.prepend = p;
  lstorage.append = a;
  lstorage.adsource = t;
  lstorage.zone_type = zt;
}