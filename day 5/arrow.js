(() => {
    let nums = [1, 2, 4, 5, 3, 7, 8, 10, 9, 12,]
    let odd = nums.filter((oddnum) => oddnum % 2 !==0);
    console.log(odd);
})();


(() => {
    let fullname = "Gouklpradap";
    let result = fullname.toUpperCase();
    console.log(result);
})();


(() => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 let sum = 0;
 for (let i = 0; i < array. length; i++) { 
      sum += array[i];
     }
 console.log(sum);
})();



(() => {
    let arrays = [1, 1, 4, 4, 5, 6, 9, 9, 8]
    let removeDup = arr => [...new Set(arr)];
    console.log(removeDup(arrays))
    })();
