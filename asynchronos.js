const networkRequest = () => {
    setTimeout(() => {
      console.log('Async Code');
    }, 2000);
  };
  networkRequest();
  console.log('Hello World');
