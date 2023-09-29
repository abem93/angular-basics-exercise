import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArticleComponent } from './article/article.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
