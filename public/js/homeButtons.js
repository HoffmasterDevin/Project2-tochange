

const getHistory = async () => {


    const response = await fetch('/history', {
        method: 'GET'
    });

    if (response.ok) {
        document.location.replace('/history');
      } else {
        alert('Cannot grab history.');
      }
};

const getFight = async () => {
  
  const response = await fetch('/fight', {
    method: 'GET'
  });

  if (response.ok) {
    document.location.replace('/fight');
  } else {
    alert('Cannot grab fight data.')
  }
};



document.querySelector('#historyButton').addEventListener('click', getHistory);

document.querySelector('#fightButton').addEventListener('click', getFight);