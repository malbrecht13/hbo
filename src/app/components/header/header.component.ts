import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() opened: boolean = false;
  @Output() toggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.opened = !this.opened;
    this.toggle.emit(this.opened);
  }

}
