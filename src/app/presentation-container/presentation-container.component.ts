import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-presentation-container',
  templateUrl: './presentation-container.component.html',
  styleUrls: ['./presentation-container.component.scss']
})
export class PresentationContainerComponent {
  @Input() imgpath!: string;
  @Input() paragraph!: string;
  @Input() title!: string;


}
