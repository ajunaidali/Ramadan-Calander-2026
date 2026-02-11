// ============================================
// Prayer Times Data for Different Cities
// ============================================
const prayerTimes = {
    karachi: {
        name: 'Karachi',
        times: [
            { day: 1, date: 'Feb 18', ramadanDay: 1, fajr: '5:30 AM', dhuhr: '12:19 PM', asr: '3:25 PM', maghrib: '5:50 PM', isha: '7:05 PM', sehri: '5:15 AM', iftar: '5:50 PM' },
            { day: 2, date: 'Feb 19', ramadanDay: 2, fajr: '5:29 AM', dhuhr: '12:19 PM', asr: '3:26 PM', maghrib: '5:51 PM', isha: '7:06 PM', sehri: '5:14 AM', iftar: '5:51 PM' },
            { day: 3, date: 'Feb 20', ramadanDay: 3, fajr: '5:28 AM', dhuhr: '12:19 PM', asr: '3:27 PM', maghrib: '5:52 PM', isha: '7:07 PM', sehri: '5:13 AM', iftar: '5:52 PM' },
            { day: 4, date: 'Feb 21', ramadanDay: 4, fajr: '5:27 AM', dhuhr: '12:19 PM', asr: '3:28 PM', maghrib: '5:53 PM', isha: '7:08 PM', sehri: '5:12 AM', iftar: '5:53 PM' },
            { day: 5, date: 'Feb 22', ramadanDay: 5, fajr: '5:26 AM', dhuhr: '12:19 PM', asr: '3:29 PM', maghrib: '5:54 PM', isha: '7:09 PM', sehri: '5:11 AM', iftar: '5:54 PM' },
            { day: 6, date: 'Feb 23', ramadanDay: 6, fajr: '5:25 AM', dhuhr: '12:19 PM', asr: '3:30 PM', maghrib: '5:55 PM', isha: '7:10 PM', sehri: '5:10 AM', iftar: '5:55 PM' },
            { day: 7, date: 'Feb 24', ramadanDay: 7, fajr: '5:24 AM', dhuhr: '12:19 PM', asr: '3:31 PM', maghrib: '5:56 PM', isha: '7:11 PM', sehri: '5:09 AM', iftar: '5:56 PM' },
            { day: 8, date: 'Feb 25', ramadanDay: 8, fajr: '5:23 AM', dhuhr: '12:19 PM', asr: '3:32 PM', maghrib: '5:57 PM', isha: '7:12 PM', sehri: '5:08 AM', iftar: '5:57 PM' },
            { day: 9, date: 'Feb 26', ramadanDay: 9, fajr: '5:22 AM', dhuhr: '12:19 PM', asr: '3:33 PM', maghrib: '5:58 PM', isha: '7:13 PM', sehri: '5:07 AM', iftar: '5:58 PM' },
            { day: 10, date: 'Feb 27', ramadanDay: 10, fajr: '5:21 AM', dhuhr: '12:19 PM', asr: '3:34 PM', maghrib: '5:59 PM', isha: '7:14 PM', sehri: '5:06 AM', iftar: '5:59 PM' },
            { day: 11, date: 'Feb 28', ramadanDay: 11, fajr: '5:20 AM', dhuhr: '12:19 PM', asr: '3:35 PM', maghrib: '6:00 PM', isha: '7:15 PM', sehri: '5:05 AM', iftar: '6:00 PM' },
            { day: 12, date: 'Mar 1', ramadanDay: 12, fajr: '5:19 AM', dhuhr: '12:19 PM', asr: '3:36 PM', maghrib: '6:01 PM', isha: '7:16 PM', sehri: '5:04 AM', iftar: '6:01 PM' },
            { day: 13, date: 'Mar 2', ramadanDay: 13, fajr: '5:18 AM', dhuhr: '12:19 PM', asr: '3:37 PM', maghrib: '6:02 PM', isha: '7:17 PM', sehri: '5:03 AM', iftar: '6:02 PM' },
            { day: 14, date: 'Mar 3', ramadanDay: 14, fajr: '5:17 AM', dhuhr: '12:19 PM', asr: '3:38 PM', maghrib: '6:03 PM', isha: '7:18 PM', sehri: '5:02 AM', iftar: '6:03 PM' },
            { day: 15, date: 'Mar 4', ramadanDay: 15, fajr: '5:16 AM', dhuhr: '12:19 PM', asr: '3:39 PM', maghrib: '6:04 PM', isha: '7:19 PM', sehri: '5:01 AM', iftar: '6:04 PM' },
            { day: 16, date: 'Mar 5', ramadanDay: 16, fajr: '5:15 AM', dhuhr: '12:19 PM', asr: '3:40 PM', maghrib: '6:05 PM', isha: '7:20 PM', sehri: '5:00 AM', iftar: '6:05 PM' },
            { day: 17, date: 'Mar 6', ramadanDay: 17, fajr: '5:14 AM', dhuhr: '12:19 PM', asr: '3:41 PM', maghrib: '6:06 PM', isha: '7:21 PM', sehri: '4:59 AM', iftar: '6:06 PM' },
            { day: 18, date: 'Mar 7', ramadanDay: 18, fajr: '5:13 AM', dhuhr: '12:17 PM', asr: '3:42 PM', maghrib: '6:05 PM', isha: '7:20 PM', sehri: '4:58 AM', iftar: '6:05 PM' },
            { day: 19, date: 'Mar 8', ramadanDay: 19, fajr: '5:12 AM', dhuhr: '12:17 PM', asr: '3:43 PM', maghrib: '6:06 PM', isha: '7:21 PM', sehri: '4:57 AM', iftar: '6:06 PM' },
            { day: 20, date: 'Mar 9', ramadanDay: 20, fajr: '5:11 AM', dhuhr: '12:17 PM', asr: '3:44 PM', maghrib: '6:07 PM', isha: '7:22 PM', sehri: '4:56 AM', iftar: '6:07 PM' },
            { day: 21, date: 'Mar 10', ramadanDay: 21, fajr: '5:10 AM', dhuhr: '12:17 PM', asr: '3:45 PM', maghrib: '6:08 PM', isha: '7:23 PM', sehri: '4:55 AM', iftar: '6:08 PM' },
            { day: 22, date: 'Mar 11', ramadanDay: 22, fajr: '5:09 AM', dhuhr: '12:17 PM', asr: '3:46 PM', maghrib: '6:09 PM', isha: '7:24 PM', sehri: '4:54 AM', iftar: '6:09 PM' },
            { day: 23, date: 'Mar 12', ramadanDay: 23, fajr: '5:08 AM', dhuhr: '12:17 PM', asr: '3:47 PM', maghrib: '6:10 PM', isha: '7:25 PM', sehri: '4:53 AM', iftar: '6:10 PM' },
            { day: 24, date: 'Mar 13', ramadanDay: 24, fajr: '5:07 AM', dhuhr: '12:17 PM', asr: '3:48 PM', maghrib: '6:11 PM', isha: '7:26 PM', sehri: '4:52 AM', iftar: '6:11 PM' },
            { day: 25, date: 'Mar 14', ramadanDay: 25, fajr: '5:06 AM', dhuhr: '12:17 PM', asr: '3:49 PM', maghrib: '6:12 PM', isha: '7:27 PM', sehri: '4:51 AM', iftar: '6:12 PM' },
            { day: 26, date: 'Mar 15', ramadanDay: 26, fajr: '5:05 AM', dhuhr: '12:17 PM', asr: '3:50 PM', maghrib: '6:13 PM', isha: '7:28 PM', sehri: '4:50 AM', iftar: '6:13 PM' },
            { day: 27, date: 'Mar 16', ramadanDay: 27, fajr: '5:04 AM', dhuhr: '12:17 PM', asr: '3:51 PM', maghrib: '6:14 PM', isha: '7:29 PM', sehri: '4:49 AM', iftar: '6:14 PM' },
            { day: 28, date: 'Mar 17', ramadanDay: 28, fajr: '5:03 AM', dhuhr: '12:17 PM', asr: '3:52 PM', maghrib: '6:15 PM', isha: '7:30 PM', sehri: '4:48 AM', iftar: '6:15 PM' },
            { day: 29, date: 'Mar 18', ramadanDay: 29, fajr: '5:02 AM', dhuhr: '12:17 PM', asr: '3:53 PM', maghrib: '6:16 PM', isha: '7:31 PM', sehri: '4:47 AM', iftar: '6:16 PM' },
            { day: 30, date: 'Mar 19', ramadanDay: 30, fajr: '5:01 AM', dhuhr: '12:17 PM', asr: '3:54 PM', maghrib: '6:17 PM', isha: '7:32 PM', sehri: '4:46 AM', iftar: '6:17 PM' }
        ]
    },
    lahore: {
        name: 'Lahore',
        times: [
            { day: 1, date: 'Feb 18', ramadanDay: 1, fajr: '5:15 AM', dhuhr: '12:05 PM', asr: '3:10 PM', maghrib: '5:35 PM', isha: '6:50 PM', sehri: '5:00 AM', iftar: '5:35 PM' },
            { day: 2, date: 'Feb 19', ramadanDay: 2, fajr: '5:14 AM', dhuhr: '12:05 PM', asr: '3:11 PM', maghrib: '5:36 PM', isha: '6:51 PM', sehri: '4:59 AM', iftar: '5:36 PM' },
            { day: 3, date: 'Feb 20', ramadanDay: 3, fajr: '5:13 AM', dhuhr: '12:05 PM', asr: '3:12 PM', maghrib: '5:37 PM', isha: '6:52 PM', sehri: '4:58 AM', iftar: '5:37 PM' },
            { day: 4, date: 'Feb 21', ramadanDay: 4, fajr: '5:12 AM', dhuhr: '12:05 PM', asr: '3:13 PM', maghrib: '5:38 PM', isha: '6:53 PM', sehri: '4:57 AM', iftar: '5:38 PM' },
            { day: 5, date: 'Feb 22', ramadanDay: 5, fajr: '5:11 AM', dhuhr: '12:05 PM', asr: '3:14 PM', maghrib: '5:39 PM', isha: '6:54 PM', sehri: '4:56 AM', iftar: '5:39 PM' },
            { day: 6, date: 'Feb 23', ramadanDay: 6, fajr: '5:10 AM', dhuhr: '12:05 PM', asr: '3:15 PM', maghrib: '5:40 PM', isha: '6:55 PM', sehri: '4:55 AM', iftar: '5:40 PM' },
            { day: 7, date: 'Feb 24', ramadanDay: 7, fajr: '5:09 AM', dhuhr: '12:05 PM', asr: '3:16 PM', maghrib: '5:41 PM', isha: '6:56 PM', sehri: '4:54 AM', iftar: '5:41 PM' },
            { day: 8, date: 'Feb 25', ramadanDay: 8, fajr: '5:08 AM', dhuhr: '12:05 PM', asr: '3:17 PM', maghrib: '5:42 PM', isha: '6:57 PM', sehri: '4:53 AM', iftar: '5:42 PM' },
            { day: 9, date: 'Feb 26', ramadanDay: 9, fajr: '5:07 AM', dhuhr: '12:05 PM', asr: '3:18 PM', maghrib: '5:43 PM', isha: '6:58 PM', sehri: '4:52 AM', iftar: '5:43 PM' },
            { day: 10, date: 'Feb 27', ramadanDay: 10, fajr: '5:06 AM', dhuhr: '12:05 PM', asr: '3:19 PM', maghrib: '5:44 PM', isha: '6:59 PM', sehri: '4:51 AM', iftar: '5:44 PM' },
            { day: 11, date: 'Feb 28', ramadanDay: 11, fajr: '5:05 AM', dhuhr: '12:05 PM', asr: '3:20 PM', maghrib: '5:45 PM', isha: '7:00 PM', sehri: '4:50 AM', iftar: '5:45 PM' },
            { day: 12, date: 'Mar 1', ramadanDay: 12, fajr: '5:04 AM', dhuhr: '12:05 PM', asr: '3:21 PM', maghrib: '5:46 PM', isha: '7:01 PM', sehri: '4:49 AM', iftar: '5:46 PM' },
            { day: 13, date: 'Mar 2', ramadanDay: 13, fajr: '5:03 AM', dhuhr: '12:05 PM', asr: '3:22 PM', maghrib: '5:47 PM', isha: '7:02 PM', sehri: '4:48 AM', iftar: '5:47 PM' },
            { day: 14, date: 'Mar 3', ramadanDay: 14, fajr: '5:02 AM', dhuhr: '12:05 PM', asr: '3:23 PM', maghrib: '5:48 PM', isha: '7:03 PM', sehri: '4:47 AM', iftar: '5:48 PM' },
            { day: 15, date: 'Mar 4', ramadanDay: 15, fajr: '5:01 AM', dhuhr: '12:05 PM', asr: '3:24 PM', maghrib: '5:49 PM', isha: '7:04 PM', sehri: '4:46 AM', iftar: '5:49 PM' },
            { day: 16, date: 'Mar 5', ramadanDay: 16, fajr: '5:00 AM', dhuhr: '12:05 PM', asr: '3:25 PM', maghrib: '5:50 PM', isha: '7:05 PM', sehri: '4:45 AM', iftar: '5:50 PM' },
            { day: 17, date: 'Mar 6', ramadanDay: 17, fajr: '4:59 AM', dhuhr: '12:05 PM', asr: '3:26 PM', maghrib: '5:51 PM', isha: '7:06 PM', sehri: '4:44 AM', iftar: '5:51 PM' },
            { day: 18, date: 'Mar 7', ramadanDay: 18, fajr: '4:58 AM', dhuhr: '12:03 PM', asr: '3:27 PM', maghrib: '5:50 PM', isha: '7:05 PM', sehri: '4:43 AM', iftar: '5:50 PM' },
            { day: 19, date: 'Mar 8', ramadanDay: 19, fajr: '4:57 AM', dhuhr: '12:03 PM', asr: '3:28 PM', maghrib: '5:51 PM', isha: '7:06 PM', sehri: '4:42 AM', iftar: '5:51 PM' },
            { day: 20, date: 'Mar 9', ramadanDay: 20, fajr: '4:56 AM', dhuhr: '12:03 PM', asr: '3:29 PM', maghrib: '5:52 PM', isha: '7:07 PM', sehri: '4:41 AM', iftar: '5:52 PM' },
            { day: 21, date: 'Mar 10', ramadanDay: 21, fajr: '4:55 AM', dhuhr: '12:03 PM', asr: '3:30 PM', maghrib: '5:53 PM', isha: '7:08 PM', sehri: '4:40 AM', iftar: '5:53 PM' },
            { day: 22, date: 'Mar 11', ramadanDay: 22, fajr: '4:54 AM', dhuhr: '12:03 PM', asr: '3:31 PM', maghrib: '5:54 PM', isha: '7:09 PM', sehri: '4:39 AM', iftar: '5:54 PM' },
            { day: 23, date: 'Mar 12', ramadanDay: 23, fajr: '4:53 AM', dhuhr: '12:03 PM', asr: '3:32 PM', maghrib: '5:55 PM', isha: '7:10 PM', sehri: '4:38 AM', iftar: '5:55 PM' },
            { day: 24, date: 'Mar 13', ramadanDay: 24, fajr: '4:52 AM', dhuhr: '12:03 PM', asr: '3:33 PM', maghrib: '5:56 PM', isha: '7:11 PM', sehri: '4:37 AM', iftar: '5:56 PM' },
            { day: 25, date: 'Mar 14', ramadanDay: 25, fajr: '4:51 AM', dhuhr: '12:03 PM', asr: '3:34 PM', maghrib: '5:57 PM', isha: '7:12 PM', sehri: '4:36 AM', iftar: '5:57 PM' },
            { day: 26, date: 'Mar 15', ramadanDay: 26, fajr: '4:50 AM', dhuhr: '12:03 PM', asr: '3:35 PM', maghrib: '5:58 PM', isha: '7:13 PM', sehri: '4:35 AM', iftar: '5:58 PM' },
            { day: 27, date: 'Mar 16', ramadanDay: 27, fajr: '4:49 AM', dhuhr: '12:03 PM', asr: '3:36 PM', maghrib: '5:59 PM', isha: '7:14 PM', sehri: '4:34 AM', iftar: '5:59 PM' },
            { day: 28, date: 'Mar 17', ramadanDay: 28, fajr: '4:48 AM', dhuhr: '12:03 PM', asr: '3:37 PM', maghrib: '6:00 PM', isha: '7:15 PM', sehri: '4:33 AM', iftar: '6:00 PM' },
            { day: 29, date: 'Mar 18', ramadanDay: 29, fajr: '4:47 AM', dhuhr: '12:03 PM', asr: '3:38 PM', maghrib: '6:01 PM', isha: '7:16 PM', sehri: '4:32 AM', iftar: '6:01 PM' },
            { day: 30, date: 'Mar 19', ramadanDay: 30, fajr: '4:46 AM', dhuhr: '12:03 PM', asr: '3:39 PM', maghrib: '6:02 PM', isha: '7:17 PM', sehri: '4:31 AM', iftar: '6:02 PM' }
        ]
    },
    islamabad: {
        name: 'Islamabad',
        times: [] // Will be populated below
    },
    faisalabad: {
        name: 'Faisalabad',
        times: []
    },
    rawalpindi: {
        name: 'Rawalpindi',
        times: []
    },
    multan: {
        name: 'Multan',
        times: []
    },
    peshawar: {
        name: 'Peshawar',
        times: []
    },
    quetta: {
        name: 'Quetta',
        times: []
    },
    hyderabad: {
        name: 'Hyderabad',
        times: []
    },
    sialkot: {
        name: 'Sialkot',
        times: []
    }
};

