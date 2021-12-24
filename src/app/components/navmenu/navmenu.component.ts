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
      title: 'Eligibility',
      route: 'eligibility'
    },
    {
      title: 'Number of Treatments',
      route: 'number-treatments'
    },
    {
      title: 'Pre-HBO Checklist',
      route: 'hbo-checklist'
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
