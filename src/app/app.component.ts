import { HomepageComponent } from './pages/modules/homepage/homepage.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webpage';
  valor = 'holahola';
}
