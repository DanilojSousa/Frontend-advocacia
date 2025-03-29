import { Component, Inject, inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { EmpresaEnum } from '../../../../interface/dados-empresa';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-servico-dialog',
  imports: [MatDialogModule, MatIconModule],
  templateUrl: './servico-dialog.component.html',
  styleUrl: './servico-dialog.component.css'
})
export class ServicoDialogComponent implements OnInit {

  readonly dialogRef = inject(MatDialogRef<ServicoDialogComponent>);
  constructor(@Inject(MAT_DIALOG_DATA) public data: { index: number } ){}

  ngOnInit(): void {
    
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }

  formataWhatsapp(texto: string){
    const url =  "https://api.whatsapp.com/send?phone=55"+EmpresaEnum.WHATSAPP+"&text=Gostaria de falar sobre "+texto+", podem me ajudar?";
     window.open(url, '_blank');
  }

  close(){
    this.dialogRef.close();
  }
}
