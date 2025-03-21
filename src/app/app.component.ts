import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Administrar', url: '/folder/Administrar', icon: 'settings' },
    { title: 'Cobrar', url: '/folder/Cobrar', icon: 'cash' },
    { title: 'Reimprimir', url: '/folder/Reimprimir', icon: 'print' },
    { title: 'Estadísticas', url: '/folder/Estadisticas', icon: 'bar-chart' },
    { title: 'Configuración', url: '/folder/Configuracion', icon: 'cog' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
