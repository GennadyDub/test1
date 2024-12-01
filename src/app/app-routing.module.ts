import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './pages/notes/notes.component';
import { RemindersComponent } from './pages/reminders/reminders.component';
import { TagsComponent } from './pages/tags/tags.component';

const routes: Routes = [
  { path: 'notes', component: NotesComponent },
  { path: 'reminders', component: RemindersComponent },
  { path: 'tags', component: TagsComponent },
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: '**', redirectTo: '/notes' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
