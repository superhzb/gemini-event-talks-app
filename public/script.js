document.addEventListener('DOMContentLoaded', () => {
  const scheduleContainer = document.getElementById('schedule-container');
  const searchInput = document.getElementById('search');

  let talks = [];

  const fetchTalks = async () => {
    try {
      const response = await fetch('/api/talks');
      talks = await response.json();
      renderSchedule(talks);
    } catch (error) {
      console.error('Error fetching talks:', error);
      scheduleContainer.innerHTML = '<p>Error loading schedule. Please try again later.</p>';
    }
  };

  const renderSchedule = (talksToRender) => {
    scheduleContainer.innerHTML = '';

    if (talksToRender.length === 0) {
      scheduleContainer.innerHTML = '<p class="no-results">No talks found for your search.</p>';
      return;
    }

    let currentTime = new Date();
    currentTime.setHours(10, 0, 0, 0);

    talksToRender.forEach((talk, index) => {
      const startTime = new Date(currentTime);
      const endTime = new Date(startTime.getTime() + talk.duration * 60000);

      const talkElement = document.createElement('div');
      talkElement.classList.add('talk');

      talkElement.innerHTML = `
        <div class="time">${formatTime(startTime)} - ${formatTime(endTime)}</div>
        <h2>${talk.title}</h2>
        <div class="speakers">By: ${talk.speakers.join(', ')}</div>
        <p>${talk.description}</p>
        <div class="category">
          ${talk.category.map(cat => `<span>${cat}</span>`).join('')}
        </div>
      `;
      scheduleContainer.appendChild(talkElement);

      currentTime = new Date(endTime.getTime() + 10 * 60000); // 10 minute break

      if (index === 2) { // Lunch break after the 3rd talk
        const lunchElement = document.createElement('div');
        lunchElement.classList.add('break');
        lunchElement.textContent = 'Lunch Break';
        scheduleContainer.appendChild(lunchElement);
        currentTime = new Date(currentTime.getTime() + 60 * 60000); // 1 hour lunch break
      }
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const filterTalks = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredTalks = talks.filter(talk => {
      const inCategory = talk.category.some(cat => cat.toLowerCase().includes(searchTerm));
      const inSpeakers = talk.speakers.some(speaker => speaker.toLowerCase().includes(searchTerm));
      return inCategory || inSpeakers;
    });
    renderSchedule(filteredTalks);
  };

  searchInput.addEventListener('input', filterTalks);

  fetchTalks();
});
