import { Component } from '@angular/core';
import { EmpresaEnum } from '../../interface/dados-empresa';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-rodape',
  imports: [MatIconModule],
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css'
})
export class RodapeComponent {

   url = "https://api.whatsapp.com/send?phone=5548984736545";
   empresa = EmpresaEnum

   formataWatssap(): string{
    return "https://api.whatsapp.com/send?phone=55"+EmpresaEnum.WHATSAPP+"&text=Olá, preciso de informações.";
  }
}
