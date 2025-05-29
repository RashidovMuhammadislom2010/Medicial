// const doctors = [
//   {
//     name: "Nargiza Farhadovna Allambergenova",
//     lavozimi: "Kosmetolog",
//     ish_kunlari: "Dushanba - Jumaa, 09:00 - 17:00",
//     tel: "+998 90 123 45 67",
//     biografiya:
//       "Ushbu mutaxassis o'z sohasida yuqori malakaga ega bo'lib, ko'plab muvaffaqiyatli davolash ishlari bilan tanilgan. U bemorlar bilan doimo samimiy muloqotda bo'lib, har bir holatga individual yondashadi. Shuningdek, u ilmiy konferensiyalarda faol qatnashib, sohasidagi yangiliklardan doimo xabardor bo'lib boradi. Uning ish uslubi va professional yondashuvi bemorlar orasida katta hurmatga sazovor. Davolash jarayonida zamonaviy uskunalardan va ilg'or metodlardan foydalanadi, bu esa samaradorlikni oshiradi.",
//     "ta'lim": "Toshkent Tibbiyot Akademiyasi",
//     tajriba: "10 yillik ish tajribasiga ega.",
//     xonasi: "201",
//     email: "doctor1@clinic.uz",
//     img: "images/doc1.png",
//   },
//   {
//     name: "Maqsudova Dilnoza Saidkamolovna",
//     lavozimi: "Estetik ginekolog",
//     ish_kunlari: "Dushanba - Jumaa, 09:00 - 17:00",
//     tel: "+998 91 234 56 78",
//     biografiya:
//       "Ushbu mutaxassis o'z sohasida yuqori malakaga ega bo'lib, ko'plab muvaffaqiyatli davolash ishlari bilan tanilgan. U bemorlar bilan doimo samimiy muloqotda bo'lib, har bir holatga individual yondashadi. Shuningdek, u ilmiy konferensiyalarda faol qatnashib, sohasidagi yangiliklardan doimo xabardor bo'lib boradi. Uning ish uslubi va professional yondashuvi bemorlar orasida katta hurmatga sazovor. Davolash jarayonida zamonaviy uskunalardan va ilg'or metodlardan foydalanadi, bu esa samaradorlikni oshiradi.",
//     "ta'lim": "Toshkent Tibbiyot Akademiyasi",
//     tajriba: "10 yillik ish tajribasiga ega.",
//     xonasi: "202",
//     email: "doctor2@clinic.uz",
//     img: "images/doc2.png",
//   },
//   {
//     name: "Muslimov Ulug'bek Yakubjanovich",
//     lavozimi: "Plastik jarroh",
//     ish_kunlari: "Dushanba - Jumaa, 09:00 - 17:00",
//     tel: "+998 93 345 67 89",
//     biografiya:
//       "Ushbu mutaxassis o'z sohasida yuqori malakaga ega bo'lib, ko'plab muvaffaqiyatli davolash ishlari bilan tanilgan. U bemorlar bilan doimo samimiy muloqotda bo'lib, har bir holatga individual yondashadi. Shuningdek, u ilmiy konferensiyalarda faol qatnashib, sohasidagi yangiliklardan doimo xabardor bo'lib boradi. Uning ish uslubi va professional yondashuvi bemorlar orasida katta hurmatga sazovor. Davolash jarayonida zamonaviy uskunalardan va ilg'or metodlardan foydalanadi, bu esa samaradorlikni oshiradi.",
//     "ta'lim": "Toshkent Tibbiyot Akademiyasi",
//     tajriba: "10 yillik ish tajribasiga ega.",
//     xonasi: "303",
//     email: "doctor3@clinic.uz",
//     img: "images/doc3.png",
//   },
//   {
//     name: "Ortiqov Aziz Farixdjanovich",
//     lavozimi: "Dermatolog",
//     ish_kunlari: "Dushanba - Jumaa, 09:00 - 17:00",
//     tel: "+998 94 456 78 90",
//     biografiya:
//       "Ushbu mutaxassis o'z sohasida yuqori malakaga ega bo'lib, ko'plab muvaffaqiyatli davolash ishlari bilan tanilgan. U bemorlar bilan doimo samimiy muloqotda bo'lib, har bir holatga individual yondashadi. Shuningdek, u ilmiy konferensiyalarda faol qatnashib, sohasidagi yangiliklardan doimo xabardor bo'lib boradi. Uning ish uslubi va professional yondashuvi bemorlar orasida katta hurmatga sazovor. Davolash jarayonida zamonaviy uskunalardan va ilg'or metodlardan foydalanadi, bu esa samaradorlikni oshiradi.",
//     "ta'lim": "Toshkent Tibbiyot Akademiyasi",
//     tajriba: "10 yillik ish tajribasiga ega.",
//     xonasi: "305",
//     email: "doctor4@clinic.uz",
//     img: "images/doc4.png",
//   },
//   {
//     name: "Safaeva Shirinxon Furkatovna",
//     lavozimi: "Ginekolog",
//     ish_kunlari: "Dushanba - Jumaa, 09:00 - 17:00",
//     tel: "+998 95 567 89 01",
//     biografiya:
//       "Ushbu mutaxassis o'z sohasida yuqori malakaga ega bo'lib, ko'plab muvaffaqiyatli davolash ishlari bilan tanilgan. U bemorlar bilan doimo samimiy muloqotda bo'lib, har bir holatga individual yondashadi. Shuningdek, u ilmiy konferensiyalarda faol qatnashib, sohasidagi yangiliklardan doimo xabardor bo'lib boradi. Uning ish uslubi va professional yondashuvi bemorlar orasida katta hurmatga sazovor. Davolash jarayonida zamonaviy uskunalardan va ilg'or metodlardan foydalanadi, bu esa samaradorlikni oshiradi.",
//     "ta'lim": "Toshkent Tibbiyot Akademiyasi",
//     tajriba: "10 yillik ish tajribasiga ega.",
//     xonasi: "207",
//     email: "doctor5@clinic.uz",
//     img: "images/doc5.png",
//   },
//   {
//     name: "Magrupova Iroda Jahongirovna",
//     lavozimi: "Dermatokosmetolog",
//     ish_kunlari: "Dushanba - Jumaa, 09:00 - 17:00",
//     tel: "+998 97 678 90 12",
//     biografiya:
//       "Ushbu mutaxassis o'z sohasida yuqori malakaga ega bo'lib, ko'plab muvaffaqiyatli davolash ishlari bilan tanilgan. U bemorlar bilan doimo samimiy muloqotda bo'lib, har bir holatga individual yondashadi. Shuningdek, u ilmiy konferensiyalarda faol qatnashib, sohasidagi yangiliklardan doimo xabardor bo'lib boradi. Uning ish uslubi va professional yondashuvi bemorlar orasida katta hurmatga sazovor. Davolash jarayonida zamonaviy uskunalardan va ilg'or metodlardan foydalanadi, bu esa samaradorlikni oshiradi.",
//     "ta'lim": "Toshkent Tibbiyot Akademiyasi",
//     tajriba: "10 yillik ish tajribasiga ega.",
//     xonasi: "210",
//     email: "doctor6@clinic.uz",
//     img: "images/doc6.png",
//   },
//   {
//     name: "Musaeva Gulmira Vladimirovna",
//     lavozimi: "Kosmetolog",
//     ish_kunlari: "Dushanba - Jumaa, 09:00 - 17:00",
//     tel: "+998 98 789 01 23",
//     biografiya:
//       "Ushbu mutaxassis o'z sohasida yuqori malakaga ega bo'lib, ko'plab muvaffaqiyatli davolash ishlari bilan tanilgan. U bemorlar bilan doimo samimiy muloqotda bo'lib, har bir holatga individual yondashadi. Shuningdek, u ilmiy konferensiyalarda faol qatnashib, sohasidagi yangiliklardan doimo xabardor bo'lib boradi. Uning ish uslubi va professional yondashuvi bemorlar orasida katta hurmatga sazovor. Davolash jarayonida zamonaviy uskunalardan va ilg'or metodlardan foydalanadi, bu esa samaradorlikni oshiradi.",
//     "ta'lim": "Toshkent Tibbiyot Akademiyasi",
//     tajriba: "10 yillik ish tajribasiga ega.",
//     xonasi: "201",
//     email: "doctor7@clinic.uz",
//     img: "images/doc7.png",
//   },
//   {
//     name: "Tajitdinov Ergash Yarkinovich",
//     lavozimi: "UZD shifokori",
//     ish_kunlari: "Dushanba - Jumaa, 09:00 - 17:00",
//     tel: "+998 99 890 12 34",
//     biografiya:
//       "Ushbu mutaxassis o'z sohasida yuqori malakaga ega bo'lib, ko'plab muvaffaqiyatli davolash ishlari bilan tanilgan. U bemorlar bilan doimo samimiy muloqotda bo'lib, har bir holatga individual yondashadi. Shuningdek, u ilmiy konferensiyalarda faol qatnashib, sohasidagi yangiliklardan doimo xabardor bo'lib boradi. Uning ish uslubi va professional yondashuvi bemorlar orasida katta hurmatga sazovor. Davolash jarayonida zamonaviy uskunalardan va ilg'or metodlardan foydalanadi, bu esa samaradorlikni oshiradi.",
//     "ta'lim": "Toshkent Tibbiyot Akademiyasi",
//     tajriba: "10 yillik ish tajribasiga ega.",
//     xonasi: "106",
//     email: "doctor8@clinic.uz",
//     img: "images/doc8.png",
//   },
//   {
//     name: "Usmonova Xilolaxon Anvarovna",
//     lavozimi: "Ginekolog",
//     ish_kunlari: "Dushanba - Jumaa, 09:00 - 17:00",
//     tel: "+998 90 901 23 45",
//     biografiya:
//       "Ushbu mutaxassis o'z sohasida yuqori malakaga ega bo'lib, ko'plab muvaffaqiyatli davolash ishlari bilan tanilgan. U bemorlar bilan doimo samimiy muloqotda bo'lib, har bir holatga individual yondashadi. Shuningdek, u ilmiy konferensiyalarda faol qatnashib, sohasidagi yangiliklardan doimo xabardor bo'lib boradi. Uning ish uslubi va professional yondashuvi bemorlar orasida katta hurmatga sazovor. Davolash jarayonida zamonaviy uskunalardan va ilg'or metodlardan foydalanadi, bu esa samaradorlikni oshiradi.",
//     "ta'lim": "Toshkent Tibbiyot Akademiyasi",
//     tajriba: "10 yillik ish tajribasiga ega.",
//     xonasi: "208",
//     email: "doctor9@clinic.uz",
//     img: "images/doc9.png",
//   },
// ];


