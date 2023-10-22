interface Event {
    key: string;
    eventFireDateTime: string;
    status: "COMPLETED" | "FAILED" | "START";
    value: any;
  }
  

interface Span {
  startTime: string;
  endTime: string;
  events: Event[];
}

type GroupedEvents = Record<string, Span[]>;

function groupEvents(events: Event[]): GroupedEvents {
  const groupedEvents: GroupedEvents = {};

  for (const event of events) {
    if (!groupedEvents[event.key]) {
      groupedEvents[event.key] = [];
    }

    if (event.status === "START") {
      groupedEvents[event.key].push({
        startTime: event.eventFireDateTime,
        endTime: event.eventFireDateTime,
        events: [event],
      });
    } else if (event.status === "COMPLETED" || event.status === "FAILED") {
      const spans = groupedEvents[event.key];
      if (spans.length > 0) {
        const lastSpan = spans[spans.length - 1];
        lastSpan.endTime = event.eventFireDateTime;
        lastSpan.events.push(event);
      }
    }
  }

  return groupedEvents;
}

const events: any = [
  { key: "A", eventFireDateTime: "2022-01-01 10:00:00", status: "START", value: "Event A1" },
  { key: "A", eventFireDateTime: "2022-01-01 10:00:05", status: "COMPLETED", value: "Event A2" },
  { key: "B", eventFireDateTime: "2022-01-01 10:00:10", status: "START", value: "Event B1" },
  { key: "B", eventFireDateTime: "2022-01-01 10:00:15", status: "FAILED", value: "Event B2" },
  { key: "C", eventFireDateTime: "2022-01-01 10:00:20", status: "START", value: "Event C1" },
  { key: "C", eventFireDateTime: "2022-01-01 10:00:25", status: "START", value: "Event C2" },
  { key: "C", eventFireDateTime: "2022-01-01 10:00:30", status: "COMPLETED", value: "Event C3" },
  { key: "D", eventFireDateTime: "2022-01-01 10:00:35", status: "START", value: "Event D1" },
];

const result = groupEvents(events);
console.log(JSON.stringify(result ,null, 2))
