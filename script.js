// الاقتباسات القرآنية
const quotes = [
        { text: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ ۚ", reference: "سورة الحديد - 4", wisdom: "الله دائماً معك." },
        { text: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", reference: "سورة الشرح - 6", wisdom: "التفاؤل رغم الصعوبات." },
        { text: "وَاللَّهُ خَيْرُ الرَّازِقِينَ", reference: "سورة الجمعة - 11", wisdom: "الثقة في رزق الله." },
        { text: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا", reference: "سورة البقرة - 286", wisdom: "الله لا يثقل عليك بما لا تتحمل." },
        { text: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", reference: "سورة الشرح - 6", wisdom: "الأمل يتبع كل شدة." },
        { text: "وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ", reference: "سورة النحل - 127", wisdom: "الصبر بالله ومعونته." },
        { text: "فَاذْكُرُونِي أَذْكُرْكُمْ", reference: "سورة البقرة - 152", wisdom: "اذكر الله ليذكرك." },
        { text: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ", reference: "سورة البقرة - 186", wisdom: "الله قريب من عباده." },
        { text: "وَتَوَكَّلْ عَلَى اللَّهِ وَكَفَىٰ بِاللَّهِ وَكِيلًا", reference: "سورة الأحزاب - 3", wisdom: "التوكل على الله هو الكفاية." },
        { text: "إِنَّ رَبَّكَ وَاسِعُ الْمَغْفِرَةِ", reference: "سورة النجم - 32", wisdom: "مغفرة الله واسعة." },
        { text: "إِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ", reference: "سورة التوبة - 120", wisdom: "الله لا يضيع عمل الخير." },
        { text: "إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ", reference: "سورة آل عمران - 159", wisdom: "محبة الله للمتوكلين." },
        { text: "اللَّهُ لَطِيفٌ بِعِبَادِهِ", reference: "سورة الشورى - 19", wisdom: "الله لطيف ورحيم." },
        { text: "إِنَّ رَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ", reference: "سورة الأعراف - 156", wisdom: "رحمة الله تشمل كل شيء." },
        { text: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا", reference: "سورة الطلاق - 2", wisdom: "التقوى تفتح أبواب الفرج." },
        { text: "لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا", reference: "سورة التوبة - 40", wisdom: "الله معنا في كل الظروف." },
        { text: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ", reference: "سورة البقرة - 153", wisdom: "الله مع الصابرين." },
        { text: "إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ", reference: "سورة الأعراف - 56", wisdom: "رحمة الله قريبة من المحسنين." },
        { text: "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ", reference: "سورة البقرة - 222", wisdom: "محبة الله للتائبين." },
        { text: "وَسِعَ رَبُّنَا كُلَّ شَيْءٍ عِلْمًا", reference: "سورة الأعراف - 89", wisdom: "علم الله يشمل كل شيء." },
        { text: "وَكَانَ بِالْمُؤْمِنِينَ رَحِيمًا", reference: "سورة الأحزاب - 43", wisdom: "رحمة الله بالمؤمنين." },
        { text: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ", reference: "سورة النور - 35", wisdom: "الله هو النور في كل مكان." },
        { text: "إِنَّ اللّهَ غَفُورٌ رَّحِيمٌ", reference: "سورة البقرة - 173", wisdom: "مغفرة الله ورحمته واسعة." },
        { text: "لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ", reference: "سورة البقرة - 38", wisdom: "الأمان مع الله." },
        { text: "وَتُوبُوا إِلَى اللَّهِ جَمِيعًا", reference: "سورة النور - 31", wisdom: "التوبة طريق العودة إلى الله." },
        { text: "إِنَّمَا يُوفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ", reference: "سورة الزمر - 10", wisdom: "أجر الصبر عظيم." },
        { text: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مِنْ أَمْرِهِ يُسْرًا", reference: "سورة الطلاق - 4", wisdom: "التقوى تفتح أبواب التيسير." },
        { text: "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ", reference: "سورة الأعراف - 156", wisdom: "رحمة الله تشمل كل شيء." },
        { text: "فَإِنَّ اللَّهَ شَاكِرٌ عَلِيمٌ", reference: "سورة البقرة - 158", wisdom: "الله يشكر الطاعات." },
        { text: "إِنَّ اللَّهَ يُحِبُّ الْمُتَقِينَ", reference: "سورة آل عمران - 76", wisdom: "محبة الله للمتقين." },
        { text: "اللَّهُ بِكُلِّ شَيْءٍ عَلِيمٌ", reference: "سورة النساء - 32", wisdom: "علم الله شامل." },
        { text: "إِنَّ اللّهَ يُحِبُّ الْمُحْسِنِينَ", reference: "سورة آل عمران - 134", wisdom: "محبة الله للمحسنين." },
        { text: "إِنَّ اللّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ", reference: "سورة يوسف - 56", wisdom: "أجر الإحسان محفوظ عند الله." },
        { text: "وَفِي السَّمَاءِ رِزْقُكُمْ وَمَا تُوعَدُونَ", reference: "سورة الذاريات - 22", wisdom: "رزق الله آتٍ مهما تأخر." },
        { text: "لَا يَحْزُنُهُمُ الْفَزَعُ الْأَكْبَرُ", reference: "سورة الأنبياء - 103", wisdom: "الأمان من الخوف في الآخرة." },
        { text: "مَا أَصَابَكَ مِنْ حَسَنَةٍ فَمِنَ اللَّهِ", reference: "سورة النساء - 79", wisdom: "النعم من عند الله." },
        { text: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ", reference: "سورة هود - 88", wisdom: "التوفيق بيد الله." },
        { text: "وَأَنَّ اللّهَ مَعَ الْمُؤْمِنِينَ", reference: "سورة الأنفال - 19", wisdom: "الله مع المؤمنين في كل وقت." },
        { text: "وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ", reference: "سورة البقرة - 255", wisdom: "ملك الله لا حدود له." }
    // أضف المزيد من الاقتباسات حتى 100
];

let currentQuote = 0;
let isMusicPlaying = false;

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

// قائمة الأغاني
const songs = [];
const audioElement = document.getElementById("audio");
let currentSong = 0;

// تحميل 3 أغاني مفضلة فقط، وباقي الأغاني يتم تشغيلها من البوكس
function loadSongs() {
    const songList = document.getElementById("song-list");

    // 3 أغاني مفضلة
    const favoriteSongs = ["song1.mp3", "song2.mp3", "song3.mp3"];

    favoriteSongs.forEach((songFile, index) => {
        let songTitle = songFile.replace('.mp3', '');  // استخراج اسم الأغنية بدون ".mp3"
        let song = { title: songTitle, src: `./music/${songFile}` };  // مسار الأغنية
        songs.push(song);

        // إضافة الأغاني إلى قائمة المفضلة في الواجهة
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-music"></i> ${song.title}`;
        li.onclick = () => selectSong(index);  // اختيار الأغنية عند النقر
        songList.appendChild(li);
    });

    // باقي الأغاني (30 أغنية في البوكس)
    for (let i = 4; i <= 30; i++) {  // بدءًا من الأغنية الرابعة
        let songFile = `song${i}.mp3`;
        let songTitle = songFile.replace('.mp3', '');
        let song = { title: songTitle, src: `./music/${songFile}` };
        songs.push(song);
    }
}

// استدعاء دالة تحميل الأغاني عند بدء الصفحة
loadSongs();

function togglePlay() {
    const playPauseBtn = document.getElementById("play-pause");

    if (audioElement.paused) {
        audioElement.src = songs[currentSong].src;  // تحميل مسار الأغنية الحالية
        audioElement.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';  // تغيير الأيقونة إلى إيقاف مؤقت
        document.getElementById("song-title").textContent = songs[currentSong].title;  // عرض اسم الأغنية
    } else {
        audioElement.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';  // تغيير الأيقونة إلى تشغيل
    }
}

// الانتقال إلى الأغنية التالية وتشغيلها تلقائيًا
function nextSong() {
    currentSong = (currentSong + 1) % songs.length;  // الانتقال إلى الأغنية التالية
    playSong();  // تشغيل الأغنية تلقائيًا
}

// الانتقال إلى الأغنية السابقة وتشغيلها تلقائيًا
function prevSong() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;  // الانتقال إلى الأغنية السابقة
    playSong();  // تشغيل الأغنية تلقائيًا
}

// اختيار أغنية من قائمة المفضلة وتشغيلها تلقائيًا
function selectSong(index) {
    currentSong = index;  // تحديث الأغنية الحالية بناءً على اختيار المستخدم
    playSong();  // تشغيل الأغنية تلقائيًا عند الاختيار
}

// تشغيل الأغنية الحالية
function playSong() {
    audioElement.src = songs[currentSong].src;  // تحميل مسار الأغنية الحالية
    audioElement.play();  // تشغيل الأغنية
    document.getElementById("play-pause").innerHTML = '<i class="fas fa-pause"></i>';  // تغيير الأيقونة إلى إيقاف مؤقت
    document.getElementById("song-title").textContent = songs[currentSong].title;  // عرض اسم الأغنية
}

// عند تحميل الصفحة، عرض أول قسم (الاقتباسات القرآنية)
document.addEventListener('DOMContentLoaded', () => {
    showSection('quran-section');
});

// صور شام ورسائل النجاح
const messages = [
    "نتمنى لكِ النجاح والتوفيق!",
    "حفظكِ الله وبارك فيكِ!",
    "أتمنى لكِ السعادة والفرح!",
    "أنتِ تستحقين كل خير في هذه الحياة!",
    "أتمنى أن تملأ أيامكِ بالسعادة والنجاح!",
    "كل يوم هو فرصة جديدة لتحقيق أهدافكِ!",
    "أنتِ قوية وقادرة على مواجهة كل التحديات!",
    "أتمنى لكِ يومًا مليئًا بالتفاؤل والطاقة الإيجابية!",
    "لا تتوقفي عن الحلم والسعي نحو الأفضل!",
    "الله معكِ في كل خطوة تخطينها!",
    "حافظي على ابتسامتكِ فهي سر نجاحكِ!",
    "أنتِ مصدر إلهام للكثيرين، فتابعي تألقكِ!",
    "كلما اشتدت الصعاب، اقترب الفرج!",
    "استمري في العمل الجاد، فالنجاح قريب!",
    "الله يكتب لكِ النجاح في كل مساعيكِ!",
    "أنتِ أقوى مما تعتقدين، وناجحة بكل الأحوال!",
    "حلمكِ قريب، ثابري ولا تيأسي!",
    "أتمنى لكِ الخير والنجاح في كل خطواتكِ!",
    "ثقي بنفسكِ فالعالم ينتظر نجاحكِ!",
    "أنتِ شعاع نور في حياة من حولكِ، لا تتوقفي عن الإشعاع!"
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
    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#ff6699"/>
    </svg>
`;

particlesJS("particles-js", {
  particles: {
    number: {
      value: 60, // عدد القلوب
      density: {
        enable: true,
        value_area: 800,
      },
    },
    shape: {
      type: "custom",
      custom: {
        src: heartPath,
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.6,
      random: true,
    },
    size: {
      value: 10,
      random: true,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "bottom",
      random: false,
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
    },
  },
  retina_detect: true,
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';

    if (sectionId === 'quran-section') {
        if (!audioElement.paused) {
            audioElement.pause();
            isMusicPlaying = true;
        }
    } else {
        if (isMusicPlaying) {
            audioElement.play();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('quran-section');
});
