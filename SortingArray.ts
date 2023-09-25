//  Number sorting array 
// sort in ascending order 

// let arr: number[] =[9,6,3,2];

//let arr: number[] =[20,2,15,13,4,16,6,9,12,4];

let arr =[7, 16, 4, 18, 11, 9,20, 8, 5, 3, 10,14, 6, 12, 2, 13, 1, 17, 19, 15];



for(let k=0; k<arr.length;k++){

    for (let i=0; i<(arr.length-1);i++ ){
        for (let j=i+1; j<(arr.length); j++) {
          
            if (arr[i]>arr[j]){
            let t = arr[j];
            arr.splice(j,1);
            arr.unshift(t);
            j=arr.length;
//    console.log(arr);
            }
        }

    }
 //  console.log(arr);
}

console.log(arr);