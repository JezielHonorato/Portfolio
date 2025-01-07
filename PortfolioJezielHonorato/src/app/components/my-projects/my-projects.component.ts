import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  standalone: false,
  
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent {
  DontExist(){
    alert ('Função não criada')
  }
}
