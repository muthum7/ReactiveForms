import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators} from './validators/CustomValidators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReactiveForms';

  reactiveForm!: FormGroup;

  name:string = 'Muthu kumar';

   
  ngOnInit(): void {
    console.log(this.name.indexOf('s'))
    this.reactiveForm = new FormGroup({
      firstname: new FormControl('Muthukumar', [Validators.required, Validators.maxLength(9), CustomValidators.noSpaceAllowed]),
      lastname: new FormControl('M'),
      email: new FormControl('muthu@gmail.com'),
      username: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl(null),
      street: new FormControl(null),
      country: new FormControl(null),
      city: new FormControl(null),
      region: new FormControl(null),
      postal: new FormControl(null),
      skills: new FormArray([
        
      ]),
      experience: new FormArray([
        
      ])

    })
  }
  DeleteExperience(index: number){  
    const controls = <FormArray>this.reactiveForm.get('experience');
    controls.removeAt(index);
  }
  AddExperience(){
    const formGroups = new FormGroup({
      company: new FormControl(null),
      position: new FormControl(null),
      totalExp: new FormControl(null),
      startDate: new FormControl(null),
      endDate: new FormControl(null)
    });
    (<FormArray>this.reactiveForm.get('experience')).push(formGroups)
  }
  AddSkills(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null));
  }
  onFormSubmit(){
    console.log(this.reactiveForm);
    console.log(this.reactiveForm.value);
    localStorage.setItem('values',JSON.stringify(this.reactiveForm.value));
    console.log(localStorage.getItem('values'));
  }
  OnDelete(index: number){
    const controls = <FormArray>this.reactiveForm.get('skills');
    controls.removeAt(index);
  }
}
