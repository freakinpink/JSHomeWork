var topic =[
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性"
];
var startDate = new Date();
function setMonthAdnDay(startMonth, startDay) {
    //把輸入的日期變成javascript需要的日期時間格式
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
setMonthAdnDay(2,21);