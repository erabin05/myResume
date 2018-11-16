import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  constructor() { }

   public imgNumberSketch:number = 1;
   public imgNumberCinema:number = 1;
   public imgNumberGraphicNovel:number = 1;
   public imgNumberTravel:number = 1;

  ngOnInit() {
    let imgsketch = document.getElementById("hobbies-img1");
    let imgCinema = document.getElementById("hobbies-img2");
    let imgGraphicNovel = document.getElementById("hobbies-img3");
    let imgTravel = document.getElementById("hobbies-img4");

    imgsketch.style.backgroundImage = "url(assets/sketching/sketching"+this.imgNumberSketch+".png)";
    imgCinema.style.backgroundImage = "url(assets/cinema/cinema"+this.imgNumberCinema+".png)";
    imgGraphicNovel.style.backgroundImage = "url(assets/graphicNovel/graphicNovel"+this.imgNumberGraphicNovel+".png)"
    imgTravel.style.backgroundImage = "url(assets/travel/travel"+this.imgNumberTravel+".png)"
    

    
  }

  public animation;
  public time = 150;

  public stopAnimation(){
   clearTimeout(this.animation);
   };

   public toAnimate(imgNumber, limit){
    if(imgNumber == limit){
      imgNumber =1;
    }
      imgNumber ++;

      return imgNumber
   }

 animate(param:number, display, limit:number, img) {

  let imgsketch = document.getElementById("hobbies-img1");
  let imgCinema = document.getElementById("hobbies-img2");
  let imgGraphicNovel = document.getElementById("hobbies-img3");
  let imgTravel = document.getElementById("hobbies-img4");

  if (img==1){
    imgsketch.style.backgroundImage = "url(assets/sketching/sketching"+this.imgNumberSketch+".png)";
    this.imgNumberSketch = this.toAnimate(this.imgNumberSketch,limit);
  } else if (img==2) {
    imgCinema.style.backgroundImage = "url(assets/cinema/cinema"+this.imgNumberCinema+".png)";
    this.imgNumberCinema = this.toAnimate(this.imgNumberCinema,limit);
  } else if (img==3) {
    imgGraphicNovel.style.backgroundImage = "url(assets/graphicNovel/graphicNovel"+this.imgNumberGraphicNovel+".png)";
    this.imgNumberGraphicNovel = this.toAnimate(this.imgNumberGraphicNovel,limit);

  } else if (img==4) {
    imgTravel.style.backgroundImage = "url(assets/travel/travel"+this.imgNumberTravel+".png)";
    this.imgNumberTravel = this.toAnimate(this.imgNumberTravel,limit);
  }

   if( param > 0 ){
     this.stopAnimation();
     
     this.animation = setTimeout( 
         () => {
             this.animate(param - 1, display,limit, img);
         },this.time);
   }
 }
 startAnimation(img:number,limit:number) {

   var display = document.querySelector('.time');
   this.animate(1000, display,limit,img);

 };

  textUp(param:number, limit){
    const line1 = document.getElementById("hobbies-text1");
    const line2 = document.getElementById("hobbies-text2");
    const line3 = document.getElementById("hobbies-text3");
    const line4 = document.getElementById("hobbies-text4");

    if(param == 1){
      line1.style.paddingTop = "0vh";
    } else if (param == 2){
      line2.style.paddingTop = "0vh";
    } else if (param == 3){
      line3.style.paddingTop = "0vh";
    } else if (param == 4){
      line4.style.paddingTop = "0vh";
    }

    this.startAnimation(param, limit);
  }

  textDown(param:number){
    const line1 = document.getElementById("hobbies-text1");
    const line2 = document.getElementById("hobbies-text2");
    const line3 = document.getElementById("hobbies-text3");
    const line4 = document.getElementById("hobbies-text4");

    if(param == 1){
      line1.style.paddingTop = "6vh";
    } else if (param == 2){
      line2.style.paddingTop = "6vh";
    } else if (param == 3){
      line3.style.paddingTop = "6vh";
    } else if (param == 4){
      line4.style.paddingTop = "6vh";
    }

    this.stopAnimation();
  }

  
}
