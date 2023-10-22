function groupEvents(events) {
    var groupedEvents = {};
    for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
        var event_1 = events_1[_i];
        if (!groupedEvents[event_1.key]) {
            groupedEvents[event_1.key] = [];
        }
        if (event_1.status === "START") {
            groupedEvents[event_1.key].push({
                startTime: event_1.eventFireDateTime,
                endTime: event_1.eventFireDateTime,
                events: [event_1],
            });
        }
        else if (event_1.status === "COMPLETED" || event_1.status === "FAILED") {
            var spans = groupedEvents[event_1.key];
            if (spans.length > 0) {
                var lastSpan = spans[spans.length - 1];
                lastSpan.endTime = event_1.eventFireDateTime;
                lastSpan.events.push(event_1);
            }
        }
    }
    return groupedEvents;
}
var events = [
    { key: "A", eventFireDateTime: "2022-01-01 10:00:00", status: "START", value: "Event A1" },
    { key: "A", eventFireDateTime: "2022-01-01 10:00:05", status: "COMPLETED", value: "Event A2" },
    { key: "B", eventFireDateTime: "2022-01-01 10:00:10", status: "START", value: "Event B1" },
    { key: "B", eventFireDateTime: "2022-01-01 10:00:15", status: "FAILED", value: "Event B2" },
    { key: "C", eventFireDateTime: "2022-01-01 10:00:20", status: "START", value: "Event C1" },
    { key: "C", eventFireDateTime: "2022-01-01 10:00:25", status: "START", value: "Event C2" },
    { key: "C", eventFireDateTime: "2022-01-01 10:00:30", status: "COMPLETED", value: "Event C3" },
    { key: "D", eventFireDateTime: "2022-01-01 10:00:35", status: "START", value: "Event D1" },
];
var result = groupEvents(events);
console.log(JSON.stringify(result, null, 2));
