import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AgregarComponent } from "./pages/agregar/agregar.component";
import { VerComponent } from "./pages/ver/ver.component";

const routes: Routes = [
  {
    path: 'pages/agregar',
    component: AgregarComponent
  },
  {
    path: 'pages/ver',
    component: VerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
