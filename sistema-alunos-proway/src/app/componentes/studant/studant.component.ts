import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-studant',
  standalone: false,
  templateUrl: './studant.component.html',
  styleUrl: './studant.component.css'
})
export class StudantComponent {

  @Input()
  aluno: any = {};

}
