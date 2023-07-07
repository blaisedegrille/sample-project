import { Component } from '@angular/core';
import { Menu } from 'src/models/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-project';
  showFiller = false;
  componentList: Menu[] = [
  { name: 'Kezdőlap', route: 'home'},
  { name: 'Betárolás', route: 'betarolas'},
  { name: 'Kitárolás', route: 'kitarolas'},
  { name: 'Raktárkészlet', route: 'raktarkeszlet'},
  { name: 'Komissió', route: 'komissio'}];
}
