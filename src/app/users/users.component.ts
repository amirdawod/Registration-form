import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { User } from '../Models/userModel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : User[] | any;
  accessCode : string = "279813"
constructor(private formBuilder: FormBuilder ,private api: ApiService) { }

/*once the page starts , call the get API to get all Users with the specified accesscOde */
ngOnInit() {
  this.api.getUsers(this.accessCode).subscribe((data)=>{
      this.users=data.payload;
      console.log(this.users);
  })
}
delete(id:number ){
  this.api.deleteUser(id,this.accessCode).subscribe(res=>{
    this.ngOnInit();
    alert("user with Id : "+id+ " deleted");
    console.log(res);
    console.log("user deleted with id "+ id);
  });
}





}