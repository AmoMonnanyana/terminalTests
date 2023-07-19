export default function countAllPaarl(list){
    let regList = list.split(',');
    let count = 0;
      for ( let i = 0; i < regList.length; i++){
      let regNo = regList[i].trim();
        //console.log(regNo);
        if(regNo.startsWith('CJ')){
        count++;
        }
      }
      return count;
    }