export default function countAllFromTown(list, town){
    let regList = list.split(',')
    let count = 0;
    for (let i = 0; i < regList.length; i++){
    let regNo = regList[i].trim();
      if (regNo.startsWith(town)){
          count++;
          }
        }
          return count;
    }
    