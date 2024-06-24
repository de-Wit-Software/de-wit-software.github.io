// https://stackoverflow.com/questions/38355157/is-there-a-method-to-convert-miliseconds-to-years-months-days-minutes-seconds-in
export function getTimeDiffString(
  start: Date,
  end: Date,
  labels: {
    and: string
    time: {
      year: string,
      years: string,
      month: string,
      months: string,
      day: string,
      days: string,
      hour: string,
      hours: string,
      minute: string,
      minutes: string,
    }
  },
  short: boolean = false
): string {
  
  const diff = end.getTime() - start.getTime();
  let seconds = Math.floor(diff / 1000),
  minutes = Math.floor(seconds / 60),
  hours   = Math.floor(minutes / 60),
  days    = Math.floor(hours / 24),
  months  = Math.floor(days / 30),
  years   = Math.floor(days / 365);

  minutes %= 60;
  hours %= 24;
  days %= 30;
  months %= 12;
  if(!short) {
    return `${years} ${years === 1 ? labels.time.year : labels.time.years}, ${months} ${months === 1 ? labels.time.month : labels.time.months}, ${days} ${days === 1 ? labels.time.day : labels.time.days}, ${hours} ${hours === 1 ? labels.time.hour : labels.time.hours} ${labels.and} ${minutes} ${minutes === 1 ? labels.time.minute : labels.time.minutes}`
  } else {
    if(days > 15) {
      months += 1;
    }
    const yearsString = years !== 0 ? `${years} ${years === 1 ? labels.time.year : labels.time.years}, ` : ''
    return `${yearsString}${months} ${months === 1 ? labels.time.month : labels.time.months}`
  }
}

export function getTimeString(
  date: Date, 
  labels: {
    date: {
      january: string
      february: string
      march: string
      april: string
      may: string
      june: string
      july: string
      august: string
      september: string
      october: string
      november: string
      december: string
      now: string;
    }
  },
  includeDay: boolean = false
) {
  const now = new Date();
  if(
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDay() === now.getDay()
  ) {
    return labels.date.now;
  }

  let label;
  switch(date.getMonth()) {
    case 0: { label = labels.date.january; break; }
    case 1: { label = labels.date.february; break; }
    case 2: { label = labels.date.march; break; }
    case 3: { label = labels.date.april; break; }
    case 4: { label = labels.date.may; break; }
    case 5: { label = labels.date.june; break; }
    case 6: { label = labels.date.july; break; }
    case 7: { label = labels.date.august; break; }
    case 8: { label = labels.date.september; break; }
    case 9: { label = labels.date.october; break; }
    case 10: { label = labels.date.november; break; }
    case 11: { label = labels.date.december; break; }
  }
  if(!includeDay) {
    return `${label} ${date.getFullYear()}`
  } else {
    return `${label} ${date.getDate()}, ${date.getFullYear()}`
  }
}