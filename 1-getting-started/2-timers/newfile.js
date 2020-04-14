const timerId = setInterval(
	  () => console.log('You will not see this one!'),
	  2000
);

//my code
//to clear after 10 seconds
setTimeout(
  () => {
      clearTimeout(timerId);
        },
          10 * 1000
          );
