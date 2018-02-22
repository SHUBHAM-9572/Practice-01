var discount1={
percent1:(disamt1)=>(((1700/100)*disamt1)-1700)};
var discount2={
percent2:(disamt2)=>(((1600/100)*disamt2)-1600)
};

var cust_dtl=[{cid:1,name:'abc',billamt:1500},
	          {cid:2,name:'bcd',billamt:1600}, 
			  {cid:3,name:'xyz',billamt:1700}];
			  
for(var key in cust_dtl)
{
	console.log("CUST-ID ::"+cust_dtl[key].cid + "  " +
	            "NAME ::"+cust_dtl[key].name + "  " +
				"BILL-AMOUNT ::"+cust_dtl[key].billamt);
}	

console.log("------------------------------------------------------");
function solvediscount1(disamt1)
{
if (cust_dtl[key].billamt = 1700 )
{
	console.log(
	"CONGRATULATIONS !!! "+" "+"YOU GOT 40% DISCOUNT ON YOUR BILL AMOUNT-1700"
	);
	console.log("TOTAL AMOUNT IS:-"+discount1.percent1(disamt1));
}
}
console.log("------------------------------------------------------");
function solvediscount2(disamt2)
{
console.log("------------------------------------------------------");
if(cust_dtl[key].billamt = 1600)
{
	console.log(
	"CONGRATULATIONS !!! "+" "+"YOU GOT 20% DISCOUNT ON YOUR BILL AMOUNT-1600");
	console.log("TOTAL AMOUNT IS:-"+discount2.percent2(disamt2));
}	
console.log("-----------------------------------------------------");
if(cust_dtl[key].billamt = 1500) 
{
	console.log(
	"SORRY !!! "+" "+"YOU GOT NO DISCOUNT ON YOUR BILL AMOUNT-1500");
}
}


solvediscount1(40);
solvediscount2(20);
			  