import { Component, VERSION } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  name = 'Angular ' + VERSION.major;
  staffForm: FormGroup; // <--- staffForm is of type FormGroup

  constructor(private fb: FormBuilder) {
    // <--- inject FormBuilder
    this.createForm();
  }
  formModel: any =
   {
    field1: [Validators.required, Validators.maxLength(4)],
    field2: [],
    field3: [],
  };

  field1: any = 'Validators.required';
  field1Type: string = 'number';

  createForm() {
    this.staffForm = this.fb.group({
      name: ['', this.formModel.field1],
      name2: ['', this.formModel.field2],
      name3: ['', this.formModel.field3],
     
    });
  }
}
