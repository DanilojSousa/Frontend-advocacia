import { Component } from '@angular/core';
import { CorpoComponent } from "./component/pages/corpo/corpo.component";

@Component({
  selector: 'app-root',
  imports: [CorpoComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'advocacia';
}
