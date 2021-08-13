const networkRequest = (timeout) => {
    setTimeout(() => {
      console.log('Async Code');
    }, timeout);
  };
  
  console.log('Hello World');

  networkRequest(2000);
  console.log('The End');
