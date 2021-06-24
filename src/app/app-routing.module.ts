import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UfComponent, DseiComponent, TiComponent, CoiabComponent, TribeComponent } from './pages';
const routes: Routes = [
  { path: "", redirectTo: "/uf", pathMatch: "full" },
  { path: "uf", component: UfComponent },
  { path: "dseis", component: DseiComponent },
  { path: "povos", component: TribeComponent },
  { path: "tis", component: TiComponent },
  { path: "coiab", component: CoiabComponent },
  { path: "*", component: UfComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
