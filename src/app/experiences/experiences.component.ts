import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  constructor() { }

  public experienceTitle:string = "Wild Code School - La Loupe";
  public experienceDate:string = "10.2018 - 02.2019";
  public experienceText:string = "Student in web development";
  public experienceDescription:string = "Learning HTML/CSS, JavaScript, Angular and Java EE.";

  public experiences:any[] = [
    {
      "title":"Wild Code School - La Loupe",
      "date":"10.2018 - 02.2019",
      "text":"Student in web development",
      "descritpion":"Learning HTML/CSS, JavaScript, Angular and Java EE."
    },
    {
      "title":"Agence Nature - England and Spain",
      "date":"06.2018 - 08.2019",
      "text":"Organizer in a summer camp",
      "descritpion":"Creating activities and accompanying children from 12 to 15 years old."
    },
    {
      "title":"Voluntary work - Guinea",
      "date":"04.2017 - 04.2018",
      "text":"Service civique",
      "descritpion":"Raising awareness of environmental conservation among young guineans."
    },
    {
      "title":"CQFD Communication - Nantes",
      "date":"09.2016 - 11.2016",
      "text":"Graphic Design",
      "descritpion":"Creation of logos, advertising poster, corporate identity and style guide. Setting advertising content out from a corporate identity."
    },
    {
      "title":"CQFD Communication - Nantes",
      "date":"06.2015 - 07.2015",
      "text":"Internship in Graphic Design",
      "descritpion":"Creation of logos, advertising poster, corporate identity and style guide. Setting advertising content out from a corporate identity."
    },
    {
      "title":"Pivaut school - Nantes",
      "date":"09.2015 - 06.2016",
      "text":"Student in graphic design - 2nd year",
      "descritpion":"learning graphic design : typography, layout, Adobe software and Illustration. Working on the final year study project. Obtained a degree in graphic Design and Illustration."
    },
    {
      "title":"Contrats Bleus - La Loupe",
      "date":"04.2017 - 04.2018",
      "text":"Organizer in a summer camp",
      "descritpion":"Creating activities and accompanying children from 13 to 16 years old."
    },
    {
      "title":"Pivaut school - Nantes",
      "date":"09.2014 - 06.2015",
      "text":"Student in graphic design - 1st year",
      "descritpion":"learning the basics of graphic design : typography, layout, Adobe software and Illustration."
    },
    {
      "title":"Commune de berd'huis - Berd'huis",
      "date":"07.2014",
      "text":"Organizer in a summer camp",
      "descritpion":"Creating activities and accompanying children from 3 to 12 years old."
    },
    {
      "title":"Pivaut school - Nantes",
      "date":"09.2013 - 06.2014",
      "text":"Student in applied art",
      "descritpion":"learning academic drawing, painting and typography."
    },
    {
      "title":"Les Contrats bleus",
      "date":"07.2013 - 08.2013",
      "text":"Organizer in a summer camp",
      "descritpion":"Creating activities and accompanying children from 13 to 16 years old."
    },
    {
      "title":"Pivaut school - Nantes",
      "date":"09.2012 - 06.2013",
      "text":"Student in Applied art - preparatory class",
      "descritpion":"learning the basics of academic drawing and painting."
    },
    {
      "title":"Pep 28 - Jouy",
      "date":"07.2012",
      "text":"Creating activities and accompanying children from 3 to 12 years old.",
      "descritpion":""
    },
    {
      "title":"Highschool",
      "date":"09.2011 - 06.2012",
      "text":"Student in Economics and Social",
      "descritpion":"Obtained Baccaleauréat (degree)."
    },
    {
      "title":"Les Contrats Bleus",
      "date":"07 - 2011",
      "text":"Internship as organizer in a summer camp",
      "descritpion":"Creating activities and accompanying children from 3 to 5 years old."
    },
    {
      "title":"Highschool",
      "date":"09.2010 - 06.2011",
      "text":"Student in Economics and Social",
      "descritpion":""
    },
    {
      "title":"Highschool",
      "date":"09.2009 - 06.2010",
      "text":"Student ",
      "descritpion":""
    },
  ]

  

  //  BOXES OPACITY
  //Over
  public overStatus:boolean = false;
  boxEnter(id) {
    const box = document.getElementById(id);
    box.style.opacity ="0.9"
    this.overStatus = true;
  };
  boxLeave(id) {
    const box = document.getElementById(id);
    if(this.overStatus == true) {
      box.style.opacity ="0.6"
    }    
  };
  //On click
  boxOpacity(box, sentence:string) {
    setTimeout(()=>{
      if( this.experienceDate == sentence){
        box.style.opacity = "1";
      } else {
        box.style.opacity = "0.6";
      }
    },500);  
  };
  resetOpacity():void{
    const wildCodeSchoolBox = document.getElementById("wild-code-school-box");
    const AgenceNature = document.getElementById("agence-nature-box");
    const GuineeBox = document.getElementById("guinee-box");
    const cqfd2Box = document.getElementById("cqfd2-box");
    const cqfd1Box = document.getElementById("cqfd1-box");
    const Pivaut4Box = document.getElementById("pivaut4-box");
    const contratsBleus3Box = document.getElementById("contrat-bleu-box3");
    const Pivaut3Box = document.getElementById("pivaut3-box");
    const berduisBox = document.getElementById("berdhuis-box");
    const Pivaut2Box = document.getElementById("pivaut2-box");
    const contratsBleus2Box = document.getElementById("contrat-bleu-box2");
    const Pivaut1Box = document.getElementById("pivaut1-box");
    const jouyBox = document.getElementById("jouy-box");
    const highschool3 = document.getElementById("highschool3-box");
    const contratsBleus1Box = document.getElementById("contrat-bleu-box1");
    const highschool2 = document.getElementById("highschool2-box");
    const highschool1 = document.getElementById("highschool1-box");

      this.overStatus = false;  

        this.boxOpacity(wildCodeSchoolBox, this.experiences[0].date);
        this.boxOpacity(AgenceNature, this.experiences[1].date);
        this.boxOpacity(GuineeBox, this.experiences[2].date);
        this.boxOpacity(cqfd2Box, this.experiences[3].date);
        this.boxOpacity(cqfd1Box, this.experiences[4].date);
        this.boxOpacity(Pivaut4Box, this.experiences[5].date);
        this.boxOpacity(contratsBleus3Box, this.experiences[6].date);
        this.boxOpacity(Pivaut3Box, this.experiences[7].date);
        this.boxOpacity(berduisBox, this.experiences[8].date);
        this.boxOpacity(Pivaut2Box, this.experiences[9].date);
        this.boxOpacity(contratsBleus2Box, this.experiences[10].date);
        this.boxOpacity(Pivaut1Box, this.experiences[11].date);
        this.boxOpacity(jouyBox, this.experiences[12].date);
        this.boxOpacity(highschool3, this.experiences[13].date);
        this.boxOpacity(contratsBleus1Box, this.experiences[14].date);
        this.boxOpacity(highschool2, this.experiences[15].date);
        this.boxOpacity(highschool1, this.experiences[16].date);
  };


  // TEXT CHANGEMENT 
  textChange(param):void{
    const title = document.getElementById("experience-square-elements-title");
    const date = document.getElementById("experience-square-elements-date");
    const text = document.getElementById("experience-square-elements-text");
    const description = document.getElementById("experience-square-elements-description");

    title.style.opacity ="0";
    date.style.opacity ="0";
    text.style.opacity ="0";
    description.style.opacity ="0";

    let current;

    if (param == 'wild') {
      current = this.experiences[0];

    } else if (param == 'agenceNature') {
      current = this.experiences[1];

    } else if (param == 'guinee') {
      current = this.experiences[2];

    } else if (param == 'cqfd2') {
      current = this.experiences[3];

    } else if (param == 'cqfd1') {
      current = this.experiences[4];

    } else if (param == 'pivaut4') {
      current = this.experiences[5];

    } else if (param == 'contratsBleus3') {
      current = this.experiences[6];

    } else if (param == 'pivaut3') {
      current = this.experiences[7];

    } else if (param == 'berdhuis') {
      current = this.experiences[8];

    } else if (param == 'pivaut2') {
      current = this.experiences[9];

    } else if (param == 'contratsBleus2') {
      current = this.experiences[10];

    } else if (param == 'pivaut1') {
      current = this.experiences[11];

    } else if (param == 'jouy') {
      current = this.experiences[12];
    
    } else if (param == 'highschool3') {
      current = this.experiences[13];
    
    } else if (param == 'contratsBleus1') {
      current = this.experiences[14];
    
    } else if (param == 'highschool2') {
      current = this.experiences[15];

    } else if (param == 'highschool1') {
      current = this.experiences[16];

    }

    setTimeout(() => {
      this.experienceTitle = current.title;
      this.experienceDate = current.date;
      this.experienceText = current.text;
      this.experienceDescription = current.descritpion;

      title.style.opacity ="1";
      date.style.opacity ="1";
      text.style.opacity ="1";
      description.style.opacity ="1";
    },500);

    this.resetOpacity();
  }


  //BOX PROGRESSION WITH BUTTONS
  boxOpacityProgression(){
    let timeline = document.getElementById("experience-timeline");

    if(timeline.scrollLeft < 170){
      this.textChange('wild');
    } else if (timeline.scrollLeft > 170 && timeline.scrollLeft <= 250){
      this.textChange('agenceNature');

    } else if (timeline.scrollLeft > 250 && timeline.scrollLeft <= 800){
      this.textChange('guinee');

    } else if (timeline.scrollLeft > 800 && timeline.scrollLeft <= 1000){
      this.textChange('cqfd2');

    } else if (timeline.scrollLeft > 1000 && timeline.scrollLeft <= 1200){
      this.textChange('cqfd1');

    } else if (timeline.scrollLeft > 1200 && timeline.scrollLeft <= 1600){
      this.textChange('pivaut4');

    } else if (timeline.scrollLeft > 1600 && timeline.scrollLeft <= 1700){
      this.textChange('contratsBleus3'); 

    } else if (timeline.scrollLeft > 1700 && timeline.scrollLeft <= 2200){
      this.textChange('pivaut3');

    } else if (timeline.scrollLeft > 2200 && timeline.scrollLeft <= 2300){
      this.textChange('berdhuis'); 

    } else if (timeline.scrollLeft > 2300 && timeline.scrollLeft <= 2800){
      this.textChange('pivaut2');
    
    } else if (timeline.scrollLeft > 2800 && timeline.scrollLeft <= 2900){
      this.textChange('contratsBleus2'); 

    } else if (timeline.scrollLeft > 2900 && timeline.scrollLeft <= 3300){
      this.textChange('pivaut1');  
    
    } else if (timeline.scrollLeft > 3300 && timeline.scrollLeft <= 3400){
      this.textChange('jouy'); 

    } else if (timeline.scrollLeft > 3400 && timeline.scrollLeft <= 3800){
      this.textChange('highschool3');  

    } else if (timeline.scrollLeft > 3800 && timeline.scrollLeft <= 3900){
      this.textChange('contratsBleus1'); 

    } else if (timeline.scrollLeft > 3900 && timeline.scrollLeft <= 4000){
      this.textChange('highschool2');  
    } else {
      this.textChange('highschool1'); 
    }
  }



