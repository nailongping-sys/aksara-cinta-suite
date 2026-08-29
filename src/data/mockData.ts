export type Role = "admin" | "user";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  tier: "Free" | "Gold" | "Platinum" | "Owner";
  invitations: number;
  quota: number;
  status: "Aktif" | "Ditangguhkan" | "Diblokir";
  joined: string;
};

export type Invitation = {
  id: string;
  slug: string;
  title: string;
  groom: string;
  bride: string;
  template: string;
  status: "Aktif" | "Draf";
  views: number;
  date: string;
  ownerId: string;
};

export type Template = {
  id: string;
  name: string;
  slug: string;
  tag: string;
  category: "Tradisional" | "Modern" | "Signature" | "Religius" | "Artistik";
  theme: string;
  thumb: string;
};

export type Prayer = {
  id: string;
  title: string;
  category: string;
  original: string;
  latin: string;
  translation: string;
};

export type Quote = {
  id: string;
  text: string;
  author: string;
  mood: string;
};

export type SacredText = {
  id: string;
  title: string;
  category: string;
  body: string;
};

export type Track = {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  url: string;
};

export type Asset = {
  id: string;
  name: string;
  category: string;
  size: string;
  url: string;
};

export type Rsvp = {
  id: string;
  guest: string;
  slug: string;
  attendance: "Hadir" | "Ragu" | "Tidak Hadir";
  pax: number;
  message: string;
  time: string;
};

export type Order = {
  id: string;
  customer: string;
  email: string;
  plan: "Gold" | "Platinum";
  amount: number;
  method: string;
  status: "Lunas" | "Menunggu" | "Kadaluarsa";
  date: string;
};

export type Guest = {
  id: string;
  name: string;
  category: string;
  phone: string;
  pax: number;
  sent: boolean;
};

