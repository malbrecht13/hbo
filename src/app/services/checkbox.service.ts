import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckboxService {

  constructor() { }

  setCheckboxKeysToFalse(): void {
    localStorage.setItem('eligibility', 'false');
    localStorage.setItem('contraindications', 'false');
    localStorage.setItem('riskAssessment', 'false');
    localStorage.setItem('treatments', 'false');
  }

  setCheckboxKeyAndValue(key: string, value: boolean): void {
     localStorage.setItem(key, value.toString());
  }

  getCheckboxValues(): any {
    const elig = localStorage.getItem('eligibility');
    const ci = localStorage.getItem('contraindications');
    const ra = localStorage.getItem('riskAssessment');
    const treat = localStorage.getItem('treatments');
    return {
      eligibility: elig,
      contraindications: ci,
      riskAssessment: ra,
      treatments: treat
    };
  }
}
