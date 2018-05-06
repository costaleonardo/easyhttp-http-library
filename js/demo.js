// Test Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// Initialize EasyHTTP
const easyHttp = new EasyHTTP();

// GET /users
easyHttp.get('https://jsonplaceholder.typicode.com/users')
  .then(res => console.log('GET /users:', res))
  .catch(e => console.log(e));

// POST /users
easyHttp.post('https://jsonplaceholder.typicode.com/users')
  .then(res => console.log('POST /users:', res))
  .catch(e => console.log(e));

// PUT /users/2
easyHttp.put('https://jsonplaceholder.typicode.com/users/2', data)
  .then(res => console.log('PUT /users/2:', res))
  .catch(e => console.log(e));

// DELETE /users/2
easyHttp.delete('https://jsonplaceholder.typicode.com/users/2')
.then(res => console.log(res))
.catch(e => console.log(e));
