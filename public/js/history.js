

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



document.querySelector('#historyButton').addEventListener('click', getHistory);