import { Component, Injectable, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from '../../header/header/header.component';
import { FooterComponent } from '../../footer/footer/footer.component';
import { TypeOperationService } from '../../services/typeOperation/type-operation.service';
import { LoginComponent } from '../../login/login/login.component';
import { CommonModule } from '@angular/common'; 

export interface PeriodicElement {
  code: number;
  operation: string;
}

@Component({
  selector: 'app-movements',
  standalone: true,
  imports: [MatTableModule, HeaderComponent, FooterComponent, LoginComponent, CommonModule],
  templateUrl: './movements.component.html',
  styleUrl: './movements.component.css'
})
export class MovementsComponent implements OnInit{
  activoComponente: boolean = true;
  ELEMENT_DATA: any = [];
  displayedColumns: string[] = ['code', 'operation'];
  typeOperations :any;
  constructor(public typeOperation: TypeOperationService){
  }
  ngOnInit(): void {
    this.typeOperation.getAllTypeOperation().subscribe((resp : any) =>{
      this.ELEMENT_DATA = resp.filter((element: null) => element !== null);
    },
    error=>(console.log(error)));
  }
}


