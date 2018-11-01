import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ContactComponent } from './contact/contact.component';
import { BookComponent } from './book/book.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { FunComponent } from './fun/fun.component';
import { QuestionComponent } from './question/question.component';
import { HelloComponent } from './hello/hello.component';
import { TictacDirective } from './tictac.directive';
import { BigBookPictureDirective } from './big-book-picture.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SkillsComponent,
    ExperiencesComponent,
    ContactComponent,
    BookComponent,
    HobbiesComponent,
    FunComponent,
    QuestionComponent,
    HelloComponent,
    TictacDirective,
    BigBookPictureDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
