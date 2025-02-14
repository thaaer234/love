// الاقتباسات القرآنية
const quotes = [
    { text: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ ۚ", reference: "سورة الحديد - 4", wisdom: "الله دائماً معك." },
    { text: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", reference: "سورة الشرح - 6", wisdom: "التفاؤل رغم الصعوبات." },
    { text: "وَاللَّهُ خَيْرُ الرَّازِقِينَ", reference: "سورة الجمعة - 11", wisdom: "الثقة في رزق الله." },
    // أضف المزيد من الاقتباسات حتى 100
];

let currentQuote = 0;

function showQuote() {
    const quoteText = document.getElementById("quote");
    const referenceText = document.getElementById("reference");
    quoteText.innerHTML = `${quotes[currentQuote].text} <br><small>${quotes[currentQuote].wisdom}</small>`;
    referenceText.innerHTML = quotes[currentQuote].reference;
}

function nextQuote() {
    currentQuote = (currentQuote + 1) % quotes.length;
    showQuote();
}

function prevQuote() {
    currentQuote = (currentQuote - 1 + quotes.length) % quotes.length;
    showQuote();
}

document.addEventListener("DOMContentLoaded", showQuote);

// الموسيقى
const songs = [
    { title: "أغنية 1", src: "./music/song1.mp3" },
    { title: "أغنية 2", src: "./music/song2.mp3" },
    { title: "أغنية 3", src: "./music/song3.mp3" }
];
let currentSong = 0;

function togglePlay() {
    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("play-pause");

    if (audio.paused) {
        audio.src = songs[currentSong].src;
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        document.getElementById("song-title").textContent = songs[currentSong].title;
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function nextSong() {
    currentSong = (currentSong + 1) % songs.length;
    togglePlay();
}

function prevSong() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    togglePlay();
}

// اختيار أغنية من قائمة المفضلة
function selectSong(index) {
    currentSong = index;
    togglePlay();
}

// صور شام ورسائل النجاح
const messages = [
    "نتمنى لكِ النجاح والتوفيق!",
    "حفظكِ الله وبارك فيكِ!",
    "أتمنى لكِ السعادة والفرح!",
    "أنتِ تستحقين كل خير في هذه الحياة!"
];

function showSuccessMessage() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const messageBox = document.getElementById("message-box");
    const messageContent = document.getElementById("message-content");
    
    messageContent.textContent = randomMessage;
    messageBox.style.display = "block";
}

function closeMessage() {
    const messageBox = document.getElementById("message-box");
    messageBox.style.display = "none";
}

// تفعيل الخلفية ثلاثية الأبعاد مع رسم القلوب باستخدام SVG
const heartPath = `
    <svg width="100" height="100" viewBox="0 0 24 24" fill="#ff3366" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
`;

// إعداد القلوب المتحركة باستخدام مكتبة particles.js
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 60,  // عدد القلوب
        "density": {
          "enable": true,
          "value_area": 800  // كثافة توزيع القلوب
        }
      },
      "color": {
        "value": "#ff3366"  // لون القلوب
      },
      "shape": {
        "type": "polygon",  // استخدام الشكل المتعدد الأضلاع لرسم القلب
        "polygon": {
          "nb_sides": 6  // عدد الأضلاع
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true
      },
      "size": {
        "value": 15,
        "random": true
      },
      "move": {
        "enable": true,
        "speed": 6,  // سرعة حركة القلوب
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"  // التفاعل عند مرور الماوس فوق القلوب
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"  // التفاعل عند النقر
        }
      }
    },
    "retina_detect": true
  });
  
  
// عرض القسم المختار
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

// عند تحميل الصفحة، عرض أول قسم
document.addEventListener('DOMContentLoaded', () => {
    showSection('quran-section');
});
