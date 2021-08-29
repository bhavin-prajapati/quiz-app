import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SplashComponent } from './splash/splash.component';
import { QuestionsComponent } from './questions/questions.component';

@NgModule({
  declarations: [
    SplashComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [SplashComponent]
})
export class AppModule { }
