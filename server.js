const express = require('express');
const cors=require('cors')
const port =8000

const app=express()
app.use(express.json())
app.use(cors())

app.listen(port,()=>{console.log("Booting up....\nBooted up and ready to recieve on port 8080")})

app.get('/trail', (req, res) => {
  const vr={
    "name":"Siddharth",
    "age":19
  }
    res.statusCode=210
    res.send(vr)
  }
)

app.post('/code/:id',(req,res)=>{
  if(req.params.id%2==0){
    res.status(201)
    console.log(JSON.stringify(req.body))
    res.send({
      "message":"yup a even number",
      "statuscode":201,
      
    })
  }
})