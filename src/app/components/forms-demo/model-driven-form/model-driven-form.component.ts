import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

  postalCodeForm: FormGroup;
  postalCode: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9]{3}[\s]?[A-Za-z]{2}$')]);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.postalCodeForm = this.fb.group({
      postalCode: this.postalCode
    });

    this.postalCode.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  save(): void {
    // All inputs are accumulated onto the value
    console.log('Save postal code: ', this.postalCodeForm.value);
  }

  public isEven2(n: number): boolean {
    return n % 2 === 0;
  }


}
