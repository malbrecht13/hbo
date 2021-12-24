import { Component, OnInit } from '@angular/core';

export interface WagnerGrade {
  grade: string;
  description: string;
}

const WAGNER_DATA: WagnerGrade[] = [
  {grade: "Wagner 0", description: "Intact Skin"},
  {grade: "Wagner I", description: "Superficial ulcer without penetration to deeper layers"},
  {grade: "Wagner II", description: "Deeper ulcer which reaches tendon, bone, or joint capsule"},
  {grade: "Wagner III", description: "Same depth as Wagner grade II but also involves abscess, osteitis, osteomyelitis, or tendonitis"},
  {grade: "Wagner IV", description: "Gangrene of some portion of the toe/s or forefoot, which may be wet or dry, infected or non-infected"},
  {grade: "Wagner V", description: "Gangrene involves the whole foot, or enough of the foot that no local procedures are possible and at least below-knee amputation is required"}
];

@Component({
  selector: 'app-wagner-grades',
  templateUrl: './wagner-grades.component.html',
  styleUrls: ['./wagner-grades.component.scss']
})
export class WagnerGradesComponent implements OnInit {
  displayedColumns: string[] = ['grade', 'description'];
  dataArray = WAGNER_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
