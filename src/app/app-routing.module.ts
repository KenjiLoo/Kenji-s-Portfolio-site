import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path:'', component: HomepageComponent },
  { path: 'minigame1', loadChildren: () => import("./minigame1/minigame1.module").then((m) => m.Minigame1Module) },
  { path: 'minigame2', loadChildren: () => import("./minigame2/minigame2.module").then((m) => m.Minigame2Module) },
  { path: 'minigame3', loadChildren: () => import("./minigame3/minigame3.module").then((m) => m.Minigame3Module) },
  { path: 'minigame4', loadChildren: () => import("./minigame4/minigame4.module").then((m) => m.Minigame4Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
