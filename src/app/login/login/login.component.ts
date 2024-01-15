import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer/customer.service';
import { MovementsComponent } from '../../movements/movements/movements.component';
import { CommonModule } from '@angular/common'; 

export interface customer {
  name: string;
  password: string; 
  rol: number
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, MovementsComponent,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  activarComponente: boolean = false;
  modeloFormulario: any = {};
  loginForm! : FormGroup;
  ELEMENT_DATA: any = [];
  condicion: boolean = true;
  inputValue: string = '';
  onInputChange(event: Event): void {
    // Obtén el valor del input cuando cambie
    this.inputValue = (event.target as HTMLInputElement).value;
    console.log(this.inputValue);
  }

  constructor(public fb: FormBuilder, public customer: CustomerService){
  }

  ngOnInit(): void {
    
    
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      rol: ['', Validators.required]
    })
  }

  login(): void{
    this.condicion = !this.condicion;
    this.customer.getAllCustomer().subscribe((resp : any) =>{

      this.ELEMENT_DATA = resp.filter((element: any) => {

        if (element !== null) {
         if (element.password === this.modeloFormulario.password && element.email === this.modeloFormulario.email ) {
            this.condicion = false;
            this.ELEMENT_DATA.name = element.email ;
            this.ELEMENT_DATA.password =  element.password;

         }
        }
        return false; // Retorna false para los elementos nulos
      })
    },
    error=>(console.log(error)));
    
  }
}
