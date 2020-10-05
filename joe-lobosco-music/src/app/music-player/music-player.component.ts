import { Component, OnInit } from '@angular/core';
import WaveSurfer from 'wavesurfer.js'

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {

  constructor() { }
  // pieOhMy = new Audio()
  public ws;  

  ngOnInit(): void {
    // this.pieOhMy.src = "../../assets/music/Pie-Oh-My.mp3"
    // this.pieOhMy.load()
     this.ws = WaveSurfer.create({
      container: "#waveform",
      waveColor: "white",
      progressColor: 'gray',
      // scrollParent: true,
      barWidth: 5
    })
    this.ws.load("../../assets/music/Pie-Oh-My.mp3")
  }

}
