fetch('https://paleobiodb.org/data1.2/occs/list.json?rowcount&base_name=Dacentrurus, Loricatosaurus', {
    method: "GET",
    
})
.then(res => {
    if (res.ok) {
        return res.json()
    }
    
})
.then(data => console.log(data))
.catch(error => console.log(error))