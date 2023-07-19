export default function mostProfitableDepartment(data){
    let mostSales = 0;
    let totalSales = {};
     let profitableDpt = '';
    for(let i = 0; i < data.length; i++){
    let dataList = data[i];
     let department = dataList.department;
     if(totalSales[department] == undefined){
     totalSales[department] = dataList.sales;
     } else {
     totalSales[department] = totalSales[department] + dataList.sales;
     }
      if(totalSales[department] > mostSales){
      mostSales = totalSales[department]
       profitableDpt = department;
      }
    }
      //console.log(totalSales)
      return profitableDpt
    }