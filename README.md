# caspex_walmart

# command  for run 
```1. tsc groupEvent.ts``` 
```2. node groupEvent.js```

# output 
```{
  "A": [
    {
      "startTime": "2022-01-01 10:00:00",
      "endTime": "2022-01-01 10:00:05",
      "events": [
        {
          "key": "A",
          "eventFireDateTime": "2022-01-01 10:00:00",
          "status": "START",
          "value": "Event A1"
        },
        {
          "key": "A",
          "eventFireDateTime": "2022-01-01 10:00:05",
          "status": "COMPLETED",
          "value": "Event A2"
        }
      ]
    }
  ],
  "B": [
    {
      "startTime": "2022-01-01 10:00:10",
      "endTime": "2022-01-01 10:00:15",
      "events": [
        {
          "key": "B",
          "eventFireDateTime": "2022-01-01 10:00:10",
          "status": "START",
          "value": "Event B1"
        },
        {
          "key": "B",
          "eventFireDateTime": "2022-01-01 10:00:15",
          "status": "FAILED",
          "value": "Event B2"
        }
      ]
    }
  ],
  "C": [
    {
      "startTime": "2022-01-01 10:00:20",
      "endTime": "2022-01-01 10:00:20",
      "events": [
        {
          "key": "C",
          "eventFireDateTime": "2022-01-01 10:00:20",
          "status": "START",
          "value": "Event C1"
        }
      ]
    },
    {
      "startTime": "2022-01-01 10:00:25",
      "endTime": "2022-01-01 10:00:30",
      "events": [
        {
          "key": "C",
          "eventFireDateTime": "2022-01-01 10:00:25",
          "status": "START",
          "value": "Event C2"
        },
        {
          "key": "C",
          "eventFireDateTime": "2022-01-01 10:00:30",
          "status": "COMPLETED",
          "value": "Event C3"
        }
      ]
    }
  ],
  "D": [
    {
      "startTime": "2022-01-01 10:00:35",
      "endTime": "2022-01-01 10:00:35",
      "events": [
        {
          "key": "D",
          "eventFireDateTime": "2022-01-01 10:00:35",
          "status": "START",
          "value": "Event D1"
        }
      ]
    }
  ]
}```
