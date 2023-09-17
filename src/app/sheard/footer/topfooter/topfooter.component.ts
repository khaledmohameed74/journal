import { Component } from '@angular/core';

@Component({
  selector: 'app-topfooter',
  templateUrl: './topfooter.component.html',
  styleUrls: ['./topfooter.component.scss']
})
export class TopfooterComponent {

  viewos: any = [
    {
      img: 'img-glasses',
      name: 'Oversized Sun Long',
      price: '$397.00',
      hearticon: 'heart-icon',
      shoppingicon: 'shopping-icon',
      compareticon: 'compare-icon',
    },
    {
      img: 'img-headphone',
      name: 'Headphones',
      price: '$999.00',
      hearticon: 'heart-icon',
      shoppingicon: 'shopping-icon',
      compareticon: 'compare-icon',
    },
    {
      img: 'img-watch1',
      name: 'Sport Watch',
      price: '$209.15',
      hearticon: 'heart-icon',
      shoppingicon: 'shopping-icon',
      compareticon: 'compare-icon',
    },
    {
      img: 'img-watch2',
      name: 'Red Formal Watch',
      price: '$3,010.00',
      hearticon: 'heart-icon',
      shoppingicon: 'shopping-icon',
      compareticon: 'compare-icon',
    },
  ]

  ngOnInit(): void {

  }

}


