import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatButtonToggleModule, MatInputModule, MatCardModule, MatButtonModule],
  exports: [MatToolbarModule, MatButtonToggleModule, MatInputModule, MatCardModule, MatButtonModule],
})
export class AppMaterialModule { }
