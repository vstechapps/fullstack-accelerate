import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  assessment: any;
  currentQuestionIndex = 0;
  progress = 0;
  form: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedOption: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchAssessment();
  }

  fetchAssessment(): void {
    this.http.get('assets/assessment.json').subscribe((data: any) => {
      this.assessment = data;
    });
  }

  onNext(): void {
    if (this.form.valid) {
      this.currentQuestionIndex++;
      this.progress = ((this.currentQuestionIndex + 1) / this.assessment.questions.length) * 100;
      this.form.reset();
    }
  }

  isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.assessment.questions.length - 1;
  }
}