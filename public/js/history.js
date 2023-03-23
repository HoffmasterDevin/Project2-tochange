import { Howl } from "howler"


bells = new Howl({
  src: './sounds/Copper Bells.mp3'
});

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