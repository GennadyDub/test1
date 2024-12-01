import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  noteId: number | null = null;
  note = { title: '', content: '', date: new Date() }; // Заглушка для данных заметки

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.noteId = id ? +id : null; // Если есть ID, редактируем, иначе создаём новую заметку
      if (this.noteId) {
        this.loadNote();
      }
    });
  }

  loadNote(): void {
    // Здесь вы можете загрузить заметку по ID из сервиса или API
    this.note = { title: 'Пример заметки', content: 'Содержимое', date: new Date() };
  }

  saveNote(): void {
    if (this.noteId) {
      // Логика обновления заметки
      console.log('Заметка обновлена:', this.note);
    } else {
      // Логика создания новой заметки
      console.log('Новая заметка создана:', this.note);
    }
    this.router.navigate(['/notes']); // Переход обратно к списку заметок
  }

  cancel(): void {
    this.router.navigate(['/notes']); // Отмена и возврат
  }
}