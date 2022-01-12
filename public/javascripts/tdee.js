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

// document.getElementById("btn").addEventListener("click", function () {
//   tdee();
//   document.getElementById("bmr").innerHTML =
//     "基礎代謝率(BMR)：" + result.toFixed(2);
//   document.getElementById("tdee").innerHTML =
//     "總熱量消耗(TDEE)：" + MaintenanceCalories.toFixed(2);
// });

// var result;
// var MaintenanceCalories;
// function Calculate() {
//   var gender = document.getElementById("gender").value;
//   var weight = parseFloat(document.getElementById("weight").value);
//   var height = parseFloat(document.getElementById("height").value);
//   var age = parseFloat(document.getElementById("age").value);
//   var activitylevel = document.getElementById("activitylevel").value;
//   if (gender == "male") {
//     var val1 = 13.7 * weight;
//     var val2 = 5 * height;
//     var val3 = 6.8 * age;
//     result = (66 + val1 + val2 - val3) * 0.85;
//     var val4 = activitylevel;
//   } else if (gender == "female") {
//     var val1 = 9.6 * weight;
//     var val2 = 1.8 * height;
//     var val3 = 4.7 * age;
//     result = (655 + val1 + val2 - val3) * 0.85;
//     var val4 = activitylevel;
//   }
//   switch (val4) {
//     case "l":
//       MaintenanceCalories = result * 1.2;
//       break;
//     case "lm":
//       MaintenanceCalories = result * 1.375;
//       break;
//     case "m":
//       MaintenanceCalories = result * 1.55;
//       break;
//     case "mh":
//       MaintenanceCalories = result * 1.725;
//       break;
//     case "h":
//       MaintenanceCalories = result * 1.9;
//       break;
//     default:
//       "m";
//   }
// }
// document
//   .getElementsByTagName("button")[0]
//   .addEventListener("click", function () {
//     Calculate();
//     document.getElementById("lblResult").innerHTML =
//       "雿删��抅蝷𦒘誨雓萘���� " + result.toFixed(2);
//     document.getElementById("lblResult2").innerHTML =
//       "瘥𤩺𠯫蝮賣���㛖�梢�䔋DEE嚗� " + MaintenanceCalories.toFixed(2);
//   });
