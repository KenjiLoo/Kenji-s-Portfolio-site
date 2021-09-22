import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrexrunComponent } from './trexrun/trexrun.component';

const routes: Routes = [
  { path:'', component: TrexrunComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Minigame2RoutingModule { }
