const httpPost = (operation, data) => {
    return new Promise( (resolve, reject) => {
        fetch("http://localhost:8080/Work/Face44%20Coding%20Challenge/React%20Version/TodoApp-Test-REACT-VERSION-Face44/api/index.php",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                ...data,
                operation: operation
            })
        })
        // .then( r => { r.text().then(res => console.log(res)) })
        .then( j => j.json() )
        .then(response => {
            resolve(response)
        })
        .catch((error) => reject(error))
    })
     
}


export {httpPost}


