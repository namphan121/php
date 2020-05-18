var num;
var temp=0;
var speed=8000;
var preloads=[];

preload(
'img/img-header1.png',
'img/img-header2.png'
);

function preload(){
  for (var i = 0;i < arguments.length; i++) {
    preloads[preloads.length]=new Image();
    preloads[preloads.length-1].src=arguments[i];
  }
}

function rotateImages() {
  num=Math.floor(Math.random()*preloads.length);
    if(num==temp){
      rotateImages();
    }
    else{
      document.getElementById('bottom-header').style.backgroundImage='url('+preloads[num].src+')';
      temp=num;
      setTimeout(function(){rotateImages()},speed);
    }
  }

    if(window.addEventListener){
      window.addEventListener('load',function(){setTimeout(function(){rotateImages()},speed)},false);
    }
    else {
    if(window.attachEvent){
      window.attachEvent('onload',function(){setTimeout(function(){rotateImages()},speed)});
    }
}