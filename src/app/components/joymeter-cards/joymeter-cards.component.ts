import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-joymeter-cards',
  templateUrl: './joymeter-cards.component.html',
  styleUrls: ['./joymeter-cards.component.scss']
})
export class JoymeterCardsComponent implements OnInit{
  @Input() review: any;
  @Input() isMobile!: boolean;

  isDropdownOpen: boolean = false;
  isDropdownOpen2: boolean = false;
  
  ngOnInit(): void {
    console.log(this.review);
  }
}
