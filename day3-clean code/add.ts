// const sum=(firstNo: number,secondNo:number)=>{
// return firstNo+secondNo;
// }

function sum(number:[]){
    return 
}
console.log(sum([10,20,4045,505,5050,59858]));


class Calculator{
numbers:number[]=[];
    add(){
        let total=0;
        this.numbers.forEach(number=>{
            total=total+number
        })
        return total;
    }

    divide(){


    }

    multiply(){

    }

    

}

let calc=new Calculator()
calc.numbers=[4,7];
console.log(calc.add());

