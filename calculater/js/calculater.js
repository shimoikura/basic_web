$(document).ready(function(){
  var i = 0;   //THE FIRST NUMBER配列の作成用
  var k = 0;   //THE SECOND NUMBER配列の作成用
  var num1Array = new Array();  //THE FIRST NUMBER用配列の作成
  var num2Array = new Array(); //THE FIRST NUMBER用配列の作成
  var num3Array = new Array(); //THE SECOND NUMBER用配列の作成
  var num4Array = new Array(); //THE SECOND NUMBER用配列の作成
  var num1;
  var num2;
  var cal_id;
  var cal_class;
  num2Array[0] = [];
  num4Array[0] = [];
  $(".calculater-bottom td").on('click',function(){
     cal_class = $(this).attr("class");　// classの取得
    if ((cal_class == "number" ) && ($.isEmptyObject(cal_id) == true)){
      num1Array[i+2] = $(this).attr("id");  //idの値取得
      num2Array[i+1] = num2Array[i] + num1Array[i+2];
      num1 = num2Array[i+1];
      $("#first-num").text(num1);
      i++;
    }
    else if ((cal_class == "arithmatic") && ($.isEmptyObject(num1) == false)){
      cal_id = $(this).attr("id");　// classの取得
      $("#arithmatic_text").text(cal_id);
    }
    else if ((cal_class == "number") && ($.isEmptyObject(cal_id) == false)) {
      num3Array[k+2] = $(this).attr("id");  //idの値取得
      num4Array[k+1] = num4Array[k] + num3Array[k+2];
      num2 = num4Array[k+1]
      $("#second-num").text(num2);
      k++;
    }
    else if ((cal_class == "arithmatic") && ($.isEmptyObject(num1) == true)) {
      $("#first-num").text("★Please enter !");
    }
    else if (cal_class == "result") {
      num2Array[0] = [];
      num4Array[0] = [];
      num1 = "";
      num2 = "";
      i = 0;
      k = 0;
      cal_id = "";
      $("#first-num").text("");
      $("#arithmatic_text").text("");
      $("#second-num").text("");
      $("#enter_text").text("");
    }
    else {
      $("#first-num").text("禁止");
      $("#arithmatic_text").text("禁止");
      $("#second-num").text("禁止");
    }

    //HERE button click
    $("#enter_button").click(function(){
      if (cal_id == "+") {
        var result = parseInt(num1) + parseInt(num2);
        $("#enter_text").text(result);
      }
      else if (cal_id == "-") {
        var result = num1 - num2;
        $("#enter_text").text(result);
      }
      else if (cal_id == "×") {
        var result = num1 * num2;
        $("#enter_text").text(result);
      }
      else if (cal_id == "÷") {
        var result = num1 / num2;
        $("#enter_text").text(result);
      }
    });
  });
});