const doctors = [
  {
    id: 3,
    name: "Ortiqov Aziz Farixdjanovich",
    lavozimi: "Дерматология",
    img: "./img/Aziz.svg"
  },
  {
    id: 4,
    name: "Safaeva Shirinxon Furkatovna",
    lavozimi: "Гинекология",
    img: "./img/shirin.svg"
  },
  {
    id: 5,
    name: "Magrupova Iroda Jahongirovna",
    lavozimi: "Дерматокосметология",
    img: "./img/iroda.svg"
  },
  {
    id: 6,
    name: "Musaeva Gulmira Vladimirovna",
    lavozimi: "Косметология",
    img: "./img/gulmira.svg"
  },
  {
    id: 7,
    name: "Tajitdinov Ergash Yarkinovich",
    lavozimi: "УЗИ",
    img: "./img/Ergash.svg"
  }
];

const doctorList = document.getElementById('doctorList');

doctors.forEach((doctor) => {
  const li = document.createElement('li');
  li.className = 'expert__item';

  li.innerHTML = `
    <a href="./doctors.html" data-doctor-id="${doctor.id}">
      <img src="${doctor.img}" alt="" class="expert__item-img">
      <h3 class="expert__item-title">${doctor.name}</h3>
      <p class="expert__item-text">${doctor.lavozimi}</p>
    </a>
  `;

  doctorList.appendChild(li);
});

// doctors.html sahifasida
const urlParams = new URLSearchParams(window.location.search);
const doctorId = parseInt(urlParams.get('id'));

const selectedDoctor = doctors.find(doc => doc.id === doctorId);

if (selectedDoctor) {
  // sahifadagi teglarni yangilash:
  document.querySelector('.doctor__name').textContent = selectedDoctor.name;
  document.querySelector('.doctor__title').textContent = selectedDoctor.lavozimi;
  document.querySelector('.doctor__img').src = selectedDoctor.img;
  // va h.k.
}
