export default function findItemsOver20(list){
    let expensives = [];
    for (let i = 0; i < list.length; i++){
    let itemList = list[i];
     let item = itemList.name;
      let itemQty = itemList.qty;
      if(itemQty > 20){
        expensives.push(itemList);
      }
      }
      return expensives;
    }