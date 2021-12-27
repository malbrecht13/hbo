import { Component, OnInit} from '@angular/core';
import { CheckboxService } from './services/checkbox.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'hbo';
  opened: boolean = false;

  constructor(private checkboxService: CheckboxService) {}

  ngOnInit(): void {
    this.checkboxService.setCheckboxKeysToFalse(); //sets keys in local storage for pre-hbo checklist
  }

  setIsSideNavOpen(isOpen: boolean): void {
    this.opened = isOpen;
  }

  closedSideNav(): void {
    this.opened = false;
  }

}
