import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-firstsection',
  templateUrl: './firstsection.component.html',
  styleUrls: ['./firstsection.component.scss']
})



export class FirstsectionComponent {
  slider: any[] = [
    {
      title: 'Interior',
      bold: 'New Collection',
      img: 'img-one-firstsection',
      background: 'bg-light-blue',
      text_color: 'text-black',
      btn_hover: 'hover-bg-white'
    },
    {
      title: 'Lighting',
      bold: 'Modern Lamps',
      img: 'img-two-firstsection',
      background: 'bg-dark-main',
      text_color: 'text-white-color',
      title_color: 'text-light-black-color',
      btn_hover: 'hover-bg-primary'
    },
    {
      title: 'Relaxing',
      bold: 'Essential comfort',
      img: 'img-three-firstsection',
      background: 'bg-light-black',
      text_color: 'text-black',
      btn_ground: '',
      btn_hover: 'hover-bg-white'
    },
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    margin: 15,
    navSpeed: 900,
    navText: [
      // add your custom icons here
      '<i class="fa-solid fa-arrow-left-long"></i>',
      '<i class="fa-solid fa-arrow-right-long"></i>'
    ],
    items: 1,
    nav: true
  }
}


