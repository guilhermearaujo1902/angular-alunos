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
  exibicao: string = 'cards';

  listaAlunos: Aluno[] = [
    {
      nome: 'Harry Potter',
      curso: 'Angular',
      matricula: 111,
      email: 'harry@proway.com',
      cadastro: true,
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
      cadastro: true,
      imagem: '/assets/images/user3.png'
    },
    {
      nome: 'Luna Lovegood',
      curso: 'CSS',
      matricula: 444,
      email: 'luna@proway.com',
      cadastro: true,
      imagem: '/assets/images/user4.png'
    }
  ];

  // Criando uma lista auxiliar pra armazenar o valor inicial da lista de alunos
  listaAlunosBkp: Aluno[] = this.listaAlunos;

  alterarExibicao(): void {
    if (this.exibicao === 'cards') {
      this.exibicao = 'lista';
    } else {
      this.exibicao = 'cards';
    }
    // this.exibicao = this.exibicao === 'lista' ? 'cards' : 'lista';
  }

  exibirAprovados(): void {

    // Reserva uma lista para armazenar somente os aprovados
    const listaAprovados: Aluno[] = [];

    // Percorrer a lista 'listaAlunos'
    this.listaAlunosBkp.forEach( aluno => {

      // Validar se o aluno está Aprovado
      if (aluno.cadastro === true) {

        // Insere o aluno aprovado na 'listaAprovados'
        listaAprovados.push(aluno);
      }
    });

    // Atualizar a 'listaAlunos' com os alunos aprovados
    this.listaAlunos = listaAprovados;

  }

  exibirReprovados(): void {
    const listaReprovados: Aluno[] = [];

    this.listaAlunosBkp.forEach( aluno => {
      if (aluno.cadastro === false) {
        listaReprovados.push(aluno);
      }
    });

    this.listaAlunos = listaReprovados;
  }

  exibirTodos(): void {
    this.listaAlunos = this.listaAlunosBkp;
  }

  filtrarAlunos(filtro: string): void {

    switch (filtro) {

      case 'APROVADO':
        this.listaAlunos = this.listaAlunosBkp.filter( aluno => {
          return aluno.cadastro === true;
        });
        break;

      case 'REPROVADO':
        this.listaAlunos = this.listaAlunosBkp.filter( aluno => {
          return aluno.cadastro === false;
        });
        break;
      
      case 'TODOS':
        this.listaAlunos = this.listaAlunosBkp;
        break;

      default:
        console.log(`Valor inválido para filtro: ${filtro}`);
    }

  }

  onExcluir(matricula: number): void {
    
    this.listaAlunos.forEach( (aluno, index) => {

      if (aluno.matricula === matricula) {
        this.listaAlunos.splice(index, 1);
      }

    });

  }

}
