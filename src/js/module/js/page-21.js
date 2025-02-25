import { Calendar as FullCalendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';

export class MyCalendar {
  constructor() {
    this.calendarEl = document.querySelector('[data-calendar]');
    this.calendar = null;
  }

  get config() {
    return {
      plugins: [
        dayGridPlugin,
        timeGridPlugin,
        listPlugin,
        googleCalendarPlugin,
      ],
      initialView: 'dayGridMonth',
      locale: 'ja',
      timeZone: 'Asia/Tokyo',
      googleCalendarApiKey: '', 
      events: this.defaultEvents,
      headerToolbar: this.toolbarConfig,
      buttonText: { today: '今月' },
      dayCellContent: (arg) => arg.date.getDate(),
    };
  }

  get defaultEvents() {
    return [
      {
        googleCalendarId: '',
      },
    ];
  }

  get toolbarConfig() {
    return {
      left: 'title',
      center: '',
      right: 'prev,next,today',
    };
  }

  init() {
    if (!this.calendarEl) return;
    this.calendar = new FullCalendar(this.calendarEl, this.config);
    this.calendar.render();
  }
}

