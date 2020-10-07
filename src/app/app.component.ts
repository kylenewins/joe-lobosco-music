import { Component, AfterViewInit, ElementRef } from '@angular/core';
import {MusicPlayerComponent} from './music-player/music-player.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [
  //   trigger('routerAnimations', [
  //     state('collapsed', style({ height: '0px', minHeight: '0' })),
  //     state('expanded', style({ height: '*' })),
  //     transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  //   ]),
  // ]
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
