import { Component } from '@angular/core';

@Component({
  selector: 'fnr-footer',
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  get year(): number {
    return new Date().getFullYear();
  }
}
