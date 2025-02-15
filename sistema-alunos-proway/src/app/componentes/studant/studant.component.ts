import { Component, Input } from '@angular/core';
import { Aluno } from '../../interfaces/Aluno';

@Component({
  selector: 'app-studant',
  standalone: false,
  templateUrl: './studant.component.html',
  styleUrl: './studant.component.css'
})
export class StudantComponent {

  @Input()
  aluno!: Aluno;

  textoGrande: string = '35px';
  textoMedio: string = '20px';
  textoPequeno: string = '12px';

}
