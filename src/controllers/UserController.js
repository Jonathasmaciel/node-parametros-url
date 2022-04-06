
const users = require('../mocks/users');

module.exports = {
  listUsers(resquest, response){
    const{order} = resquest.query;

  const sortUsers = users.sort((a,b)=>{
    if(order === 'desc'){
      return a.id < b.id ? 1 : -1;
    }
    return a.id > b.id ? 1 : -1;
  });
  response.writeHead(200,{'Content-Type': 'application/json'});
  response.end(JSON.stringify(sortUsers));
  },
  getUserById(request, response ){
    const { id } = request.params;

    const user = users.find((user) => user.id === Number(id));

    if(!user){
      response.writeHead(400,{'Content-Type': 'application/json'});
      response.end(JSON.stringify( {error:'user not found'} ));
    } else{
      response.writeHead(200,{'Content-Type': 'application/json'});
      response.end(JSON.stringify( user ));
    }
  }
}