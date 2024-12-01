import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  notes = [
    { id: 1, title: 'Первая заметка', content: 'Содержимое первой заметки' },
    { id: 2, title: 'Вторая заметка', content: 'Содержимое второй заметки' }
  ];

  constructor(private router: Router) { }

  createNewNote(): void {
    this.router.navigate(['/notes/new']);
  }

  editNote(noteId: number): void {
    this.router.navigate(['/notes/edit', noteId]);
  }

  deleteNote(noteId: number): void {
    this.notes = this.notes.filter(note => note.id !== noteId);
  }
}