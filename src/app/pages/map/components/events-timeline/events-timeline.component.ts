import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TimelineEvent } from 'src/app/schema/timeline-event';

@Component({
  selector: 'events-timeline',
  templateUrl: './events-timeline.component.html',
  styleUrls: ['./events-timeline.component.scss']
})
export class EventsTimelineComponent implements OnChanges {

  @Input()
  events: TimelineEvent[] = [];

  dateFrom: Date;
  dateTill: Date;

  constructor() { }

  ngOnChanges() {
    if (this.events) this.updateTimeline()
  }

  updateTimeline() {

    const [min,max] = this.events.reduce((acc, event) => {
      return [
        acc[0] ? Math.min(event.date.getTime(), acc[0]) : event.date,
        acc[0] ? Math.max(event.date.getTime(), acc[0]) : event.date
      ];
    }, [this.events[0].date.getTime(), this.events[0].date.getTime()])

    this.dateFrom = new Date(min);
    this.dateTill = new Date(max);
  }

}
