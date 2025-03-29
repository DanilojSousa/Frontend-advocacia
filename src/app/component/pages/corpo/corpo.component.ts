import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { RodapeComponent } from "../rodape/rodape.component";
import { ServicosComponent } from "./servicos/servicos.component";
import { SobreComponent } from "./sobre/sobre.component";
import { SobreAssociadosComponent } from "./sobre-associados/sobre-associados.component";
import { ContatoComponent } from "./contato/contato.component";

@Component({
  selector: 'app-corpo',
  imports: [HomeComponent, RodapeComponent, ServicosComponent, SobreComponent, SobreAssociadosComponent, ContatoComponent],
  templateUrl: './corpo.component.html',
  styleUrl: './corpo.component.css'
})
export class CorpoComponent {

}