// Populate cities with similar times to Lahore or Karachi
prayerTimes.islamabad.times = prayerTimes.lahore.times.map(t => ({ ...t }));
prayerTimes.faisalabad.times = prayerTimes.lahore.times.map(t => ({ ...t }));
prayerTimes.rawalpindi.times = prayerTimes.lahore.times.map(t => ({ ...t }));
prayerTimes.multan.times = prayerTimes.lahore.times.map(t => ({ ...t }));
prayerTimes.peshawar.times = prayerTimes.lahore.times.map(t => ({ ...t }));
prayerTimes.quetta.times = prayerTimes.lahore.times.map(t => ({ ...t }));
prayerTimes.hyderabad.times = prayerTimes.karachi.times.map(t => ({ ...t }));
prayerTimes.sialkot.times = prayerTimes.lahore.times.map(t => ({ ...t }));

// ============================================
// Global Variables
// ============================================
let userName = '';
let userCity = '';

// ============================================
// DOM Elements
// ============================================
const formContainer = document.getElementById('formContainer');
const userForm = document.getElementById('userForm');
const welcomePopup = document.getElementById('welcomePopup');
const displayName = document.getElementById('displayName');
const nextBtn = document.getElementById('nextBtn');
const mainContent = document.getElementById('mainContent');
const displayCity = document.getElementById('displayCity');
const tableBody = document.getElementById('tableBody');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');

