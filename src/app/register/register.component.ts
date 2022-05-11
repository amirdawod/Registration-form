import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { User } from '../Models/userModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder, private api:ApiService) {}

  ngOnInit() {
    /* initializing the form & adding validations */
    this.myForm = new FormGroup({
        'firstName' : new FormControl(null,Validators.required),
        'lastName' : new FormControl(null,Validators.required),
        'email' : new FormControl(null,Validators.email),
        'phone' : new FormControl(null,Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')),

        'middle' : new FormControl(null,null),

    });
  }


 

  onSubmit(): void {
    /* creating new User and filling the object with info from the form*/
    this.user= new User();
    this.user.firstName = this.myForm.value.firstName;
    this.user.middleInitial = this.myForm.value.middle;
    this.user.lastName = this.myForm.value.lastName;
    this.user.email = this.myForm.value.email;
    this.user.phone = this.myForm.value.phone;
    this.user.createDate=new Date();
    this.user.isEnabled=true;
    this.user.accessCode="279813";
  /* passing the user object to the POST API to add it*/
    this.api.postUser(this.user).subscribe(res=>{
      alert("user added with id :- "+ res.payload.userID);
      this.user.userID=res.payload.userID; /* reading UserID from response obj */
      console.log(res);
      this.myForm.reset();
    })
  }

  /* saving the userID , call the delete API and show the deleted id*/
  delete(){
    let deletedID =this.user.userID;
    this.api.deleteUser(this.user.userID,this.user.accessCode).subscribe(res=>{
      alert("user with Id : "+deletedID+ " deleted");
      this.user
      console.log(res);
      console.log("user deleted");
    });
  }

 
}
