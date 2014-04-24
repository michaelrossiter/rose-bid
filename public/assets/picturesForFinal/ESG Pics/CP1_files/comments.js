function yorumekle(id,adresi){
var rumuzu = document.getElementById('rumuz').value;
var yorumu = document.getElementById('yorum').value;

rumuzu= rumuzu.replace(/^\s+|\s+$/, '');
yorumu= yorumu.replace(/^\s+|\s+$/, '');

if( rumuzu.length==0 || yorumu.length==0)
return;

$.post("/yorumekle", { id: id, rumuz: rumuzu , yorum: yorumu} ,
function(){
document.getElementById('rumuz').value="";
document.getElementById('yorum').value="";
$(".ymesaj").fadeIn("slow");
$(".ymesaj").delay(3000).fadeOut(3000);
$("#frmyorumekle").fadeOut("slow");
$("#frmyorumekle").delay(2000).fadeIn("slow");
});

}
