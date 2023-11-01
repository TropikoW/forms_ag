import { Component } from '@angular/core';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // the list that received all users
  listUser : any[] = [];

  email: string | undefined;

  // here i saved the structed user
  register = {
    id : 0,
    name : '',
    email : '',
    password : ''
  };

  // the function that validate if the inputs is empty and after if the user is saved for a new register
  onRegister() {
    if(this.validateForm()) {
      if(this.listUser.find(usuario=> usuario.name ===this.register.name)){
        alert('The user is register');
        console.log(this.listUser);
      } else {
        this.register.id = this.listUser.length;
        this.listUser.push({...this.register});
        this.resetForm();
        console.log(this.listUser)
        alert('Add new user');
      };
    }
  };

  // here reset the user object
  resetForm() {
    this.register = {
      id : 0,
      name : '',
      email : '',
      password : ''
    };
  }

  // here validate if the input is empty (is used for the onregister function)
  validateForm(): boolean {
    return !!this.register.name && !!this.register.email && !!this.register.password;
  };
}
