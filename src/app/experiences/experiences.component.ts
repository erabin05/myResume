import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public experienceTitle:string = "Wild Code School - La Loupe";
  public experienceDate:string = "10.2018 - 02.2019";
  public experienceText:string = "Student in web development";
  public experienceDescription:string = "Learning HTML/CSS, JavaScript, Angular and Java EE";


  
  public resetOpacity():void{

    const wildCodeSchoolBox = document.getElementById("wild-code-school-box");
    const Pivaut4Box = document.getElementById("pivaut4-box");
    const Pivaut3Box = document.getElementById("pivaut3-box");
    const Pivaut2Box = document.getElementById("pivaut2-box");
    const Pivaut1Box = document.getElementById("pivaut1-box");

    if( this.experienceTitle == "Wild Code School - La Loupe"){
      
    }
  }

  wildCodeSchool():void{
    const title = document.getElementById("experience-square-elements-title");
    const date = document.getElementById("experience-square-elements-date");
    const text = document.getElementById("experience-square-elements-text");
    const description = document.getElementById("experience-square-elements-description");

    title.style.opacity ="0";
    date.style.opacity ="0";
    text.style.opacity ="0";
    description.style.opacity ="0";

    setTimeout(() => {
      this.experienceTitle = "Wild Code School - La Loupe";
      this.experienceDate = "10.2018 - 02.2019";
      this.experienceText = "Student in web development";
      this.experienceDescription = "Learning HTML/CSS, JavaScript, Angular and Java EE";
      title.style.opacity ="1";
      date.style.opacity ="1";
      text.style.opacity ="1";
      description.style.opacity ="1";
    },500);

    this.resetOpacity();
  }

  agenceNature():void{
    const title = document.getElementById("experience-square-elements-title");
    const date = document.getElementById("experience-square-elements-date");
    const text = document.getElementById("experience-square-elements-text");
    const description = document.getElementById("experience-square-elements-description");

    title.style.opacity ="0";
    date.style.opacity ="0";
    text.style.opacity ="0";
    description.style.opacity ="0";

    setTimeout(() => {
      this.experienceTitle = "Agence Nature - England and Spain";
      this.experienceDate = "06.2018 - 08.2019";
      this.experienceText = "Organizer in a summer camp";
      this.experienceDescription = "...";
      title.style.opacity ="1";
      date.style.opacity ="1";
      text.style.opacity ="1";
      description.style.opacity ="1";
    },500);
  }

  voluntaryWork():void{
    const title = document.getElementById("experience-square-elements-title");
    const date = document.getElementById("experience-square-elements-date");
    const text = document.getElementById("experience-square-elements-text");
    const description = document.getElementById("experience-square-elements-description");

    title.style.opacity ="0";
    date.style.opacity ="0";
    text.style.opacity ="0";
    description.style.opacity ="0";

    setTimeout(() => {
      this.experienceTitle = "Voluntary work - Guinea";
      this.experienceDate = "04.2017 - 04.2018";
      this.experienceText = "Service civique";
      this.experienceDescription = "Raising awareness of environmental conservation among young guineans.";
      title.style.opacity ="1";
      date.style.opacity ="1";
      text.style.opacity ="1";
      description.style.opacity ="1";
    },500);
  }

  CQFD2():void{
    const title = document.getElementById("experience-square-elements-title");
    const date = document.getElementById("experience-square-elements-date");
    const text = document.getElementById("experience-square-elements-text");
    const description = document.getElementById("experience-square-elements-description");

    title.style.opacity ="0";
    date.style.opacity ="0";
    text.style.opacity ="0";
    description.style.opacity ="0";

    setTimeout(() => {
      this.experienceTitle = "CQFD Communication - Nantes";
      this.experienceDate = "09.2016 - 11.2016";
      this.experienceText = "Graphic designer";
      this.experienceDescription = "Creation of logos, advertising poster, corporate identity and style guide. Setting advertising content out from a corporate identity.";
      title.style.opacity ="1";
      date.style.opacity ="1";
      text.style.opacity ="1";
      description.style.opacity ="1";
    },500);
  }

  CQFD1():void{
    const title = document.getElementById("experience-square-elements-title");
    const date = document.getElementById("experience-square-elements-date");
    const text = document.getElementById("experience-square-elements-text");
    const description = document.getElementById("experience-square-elements-description");

    title.style.opacity ="0";
    date.style.opacity ="0";
    text.style.opacity ="0";
    description.style.opacity ="0";

    setTimeout(() => {
      this.experienceTitle = "CQFD Communication - Nantes";
      this.experienceDate = "09.2015 - 05.2016";
      this.experienceText = "Internship as Graphic designer";
      this.experienceDescription = "Creation of logos, advertising poster, corporate identity and style guide. Setting advertising content out from a corporate identity.";
      title.style.opacity ="1";
      date.style.opacity ="1";
      text.style.opacity ="1";
      description.style.opacity ="1";
    },500);
  }

  pivaut4():void{
    const title = document.getElementById("experience-square-elements-title");
    const date = document.getElementById("experience-square-elements-date");
    const text = document.getElementById("experience-square-elements-text");
    const description = document.getElementById("experience-square-elements-description");

    title.style.opacity ="0";
    date.style.opacity ="0";
    text.style.opacity ="0";
    description.style.opacity ="0";

    setTimeout(() => {
    this.experienceTitle = "Pivaut school - Nantes";
    this.experienceDate = "09.2014 - 06.2015";
    this.experienceText = "Student in graphic design - 2nd year";
    this.experienceDescription = "...";
    title.style.opacity ="1";
    date.style.opacity ="1";
    text.style.opacity ="1";
    description.style.opacity ="1";
    },500);
  }

  pivaut3():void{
    const title = document.getElementById("experience-square-elements-title");
    const date = document.getElementById("experience-square-elements-date");
    const text = document.getElementById("experience-square-elements-text");
    const description = document.getElementById("experience-square-elements-description");

    title.style.opacity ="0";
    date.style.opacity ="0";
    text.style.opacity ="0";
    description.style.opacity ="0";

    setTimeout(() => {
    this.experienceTitle = "Pivaut school - Nantes";
    this.experienceDate = "09.2013 - 06.2014";
    this.experienceText = "Student in graphic design - 1st year";
    this.experienceDescription = "...";
    title.style.opacity ="1";
    date.style.opacity ="1";
    text.style.opacity ="1";
    description.style.opacity ="1";
    },500);
  }

  pivaut2():void{
    const title = document.getElementById("experience-square-elements-title");
    const date = document.getElementById("experience-square-elements-date");
    const text = document.getElementById("experience-square-elements-text");
    const description = document.getElementById("experience-square-elements-description");

    title.style.opacity ="0";
    date.style.opacity ="0";
    text.style.opacity ="0";
    description.style.opacity ="0";

    setTimeout(() => {
    this.experienceTitle = "Pivaut school - Nantes";
    this.experienceDate = "09.2012 - 06.2013";
    this.experienceText = "Student in applied art";
    this.experienceDescription = "...";
    title.style.opacity ="1";
    date.style.opacity ="1";
    text.style.opacity ="1";
    description.style.opacity ="1";
    },500);
  }

  pivaut1():void{
    const title = document.getElementById("experience-square-elements-title");
    const date = document.getElementById("experience-square-elements-date");
    const text = document.getElementById("experience-square-elements-text");
    const description = document.getElementById("experience-square-elements-description");

    title.style.opacity ="0";
    date.style.opacity ="0";
    text.style.opacity ="0";
    description.style.opacity ="0";

    setTimeout(() => {
    this.experienceTitle = "Pivaut school - Nantes";
    this.experienceDate = "05.2016 - 07.2016";
    this.experienceText = "Student in Applied art - preparatory class ";
    this.experienceDescription = "...";
    title.style.opacity ="1";
    date.style.opacity ="1";
    text.style.opacity ="1";
    description.style.opacity ="1";
    },500);
  }

}

