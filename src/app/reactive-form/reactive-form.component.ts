import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  dataForm = this.fb.group({
    firstname: ['first', Validators.required],
    lastname: ['last', Validators.required],
  });


  ngOnInit(): void {
  }

  get f(): any{
    return this.dataForm.controls;
  }

  onsubmit(): any{
    console.log(this.dataForm.controls);
  }

}
