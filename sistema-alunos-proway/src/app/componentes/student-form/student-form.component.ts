import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Aluno } from '../../interfaces/Aluno';

@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {

  @Output() adicionar: EventEmitter<Aluno> = new EventEmitter();

  @Input()
  aluno: Aluno = {
    nome: '',
    matricula: 0,
    email: '',
    curso: '',
    cadastro: false,
    imagem: ''
  };

  salvar(): void {
    this.adicionar.emit(this.aluno);
  }

}
