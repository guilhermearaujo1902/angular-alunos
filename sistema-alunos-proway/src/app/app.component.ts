import { Component } from '@angular/core';
import { Aluno } from './interfaces/Aluno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  title: string = 'Sistema Alunos Proway';
  exibicao: string = 'lista';

  listaAlunos: Aluno[] = [
    {
      nome: 'Harry Potter',
      curso: 'Angular',
      matricula: 111,
      email: 'harry@proway.com',
      cadastro: false,
      imagem: '/assets/images/user1.png'
    },
    {
      nome: 'Hermione Granger',
      curso: 'Typescript',
      matricula: 222,
      email: 'hermione@proway.com',
      cadastro: true,
      imagem: '/assets/images/user2.png'
    },
    {
      nome: 'Rony Weasley',
      curso: 'Javascript',
      matricula: 333,
      email: 'rony@proway.com',
      cadastro: false,
      imagem: '/assets/images/user3.png'
    }
  ];

  alterarExibicao(): void {
    if (this.exibicao === 'cards') {
      this.exibicao = 'lista';
    } else {
      this.exibicao = 'cards';
    }
    // this.exibicao = this.exibicao === 'lista' ? 'cards' : 'lista';
  }

}
