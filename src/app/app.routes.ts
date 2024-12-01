import { Routes } from '@angular/router';
import { NotesComponent } from './pages/notes/notes.component';
import { RemindersComponent } from './pages/reminders/reminders.component';
import { TagsComponent } from './pages/tags/tags.component';

export const routes: Routes = [
  { path: 'notes', component: NotesComponent },
  { path: 'reminders', component: RemindersComponent },
  { path: 'tags', component: TagsComponent },
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
];