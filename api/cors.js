
export default async function handler(request, response) {
  
  const https = require('https');
  
  console.log(request);
    
  const {status, data} = await getRequest(decodeURIComponent(request.query.url));
  //const {status, data} = await getRequest(decodeURIComponent('https://www.apple.com'));
  
  response.status(status).send(data);
  //response.status(status).send(`<script> console.log($request)</script>`);
  
    //response.status(200).send(`<div> $request</div>`)

  
  
  
  
  
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
