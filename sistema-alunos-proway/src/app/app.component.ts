import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sistema Alunos Proway';

  listaAlunos = [
    {
      nome: 'Harry Potter',
      curso: 'Angular',
      matricula: 111,
      email: 'harry@proway.com',
      cadastro: false
    },
    {
      nome: 'Hermione Granger',
      curso: 'Typescript',
      matricula: 222,
      email: 'hermione@proway.com',
      cadastro: true
    }
  ];

}
