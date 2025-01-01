import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  copyContact(content: HTMLElement) {
    const parent = content.closest('.content-social-media');
    if (!parent) return;

    const text = content.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        parent.classList.add('active');
        content.innerText = 'copiado para a área de transferência';
        setTimeout(() => {
          parent.classList.remove('active');
          content.innerText = text;
        }, 2000);
      })
      .catch((err) => {
        console.error('Erro ao copiar o texto: ', err);
      });
  }
}
