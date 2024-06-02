let names=['jebin,paul']
let dateofbirth=2003
let currentyear=2024
let age=currentyear-dateofbirth
let marriedstatus=false
let children= true

console.log(names[0]+ 'is'+ age + 'years old')

if(marriedstatus)
    {
        console.log('and'+ names[0]+'is married')
    }
else if(children)
    {
        console.log('and'+ names[0]+'has a child')
    }
else
    {
        console.log('and'+ names[0]+'is not married')
    }