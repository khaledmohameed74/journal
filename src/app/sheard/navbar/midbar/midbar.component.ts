import { Component } from '@angular/core';

@Component({
  selector: 'app-midbar',
  templateUrl: './midbar.component.html',
  styleUrls: ['./midbar.component.scss']
})
export class MidbarComponent {
  menu: any[] = [
    { title: 'All' },
    { title: 'Fashion' },
    { title: 'Bags' },
    { title: 'Health & Beauty' },
    { title: 'Footwear' },
    { title: 'Home Decor' },
    { title: 'Electronics' },
    { title: 'Appliances' },
    { title: 'Baby & Kids' },
    { title: 'Flowers' },
    { title: 'Food' },
    { title: 'Sports' },
  ]
}
