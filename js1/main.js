let a =5;
var b =7;
let c =3;

// BT1
if (a %2 ==0){
    console.log("day la so chan");
}else{
    console.log("day la so le");
}
// BT2
if( a>b){
    if(a>c){
        console.log("a lon nhat");
    }else{
        console.log("c lon nhat")
    }
}else
    console.log("b lon nhat");
// BT3
let gt =1;
for (let i=1; i<=a; i++){
    gt=gt*i;
}
console.log("giai thua cua a la:"+gt);

// BT4
let i =1;
while( i<b){
    if (i%2==0){
        console.log(i);
    }
    i++;
}
// BT5
let s = 0;
let array =[0,2,-4,8]
    for( let x of array ){ 
        if ( x>0){
            s = s + x;
        }
    }
console.log("tong cac so duong trong mang la="+s);
