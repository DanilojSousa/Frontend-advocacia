import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ServicoDialogComponent } from './servico-dialog/servico-dialog.component';

@Component({
  selector: 'app-servicos',
  imports: [MatIconModule],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {

  readonly dialog = inject(MatDialog);
  constructor(private router: Router){}

  selected = 1;

  seleciona(valor: number){
    this.selected = valor;
  }

  abrirDialogServico(valor: number){
    let width = '80%';
    if(valor === 1 || valor === 2 || valor === 3 || valor === 4){
      width = '60%';
    }
    const dialogRef = this.dialog.open(ServicoDialogComponent, {
      data:{index: valor}
    });
  }
}
