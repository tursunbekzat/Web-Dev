/*Create a date
 */
let date1 = new Date("2012-02-20T03:12");
/** show a week day*/
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 3);

  /*European weekday */
  function getLocalDay(date2) {

    let day1 = date2.getDay();
  
    if (day1 == 0) { 
      day1 = 7;
    }
  
    return day1;
  }
  /*Which day of month was many days ago? */
  function getDateAgo(date3, days2) {
    let dateCopy = new Date(date3);
  
    dateCopy.setDate(date.getDate() - days2);
    return dateCopy.getDate();
  }
  
  let date3 = new Date(2015, 0, 2);
  /** Last day of month?*/
  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  /** How many seconds have passed today?*/
  function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
  }

  /** How many seconds till tomorrow?*/
  function getSecondsToTomorrow() {
    let now = new Date();
  
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now; 
    return Math.round(diff / 1000); 
  }
  /** */
  