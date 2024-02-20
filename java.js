const currentDate = document.getElementById('current-date');
const currentTime = document.getElementById('current-time');

function updateTime() {
  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  currentDate.textContent = formattedDate;
  currentTime.textContent = formattedTime;
}

setInterval(updateTime, 1000);

updateTime();