// BUTTONS TIMELINE
  public run:number = 1;
  public runImage:number =1;
  //button
  public scrollRight;
  public time = 40;
  
  // Stop the scroll
  public stopScrollRight(){
    clearTimeout(this.scrollRight);
    };
  // Scrolling
  scrollingRight(param:number, display) {

    let timeline = document.getElementById("experience-timeline");
    const image = document.getElementById("experience-square-animation-container");

    image.style.backgroundImage = "url(../../assets/drawing/drawing"+this.runImage+".png)";

    if(this.run == 1){
      this.run =30;
    }
      this.run -=0.5;
      this.runImage = Math.floor(this.run);

    timeline.scrollLeft +=20;

    this.boxOpacityProgression()

    if( param > 0 ){
      this.stopScrollRight();
      
      this.scrollRight = setTimeout( 
          () => {
              this.scrollingRight(param - 1, display);
          },this.time);
    }
  }
  // Start
  startScrollingRight() {

    var display = document.querySelector('.time');
    this.scrollingRight(1000, display);

  };

public scrollLeft; 

  // Stop the scroll
  public stopScrollLeft(){
    clearTimeout(this.scrollRight);
    };
  // Scrolling
  scrollingLeft(param:number, display) {

    let timeline = document.getElementById("experience-timeline");
    const image = document.getElementById("experience-square-animation-container");

    image.style.backgroundImage = "url(../../assets/drawing/drawing"+this.runImage+".png)";

    if(this.run == 30){
      this.run =1;
    }
    this.run +=0.5;
    this.runImage = Math.floor(this.run);

    timeline.scrollLeft -= 20;

    this.boxOpacityProgression()

    if( param > 0 ){
      this.stopScrollRight();
      this.scrollRight = setTimeout( 
          () => {
              this.scrollingLeft(param - 1, display);
          },this.time);
    }
  }
  // Start
  startScrollingLeft() {
    var display = document.querySelector('.time');
    this.scrollingLeft(1000, display);

    
  };

  ngOnInit() {
    const wildCodeSchoolBox = document.getElementById("wild-code-school-box");

    if (this.experienceDate == this.experiences[0].date) {
      wildCodeSchoolBox.style.opacity = "1";
    };

    document.getElementById("experience-square-animation-container").style.backgroundImage = "url(../../assets/runtest.png)";
    let buttonLeft = document.getElementById("experience-square-button-left")
    let buttonRight = document.getElementById("experience-square-button-right")

    document.onkeydown = (e) => {
      switch (e.keyCode) {
          case 37:
           this.startScrollingLeft()
            buttonLeft.style.opacity = "1"
              break;
          case 39:
            this.startScrollingRight()
            buttonRight.style.opacity = "1"
              break;
      };
    };
    
    document.onkeyup = (e) => {
      switch (e.keyCode) {
          case 37:
            this.stopScrollLeft();
            buttonLeft.style.opacity = "0.5"
              break;
          case 39:
            this.stopScrollRight();
            buttonRight.style.opacity = "0.5"
              break;
      };
    };
  }
  

  
}

