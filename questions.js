function getNextWeekend() {
  const today = new Date();
  let nextWeekendSaturday = new Date(today);

  nextWeekendSaturday.setDate(6);

  if (today.getDate() > 6) {
    nextWeekendSaturday.setMonth(nextWeekendSaturday.getMonth() + 1);
  }

  const dayOfWeek = nextWeekendSaturday.getDay();
  const daysToAdd = (6 - dayOfWeek + 7) % 7;
  nextWeekendSaturday.setDate(nextWeekendSaturday.getDate() + daysToAdd);

  const nextWeekendSunday = new Date(nextWeekendSaturday);
  nextWeekendSunday.setDate(nextWeekendSunday.getDate() + 1);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const saturdayString = nextWeekendSaturday.toLocaleDateString('en-US', options);
  const sundayString = nextWeekendSunday.toLocaleDateString('en-US', options);

  document.getElementById('next-weekend').innerHTML = 
    `The next 67 weekend(including this one) is:<br>
    ${saturdayString} and ${sundayString}.`;
}
