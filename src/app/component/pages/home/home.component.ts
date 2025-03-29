import { Component, HostListener, NgZone, OnInit, Renderer2 } from '@angular/core';
import { EmpresaEnum } from '../../interface/dados-empresa';
import { debounceTime, Subject } from 'rxjs';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [MatMenuModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  instagran = EmpresaEnum.INSTAGRAN
  toggle = false;
  mostrarMenuFixo = false;
  url = "https://api.whatsapp.com/send?phone=55"+EmpresaEnum.WHATSAPP+"&text=Olá, preciso de informações.";

  constructor(private renderer: Renderer2, private zone: NgZone){
    this.scrollSubject.pipe(
      debounceTime(100)  // Atraso de 100ms entre as atualizações
    ).subscribe(() => {
      this.checkScrollPosition();
    });
  }
  ngOnInit(): void {
    this.verificarTamanhoTela();
  }

  @HostListener('window:resize', [])
  verificarTamanhoTela(): void {
    this.toggle = window.innerWidth <= 648; // Ativa o menu toggle para telas menores que 768px
  }

  private scrollSubject: Subject<void> = new Subject();

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrollSubject.next();  // Aciona a verificação de scroll
  }

  // Função para verificar a posição do scroll
  checkScrollPosition(): void {
    const scrollPosition = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const OFFSET = 100; // Margem para ativação

    this.mostrarMenuFixo = scrollPosition > OFFSET && scrollPosition < scrollHeight - OFFSET;
  }

  formataWatssap(): string{
    return this.url;
  }
  formataWatssapButton(){
    window.open(this.url, '_blank');
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      this.smoothScroll(element, 1000); // 1000ms (1 segundo) para ajustar a velocidade
    }
 }
  smoothScroll(target: HTMLElement, duration: number) {
    const startPosition = window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top;
    const startTime = performance.now();
  
    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const run = this.ease(elapsedTime, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (elapsedTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    };
  
    requestAnimationFrame(animateScroll);
  }
  
  ease(t: number, b: number, c: number, d: number) {
    // Easing function for smoother scrolling
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  
}
