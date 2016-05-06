import {Component} from 'angular2/core';
import {ControlGroup,Control,Validators,FormBuilder} from 'angular2/common';
import {UsernameValidators} from './usernameValidators'

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpComponent{
    form: ControlGroup;
    
    constructor(fb: FormBuilder){
        this.form = fb.group({
            //validator co 2 yeu cau
            username: ['',Validators.compose(
                [Validators.required,
                 UsernameValidators.cannotContainSpace]),
                 UsernameValidators.shouldBeUnique],
            password: ['',Validators.required]
        })
    }
    //Model-Driven Forms
    /*form = new ControlGroup({
        username: new Control('',Validators.required),
        password: new Control('',Validators.required)
    });*/
    
    
    signup(){
        console.log(this.form.value);
        this.form.find('username').setErrors({
            invalidLogin: true
        })
    }
}