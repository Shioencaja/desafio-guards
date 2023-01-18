import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AlumnosComponent],
  imports: [CommonModule, SharedModule],
})
export class AlumnosModule {}
