import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-treino',
  templateUrl: './treino.component.html',
  styleUrls: ['./treino.component.scss'],
})
export class TreinoComponent {
  tasks: string[] = [];
  verifyTaks: boolean = false;
  taskNumber: number = 0;
  form: FormGroup = this.fb.group({
    task: [null, Validators.minLength(5)],
  });
  constructor(private fb: FormBuilder) {}

  submit() {
    let form = this.form.get('task')?.value;
    console.log(form);

    this.tasks.push(form);
    if (this.tasks.length > 0) {
      this.verifyTaks = true;
    }
    this.taskNumber = this.tasks.length;
  }
}
