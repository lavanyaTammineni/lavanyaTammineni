import data from '../food.json' assert { type: 'json' };

data.forEach(myfunction);


  function myfunction(item,index){
  console.log(item)
}
   
   
   const  vegetables=data.filter( getvegetables);

   function getvegetables(item){
    return item.category=="Vegetable"
    
   
   }
   console.log("VEGETABLE ITEMS")
   vegetables.forEach(myfunction);

   console.log("FRUIT ITEMS")
   const fruits=data.filter(getfruits);
   function getfruits(item){
    return item.category=="Fruit"
   }
   fruits.forEach(myfunction);
   console.log("PROTEIN ITEMS")
       const proteins=data.filter(getproteins);
       function getproteins(item){
        return item.category== "Protein"
       }
       proteins.forEach(myfunction);
       console.log("nuts")
       const nuts=data.filter(getnuts);
       function getnuts(item){
        return item.category== "Nuts"
       }
       nuts.forEach(myfunction);
       console.log("GRAIN ITEMS")
       const grains=data.filter(getgrains);
       function getgrains(item){
        return item.category== "Grain"
       }
       grains.forEach(myfunction);
       console.log("DIARY ITEMS")
       const diary=data.filter(getdiary);
       function getdiary(item){
        return item.category== "Dairy"
       }
       diary.forEach(myfunction);
       console.log("ITEMS HAVING CALORIES ABOVE 100")
       const calories=data.filter(getcalories);
       function getcalories(item){
        return item.calorie>100
       }
       calories.forEach(myfunction);
       console.log("ITEMS HAVING CALORIES BELOW 100")
       const calorie=data.filter(getcalorie);
       function getcalorie(item){
        return item.calorie<100
       }
       calorie.forEach(myfunction);

       console.log("Food items with highest protien content to lowest")
       const foodproteins=data.sort((a,b) => Number(b.protiens)-Number(a.protiens));
       foodproteins.forEach(myfunction);
      
      console.log("Food items with lowest cab content to highest")
      const cab=data.sort((a,b) => Number(a.cab)-Number(b.cab));
       cab.forEach(myfunction);