const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=70`;

export const users: User[] = [
  {
    id: "u-1",
    name: "Eka Syarif Maulana",
    email: "eka.ckp16799@gmail.com",
    role: "admin",
    tier: "Owner",
    invitations: 12,
    quota: 999,
    status: "Aktif",
    joined: "2025-01-04",
  },
  {
    id: "u-2",
    name: "Reza & Nadia",
    email: "reza@aksaracinta.com",
    role: "user",
    tier: "Platinum",
    invitations: 3,
    quota: 20,
    status: "Aktif",
    joined: "2026-02-11",
  },
  {
    id: "u-3",
    name: "Dimas & Rini",
    email: "dimas@aksaracinta.com",
    role: "user",
    tier: "Gold",
    invitations: 2,
    quota: 10,
    status: "Aktif",
    joined: "2026-03-02",
  },
  {
    id: "u-4",
    name: "Budi & Siti",
    email: "budi@aksaracinta.com",
    role: "user",
    tier: "Free",
    invitations: 1,
    quota: 5,
    status: "Ditangguhkan",
    joined: "2026-04-19",
  },
  {
    id: "u-5",
    name: "Yoga & Ayu",
    email: "yoga@aksaracinta.com",
    role: "user",
    tier: "Gold",
    invitations: 1,
    quota: 10,
    status: "Aktif",
    joined: "2026-05-08",
  },
];

export const invitations: Invitation[] = [
  {
    id: "i-1",
    slug: "reza-nadia",
    title: "Pernikahan Reza & Nadia",
    groom: "Reza Pratama",
    bride: "Nadia Salsabila",
    template: "Matcha Elegan",
    status: "Aktif",
    views: 4218,
    date: "2026-10-12",
    ownerId: "u-2",
  },
  {
    id: "i-2",
    slug: "dimas-rini",
    title: "Pernikahan Dimas & Rini",
    groom: "Dimas Anggara",
    bride: "Rini Kusuma",
    template: "Blue Butterfly",
    status: "Aktif",
    views: 2140,
    date: "2026-09-21",
    ownerId: "u-3",
  },
  {
    id: "i-3",
    slug: "yoga-ayu",
    title: "Pernikahan Yoga & Ayu",
    groom: "Yoga Mahendra",
    bride: "Ayu Lestari",
    template: "Jawa Keraton",
    status: "Draf",
    views: 312,
    date: "2026-11-30",
    ownerId: "u-5",
  },
  {
    id: "i-4",
    slug: "budi-siti",
    title: "Pernikahan Budi & Siti",
    groom: "Budi Santoso",
    bride: "Siti Aminah",
    template: "Islami Arabesque",
    status: "Draf",
    views: 88,
    date: "2026-12-06",
    ownerId: "u-4",
  },
  {
    id: "i-5",
    slug: "arif-mega",
    title: "Pernikahan Arif & Mega",
    groom: "Arif Wibowo",
    bride: "Mega Puspita",
    template: "Rustic Floral",
    status: "Aktif",
    views: 1502,
    date: "2026-08-30",
    ownerId: "u-3",
  },
];

export const templates: Template[] = [
  {
    id: "t-1",
    name: "Blue Butterfly",
    slug: "blue-butterfly",
    tag: "Signature Luxury",
    category: "Signature",
    theme: "Royal Blue / Silver",
    thumb: photo("photo-1519741497674-611481863552"),
  },
  {
    id: "t-2",
    name: "Matcha Elegan",
    slug: "matcha-elegan",
    tag: "Signature",
    category: "Signature",
    theme: "Matcha / Gold",
    thumb: photo("photo-1464366400600-7168b8af9bc3"),
  },
  {
    id: "t-3",
    name: "Jawa Keraton",
    slug: "jawa-keraton",
    tag: "Tradisional",
    category: "Tradisional",
    theme: "Cokelat / Emas",
    thumb: photo("photo-1583939003579-730e3918a45a"),
  },
  {
    id: "t-4",
    name: "Sunda Siger",
    slug: "sunda-siger",
    tag: "Tradisional",
    category: "Tradisional",
    theme: "Krem / Sage",
    thumb: photo("photo-1522673607200-164d1b6ce486"),
  },
  {
    id: "t-5",
    name: "Minimalis Modern",
    slug: "minimalis-modern",
    tag: "Modern",
    category: "Modern",
    theme: "Monokrom",
    thumb: photo("photo-1511285560929-80b456fea0bc"),
  },
  {
    id: "t-6",
    name: "Islami Arabesque",
    slug: "islami-arabesque",
    tag: "Religius",
    category: "Religius",
    theme: "Emerald / Gold",
    thumb: photo("photo-1517457373958-b7bdd4587205"),
  },
  {
    id: "t-7",
    name: "Rustic Floral",
    slug: "rustic-floral",
    tag: "Artistik",
    category: "Artistik",
    theme: "Terracotta / Boho",
    thumb: photo("photo-1465495976277-4387d4b0b4c6"),
  },
  {
    id: "t-8",
    name: "Batak Ulos",
    slug: "batak-ulos",
    tag: "Tradisional",
    category: "Tradisional",
    theme: "Maroon / Hitam",
    thumb: photo("photo-1519225421980-715cb0215aed"),
  },
];

export const prayers: Prayer[] = [
  {
    id: "d-1",
    title: "QS. Ar-Rum: 21",
    category: "Islam",
    original: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا",
    latin: "Wa min ayatihi an khalaqa lakum min anfusikum azwajan",
    translation: "Di antara tanda kekuasaan-Nya, Dia menciptakan pasangan untukmu.",
  },
  {
    id: "d-2",
    title: "QS. An-Nur: 32",
    category: "Islam",
    original: "وَأَنكِحُوا الْأَيَامَىٰ مِنكُمْ",
    latin: "Wa ankihul ayama minkum",
    translation: "Nikahkanlah orang-orang yang masih membujang di antara kamu.",
  },
  {
    id: "d-3",
    title: "1 Korintus 13: 4-7",
    category: "Kristen",
    original: "Love is patient, love is kind",
    latin: "Caritas patiens est",
    translation: "Kasih itu sabar, kasih itu murah hati, ia tidak pernah gagal.",
  },
  {
    id: "d-4",
    title: "Kejadian 2: 24",
    category: "Katolik",
    original: "Erunt duo in carne una",
    latin: "Erunt duo in carne una",
    translation: "Keduanya menjadi satu daging dalam ikatan suci.",
  },
  {
    id: "d-5",
    title: "Mantra Wiwaha",
    category: "Hindu",
    original: "Om Sarva Karya Prasidhantam",
    latin: "Om Sarva Karya Prasidhantam",
    translation: "Semoga segala pekerjaan suci ini berhasil dan diberkati.",
  },
  {
    id: "d-6",
    title: "Doa Metta",
    category: "Budha",
    original: "Sabbe satta bhavantu sukhitatta",
    latin: "Sabbe satta bhavantu sukhitatta",
    translation: "Semoga semua makhluk hidup berbahagia dan penuh cinta kasih.",
  },
];

export const quotes: Quote[] = [
  { id: "q-1", text: "Cinta bukan saling menatap, tapi memandang arah yang sama.", author: "Antoine de Saint", mood: "Filosofis" },
  { id: "q-2", text: "Aku memilihmu, dan akan terus memilihmu setiap hari.", author: "Anonim", mood: "Romantis Klasik" },
  { id: "q-3", text: "Rumah bukan tempat, melainkan namamu di setiap doaku.", author: "Aksara Cinta", mood: "Puitis" },
  { id: "q-4", text: "Sederhana saja: kamu, aku, selamanya.", author: "Anonim", mood: "Minimalis" },
  { id: "q-5", text: "Kita berdua adalah dua bait puisi yang akhirnya berima.", author: "Sapardi", mood: "Puitis" },
  { id: "q-6", text: "Menikah itu seperti wifi, sinyalnya harus selalu dijaga.", author: "Anonim", mood: "Humor" },
  { id: "q-7", text: "Semesta menulis namamu jauh sebelum aku memintanya.", author: "Aksara Cinta", mood: "Filosofis" },
  { id: "q-8", text: "Bersamamu, waktu berhenti menjadi hitungan.", author: "Anonim", mood: "Romantis Klasik" },
];

export const sacredTexts: SacredText[] = [
  { id: "s-1", title: "Basmalah Kaligrafi", category: "Islam", body: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" },
  { id: "s-2", title: "Assalamu'alaikum", category: "Islam", body: "Assalamu'alaikum Warahmatullahi Wabarakatuh" },
  { id: "s-3", title: "Shalom", category: "Kristen", body: "Shalom, damai sejahtera bagi kita semua" },
  { id: "s-4", title: "Om Swastyastu", category: "Hindu", body: "Om Swastyastu" },
  { id: "s-5", title: "Namo Buddhaya", category: "Budha", body: "Namo Buddhaya" },
  { id: "s-6", title: "Salam Sejahtera", category: "Nasional", body: "Salam sejahtera untuk kita semua" },
  { id: "s-7", title: "Doa Walimatul Ursy", category: "Islam", body: "Barakallahu laka wa baraka alaika wa jama'a bainakuma fi khair" },
  { id: "s-8", title: "Penutup Keberkahan", category: "Universal", body: "Merupakan kehormatan bagi kami atas doa restu yang diberikan" },
];

export const music: Track[] = [
  { id: "m-1", title: "Kisah Sempurna", artist: "Mahalini", genre: "Pop Romantis", duration: "04:12", url: "https://cdn.pixabay.com/audio/2022/03/15/audio_c8c8a73467.mp3" },
  { id: "m-2", title: "Beautiful in White", artist: "Shane Filan", genre: "Akustik", duration: "03:45", url: "https://cdn.pixabay.com/audio/2021/11/25/audio_00fa5593f3.mp3" },
  { id: "m-3", title: "Canon in D", artist: "Pachelbel", genre: "Instrumen Piano", duration: "05:02", url: "https://cdn.pixabay.com/audio/2022/10/18/audio_31c2f6b1f6.mp3" },
  { id: "m-4", title: "Gending Ketawang", artist: "Karawitan Jawa", genre: "Tradisional", duration: "06:20", url: "https://cdn.pixabay.com/audio/2022/08/23/audio_d16737dc28.mp3" },
  { id: "m-5", title: "Cinta Sejati", artist: "Bunga Citra Lestari", genre: "Sinematik", duration: "04:30", url: "https://cdn.pixabay.com/audio/2023/03/03/audio_1c1f8b0f4c.mp3" },
  { id: "m-6", title: "Sholawat Badar", artist: "Nissa Sabyan", genre: "Islami", duration: "03:58", url: "https://cdn.pixabay.com/audio/2021/08/09/audio_88447e769f.mp3" },
];

export const assets: Asset[] = Array.from({ length: 12 }, (_, index) => {
  const categories = ["Bingkai", "Ornamen", "Latar", "Pembatas", "Ikon"];
  const ids = [
    "photo-1519681393784-d120267933ba",
    "photo-1500534314209-a25ddb2bd429",
    "photo-1490750967868-88aa4486c946",
    "photo-1509316975850-ff9c5deb0cd9",
  ];
  return {
    id: `a-${index + 1}`,
    name: `ornamen-${index + 1}.png`,
    category: categories[index % categories.length],
    size: index % 2 === 0 ? "1024 x 1024" : "512 x 512",
    url: photo(ids[index % ids.length]),
  };
});

export const rsvps: Rsvp[] = [
  { id: "r-1", guest: "Bapak Budi Hartono", slug: "reza-nadia", attendance: "Hadir", pax: 2, message: "Selamat menempuh hidup baru, semoga sakinah.", time: "2026-08-20 09:12" },
  { id: "r-2", guest: "Ibu Ratna Sari", slug: "reza-nadia", attendance: "Hadir", pax: 4, message: "Bahagia selalu untuk kalian berdua.", time: "2026-08-20 10:02" },
  { id: "r-3", guest: "Andi Kurniawan", slug: "dimas-rini", attendance: "Tidak Hadir", pax: 0, message: "Maaf berhalangan, doa terbaik dari jauh.", time: "2026-08-21 14:20" },
  { id: "r-4", guest: "Keluarga Wijaya", slug: "dimas-rini", attendance: "Hadir", pax: 5, message: "Barakallahu lakuma.", time: "2026-08-21 17:45" },
  { id: "r-5", guest: "Sinta Dewi", slug: "yoga-ayu", attendance: "Ragu", pax: 1, message: "Semoga sempat hadir ya.", time: "2026-08-22 08:31" },
  { id: "r-6", guest: "Rangga Saputra", slug: "reza-nadia", attendance: "Hadir", pax: 2, message: "Ditunggu traktirannya!", time: "2026-08-22 11:10" },
  { id: "r-7", guest: "Maya Anggraini", slug: "arif-mega", attendance: "Hadir", pax: 3, message: "Selamat berbahagia sahabatku.", time: "2026-08-23 09:00" },
  { id: "r-8", guest: "Pak Hendra", slug: "arif-mega", attendance: "Tidak Hadir", pax: 0, message: "Sukses selalu keluarga barunya.", time: "2026-08-23 13:22" },
  { id: "r-9", guest: "Dian Permata", slug: "reza-nadia", attendance: "Ragu", pax: 2, message: "Insya Allah diusahakan hadir.", time: "2026-08-24 07:55" },
  { id: "r-10", guest: "Tim Kantor Pusat", slug: "dimas-rini", attendance: "Hadir", pax: 8, message: "Kami datang satu tim!", time: "2026-08-24 16:40" },
];

export const orders: Order[] = [
  { id: "INV-2026-0801", customer: "Reza Pratama", email: "reza@aksaracinta.com", plan: "Platinum", amount: 149000, method: "DompetX QRIS", status: "Lunas", date: "2026-08-01" },
  { id: "INV-2026-0802", customer: "Dimas Anggara", email: "dimas@aksaracinta.com", plan: "Gold", amount: 99000, method: "E-Wallet", status: "Lunas", date: "2026-08-04" },
  { id: "INV-2026-0803", customer: "Yoga Mahendra", email: "yoga@aksaracinta.com", plan: "Gold", amount: 99000, method: "DompetX QRIS", status: "Menunggu", date: "2026-08-09" },
  { id: "INV-2026-0804", customer: "Budi Santoso", email: "budi@aksaracinta.com", plan: "Platinum", amount: 149000, method: "E-Wallet", status: "Kadaluarsa", date: "2026-08-12" },
  { id: "INV-2026-0805", customer: "Arif Wibowo", email: "arif@aksaracinta.com", plan: "Platinum", amount: 149000, method: "DompetX QRIS", status: "Lunas", date: "2026-08-18" },
];

export const guests: Guest[] = [
  { id: "g-1", name: "Bapak Budi & Partner", category: "VIP", phone: "08123456789", pax: 2, sent: true },
  { id: "g-2", name: "Keluarga Wijaya", category: "Keluarga", phone: "08129887766", pax: 5, sent: true },
  { id: "g-3", name: "Sinta Dewi", category: "Sahabat", phone: "08561122334", pax: 1, sent: false },
  { id: "g-4", name: "Tim Kantor Pusat", category: "Rekan Kerja", phone: "08770099881", pax: 8, sent: false },
  { id: "g-5", name: "Maya Anggraini", category: "Sahabat", phone: "08221133445", pax: 2, sent: true },
];

export const galleryPhotos = [
  photo("photo-1519741497674-611481863552"),
  photo("photo-1465495976277-4387d4b0b4c6"),
  photo("photo-1511285560929-80b456fea0bc"),
  photo("photo-1522673607200-164d1b6ce486"),
  photo("photo-1519225421980-715cb0215aed"),
  photo("photo-1583939003579-730e3918a45a"),
];
