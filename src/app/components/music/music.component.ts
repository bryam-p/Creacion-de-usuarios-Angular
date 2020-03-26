import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  songs = [
    {
      image: '/assets/images/1.jpg',
      songUrl: '/assets/musica/afterlife',
      title: 'Afterlife',
      author: 'Prueba'
    },
    {
      image: '/assets/images/1.jpg',
      songUrl: '/assets/musica/oneRepublic',
      title: 'One Republic',
      author: 'Prueba 2'
    },
    {
      image: '/assets/images/1.jpg',
      songUrl: '/assets/musica/Hysteria',
      title: 'Hysteria',
      author: 'Prueba 3'
    },
    {
      image: '/assets/images/1.jpg',
      songUrl: '/assets/musica/the-ellie-badge',
      title: 'The ellie badge',
      author: 'Prueba 4'
    }
  ]

  changeSong(songUrl){
      const video: HTMLMediaElement = document.getElementById('bictiaMusic') as HTMLMediaElement;
      video.setAttribute('src',songUrl+'.mp3');
      video.play();
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
