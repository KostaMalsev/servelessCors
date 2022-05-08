
export default async function handler(request, response) {
  
  const https = require('https');
  
  console.log(request);
  
  //Get params from the query:
  var regex = /[?&]([^=#]+)=([^&#]*)/g, params={}, match;
  
  while(match = regex.exec(request)) 
  {
        params[match[1]] = match[2];
  }
  
  if(params.length == 0) return;

  //let url = 'https://www.apple.com/'
  //const {status, data} = await getRequest(decodeURIComponent(request.query.url));
  const {status, data} = await getRequest(decodeURIComponent(params[0]]));
  
  //let data = request;
  response.status(status).send(data);
  
  
  
  
  
  function getRequest(url) {
  
    return new Promise(resolve => {
      
      const req = https.get(url, (resp) => {
        
        let data = '';
        
        resp.on('data', (chunk) => {
          
          data += chunk;
          
        });
        
        resp.on('end', () => {
          
          resolve({status: resp.statusCode, data: data});
          
        });
        
      });
      
    });
    
  }
  
}
