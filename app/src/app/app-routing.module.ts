import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from '../app/splash/splash.component';
import { QuestionsComponent } from '../app/questions/questions.component';

const routes: Routes = [
  { path: 'splash', component: SplashComponent },
  { path: 'questions', component: QuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
