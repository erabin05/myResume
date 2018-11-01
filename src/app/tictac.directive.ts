import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appTictac]'
})
export class TictacDirective implements OnInit, OnDestroy {

  //<div appTicTac gallery="gallery_dans_mon_ts"></div>
  @Input() gallery:string[];

  private timeout:any;
  private cursor:number;
  private el:ElementRef;

  constructor( param_el:ElementRef) { 
    this.el = param_el;
    this.timeout = 0;
    this.cursor = 0;
    this.gallery = [];
  }

  private tick():void{

    this.cursor++;
    if( this.cursor >= this.gallery.length ){
      this.cursor = 0;
    }

    this.el.nativeElement.style.backgroundImage = "url('"+this.gallery[this.cursor]+"')";
    
    this.timeout = setTimeout( 
      () => {
        this.tick();
      }, 
      1000
    );
  }

  ngOnDestroy():void{
    clearTimeout(this.timeout);
  }

  ngOnInit():void{
    this.tick();
  }

}
