
  window.onload = function () {
var k = '',show ='' ;
   var x = document.createElement("STYLE");
var imgs = document.querySelectorAll('.cont_imgs > div');
var imgs_int = document.querySelectorAll('.cont_imgs > div > img')[0];
   for (var i =0;  i < imgs.length; i++) {
var show = imgs[i].getAttribute("data-shx-img");
 
k += "."+imgs[i].className+":after  { background-image:url('"+show+"'); left:2.5%;     position: absolute;    display: block;    z-index: -1;    width: 93%;   height: 100%;  content: '';  background-size: contain;   } "  ;   

   };
    var t = document.createTextNode(k);
    x.appendChild(t);
    document.head.appendChild(x);
      }
