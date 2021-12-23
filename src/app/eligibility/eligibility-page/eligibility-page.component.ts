import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-eligibility-page',
  templateUrl: './eligibility-page.component.html',
  styleUrls: ['./eligibility-page.component.scss']
})
export class EligibilityPageComponent implements OnInit {
  pageTitle: string = 'HBO Eligibility Criteria';

  constructor() { }

  ngOnInit(): void {
  }

}
