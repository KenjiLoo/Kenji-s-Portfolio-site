import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlappybirdComponent } from './flappybird/flappybird.component';

const routes: Routes = [
  { path:'', component: FlappybirdComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Minigame3RoutingModule { }
