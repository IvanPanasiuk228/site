const aryy = [1, 3, 5]
aryy.forEach((val, i) => {
    console.log(i, val)
});
const sum =aryy.reduce((acc, val) => acc + val, 0)
console.log(sum)
const sort = aryy.sort((a, b) => a - b)
console.log(sort)

function suma(...args){
    return args.reduce((acc,val) => acc + val, 0)
}
console.log(suma(1,5,6,6))

function suma1(...args){
    return args.reduce((acc,val) => acc + val, 0)
}

function maxNumber(...arsg){
    let max = Math.max(...arsg)
    return max
}

console.log(maxNumber(1,3,5,6,7))

const double = aryy.map(num => num * 2)
console.log(double)

const filter = aryy.filter(num => num % 2 === 0)

console.log(filter)

let array = [...new Set(aryy)]
console.log(array)