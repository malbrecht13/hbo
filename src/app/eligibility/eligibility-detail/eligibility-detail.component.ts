import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eligibility-detail',
  templateUrl: './eligibility-detail.component.html',
  styleUrls: ['./eligibility-detail.component.scss']
})
export class EligibilityDetailComponent implements OnInit {
  @Input() elig_criteria: string[] = [];
  @Input() std_wound_care: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

 

}
