
function launch(app,params){
 let url='';
 if(app==='phonepe') url='phonepe://pay?'+params;
 if(app==='gpay') url='tez://upi/pay?'+params;
 if(app==='bhim') url='upi://pay?'+params;
 window.location.href=url;
}
