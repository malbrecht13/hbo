import { Injectable } from '@angular/core';
import { QuestionNode } from './questionNode';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  riskConditions: any[] = [
    {key: 'uri', condition: 'Current upper respiratory infection', rec: 'Wait until the patient\'s upper respiratory infection is resolved.  Then proceed with evaluation for HBO.'},
    {key: 'commands', condition: 'Inability to follow commands (e.g., anxiety, dementia, auditory/visual impairments, unconscious)', rec: 'A patient should be able to follow commands in the HBO chamber.  Postpone or cancel HBO unless can follow commands.'},
    {key: 'sinus', condition: 'Sinus obstruction or dental problems', rec: 'Relieve the patient\'s sinus obstruction or correct dental problems if present prior to proceeding with HBO.'},
    {key: 'pulm', condition: 'History of smoking, pulmonary disease, or chest surgery', rec: 'Given the patient\'s history of pulmonary disease: obtain a PA and lateral CXR.  If there is suggestion of bullous disease or blebs, obtain a chest CT.  If blebs on CT, cancel HBO.  Could consider VQ scan if HBO is essential.  If the VQ scan is abnormal, definitely cancel HBO.  If imaging does not disqalify the patient, consider spirometry and/or pulmonary consult for those with airflow obstruction.  If FEV1 > 70%, give inhaled bronchodilator prior to HBO.  If FEV1 50-70%, give inhaled bronchodilator prior to HBO and use slow decompression.  If FEV1 < 50%, if ABG shows paCO2 > 50 mmHg, do not proceed with HBO.  If paCO2 acceptable, use an inhaled bronchodilator pre-HBO and use slow decompression.'},
    {key: 'chf', condition: 'Congestive heart failure', rec: 'For this patient with CHF: If EF > 40%, ok to proceed with HBO eval.  If EF 30-40%, consult cardiologist first to optimize medical management.  If EF < 30%, use HBO for life-threatening conditions only.'},
    {key: 'pacer', condition: 'Pacemaker or AICD', rec: 'Proceed with HBO only if the patient\'s pacemaker or ICD meets safety requirements.'},
    {key: 'eye', condition: 'Diabetic retinopathy, cataracts, retinal detachment, or other opthalmologic problems', rec: 'Given the patient history of one or more opthalmologic conditions: Consider performing visual acuity pre-and post-HBO.  Consider opthlalmology consultation for patient\'s eye conditions prior to HBO.'},
    {key: 'anxiety', condition: 'History of confinement anxiety', rec: 'Given the history of confinement anxiety: Allow the patient to lie in the chamber with the door open, reinforce patient education, distraction.  Consider anxiolytics.'},
    {key: 'dm', condition: 'Diabetes mellitus', rec: 'For this patient with diabetes, assess hypoglycemia risk and manage by protocol.'},
    {key: 'O2toxicity', condition: 'Fever, hypercarbia, hyperthyroidism, on vasodilating drugs, high dose penicillin, vitamin C, seizure history', rec: 'This patient may have a higher risk of CNS oxygen toxicity.  Consider lower pressure with more frequent air breaks.'},
    {key: 'bleomycin', condition: 'Bleomycin in the past 12 months', rec: 'Cancel HBO given bleomycin use in the last 12 months.'},
    {key: 'chemo', condition: 'On other chemotherapy agents', rec: 'Delay HBO until 6 weeks after last chemotherapy, if possible.'},
    {key: 'amio', condition: 'On IV amiodarone or oral doses > 400 mg/day', rec: 'Cancel HBO given this patient\'s use of amiodarone'},
    {key: 'drugs', condition: 'On disulfiram, mafenide acetate, or high-dose steroids', rec: 'Since patient is on disulfiram, mafenide, or high-dose steroids, consider discontinuation of the drug or reduce oxygen exposure (lower pressure/more frequent air breaks) to reduce the risk of CNS O2 toxicity.'},
    {key: 'pregnancy', condition: 'Pregnancy', rec: 'HBO should not be used electively in pregnancy.  Proceed with caution in emergency circumstances.'}
  ]

  

  constructor() { }

  getRiskConditions(): any[] {
    return this.riskConditions;
  }

  getRiskRecommendations(keys: string[]): string[] {
    const filteredArray = this.riskConditions.filter(item => keys.includes(item.key));
    return filteredArray.map(item => item.rec);
  }


}
