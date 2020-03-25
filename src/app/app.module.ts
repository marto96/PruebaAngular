import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { VerComponent } from './pages/ver/ver.component';

import { ProcedimientoService } from './procedimiento.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent, AgregarComponent, VerComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProcedimientoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
