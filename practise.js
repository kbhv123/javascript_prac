
/*let myFunction = () => {fetch('https://paleobiodb.org/data1.2/occs/list.json?rowcount&base_name=Dacentrurus, Loricatosaurus', {
    method: "GET",
    
})
.then(res => {
    if (res.ok) {
        return res.json()
    }
    
})
.then(data => console.log(data))
.catch(error => console.log(error))}



myFunction(); */

/*const getAPIData = () => {
    fetch("https://paleobiodb.org/data1.2/occs/list.json?rowcount&base_name=Dacentrurus, Loricatosaurus")
    .then((data) => data.json())
    .then(data => console.log(data));


}; */


const getAPIData = (dino) => {
    fetch(`https://paleobiodb.org/data1.2/occs/list.json?rowcount&base_name=${dino}`)
    .then((data) => data.json())
    .then(data => console.log(data));


}; 

let swap = document.getElementById("test");

document.querySelector('button').addEventListener('click', () => {
    const dino = document.querySelector('input[name="dinosaur"]:checked').value;
    getAPIData(dino);
    
    console.log(swap);
    
})

