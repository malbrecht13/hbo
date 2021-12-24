import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contraindications',
  templateUrl: './contraindications.component.html',
  styleUrls: ['./contraindications.component.scss']
})
export class ContraindicationsComponent implements OnInit {
  contraindications: any = {
    absolute: [
      'Untreated pneumothorax',
      'Receiving IV amiodarone or >400 mg/day oral amiodarone',
      'Pregnancy'
    ],
    relative: [
      'Currently receiving chemotherapy',
      'History of receiving bleomycin chemotherapy',
      'Terminal patient',
      'Upper respiratory infection',
      'Chronic sinusitis',
      'History of reconstructive ear surgery',
      'Uncontrolled bronchospasm',
      'Non-communicating air trapping lesions on chest imaging',
      'History of spontaneous pneumothorax',
      'Emphysema with CO2 retention',
      'Uncontrolled high fever',
      'History of optic neuritis',
      'Congestive heart failure',
    ],
    other: [
      'History of seizures',
      'History of claustrophobia',

    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
