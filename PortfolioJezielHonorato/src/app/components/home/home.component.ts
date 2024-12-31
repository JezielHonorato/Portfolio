import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  copyToClipboard(content: HTMLElement) {
    const text = content.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`Texto copiado: ${text}`);
      })
      .catch((err) => {
        console.error('Erro ao copiar o texto: ', err);
      });
  }
}
