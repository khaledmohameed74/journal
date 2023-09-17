import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-fourthsection',
  templateUrl: './fourthsection.component.html',
  styleUrls: ['./fourthsection.component.scss']
})
export class FourthsectionComponent {

  Proudcts: any[] = [
    {
      img: 'img-yellow-sofa',
      stat: 'Sarah Bloom',
      name: 'Yellow Modern Armchair',
      price: '$3,680.00'
    },
    {
      img: 'img-modernChair',
      stat: 'Fort Cane',
      name: 'Modern Chair ',
      price: '$1,680.00'
    },
    {
      img: 'img-lazy_armchair',
      stat: 'Ericksson',
      name: 'Lazy Armchair',
      price: '$3,680.00'
    },
    {
      img: 'img-gray_armchair',
      stat: 'Sarah Bloom',
      name: 'Gray Armchair ',
      price: '$680.00'
    },
    {
      img: 'img-comfortable_arm',
      stat: 'Olivia Smith',
      name: 'Comfortable Armchair ',
      price: '$3,680.00'
    },
    {
      img: 'img-lazy_armchair',
      stat: 'Ericksson',
      name: 'Lazy Armchair ',
      price: '$3,680.00'
    },
    {
      img: 'img-gray_armchair',
      stat: 'Sarah Bloom',
      name: 'Gray Armchair ',
      price: '$680.00'
    },
    {
      img: 'img-classic_chair',
      stat: 'Sarah Bloom',
      name: 'Classic Armchair',
      price: '$3,680.00'
    },
  ]

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    margin: 15,
    navSpeed: 900,
    navText: [
      // add your custom icons here
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
