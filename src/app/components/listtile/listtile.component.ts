import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-listtile',
  templateUrl: './listtile.component.html',
  styleUrls: ['./listtile.component.scss']
})
export class ListtileComponent implements OnChanges {
  arrow: string = 'arrow_right';

  @Input() title: string = '';
  @Input() collapsed: boolean = true;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.arrow = this.collapsed ? 'arrow_right' : 'arrow_drop_down';
  }


}
