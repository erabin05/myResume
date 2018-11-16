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
      "text":"'Le Thé Vert' is a small music festival which take place in Nogent-le-rotrou. The project was to create the digital communication of this festival.",
      "link":"https://www.behance.net/gallery/35231637/Th-vert-Festival-de-musique"
    },
    { "img":"../../assets/sketch1.png", 
      "title":"Sketch - Illustration", 
      "text":"During my stay in Guinea-Conakry I drew a lot. I like to capture moments, and things I found characteristic of the place I am. I published some drawing from the two sketchbook I filled on my socials network.",
      "link":"https://www.instagram.com/etiennerbn/"
    },
    { "img":"../../assets/spm.png", 
      "title":"St-Pierre et Miquelon - Illustration", 
      "text":"Illustration from my final year study project at Pivaut school. I worked on the identity of the town and Island St-Pierre et Miquelon, witch my mother come from. I created a series of Illustrations and all the communication for there tourist office."
    },
    { "img":"../../assets/wild.png", 
      "title":"Wild ! - Web development", 
      "text":"First project of my training at the Wild Code School. The request was to copy an existant tech website and make it responsive.",
      "link":"https://rmtrnsc.github.io/projet1wired/wiredarticle.html"
    },
    { "img":"../../assets/equito.png", 
      "title":"Equito - Graphic Design", 
      "text":"Student project - Identity of a fair market brand.",
      "link":"https://www.behance.net/gallery/31287035/Equito-jus-de-fruit-equitable"
    },
    { "img":"../../assets/bountyHunter.png", 
      "title":"Booouhnty Hunter - Web development", 
      "text":"You are a kid and you go treak or treating for Halloween. What you want is to list every candies you get, for that purpose we created Bounty Hunter. This project has been developed with my teammates Thomas Gonzalez, Maxime Gypteau and Gaetan Hardy during a Hackathon of 24 hours, during my training at the Wild Code school.",
      "link":"https://drgonzi.github.io/BountyHunter/"
    },
    { "img":"../../assets/stMaurice.png", 
      "title":"St-Maurice St-Germain - Graphic Design", 
      "text":"The town of St-Maurice St-Germain, wich I come from, created a visit route to show all of its monuments. In order to make it, I work with them for create signs with descriptions and illustrations of those monuments."
    },
    { "img":"../../assets/folleJournee.png", 
      "title":"Folle Journée - Graphic Design", 
      "text":"Student project - Poster for the classic music festival 'La folle jounrée' with the thematic 'Russia'.",
      "link":"https://www.behance.net/gallery/31286041/Folle-Journe-Russe"
    },
    { "img":"../../assets/HorrorCover.png", 
      "title":"Horror Cover - Illustration", 
      "text":"Student project - Covers for a collection of books 'Horror'.",
      "link":"https://www.behance.net/gallery/31484277/Collection-Horreur-Couvertures-Livres"
    },
    { "img":"../../assets/sketch2.png", 
      "title":"Sketch - Illustration", 
      "text":"I did not only sketeched in my stay in Africa, I do it every day of my life. On my social network you can find some of my draing that I find the most interesting.",
      "link":"https://www.instagram.com/etiennerbn/"
    },
    { "img":"../../assets/noun.png", 
      "title":"Noun - Packaging", 
      "text":"Student project - Menu for a restaurant of ice-cream with seafood flavor.",
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
