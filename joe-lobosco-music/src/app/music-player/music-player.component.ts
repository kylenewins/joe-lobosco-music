import { Component, OnInit } from '@angular/core';
import WaveSurfer from 'wavesurfer.js'
import {faPlay, faCircleNotch, faPause} from '@fortawesome/free-solid-svg-icons'


//@ts-ignore
import tracklist from "../../assets/tracklist.json"

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {

  constructor() { }
  // pieOhMy = new Audio()
  public ws: WaveSurfer;
  public tracklist = tracklist.tracks
  public inProgress = false;
  public activeTrack = "";
  public isPlaying = false;

  faPlay = faPlay
  faCircleNotch = faCircleNotch
  faPause = faPause

  ngOnInit(): void {
    this.waveSurferInit()
  }

  waveSurferInit(){
    this.ws = WaveSurfer.create({
      container: "#waveform",
      waveColor: "white",
      progressColor: 'gray',
      // scrollParent: true,
      barWidth: 5
    })
    this.ws.load(this.tracklist[0].ref)
    this.activeTrack = this.tracklist[0].ref
  }

  playHandler(ref){
    if(ref == this.activeTrack){
      this.ws.play()
    } else {
      this.findTrack(ref).then(res => {
        this.inProgress = false
        this.ws.play()
      })
    }
  }
  findTrack(ref){
    return new Promise (resolve => {
      this.inProgress = true;
      this.ws.load(ref)
      this.activeTrack = ref
      this.ws.on('ready', function(){
        resolve()
      })
    })
  }

}
