import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	contactForm: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder, private  apiService:  ApiService) { }

  ngOnInit() {
  	this.contactForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9]+')]],
            address: ['', [Validators.required, Validators.maxLength(100)]],
            message: ['', [Validators.maxLength(100)]]
        });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
        this.submitted = true;
 
        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }

        console.log(this.contactForm.value);

        this.apiService.createContact_(this.contactForm.value).subscribe((response) => {
		    console.log('response', response);
		    });
 
        //alert('SUCCESS!! :-)')
    }

}
