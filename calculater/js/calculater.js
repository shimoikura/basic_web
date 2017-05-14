$(document).ready(function(){
  var i = 0;
  var num1Array = new Array();  //配列の作成
  var num2Array = new Array();
  var cal_class;
  num2Array[0] = [];
  $(".calculater-bottom td").on('click',function(){
     cal_class = $(this).attr("class");　// classの取得
    if (cal_class == "number")
    {
      
      $("#a").text(i);
      num1Array[i+2] = $(this).attr("id");  //idの値取得
      num2Array[i+1] = num2Array[i] + num1Array[i+2];
      $("#first-num").text(num2Array[i+1]);
      i++;
    }
    else {
      cal_class = $(this).attr("id");　// classの取得
      $("#arithmatic_text").text(cal_class);
    }
  });
});