// ============================================
// Form Submission Handler
// ============================================
userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    userName = document.getElementById('userName').value.trim();
    userCity = document.getElementById('userCity').value;
    
    if (!userName || !userCity) {
        alert('Please fill in all fields');
        return;
    }
    
    // Hide form with animation
    formContainer.classList.add('hidden');
    
    // Show welcome popup after a short delay
    setTimeout(() => {
        displayName.textContent = userName;
        welcomePopup.classList.add('show');
    }, 300);
});

// ============================================
// Next Button Handler (Welcome Popup)
// ============================================
nextBtn.addEventListener('click', () => {
    // Hide welcome popup
    welcomePopup.classList.remove('show');
    
    // Show main content after animation
    setTimeout(() => {
        welcomePopup.style.display = 'none';
        displayCity.textContent = prayerTimes[userCity].name;
        generateCalendar();
        mainContent.classList.add('show');
    }, 300);
});

// ============================================
// Generate Calendar Table
// ============================================
function generateCalendar() {
    const cityData = prayerTimes[userCity];
    if (!cityData) return;
    
    tableBody.innerHTML = '';
    
    // Get current date for highlighting
    const today = new Date();
    const currentDate = today.getDate();
    const currentMonth = today.getMonth();
    
    cityData.times.forEach((day, index) => {
        const row = document.createElement('tr');
        
        // Check if this is today (simplified check - you can enhance this)
        const isToday = index === 0; // For demo, highlight first day. You can add proper date logic
        
        // Parse date to check if it's today
        const dayDate = day.date.split(' ');
        const dayNum = parseInt(dayDate[1]);
        const isCurrentDay = (dayNum === currentDate && dayDate[0] === 'Feb' && currentMonth === 1) ||
                            (dayNum === currentDate && dayDate[0] === 'Mar' && currentMonth === 2);
        
        if (isCurrentDay || isToday) {
            row.classList.add('current-day');
        }
        
        row.innerHTML = `
            <td>${day.day}</td>
            <td>${day.date}</td>
            <td>${day.ramadanDay}</td>
            <td class="fajr-time time-cell">${day.fajr}</td>
            <td class="time-cell">${day.dhuhr}</td>
            <td class="time-cell">${day.asr}</td>
            <td class="maghrib-time time-cell">${day.maghrib}</td>
            <td class="time-cell">${day.isha}</td>
            <td class="time-cell">${day.sehri}</td>
            <td class="time-cell">${day.iftar}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// ============================================
// Theme Toggle Functionality
// ============================================
// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeButton(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
    if (theme === 'light') {
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark Mode';
    } else {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light Mode';
    }
}

// ============================================
// Initialize on Page Load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Check if user has already submitted form (for page refresh)
    const savedName = localStorage.getItem('userName');
    const savedCity = localStorage.getItem('userCity');
    
    if (savedName && savedCity) {
        userName = savedName;
        userCity = savedCity;
        formContainer.classList.add('hidden');
        welcomePopup.style.display = 'none';
        displayCity.textContent = prayerTimes[userCity].name;
        generateCalendar();
        mainContent.classList.add('show');
    }
    
    // Save user data when form is submitted
    userForm.addEventListener('submit', () => {
        localStorage.setItem('userName', userName);
        localStorage.setItem('userCity', userCity);
    });
});

