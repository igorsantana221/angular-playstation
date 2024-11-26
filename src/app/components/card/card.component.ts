import { Component, Input, input } from '@angular/core';
import { CardLabelComponent } from "./card/card-label/card-label.component";
import { CardPricingComponent } from "./card/card-pricing/card-pricing.component";


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPricingComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  gameCover:string = ""

  @Input()
  gameLabel: string = ""

  @Input()
  gameType:string = ""

  @Input()
  gamePrice:string = ""

}
