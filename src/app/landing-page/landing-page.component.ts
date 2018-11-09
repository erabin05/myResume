import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, query } from '@angular/animations';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  animations: [
    // trigger('openClose', [
    //   state('open', style({
    //     opacity: 1,
    //   })),
    //   state('closed', style({
    //     opacity: 0,
    //   })),
    //   transition('open => closed', [
    //     animate('1s')
    //   ]),
    // ]),
  ]
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  public handDrawing = 1;
  public portrait = 1;

  ngOnInit() { 

    setTimeout(()=>{
      const portraitContainer = document.getElementById("portrait-animation-container");
      portraitContainer.style.opacity = "1";
    },500);

    setInterval(()=>{
      if(this.handDrawing == 30){
        this.handDrawing = 0;
      }
      if(this.portrait == 31){
        this.portrait = 0;
      }
      this.handDrawing++;
      this.portrait++;
    },130)

  }

  public gallery:string[]=["../../assets/drawing/drawing1","../../assets/drawing/drawing2"];

  public button1:string ="Get to know me";
  public button2:string ="3 things about me";
  public button3:string ="Let's travel in time";
  public button4:string ="Look what i did";
  public button5:string ="and what i like";
  public button6:string ="Now the big question";
  public button8:string ="Have another look";


  

// To skills --------- 1 -----------

  moveToSkills():void {
    // Current Button - Button to skills
    const ButtonToSkillsContainer = document.getElementById("button-to-skills-container");
    // Next Button - Button to Fun facts
    const ButtonToFunFactsContainer = document.getElementById("button-to-fun-facts-container");

    // Background
    const BackgroundPropriety = document.getElementById("landing-page-background");
    // Square
    const square = document.getElementById("landing-page-square");
    const squareContainer = document.getElementById("landing-page-square-container");

    // Current Page - Intro
    const helloPosition = document.getElementById("hello-position");
    // NextPage - Skills
    const skillsContainer = document.getElementById("skills-container");
    const skillsPosition = document.getElementById("skills-position");


    // Current Button - Button to skills
    ButtonToSkillsContainer.style.opacity= '0';
    setTimeout(() => {ButtonToSkillsContainer.classList.add("none")},2000);
    // Next Button - Button to Fun facts
    ButtonToFunFactsContainer.classList.remove("none");
    setTimeout(() => {ButtonToFunFactsContainer.style.opacity= "1";},1);

    // Square
    squareContainer.style.marginLeft = "70%";
    square.style.backgroundColor = "#401D38";
    // Background
    BackgroundPropriety.style.backgroundColor = "#6469B2";

    // Current Page - Intro
    helloPosition.style.opacity ="0";
    helloPosition.style.marginLeft ="75%";
    setTimeout(() => {
      helloPosition.classList.add("none")
      helloPosition.style.marginLeft ="20%";
    },2000);
    // Next Page - Skills
      skillsContainer.classList.remove("none");
    setTimeout(() => {
      skillsContainer.style.opacity = "1";
      skillsPosition.style.marginTop = "13vh";
    },1150);

    // Next Animation - hand drawing
      const handContainer = document.getElementById("hand-animation-container");
      handContainer.classList.remove("none");
      setTimeout(() => {
        handContainer.style.opacity ="1";
      },1700);

      // Current Animation - portrait
    const portraitContainer = document.getElementById("portrait-animation-container");
    portraitContainer.style.opacity ="0";
    setTimeout(() => {
      portraitContainer.classList.add("none");
    },1500);

  }



// To fun facts --------- 2 -----------

  moveToFunFacts():void {
    // Current Button - Button to fun facts
    const ButtonToFunFactsContainer = document.getElementById("button-to-fun-facts-container");
    // Next Button - Button to Experiences
    const ButtonToExperiencesContainer = document.getElementById("button-to-experiences-container");

    // Background
    const BackgroundPropriety = document.getElementById("landing-page-background");
    // Square
    const square = document.getElementById("landing-page-square");
    const squareContainer = document.getElementById("landing-page-square-container");

    // Current Page
    const skillsContainer = document.getElementById("skills-container");
    const skillsPosition = document.getElementById("skills-position");
    // Next Page
    const factContainer = document.getElementById("fact-container");


    // Current Button - Button to fun facts
    ButtonToFunFactsContainer.style.opacity= "0";
    setTimeout(() => {ButtonToFunFactsContainer.classList.add("none")},2000);
    // Next Button - Button to Experiences
    ButtonToExperiencesContainer.classList.remove("none");
    setTimeout(() => {ButtonToExperiencesContainer.style.opacity= "1";},1);

    // Square
    squareContainer.style.marginLeft = "0";
    squareContainer.style.width = "100%";
    square.style.backgroundColor = "#0A9AA9";
    // Background
    BackgroundPropriety.style.backgroundColor = "#A3F6DA";

    // Current Page
    skillsContainer.style.opacity = "0";
    skillsPosition.style.marginLeft = "-55%";
    setTimeout(() => {
      skillsContainer.classList.add("none");
      skillsPosition.style.marginLeft ="15%";
      skillsPosition.style.marginTop ="12vh";
    },2000);
    // Next Page
    factContainer.classList.remove("none")
    setTimeout(()=>{
      factContainer.style.opacity = "1";
    },1000);
    
    // Current Animation - hand drawing
    const handContainer = document.getElementById("hand-animation-container");
    handContainer.style.opacity ="0";
    setTimeout(() => {
      handContainer.classList.add("none");
    },1500);
    
  }
  


