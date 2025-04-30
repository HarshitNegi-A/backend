<<<<<<< HEAD
function addOne(a, b) {
  let sum = a + b + 1;
  return sum;
}

function addTwo(a, b) {
  let sum = a + b + 2;
  return sum;
}

function add(a, b) {
  let sum = addOne(a, b) + addTwo(a, b);
  return sum;
}

let result=add(1, 3);
console.log('result',result)
=======
const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end(`
            <h1>Hello World!</h1>
            <h1>This is the homepage</h1>
            <h1>This is the homepage</h1>
            <h1>This is Harshit</h1>
            `)
    }
})

server.listen(3000,()=>console.log("Server is running..."))
>>>>>>> 48c9dbeb4012fdbfb01adcf69fca8722df43d93f
