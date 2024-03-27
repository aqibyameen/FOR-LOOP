// Question number 20 
// Part c;

for(let i=0;i<5;i++){
    let str='';
    for(let j=i;j<5;j++){
        str+='*'
}
console.log(str);
}

// part b
for(let i=5;i>=0;i--){
    let str=''
    for(let j=i;j<5;j++){
        str+='*'
    }
    console.log(str);
}
// Part a;
for (let i = 0; i <4; i++) {
    let str = '';
    for (let j = 0; j < 4; j++) {
        str += '*';
    }
    console.log(${str});
}

// Question number 19
for(let i=0;i<7;i++){
    let str='';
    for(let j=i;j<7;j++){
        str+='*'
    }
    console.log(str);

}
// Question number 18
let product =1;
for(let i=1;i<=7;i++){
    if(i%2!==0){
     product *= i;
    }
}
console.log(The product of the odd integer from 1 to 7 is ${product});

//  Question number 17
for(let i=0;i<=20;i++){
    if(i%2===0){
        console.log(${i} is even);
    }
    else if(i%2!==0){
        console.log(${i} is odd);
    }
}
//  Question number 16
for(let i=5;i>=0;i=i-0.5){
    console.log(${i});
}
// Question number 15
const A =[[1,2,3],[4,5,6],[7,8,9]]
for(let i=0;i<A.length;i++){
    let RowString='';
    for(let j=0;j<A[i].length;j++){
        RowString+=A[i][j]+'';
    }
    console.log(RowString);
}
// Question number 14
const GameScore =[12,45,3,22,34,50]
const New_Array = []
let input = 33;
if(GameScore.indexOf(input)==-1){
    console.log(No such score);
}
for(let i=0;i<=GameScore.indexOf(input);i++){
    New_Array.push(GameScore[i])
}
console.log(New_Array);
// Question number 13
const Entry1 = document.getElementById('Entry1')
const Entry2 = document.getElementById('Entry2')
const Students = ['Hammad','Aqib','Faizan','Hussain','Jawwad','Hassan']
const Scores=[90,89,77,67,90,77];
function createColumn1(){
let TextContent='';
 for(let i=0; i<Students.length; i++){
    TextContent+=${Students[i]} <br> <hr>
}
Entry1.innerHTML=TextContent;
let TextContent1='';
for(let i=0; i<Scores.length; i++){
    TextContent1+=${Scores[i]}<br> <hr>  
}
Entry2.innerHTML=TextContent1
}
createColumn1();
// Question number 12
for(let i=1;i<=100;i++){
    if(i%5===0){
        console.log(${i});
    }
}
// Question number 11
const A1 = [90,77,1009,76,55,900,899,9999,-7]
let Largest = A1[0];
let Smallest = A1[0];
for(let i=0;i<A1.length;i++){
    if(A1[i]>Largest){
       Largest=A1[i]
}
    else if(A1[i]<Smallest){
        Smallest=A1[i]
}
}
console.log(Largest  Element: ${Largest});
console.log(Smallest Element: ${Smallest});
// Question number 10
const A2 = [90,77,1009,76,55,900,899,9999,-7]
let Large = A2[0];
for(let i=0;i<A2.length;i++)
    if(A2[i]>Large){
       Large=A2[i]
}
console.log(Large: ${Large});
//  Question number 9
const A3 = [90,77,1009,76,55,900,899,9999,-7]
let Small = A3[0];
for(let i=0;i<A3.length;i++)
    if(A3[i]<Small){
       Small=A3[i]
}
console.log(Small: ${Small});
// Question number 1
for (let index = 0; index < 5; index++) {
    document.write('Hello Word <br>')
}
//  Question number 2
for (let index = 1; index <=10; index++) {
    document.write(${index} <br>)
}
//  Question number 3
let Table_no = +prompt('Enter a number to print multiplication table')
let Table_length =+prompt('Enter the table length')
for (let index = 1; index <= Table_length; index++) {
    document.write(${Table_no} * ${index} = ${(Table_no)*(index)} <br>);
} 
// Question number 4
let Phones =['samsung', 'Apple','iPhone','iPad','Windows']
for (let index = 0; index < Phones.length; index++) {
    document.write(${Phones[index]} <br>);
}
// Question number 5
let Fruits =['apple','orange','mango','banana','grapes','Dates' ]
for (let index = 0; index < Fruits.length; index++) {
    document.write(${Fruits[index]} <br>)
}
//  Question number 6
for (let index = 0; index < Fruits.length; index++){
    document.write(Element at  index ${index} is ${Fruits[index]} <br>)
}
// Question number 7
let number_of_items =+prompt('Enter a number of items')
let Items =  []
document.write(Number of items: ${number_of_items} <br><br>)
document.write(Items <br><br>)
for (let i=0; i<number_of_items; i++){
    Items[i] = prompt(Enter value of ${i})
    document.write(${Items[i]} <br>)
}
// Question number 8
document.write(Counting: <br><br>)
for(let i=1;i<=15;i++){
    document.write(`${i},  `)
}
document.write(<br> <br>)
document.write(Reverse Counting: <br><br>)
for(let i=10;i>=1;i--){
    document.write(`${i}, `)
}
document.write(<br> <br>)
document.write(Even: <br><br>)
for(let i=0;i<25;i++){
    if(i%2==0){
    document.write(`${i}, `)
}
}
document.write(<br> <br>)
document.write(Odd: <br><br>)
for(let i=0;i<=21;i++){
    if(i%2!=0 ){
    document.write(`${i}, `)
}
}
document.write(<br> <br>)
document.write(Series: <br><br>)
for(let i=1;i<=10;i++){
    document.write(`${i+i}K, `)
}
//  Question number 9
let Bakery = ['apple','orange','banana','dates','kiwi']
const inputB = document.getElementById('bacshop')
function shop(){
if(Bakery.includes(inputB.value)){
    console.log(${inputB.value} is available at ${Bakery.indexOf(inputB.value)} in our bakery)
}
else{
    console.log(${inputB.value} is  not available in our bakery)
}
}
