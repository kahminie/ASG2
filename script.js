fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyCScdtazWWL4-E-PJIZUrX_70bWStaKLE8', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })
}).then{res => {
    return res.json()
}}
.then(data => console.log(datea))
.catch(error => console.log('ERROR'))

