import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArticleComponent } from './article/article.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ProfileComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
