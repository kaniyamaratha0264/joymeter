import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoymeterboardComponent } from './pages/joymeterboard/joymeterboard.component';

const routes: Routes = [
  {
    path:'',
    component: JoymeterboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
