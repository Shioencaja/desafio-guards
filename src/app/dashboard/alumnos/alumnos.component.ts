import { Component } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent {
  users: any;
  constructor(private alumnosService: AlumnosService) {
    this.alumnosService.getAlumnos().subscribe((data) => {
      this.users = data;
    });
  }
}
