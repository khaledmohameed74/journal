import { Component } from '@angular/core';

@Component({
  selector: 'app-thirdsection',
  templateUrl: './thirdsection.component.html',
  styleUrls: ['./thirdsection.component.scss']
})
export class ThirdsectionComponent {
  categories: any[] = [
    {
      img: 'img-armchair',
      name: 'Armchair',
      more: 'See products',
    },
    {
      img: 'img-decor',
      name: 'Decor',
      more: 'See products',
    },
    {
      img: 'img-lamps2',
      name: 'Lamps',
      more: 'See products',
    },
    {
      img: 'img-sofa2',
      name: 'Sofa',
      more: 'See products',
    },
    {
      img: 'img-tables',
      name: 'Tables',
      more: 'See products',
    },
  ]

}
