function getNextWeekend() {
  const today = new Date();
  let nextWeekendSaturday = new Date(today);

  // Set the day to the 6th of the current month
  nextWeekendSaturday.setDate(6);

  // Check if the current date has already passed the 6th of the month.
  // If so, move to the next month's 6th.
  if (today.getDate() > 6) {
    nextWeekendSaturday.setMonth(nextWeekendSaturday.getMonth() + 1);
  }

  // Find the next Saturday, starting from the 6th
  // JavaScript's getDay() returns 0 for Sunday, 1 for Monday, ..., 6 for Saturday
  const dayOfWeek = nextWeekendSaturday.getDay();
  const daysToAdd = (6 - dayOfWeek + 7) % 7; // Number of days to add to get to Saturday
  nextWeekendSaturday.setDate(nextWeekendSaturday.getDate() + daysToAdd);

  // Calculate the Sunday date based on Saturday
  const nextWeekendSunday = new Date(nextWeekendSaturday);
  nextWeekendSunday.setDate(nextWeekendSunday.getDate() + 1);

  // Format the dates for display
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const saturdayString = nextWeekendSaturday.toLocaleDateString('en-US', options);
  const sundayString = nextWeekendSunday.toLocaleDateString('en-US', options);

  // Display the result on the webpage
  document.getElementById('next-weekend').innerHTML = 
    `The next 67 weekend(including this one) is:<br>
    Saturday, ${saturdayString} and Sunday, ${sundayString}.`;
}
