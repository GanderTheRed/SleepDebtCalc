function getSleepHours(day) {             //Function to return how many hours I slept each night.
    switch(day) {
      case "monday":
        return 6;
        break
      case "tuesday":
        return 7;
        break
      case "wednesday":
        return 8;
        break
      case "thursday":
        return 7.5;
        break;
      case "friday":
        return 12;
        break;
      case "saturday":
        return 10;
        break;
      case "sunday":
        return 7;
        break;
      default:
        return "value invalid";  
      };
  };
  
  function actualSleepHours() {         //Function to sum up my hours of sleep for the week.
    return getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");
  };
  
  const idealSleepHours = 56; //Variable for my ideal sleep hours a week (8 hours a day).
  const differenceSleepHours = actualSleepHours() - idealSleepHours; //A variable to make the following code more readable.
  
  function sleepDebt() {  // Main function that determines if you slept enough during the week or not.
    if (differenceSleepHours > 0) {
      return "You are sleeping more than enough! You are over sleeping by " + differenceSleepHours + " Hours.";}
      else if (differenceSleepHours < 0) {
      return "You aren't sleeping enough! You are under sleeping by " + differenceSleepHours + " Hours.";}
      else if (differenceSleepHours = 0) {
      return "You slept perfect!";}
  };
  
  console.log(sleepDebt()); //Execution to console.