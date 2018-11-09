export class Book {

    public img:string;
    public title:string;
    public text:string;
    public link?:string;

    constructor(img,title,text,link?){
        this.img = img;
        this.title = title;
        this.text = text;
        this.link = link;
    }
}
