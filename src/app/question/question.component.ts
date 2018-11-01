import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  public question:string = "Would you hire me ?";
  public questionSecondLine:string = "";
  

  public firstButton:string ="Yes";
  public secondButton:string ="No";
  public thirdButton:string ="I sure will !";

  // --------- 7 -----------
  moveToContact2():void {
    // Next Button - to Hello
    const buttonToHelloContainer = document.getElementById("button-to-hello-container");

    // Square
    const square = document.getElementById("landing-page-square");
    const squareContainer = document.getElementById("landing-page-square-container");
    // Background
    const BackgroundPropriety = document.getElementById("landing-page-background");

    // Current Page
    const questionPosition = document.getElementById("question-position");
    // Next Page
    const contactPosition = document.getElementById("contact-position");


    // Next Button - to hello
    buttonToHelloContainer.classList.remove("none")
    setTimeout(() => {buttonToHelloContainer.style.opacity = "1";},1);
    
    // Square
    squareContainer.style.width = "70%";
    squareContainer.style.marginLeft = "15%";
    square.style.backgroundColor = "#1E0549";
    // Background
    BackgroundPropriety.style.backgroundColor = "#1F2375";
    // Previous Page
    questionPosition.style.opacity = "0";
    setTimeout(() => {questionPosition.classList.add("none");},2000);

    // Next Page
    contactPosition.classList.remove("none");
    setTimeout(() =>{
      contactPosition.style.opacity="1";
      contactPosition.style.marginLeft="20%";
    },1);
  }
  


  areYouSure():void {
    let questionTitle = document.getElementById("question-title");
    let questionTitleSecondLine = document.getElementById("question-title-second-line");
    let firstButtonContainer = document.getElementById("question-button-yes");
    let secondButtonContainer = document.getElementById("question-button-no");
    let thirdButtons = document.getElementById("question-button-sendmessage");

    questionTitle.style.opacity = "0";
    questionTitleSecondLine.style.opacity = "0";
    firstButtonContainer.style.opacity = "0";
    secondButtonContainer.style.opacity = "0";
    setTimeout(() => {
    if (this.question === "Would you hire me ?") {
      this.question = "Are you sure ?";
      this.firstButton = "No";
      this.secondButton = "Yes";
    } else if (this.question === "Are you sure ?") { 
      this.question = "Really ?   I can make cookies";
      thirdButtons.classList.remove("none")
    } else if (this.question === "Really ?   I can make cookies") {
      thirdButtons.style.opacity = "1"
      this.question = "Ok ...";
      this.questionSecondLine = "But send me a nice message to inform me";
      
    };

    questionTitle.style.opacity = "1";
    questionTitleSecondLine.style.opacity = "1";

    if (this.question === "Ok ...") {
      firstButtonContainer.classList.add("none");
      secondButtonContainer.classList.add("none");
    } else {
      firstButtonContainer.style.opacity = "1";
      secondButtonContainer.style.opacity = "1";
    }
    },1500);
  }

}
