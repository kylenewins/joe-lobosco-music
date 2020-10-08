import { Component, AfterViewInit, ElementRef } from '@angular/core';
import {MusicPlayerComponent} from './music-player/music-player.component'
import { trigger, state, style, transition, animate } from '@angular/animations'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({opacity: 0}),
        animate(2000, style({opacity:1}))
    ])    
  ]),
  ]
})
export class AppComponent implements AfterViewInit{
  title = 'joe-lobosco-music';
  
  constructor(
    private elementRef: ElementRef
  ){}
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
  }
}
