import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  
  title = 'hbo';
  opened: boolean = false;

  setIsSideNavOpen(isOpen: boolean): void {
    this.opened = isOpen;
  }

  closedSideNav(): void {
    this.opened = false;
  }

}
