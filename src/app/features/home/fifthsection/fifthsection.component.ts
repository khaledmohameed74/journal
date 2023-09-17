import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-fifthsection',
  templateUrl: './fifthsection.component.html',
  styleUrls: ['./fifthsection.component.scss']
})
export class FifthsectionComponent {
  blocks: any[] = [
    {
      content: 'I have purchased hundreds and hundreds of files over the past 7 years. But there is nothing close to this support and professionalism. Not only is theme, simple , useful and modern, but again the support is remarkable. Very happy I got this theme! Thank you!',
      footer: '- charlibaltimore'
    },

    {
      content: 'I am a web developer for many years i have not seen anything clear clean coded like journal it makes my live so much easier thanks for the great work you have done.',
      footer: '- chromebandit'
    },

    {
      content: 'Great toolkit for Opencart. As a base platform, Opencart can be a nightmare to modify and get looking good. Journal takes away all the pain.',
      footer: '- kellyhorne'
    },

    {
      content: 'Great toolkit for Opencart. As a base platform, Opencart can be a nightmare to modify and get looking good. Journal takes away all the pain.',
      footer: '- kellyhorne'
    },

    {
      content: 'This theme is just amazing. With the new version J3 everything has become much easier to adjust. It is indeed, as the author says, not possible to mention all the possibilities, because it is just to much. Great value for the price!',
      footer: '- TBNWorld'
    },

    {
      content: 'Amazing ways to customize so you dont end up with a site looking like everyone else is :) Unique sites are much better than clone sites, as they keep the customers interest and the bounce rate is a lot lower. Great Job A++++++',
      footer: '- sacredcirclegifts'
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
        items: 3
      }
    },
    nav: true
  }
}
