function tdee() {
  let gender = $("#gender").val();
  let height = $("#height").val();
  let weight = $("#weight").val();
  let age = $("#age").val();
  let activitylevel = $("#activitylevel").val();
  let result = 10 * weight + (6.25 * 100 * height) / 100 - 5 * age;
  if (gender == "male") {
    result += 5;
  } else {
    result -= 161;
  }
  switch (activitylevel) {
    case "l":
      MaintenanceCalories = (result * (1.2 * 10)) / 10;
      break;
    case "lm":
      MaintenanceCalories = (result * (1.375 * 1000)) / 1000;
      break;
    case "m":
      MaintenanceCalories = (result * (1.55 * 100)) / 100;
      break;
    case "mh":
      MaintenanceCalories = (result * (1.725 * 1000)) / 1000;
      break;
    case "h":
      MaintenanceCalories = (result * (1.9 * 10)) / 10;
      break;
  }
  document.getElementById("bmr").innerHTML =
    "基礎代謝率(BMR)：" + result.toFixed(2);
  document.getElementById("tdee").innerHTML =
    "總熱量消耗(TDEE)：" + MaintenanceCalories.toFixed(2);
}