// To experiences --------- 3 -----------

  moveToExperiences():void {
    // Current Button - to experiences
    const ButtonToExperiencesContainer = document.getElementById("button-to-experiences-container");
    // Nexy Button - to book
    const buttonToBookContainer = document.getElementById("button-to-book-container");
    const buttonToBook = document.getElementById("button-to-book");
     // Square
    const square = document.getElementById("landing-page-square");
    // Background
    const BackgroundPropriety = document.getElementById("landing-page-background");

    // Current Page
    const factContainer = document.getElementById("fact-container");
    const factPosition = document.getElementById("fact-position");
    // NextPage
    const experiencesPosition = document.getElementById("experience-position");
    const timelineContainer = document.getElementById("experience-timeline-container");


    // Current Button - to experiences
    ButtonToExperiencesContainer.classList.add("none");
    setTimeout(() => {ButtonToExperiencesContainer.style.opacity = "0";},2000);
    // Next Button - to book
    buttonToBookContainer.classList.remove("none");
    setTimeout(() => {
    buttonToBookContainer.style.opacity = "1";
    buttonToBook.style.marginTop = "51vh";
    },1);

    // Square
    square.style.marginTop = "40vh";
    square.style.backgroundColor = "#56B9DB";
     // Background
    BackgroundPropriety.style.backgroundColor = "#B6E9F1";

    // Current Page
    factContainer.style.opacity="0";
    factPosition.style.marginTop="60vh"
    setTimeout(()=>{
      factContainer.classList.add("none");
      factPosition.style.marginTop="22vh"
    },2000)
    // Next Page
    experiencesPosition.classList.remove("none");
    setTimeout(() => {
    experiencesPosition.style.opacity = "1";
    timelineContainer.style.marginTop = "8vh";
    ;},1);

    const timeline = document.getElementById("experience-timeline");
    timeline.scrollLeft = 0;

  }



  // To book --------- 4 -----------
  
  moveToBook():void {
    // Current Button - to hobbies
    const buttonToBookContainer = document.getElementById("button-to-book-container");
    const buttonToBook= document.getElementById("button-to-book");
    // Next Button - to hobbies
    const buttonToHobbiesContainer = document.getElementById("button-to-hobbies-container");

    // Square
    const square = document.getElementById("landing-page-square");
    const squareContainer = document.getElementById("landing-page-square-container");

    // Current Page
    const experiencesPosition = document.getElementById("experience-position");
    const timelineContainer = document.getElementById("experience-timeline-container");
    // Next Page
    const bookContainer = document.getElementById("book-container");
    const bookPosition = document.getElementById("book-position");

    // Current Button - to book
    buttonToBookContainer.style.paddingTop = "-6vh";
    buttonToBook.style.marginTop = "-6vh";
    buttonToBookContainer.style.opacity = "0";
    setTimeout(() => {
      buttonToBookContainer.classList.add("none")
      buttonToBook.style.marginTop = "11.5vh";
    },2000);
    // Next Button - to hobbies
    buttonToHobbiesContainer.classList.remove("none");
    buttonToHobbiesContainer.style.opacity = "1";

    // Square
    square.style.marginTop = "0";
    square.style.height = "100vh";
    squareContainer.style.paddingTop = "0";
    square.style.backgroundColor = "#F7F4B4";

    // Current Page
    experiencesPosition.style.opacity = "0";
    timelineContainer.style.marginTop = "-45vh";
    setTimeout(() => {
      experiencesPosition.classList.add("none")
      timelineContainer.style.marginTop = "-20vh";
      ;},2000);
    // Next Page
    bookPosition.classList.remove("none")
    setTimeout(() => {
    bookContainer.style.opacity="1";
    bookPosition.style.marginTop = "8vh";
    ;},1);
  }



  // To hoobies --------- 5 -----------

  moveToHobbies():void {
    // Current Button - To Hobbies
    const buttonToHobbiesContainer = document.getElementById("button-to-hobbies-container");
    // Next Button - To Question
    const buttonToQuestionContainer = document.getElementById("button-to-question-container");
    const buttonToQuestion = document.getElementById("button-to-question");

    // Square
    const square = document.getElementById("landing-page-square");
    const squareContainer = document.getElementById("landing-page-square-container");
    // Background
    const BackgroundPropriety = document.getElementById("landing-page-background");

    // Current Page
    const bookContainer = document.getElementById("book-container");
    const bookPosition = document.getElementById("book-position");
    // Next Page
    const hobbiesPosition = document.getElementById("hobbies-position");
    const hobbiesContent = document.getElementById("hobbies-content-container");
    
    
    // Current Button - To Hobbies
    buttonToHobbiesContainer.style.opacity = "0";
    setTimeout(() => {buttonToHobbiesContainer.classList.add("none");},2000);
    // Next Button - To Question
    buttonToQuestionContainer.classList.remove("none");

    // Square
    squareContainer.style.marginLeft = "-60%";
    square.style.backgroundColor = "#FFC550";
    // Background
    BackgroundPropriety.style.backgroundColor = "#B9E6DD";
    
    // Current Page - Book
    bookContainer.style.opacity="0";
    bookPosition.style.marginLeft="-55%";
    bookPosition.style.marginRight="60%";
    setTimeout( ()=>{
      bookPosition.classList.add("none");
      bookPosition.style.marginLeft="5%";
      bookPosition.style.marginRight="0";
      bookPosition.style.marginTop="70vh";
    },2000);

    // Next Page - Hobbies
    hobbiesPosition.classList.remove("none");
    setTimeout(()=>{
      hobbiesContent.style.marginTop = "25vh";
      hobbiesPosition.style.opacity ="1";
      },1700);


    // -- Second Move --
    setTimeout(()=>{
      // Square
      squareContainer.style.paddingTop = "18vh";
      // Next Button - To Question
      buttonToQuestionContainer.style.opacity = "1";
      buttonToQuestion.style.marginTop = "11.5vh";
      },2000);
  }



  // To Question --------- 6 -----------

  moveToContact():void {
    // Current Button - To Question
    const buttonToQuestionContainer = document.getElementById("button-to-question-container");
    const buttonToQuestion = document.getElementById("button-to-question");
    // Square
    const square = document.getElementById("landing-page-square");
    const squareContainer = document.getElementById("landing-page-square-container");
    // Background
    const BackgroundPropriety = document.getElementById("landing-page-background");
    // Current Page
    const hobbiesPosition = document.getElementById("hobbies-position");
    const hobbiesContent = document.getElementById("hobbies-content-container");
    // Next Page
    const questionPosition = document.getElementById("question-position");
    
    // Button
    buttonToQuestionContainer.style.opacity = "0";
    setTimeout(() => {
      buttonToQuestionContainer.classList.add("none");
      buttonToQuestion.style.marginTop ="-6.5vh";

    },2000);

    // Square
    squareContainer.style.paddingTop = "18vh";
    square.style.height = "55vh";
    square.style.backgroundColor = "#B93360";
    // Background
    BackgroundPropriety.style.backgroundColor = "#4666F7";

    // Current Page
    hobbiesPosition.style.opacity ="0";
    setTimeout(() => {
      hobbiesPosition.classList.add("none");
      hobbiesContent.style.marginTop ="-2vh";
    },2000);
    // Next Page
    questionPosition.classList.remove("none");
    setTimeout(() => {questionPosition.style.opacity ="1";},1);
  }


  // To Contact --------- 7 -----------
  // -- VOIR QUESTION .ts --


  // To Hello --------- 8 -----------

  moveToRestart() {
    // Current Button - To Hello
    const buttonToHelloContainer = document.getElementById("button-to-hello-container")
    // Next button - To Skills
    const buttonToSkillsContainer = document.getElementById("button-to-skills-container");

    // Square
    const square = document.getElementById("landing-page-square");
    const squareContainer = document.getElementById("landing-page-square-container");
    // Background
    const BackgroundPropriety = document.getElementById("landing-page-background");

    // Current Page
    const contactPosition = document.getElementById("contact-position");
    // Next Page
    const helloPosition = document.getElementById("hello-position");


    // Current Button - To Hello
    buttonToHelloContainer.style.opacity ="0";
    setTimeout(() => {buttonToHelloContainer.classList.add("none")},2000);
    // Next button - To Skills
    buttonToSkillsContainer.classList.remove("none");
    setTimeout(() => {buttonToSkillsContainer.style.opacity ="1";},1);

    // Square
    square.style.backgroundColor = "#040723";
    // Background
    BackgroundPropriety.style.backgroundColor = "#13347A";

    // Current Page
    contactPosition.style.opacity ="0";
    setTimeout(() => {contactPosition.classList.add("none")},2000);
    // Next Page
    helloPosition.classList.remove("none");
    setTimeout(() => {helloPosition.style.opacity ="1";},1);

       // Current Animation - portrait
       const portraitContainer = document.getElementById("portrait-animation-container");
       portraitContainer.classList.remove("none");
       setTimeout(() => {  
         portraitContainer.style.opacity ="1";
       },1);

    this.button1 = "Get to know me even more";
    this.button2 ="the same 3 things about me";
    this.button3 = "Back to the future";
    this.button4 = "Look what I did, again";
    this.button5 = "And what I like, again";
    this.button6 = "Now the question you answered";
  }
}
