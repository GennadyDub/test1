import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Reminder {
  id: number;
  text: string;
  date: string;
}

@Component({
  selector: 'app-reminders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent {
  reminders: Reminder[] = [];
  newReminder: Reminder = { id: 0, text: '', date: '' };

  addReminder() {
    this.newReminder.id = Date.now();
    this.reminders.push({ ...this.newReminder });
    this.newReminder = { id: 0, text: '', date: '' };
  }

  deleteReminder(id: number) {
    this.reminders = this.reminders.filter(reminder => reminder.id !== id);
  }
}
