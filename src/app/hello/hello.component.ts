import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  public hello:string = "Hello !";
  public helloText2:string = "Graphic Designer";

  constructor() { }

  ngOnInit() {
    const helloText = document.getElementById("hello-text");
    const helloText1 = document.getElementById("hello-text1");
    const helloText2 = document.getElementById("hello-text2");

    setTimeout(()=>{
      helloText.style.opacity="1";
    },1000);
    setTimeout(()=>{
      helloText1.style.opacity="1";
    },2500);
    setTimeout(()=>{
      helloText2.style.opacity="1";
    },3500);


    setTimeout(()=>{

      setInterval(()=>{
        if(this.helloText2 == "Graphic Designer"){
          helloText2.style.opacity="0";
          setTimeout(()=>{
            helloText2.style.opacity="1";
            this.helloText2 ="Illustrator";
          },2000);
        } else if (this.helloText2 == "Illustrator") {
          helloText2.style.opacity="0";
          setTimeout(()=>{
            helloText2.style.opacity="1";
            this.helloText2 ="Student in web development";
          },2000);
        } else {
          helloText2.style.opacity="0";
          setTimeout(()=>{
            helloText2.style.opacity="1";
            this.helloText2 ="Graphic Designer";
          },2000);
        }
      },4000);
    },2500);
    
  }

}
