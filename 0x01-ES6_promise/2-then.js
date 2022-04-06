export default function handleResponseFromAPI(pro) {
    return pro.then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => Error())
    .finally(() => console.log('Got a response from the API'));
  }



 