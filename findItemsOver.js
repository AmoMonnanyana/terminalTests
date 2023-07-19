export default function findItemsOver(list, limit){
    let expensives = [];
    for (let i = 0; i < list.length; i++){
    let itemList = list[i];
     let item = itemList.name;
      let itemQty = itemList.qty;
      if(itemQty > limit){
        expensives.push(itemList);
        //console.log(expensives)
      }
      }
      return expensives;
    }
    
