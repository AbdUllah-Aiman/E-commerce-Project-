
let Wallet=document.getElementsByClassName("wallet")[0]
let All_product=document.getElementsByClassName("allproduct")[0]
let TrendName=document.getElementsByClassName("TrendName")[0]
let TrendNumber=document.getElementsByClassName("TrendNumber")[0]
let LessDemandName=document.getElementsByClassName("lessorderName")[0]
let LessDemandNum=document.getElementsByClassName("lessorderNumber")[0]
let collapsed_button = document.getElementsByClassName("btn-collapse-sidebar")[0];
let btn_show_sidebar=document.getElementById("toggle-sidebar")
let side_bar = document.getElementById("sidebar");

collapsed_button.addEventListener("click", function () {
    side_bar.classList.toggle("active");
    side_bar.classList.toggle("col-lg-1");
    side_bar.classList.toggle("col-lg-2");
    content.classList.toggle("col-lg-10");
    content.classList.toggle("col-lg-11");
    });
    
    /*make btn to show nav side bar in small screens */
    btn_show_sidebar.addEventListener("click",function(){
    side_bar.classList.toggle("show-nav");
    side_bar.classList.remove("col-lg-2");
    side_bar.classList.add("fixed-width");
    content.classList.toggle("col-lg-10");
    })



/*----------------------------------------------------------Get Object Product Statictics-------------------------------------------*/
let Prod_Stats=JSON.parse(localStorage.getItem("Prod_Stats"))
let prod_name=Prod_Stats.productQuantityData.map(item => item.productname)
let prod_quantity=Prod_Stats.productQuantityData.map(item => item.productQuantity)
let prod_No=Prod_Stats.No_Of_Product
/*----------------------------------------------------------Get Object Order Statictics-------------------------------------------*/
let OrderStat=JSON.parse(localStorage.getItem("OrderStat"))
let TrendPrdName=OrderStat.TrendOrder.Name
let TrendPrdQtn=OrderStat.TrendOrder.quantity
let DemandeOrder=OrderStat.MostOrderedProduct.quantity
let productName=OrderStat.MostOrderedProduct.productName

let Seller_Wallet=OrderStat.wallet
let LowDemand_Name=OrderStat.LessOrderDemand.productname
let LowDemand_No=OrderStat.LessOrderDemand.quantity
/*------------------------------------------------------Assign Card Content----------------------------------------------------------------- */
Wallet.innerHTML=Seller_Wallet+" EGP"
All_product.innerHTML=prod_No
TrendName.innerHTML=TrendPrdName
TrendNumber.innerHTML=TrendPrdQtn+" times"
LessDemandName.innerHTML=LowDemand_Name
LessDemandName.classList.add("small")
if(LowDemand_No==0){
    LessDemandNum.innerHTML="Not Order Yet"
}   
else{
    LessDemandNum.innerHTML=LowDemand_No
}
/*----------------------------------------------------Draw Charts-----------------------------------------------------------------------*/ 



var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: productName,
        datasets: [{
            label: 'Most Ordered Product',
            data: DemandeOrder,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(200, 159, 64, 1)',
                'rgba(150, 100, 210, 1)',
                'rgba(255, 120, 160, 1)',
                'rgba(120, 160, 105, 1)',
            ],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        height: 1000, 
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
    }
});

var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: prod_name,
        datasets: [{
            label: 'Product Quantity Chart',
            data: prod_quantity,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(200, 159, 64, 1)',
                'rgba(150, 100, 210, 1)',
                'rgba(255, 120, 160, 1)',
                'rgba(120, 160, 105, 1)',
            ],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: false,
                min: 0, // Set the minimum value for the x-axis
            },
            y: {
                beginAtZero: true,
            }
        },
        plugins: {},
    }
});





let Total_No_Order=OrderStat.NO_Order.Total
let Pending_NO=OrderStat.NO_Order.pending
let delivered_NO=OrderStat.NO_Order.delivered
let Shipped_NO=OrderStat.NO_Order.shipped

var ctx = document.getElementById('myChart3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Pending Order","Deliver Order","Shipped Order"],
        datasets: [{
            label: 'Number of Order',
            data: [Pending_NO, delivered_NO, Shipped_NO],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: `Order Count (Total=${Total_No_Order})`,
                fontSize: 16,
            },
        },
    }
});