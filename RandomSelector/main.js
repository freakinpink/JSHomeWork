$(function(){
    $("input").on("click",function(){
        //alert("Hi");
        //$("h1").text("hello")
        var numberOfListItem = $("#choices li").length;
        var ramdomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("#choices li").eq(ramdomChildNumber).text())
        //找到img元件
        //設定img元件的src屬性 -->對應元件的title值
        $("img").attr("src",$("choices li").eq(ramdomChildNumber).attr("title"));
    });
});