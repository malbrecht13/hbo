import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listtile',
  templateUrl: './listtile.component.html',
  styleUrls: ['./listtile.component.scss']
})
export class ListtileComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
