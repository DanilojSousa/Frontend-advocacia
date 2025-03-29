import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmpresaEnum } from '../../../interface/dados-empresa';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Email } from '../../../interface/email';
import { EmailConfigEnum } from '../../../interface/email-config';
import { EnviaEmailService } from '../../../service/desenvolvedor/envia-email.service';

@Component({
  selector: 'app-contato',
  imports: [MatFormFieldModule, FormsModule, MatSelectModule, CommonModule, MatButtonModule,MatIconModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent implements OnInit{

  formattedPhone!: string;
  valida: boolean = false;
  email: Email = new Email();
  constructor(private enviaEmailService: EnviaEmailService){}
  ngOnInit(): void {
    
  }

  onEmail(myForm: NgForm){
    if(this.validarFormulario(myForm)){
      this.email.evmAssunto = myForm.value.assunto
      this.email.evmConteudo = myForm.value.mensagem
      this.email.evmDestinatario = myForm.value.email
      this.email.emaEmail = EmailConfigEnum.EMAIL
      this.email.emaHost = EmailConfigEnum.HOST
      this.email.emaPort = EmailConfigEnum.PORTA
      this.email.emaTlsProtocol = EmailConfigEnum.PROTOCOLO
      this.email.emaStarttls = EmailConfigEnum.STARTTLS
      this.email.emaSsl = EmailConfigEnum.SSL
      this.email.emaSenha = EmailConfigEnum.SENHA
      this.enviaEmailService.enviarEmail(this.email).subscribe({
        next:(res)=>{
          myForm.reset()
        }
      })
    }
    window.alert('Email enviado com sucesso!');
  }
  onWhatsapp(myForm: NgForm){
    if(this.validarFormulario(myForm)){
      const url =  "https://api.whatsapp.com/send?phone=55"+EmpresaEnum.WHATSAPP+"&text="+myForm.value.assunto+": "+ myForm.value.mensagem;
      window.open(url, '_blank')
    }
  }

  validarFormulario(myForm: NgForm): boolean{
    if(myForm.value.mensagem === ""
       || myForm.value.assunto === ""
       || myForm.value.email === ""
       || myForm.value.telfone === ""
       || myForm.value.nome === ""
    ){
      this.valida = true;
      return false;
    }
    this.valida = false;
    return true;
  }

  onPhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.formattedPhone = this.formatPhone(value);
  }

  formatPhone(phone: string): string {
    phone = phone.replace(/\D/g, '');
    if (phone.length <= 10) {
      return phone.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
      return phone.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }
  }

}
