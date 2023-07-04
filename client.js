fetch("http://localhost:8000/code/2",{
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({"message":"hello server hows the ping"})
    }).then(res=>{
        return res.json()
    }).then(data=>{
        console.log(data)
    })