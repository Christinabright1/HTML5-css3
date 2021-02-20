let i =0; //start point
  let images = [];
  let times = 3000;//the time of switch between each image
  //image list
  images[0]="https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  images[1]= "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  images[2]="https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  images[3]="https://images.pexels.com/photos/592815/pexels-photo-592815.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  //function to change image
  function changeImage(){
   document.slide.src= images[i];
   if (i< images.length -1){
     i++;
   }else{
     i=0;
   }
   setTimeout("changeImage()", times);
  }
  window.onload= changeImage();
