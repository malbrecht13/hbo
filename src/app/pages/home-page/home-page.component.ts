import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  listNames: any[] = [
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
