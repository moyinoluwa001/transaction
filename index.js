
function action()
{
var p = document.getElementById('number').value;
var a = 1111;
if(p==a)
{
  document.getElementById('demo').innerHTML = 'please choose transcation';
  document.getElementById('options12').style.display = "block";
}
else
{
  document.getElementById('demo').innerHTML = 'invalid pin'
}
}
function myfunction(val){
   m = 'saving,current'
  if(val==1 || 2)
  {
    document.getElementById('demo1').innerHTML = 'please select';
    
    document.getElementById('myfunction').style.display = 'block';



  }
}
function youfunction(val){
   var m = document.getElementById('amount').value;
   var m = 100000;
   if(m==1 || 2)
   {
    document.getElementById('demo2').innerHTML = 'enter amount';
    document.getElementById('display').style.display = "block";
    
  }
  else
  {
    document.getElementById('demo2').innerHTML = 'invalid amount'
    document.getElementById('display').style.display = "block";
  }
}

function web(){
  var p = document.getElementById('amount').value;
  var m = 100000;
  if(m==p)
  {
   document.getElementById('demo2').innerHTML = 'sucessful';
   document.getElementById('display').style.display = "block";
   
 }
 else
 {
   document.getElementById('demo2').innerHTML = 'invalid amount'
   document.getElementById('display').style.display = "block";
 }
}
function web(){
  var p = document.getElementById('amount').value;
  var m = 100000;
  if(p<m)
  {
   document.getElementById('demo2').innerHTML = 'sucessful';
   document.getElementById('display').style.display = "block";
   
 }
 else
 {
   document.getElementById('demo2').innerHTML = 'invalid amount'
   document.getElementById('display').style.display = "block";
 }
}

