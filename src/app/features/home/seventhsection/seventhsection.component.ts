import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-seventhsection',
  templateUrl: './seventhsection.component.html',
  styleUrls: ['./seventhsection.component.scss']
})
export class SeventhsectionComponent {
  Blogs: any[] = [
    {
      img: 'img-blog1',
      name: 'Journal Blog is Here',
      description: 'The Journal 3 blog has been greatly improved and it now comes with the most advanced set of typography tools, including custom drop-cap support as well as optional newspaper-like fluid columns. You ca..',
      author: 'admin',
      comments: '113',
      views: '45125'
    },
    {
      img: 'img-blog2',
      name: 'Best Leather Bags',
      description: 'Best Opencart theme options you can find in any theme? Decide for yourself by visiting one our demo admin, user/pass: demo/demo. The Journal 3 blog has been greatly improved and it now comes with the ..',
      author: 'admin',
      comments: '133',
      views: '81125'
    },
    {
      img: 'img-blog3',
      name: 'Another Blog Post',
      description: 'Another blog post.  Write unlimited blog articles, or have someone write them for you with partial admin access. The Journal 3 blog has been greatly improved and it now comes with the most advanced se..',
      author: 'admin',
      comments: '220',
      views: '99451'
    },
    {
      img: 'img-blog4',
      name: 'Welcome to Journal Blog',
      description: 'Journal 3 blog has been greatly improved and it now comes with the most advanced set of typography tools, including custom drop-cap support as well as optional newspaper-like fluid columns. You can br..',
      author: 'admin',
      comments: '420',
      views: '56451'
    },
    {
      img: 'img-blog5',
      name: 'Traveling to Greece',
      description: 'Travel in peace with the new scheduling options. The new Schedule feature allows you to display any module at specific dates in the future, or to disable any module automatically at a certain time and..',
      author: 'admin',
      comments: '320',
      views: '79451'
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
