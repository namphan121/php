
var i = 0;  

function increMent() {
  if (i < 1000)
    i++;
  document.getElementById("in-quantity").value = i;
}

function decreMent() {
  if (i > 0)
    i-- ;
  document.getElementById("in-quantity").value = i;
}

function changeImage() {
  var image = document.getElementById('img-more-product');
  var imageChange = document.getElementById('img-view');
  if (image.src == 'img/ao-co.png') {
    imageChange.src = 'img/ao-co.png';
    console.log(imageChange);
  } else if (image.src == 'img/ao-co1.png') {
    imageChange.src = 'img/ao-co1.png';
  } else if  (image.src == 'img/ao-co1.png') {
    imageChange.src = 'img/ao-co2.png';
  }
 
}
