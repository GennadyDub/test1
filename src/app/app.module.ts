import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './pages/notes/notes.component';
import { NoteEditComponent } from './pages/note-edit/note-edit.component';
import { RemindersComponent } from './pages/reminders/reminders.component';
import { TagsComponent } from './pages/tags/tags.component';

const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' }, // Редирект на страницу заметок
  { path: 'notes', component: NotesComponent }, // Список заметок
  { path: 'notes/edit/:id', component: NoteEditComponent }, // Редактирование заметки
  { path: 'notes/new', component: NoteEditComponent }, // Создание новой заметки
];
import { DxButtonModule, DxTextBoxModule, DxDateBoxModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    RemindersComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule, // Модуль для работы с браузером
    DxButtonModule, // Модуль для кнопок DevExtreme
    DxTextBoxModule, // Модуль для текстовых полей DevExtreme
    DxDateBoxModule // Модуль для даты DevExtreme
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }