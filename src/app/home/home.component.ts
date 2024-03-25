import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  mySectionForm : FormGroup | any;
  AllSectionArr:any[]  = [];
  submitted = false;
ngOnInit(){
  this.mySectionForm = new FormGroup({
    sectionHeader : new FormControl ('', Validators.required),
    sectionDatails : new FormControl ('', Validators.required),
  });
} 
createSection(){
  this.submitted = true;
  this.AllSectionArr.push(this.mySectionForm.value)
  console.log(this.mySectionForm.value)
  console.log(this.AllSectionArr)
  this.mySectionForm.reset()
}

}