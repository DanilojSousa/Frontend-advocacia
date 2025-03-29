import { Component } from '@angular/core';
import { EmpresaEnum } from '../../../interface/dados-empresa';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-sobre-associados',
  imports: [MatIconModule],
  templateUrl: './sobre-associados.component.html',
  styleUrl: './sobre-associados.component.css'
})
export class SobreAssociadosComponent {

   empresa = EmpresaEnum;
   eloy = new Date(1985, 2, 10);
   gil = new Date(1990, 5, 15);
   mostraTextoAdvogado1: boolean = false;
   mostraTextoAdvogado2: boolean = false;

  calcularIdade(dataNascimento: Date): number {
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
      idade--;
    }
    return idade;
  }

  mostrarTexto(valor: number){
    if(valor === 1){
      this.mostraTextoAdvogado1 = !this.mostraTextoAdvogado1;
    }else{
      this.mostraTextoAdvogado2 = !this.mostraTextoAdvogado2;
    }
  }
}
