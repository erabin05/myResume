import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  public img:Book[] = [
    { "img":"../../assets/satelliteQuest.png", 
      "title":"Satelite Quest - Web development ", 
      "text":"Create your satellite, go to space and discover the solar system ! Satellite Quest is a game I developed with Pascale Renaud and Audren Thibault during my training at the Wild Code School. Thanks to this adventure I learned about Angular, API and to work as a team.",
      "link":"http://wcs.pascal-renaud.com/partage/SatelliteQuest/"
    },
    {
      "img":"https://mir-s3-cdn-cf.behance.net/project_modules/disp/3f73f135231637.56ef1b473916b.gif", 
      "title":"Thé Vert - Graphic design", 
      "text":"Something Something Something",
      "link":"https://www.behance.net/gallery/35231637/Th-vert-Festival-de-musique"
    },
    { "img":"../../assets/sketch1.png", 
      "title":"Sketch - Illustration", 
      "text":"Something Something Something",
      "link":"https://www.instagram.com/etiennerbn/"
    },
    { "img":"../../assets/spm.png", 
      "title":"St-Pierre et Miquelon - Illustration", 
      "text":"Something Something Something"
    },
    { "img":"../../assets/wild.png", 
      "title":"Wild ! - Web development", 
      "text":"Something Something Something",
      "link":"https://rmtrnsc.github.io/projet1wired/wiredarticle.html"
    },
    { "img":"../../assets/equito.png", 
      "title":"Equito - Graphic Design", 
      "text":"Something something something",
      "link":"https://www.behance.net/gallery/31287035/Equito-jus-de-fruit-equitable"
    },
    { "img":"../../assets/bountyHunter.png", 
      "title":"Booouhnty Hunter - Web development", 
      "text":"You are a kid and you go treak or treating for Halloween. What you want is to list every candies you get, for that purpose we created Bounty Hunter. This project has been developed with my teammates Thomas Gonzalez, Maxime Gypteau and Gaetan Hardy during a Hackaton of 24 hours, during my training at the Wild Code school."
    },
    { "img":"../../assets/stMaurice.png", 
      "title":"St-Maurice St-Germain - Graphic Design", 
      "text":"Something Something Something"
    },
    { "img":"../../assets/folleJournee.png", 
      "title":"Folle Journée - Graphic Design", 
      "text":"Something something something",
      "link":"https://www.behance.net/gallery/31286041/Folle-Journe-Russe"
    },
    { "img":"../../assets/HorrorCover.png", 
      "title":"Horror Cover - Illustration", 
      "text":"Something Something Something",
      "link":"https://www.behance.net/gallery/31484277/Collection-Horreur-Couvertures-Livres"
    },
    { "img":"../../assets/sketch2.png", 
      "title":"Sketch - Illustration", 
      "text":"Something Something Something",
      "link":"https://www.instagram.com/etiennerbn/"
    },
    { "img":"../../assets/noun.png", 
      "title":"Noun - Packaging", 
      "text":"",
      "link":"https://www.behance.net/gallery/35231255/noun-menu-cremes-glaces"
    }
    
    ];

  public imgPopUp:string = "";
  public titlePopUp:string = "title";
  public textPopUp:string = "Something something something";
  public linkPopUp:string = "";

  ngOnInit() {
  }

  popUpBook(img, title, text, link?){
    document.getElementById("book-popup-container").classList.remove("none");
    this.imgPopUp = img;
    this.titlePopUp = title;
    this.textPopUp = text;
    if (link != undefined) {
      this.linkPopUp = link;
      document.getElementById("book-popup-link").style.opacity ="1";
    }
  }
  closePopUpBook(){
    document.getElementById("book-popup-container").classList.add("none");
    document.getElementById("book-popup-link").style.opacity ="0"
  }
}
