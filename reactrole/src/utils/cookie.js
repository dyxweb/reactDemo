export function setCookie(cname,cvalue,exdays){
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

export function getCookie(cname){
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

export function delCookie (cname) {
    var exp=new Date()
    exp.setTime(exp.getTime() - 1)
    var cval=getCookie(cname)
    if(cval !==null)
    document.cookie=cname+"="+cval+";expires="+exp.toGMTString()
}