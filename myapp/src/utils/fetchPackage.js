function checkStatus(response) {
    if (response.status === 200) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
}
function parseJSON(response) {
    return response.json()
}
function utilFetch(url,options){
  return new Promise(function(resolve,reject){
    var awaitFetch 
    if(options){
      awaitFetch = fetch(url,options)
    }else{
      awaitFetch = fetch(url)
    }
    awaitFetch
      .then(checkStatus)
      .then(parseJSON)
      .then(res=>{
        resolve(res)
      })
      .catch(res=>{
        reject(res)
      })
  })
}

export {utilFetch}
