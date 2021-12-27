import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})
export class NavmenuComponent implements OnInit {

  listNames: any[] = [
    {
      title: 'Home',
      route: ''
    },
    {
      title: 'Pre-HBO Checklist',
      route: 'hbo-checklist'
    },
    {
      title: 'Eligibility',
      route: 'eligibility'
    },
    {
      title: 'HBO Treatments',
      route: 'treatments'
    },
    {
      title: 'Contraindications',
      route: 'contraindications'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
