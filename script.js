let s;
let a = prompt("Щоб дізнатися прогноз погоди, введіть день тижня:");
let hot = confirm("?");
let discount = 0.8;

switch (a) {
  case "понеділок":
    let price = 100;
    s = "У понеділок: тепло, +18" + hot ? price /*todo*/ : price;
    break;
  case "вівторок":
    s = "У вівторок: жарко, +25";
    break;
  case "середа":
    s = "У середу: дощ, +17";
    break;
  case "четвер":
    s = "У четвер: прохолодно, +10";
    break;
  case "п'ятниця":
    s = "У п'ятницю: хмарно, +15";
    break;
  case "субота":
    s = "У суботу: похолодало, 0";
    break;
  case "неділя":
    s = "У неділю: ще холодно, +4";
    break;
  default:
    s = "Вкажіть правильно день тижня";
}
alert(s);
