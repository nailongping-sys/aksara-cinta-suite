# Aksara Cinta Suite

====================================================================================================
MASTER SPECIFICATION & MEGA PROMPT FOR LOVABLE.DEV
PROJECT: AKSARA CINTA - ADMIN CONTROL CENTER & USER DASHBOARD SUITE
ARCHITECTURE: PURE FRONTEND SPA (REACT 19 + VITE + TYPESCRIPT + TAILWIND CSS V4 + SHADCN UI)
CODE QUALITY STANDARD: STRICT /nokomen (ZERO CODE COMMENTS - 100% CLEAN SELF-DOCUMENTING CODE)
UI MICROCOPY STANDARD: STRICT /ui-ux-text (ZERO TEXT BLOAT, MAX 1-WORD PLACEHOLDER, MAX 1-2 WORDS BUTTON)
SCOPE CONSTRAINT: ABSOLUTELY NO PUBLIC PAGES / NO LANDING PAGE (ADMIN & USER PANELS ONLY)
TOKEN LIMIT SAFEGUARD: PRIORITY FALLBACK TO COMPLETE LIST VIEWS & NAVIGATION FIRST
====================================================================================================

====================================================================================================
SECTION 1: CORE RESTRICTIONS & MANDATORY DIRECTIVES (READ FIRST)
====================================================================================================

1.1 STRICT PROHIBITION ON PUBLIC PAGES:
- DILARANG KERAS MEMBUAT HALAMAN PUBLIK, MARKETING LANDING PAGE, ATAU UNDANGAN PUBLIK.
- NO `/` LANDING PAGE, NO `/katalog` MARKETING, NO `/u/:slug` PUBLIC INVITATION VIEWER.
- Seluruh aplikasi ini 100% HANYA FOKUS PADA DUA SISTEM PANEL:
  1. SUPER ADMIN CONTROL CENTER (`/admin/*`)
  2. USER / PENGANTIN DASHBOARD SUITE (`/dasbor/*`)
  3. DEV AUTH SWITCHER (`/login`)
- Rute root `/` WAJIB langsung me-redirect pengguna ke `/login` atau `/admin`.

1.2 STRICT /nokomen ZERO-COMMENT CODE STANDARD:
- DILARANG MENAMBAHKAN KOMENTAR APAPUN DI DALAM SELURUH FILE KODE (TypeScript, TSX, CSS, HTML).
- Zero single-line comments (`//`), zero multi-line comments (`/* */`), zero JSDoc, zero HTML comments (`<!-- -->`), zero AI watermark markers, zero TODO/FIXME markers.
- Seluruh kode harus 100% self-documenting melalui penamaan fungsi, variabel, dan struktur komponen yang bersih dan jelas.

1.3 TOKEN LIMIT & GENERATION SAFEGUARD (LLM RECOVERY PROTOCOL):
- Jika kapasitas token generasi LLM mendekati limit atau terbatas:
  * Prioritaskan menyelesaikan SELURUH TAMPILAN DEPAN (List View, Tabel Data, Sidebar Navigasi, Bento Cards, Header, dan Mock Datasets) terlebih dahulu.
  * Jangan biarkan ada halaman atau rute yang error / broken (404). Semua link sidebar dan tombol harus terhubung dengan data mock hardcoded yang langsung tampil rapi.

1.4 HARDCODED FRONTEND ONLY:
- Tidak memerlukan backend, database PostgreSQL eksternal, atau API server.
- Semua state, otentikasi, CRUD data, dan status berjalan langsung di browser menggunakan Mock State Store yang tersinkronisasi otomatis dengan `localStorage`.
- Semua aset multimedia (gambar tekstur, foto avatar, ikon, font) wajib menggunakan CDN publik yang stabil (Unsplash CDN, jsDelivr, Google Fonts).

====================================================================================================
SECTION 2: DESIGN SYSTEM & VISUAL TOKENS (AI DARK LUXURY & NEON MATCHA)
====================================================================================================
The entire interface must look futuristic, stunning, sleek, and exceptionally premium.

2.1 Color Palette:
- Background Base: #080B10 (Deep Obsidian Void)
- Background Elevated: #0D1117 (Dark Slate Charcoal)
- Card & Bento Surface: #141A23 (Frosted Glassmorphism with backdrop-blur-xl)
- Card Border: 1px solid rgba(255, 255, 255, 0.08) (Subtle crystal border)
- Card Hover Border: 1px solid rgba(163, 230, 53, 0.35) (Glowing matcha hover effect)
- Primary Accent: #A3E635 / #8EB952 (Neon Matcha Glow - Bioluminescent Green)
- Secondary Luxury Accent: #D4AF37 / #F59E0B (Royal Honey Gold - for VIP, Admin, and Premium tags)
- Information Accent: #60A5FA (Cyber Blue)
- Success Accent: #4ADE80 (Emerald Green)
- Danger Accent: #F87171 (Crimson Red)
- Text Primary: #F0F6FC (High contrast crisp white)
- Text Secondary: #8B949E (Muted slate gray)
- Text Helper: #6E7681 (Subtle metadata gray)

2.2 Typography Scale:
- Display Headings: 'Cinzel', serif / 'Playfair Display', serif (Weight: 700, Letter-spacing: 0.02em)
- Body & UI: 'Plus Jakarta Sans', sans-serif / 'Inter', sans-serif (Weight: 400, 500, 600, 700)
- Monospace / Slugs / IDs: 'JetBrains Mono', monospace (Weight: 500)

2.3 Layout & Viewport Standards:
- Admin Area: Persistent Left Sidebar (15rem width) + Top Sticky Header (3.5rem height) + Main Scrollable Content
- User Area (Mobile-First): Sticky Topbar + Persistent Bottom Navigation Bar (5 Primary Tabs) + Full Width Bento Cards
- User Area (Desktop): Luxury Collapsible Sidebar on Left + Main Content Area
- Touch Target: Minimum 44px x 44px for all buttons and interactive elements

2.4 Strict /ui-ux-text Rules (MANDATORY):
- Form Input Placeholders: Strictly MAX 1 WORD (e.g., "Nama", "Email", "Slug", "Alamat", "Rekening", "Cari", "Judul")
- Button & Action Labels: Strictly MAX 1-2 WORDS (e.g., "Simpan", "Tambah", "Buat", "Hapus", "Edit", "Lihat", "Salin", "Batal", "Kembali", "Studio")
- Page Titles: Short & Punchy (e.g., "Ikhtisar", "Pengguna", "Undangan", "Katalog", "Transaksi", "RSVP", "Sistem", "Profil")
- Zero Text Bloat: No repetitive sentences, no explanatory paragraphs where UI context is obvious, no empty marketing fluff.

2.5 Zero-Modal Policy (MANDATORY):
- Modals are STRICTLY FORBIDDEN for Create, Edit, or multi-field forms.
- Every form (Tambah Pengguna, Buat Undangan, Tambah Doa, Tambah Musik, Edit Profil, dll.) MUST be a Dedicated Full-Page Route.
- Modals are ONLY permitted for dangerous irreversible confirmations (e.g., Konfirmasi Hapus Data).

====================================================================================================
SECTION 3: DEV LOGIN SWITCHER (HARDCODE AUTH ENGINE)
====================================================================================================
Provide a quick, 1-click Dev Auth Switcher on the login page (/login) and accessible as a floating switcher pill in development mode:

3.1 Roles:
1. Super Admin Role:
   - Name: Eka Syarif Maulana
   - Email: eka.ckp16799@gmail.com
   - Role: 'admin'
   - Tier: 'Owner Super Admin'
   - Action: Clicking "👑 Login Super Admin" sets state in localStorage and redirects immediately to `/admin`.

2. Couple / User Role:
   - Name: Reza & Nadia
   - Email: reza@aksaracinta.com
   - Role: 'user'
   - Tier: 'Platinum Unlimited'
   - Action: Clicking "👤 Login Pengantin" sets state in localStorage and redirects immediately to `/dasbor`.

3. Direct Redirect:
   - Root URL `/` immediately redirects to `/login` or `/admin` based on active auth session.

====================================================================================================
SECTION 4: COMPLETE SUPER ADMIN CONTROL CENTER (/admin)
====================================================================================================
The Super Admin Panel is an executive luxury control suite for managing the entire platform.
It features a persistent left sidebar containing 10 rich modules, a clean topbar, and dedicated pages for every action.

----------------------------------------------------------------------------------------------------
MODULE 4.1: IKHTISAR PLATFORM (/admin)
----------------------------------------------------------------------------------------------------
- Route: `/admin`
- Header: Left "✦ Aksara Cinta", Right Avatar Circle "EK" (links to `/admin/profil`) + Logout button.
- Layout:
  1. Top Action Row: Page title "Ikhtisar", subtitle "Ringkasan performa sistem", Action buttons `+ Pengguna` (links to `/admin/pengguna/baru`) and `+ Undangan` (links to `/admin/undangan/baru`).
  2. Bento Grid Metrics (4 Compact Cards):
     - Card 1: Total Pengguna (Value: 128, Sub: "Akun Terdaftar", Icon: Users, Color: Neon Matcha)
     - Card 2: Total Undangan (Value: 342, Sub: "298 Aktif · 44 Draf", Icon: Mail, Color: Honey Gold)
     - Card 3: Total RSVP (Value: 1,420, Sub: "Konfirmasi Masuk", Icon: MessageSquareHeart, Color: Cyber Blue)
     - Card 4: Pendapatan DompetX (Value: "Rp 18.450.000", Sub: "Bulan Ini", Icon: CreditCard, Color: Emerald Green)
  3. 2-Column Split Activity Feed:
     - Left Card: Undangan Terbaru (Displays top 5 latest invitations with slug, template name, view counter, and quick action buttons `Lihat` & `Edit`).
     - Right Card: Pengguna Terbaru (Displays top 5 latest registered users with name, email, package badge, and joined date).
  4. Quick Navigation Grid: Direct link cards to Template, Doa, Quotes, Musik, and Sistem.

----------------------------------------------------------------------------------------------------
MODULE 4.2: KELOLA PENGGUNA (/admin/pengguna)
----------------------------------------------------------------------------------------------------
- Route: `/admin/pengguna`
- Layout:
  1. Top Row: Title "Pengguna", live counter badge, Search input (Placeholder: "Cari"), Filter dropdown (Semua, Admin, Free, Gold, Platinum), Button `+ Tambah` (links to `/admin/pengguna/baru`).
  2. Responsive Data Table:
     - Column 1: Nama & Avatar inisial bulat
     - Column 2: Email
     - Column 3: Peran (Badge Gold "Admin" / Badge Neutral "User")
     - Column 4: Paket (Badge Matcha "Free" / "Gold" / "Platinum")
     - Column 5: Jumlah Undangan Aktif
     - Column 6: Tanggal Bergabung
     - Column 7: Aksi (Button `Edit` links to `/admin/pengguna/:id`, Button `Hapus` triggers confirmation modal)
  3. Pagination Controls: "1 - 10 dari 128", Prev / Next buttons.

----------------------------------------------------------------------------------------------------
MODULE 4.3: TAMBAH PENGGUNA BARU (/admin/pengguna/baru)
----------------------------------------------------------------------------------------------------
- Route: `/admin/pengguna/baru`
- Layout:
  1. Header: Title "Tambah Pengguna", Back button `← Kembali` (links to `/admin/pengguna`).
  2. Full-Width Glass Card Form:
     - Field 1: Nama Lengkap (Input text, Placeholder: "Nama")
     - Field 2: Alamat Email (Input email, Placeholder: "Email")
     - Field 3: Kata Sandi Sementara (Input password, Placeholder: "Password")
     - Field 4: Paket Langganan (Select: Free, Gold, Platinum)
     - Field 5: Peran Akses (Select: User Pengantin, Admin Operasional, Super Admin)
     - Field 6: Kuota Undangan Maksimal (Input number, Default: 5)
  3. Bottom Action Bar: Button `Batal` (secondary) and Button `Simpan` (primary gold gradient).

----------------------------------------------------------------------------------------------------
MODULE 4.4: EDIT PENGGUNA (/admin/pengguna/:id)
----------------------------------------------------------------------------------------------------
- Route: `/admin/pengguna/:id`
- Layout:
  1. Header: Title "Edit Pengguna", ID label, Back button `← Kembali`.
  2. User Summary Card: Avatar inisial, Email (read-only), Total invitations created, Registration timestamp.
  3. Edit Form:
     - Field 1: Nama Lengkap
     - Field 2: Paket Langganan (Select dropdown with instant tier update)
     - Field 3: Peran Akun (Toggle Admin / User)
     - Field 4: Status Akun (Select: Aktif, Ditangguhkan, Diblokir)
     - Field 5: Tombol Reset Password Mock ("Kirim Link Reset")
  4. Bottom Action Bar: Button `Batal`, Button `Simpan Perubahan`.

----------------------------------------------------------------------------------------------------
MODULE 4.5: KELOLA UNDANGAN (/admin/undangan)
----------------------------------------------------------------------------------------------------
- Route: `/admin/undangan`
- Layout:
  1. Top Row: Title "Undangan", Counter badge, Search bar (Placeholder: "Cari"), Template filter dropdown, Button `+ Buat` (links to `/admin/undangan/baru`).
  2. Responsive Data Table:
     - Column 1: URL Slug (`/u/nama-slug` with copy button)
     - Column 2: Mempelai (Pria & Wanita)
     - Column 3: Template (Badge: "Matcha Elegan", "Blue Butterfly", dll.)
     - Column 4: Status (Badge Hijau "Aktif" / Badge Netral "Draf")
     - Column 5: Kunjungan (View counter badge with eye icon)
     - Column 6: Tanggal Acara
     - Column 7: Aksi (Button `Edit` links to `/admin/undangan/:id`, Button `Hapus`)

----------------------------------------------------------------------------------------------------
MODULE 4.6: BUAT UNDANGAN BARU (/admin/undangan/baru)
----------------------------------------------------------------------------------------------------
- Route: `/admin/undangan/baru`
- Layout:
  1. Header: Title "Buat Undangan", Back button `← Kembali`.
  2. Full-Page Creation Form:
     - Field 1: Slug Kustom URL (Input text, Prefix: "aksaracinta.com/u/", Placeholder: "Slug", with live availability checker badge "Tersedia")
     - Field 2: Judul Undangan (Input text, Placeholder: "Judul", Example: "Pernikahan Reza & Nadia")
     - Field 3: Pemilik Akun / Pengantin (Select dropdown dari daftar user terdaftar)
     - Field 4: Pilihan Template Desain (Visual Card Selector menampilkan 7 template dengan thumbnail dan tag Signature/Tradisional/Modern)
     - Field 5: Tanggal Acara Utama (Date picker)
     - Field 6: Status Publikasi (Toggle: Langsung Aktif / Simpan Draf)
  3. Action Bar: Button `Batal`, Button `Buat Undangan`.

----------------------------------------------------------------------------------------------------
MODULE 4.7: KATALOG TEMPLATE & ZIP UPLOADER (/admin/template)
----------------------------------------------------------------------------------------------------
- Route: `/admin/template`
- Layout:
  1. Top Row: Title "Katalog Template", Subtitle "Pustaka desain pernikahan aktif", Action Button `+ Upload ZIP` (links to `/admin/template/upload`).
  2. Category Filter Tabs: Semua (7), Tradisional (3), Modern Minimalis (2), Signature AI (2).
  3. Template Showcase Grid (Cards):
     - Card 1: Blue Butterfly (Tag: "Signature Luxury", Theme: "Royal Blue / Silver", Slug: "blue-butterfly", Thumbnail CDN, Button `Kelola`)
     - Card 2: Matcha Elegan (Tag: "Signature", Theme: "Matcha / Gold", Slug: "matcha-elegan", Thumbnail CDN)
     - Card 3: Jawa Keraton (Tag: "Tradisional", Theme: "Cokelat / Emas", Slug: "jawa-keraton")
     - Card 4: Sunda Siger (Tag: "Tradisional", Theme: "Krem / Sage", Slug: "sunda-siger")
     - Card 5: Minimalis Modern (Tag: "Modern", Theme: "Monokrom", Slug: "minimalis-modern")
     - Card 6: Islami Arabesque (Tag: "Religius", Theme: "Emerald / Gold", Slug: "islami-arabesque")
     - Card 7: Rustic Floral (Tag: "Artistik", Theme: "Terracotta / Boho", Slug: "rustic-floral")
     - Card 8: Batak Ulos (Tag: "Tradisional", Theme: "Maroon / Hitam", Slug: "batak-ulos")

----------------------------------------------------------------------------------------------------
MODULE 4.8: UPLOAD TEMPLATE ZIP FOLDER (/admin/template/upload)
----------------------------------------------------------------------------------------------------
- Route: `/admin/template/upload`
- Layout:
  1. Header: Title "Upload Template ZIP", Subtitle "Unggah paket arsip template mandiri", Back button `← Kembali`.
  2. Drag-and-Drop Area: Icon folder upload, text "Tarik file .zip template ke sini atau Klik untuk memilih file", helper "Maks. 50 MB (.zip)".
  3. Form Metadata Template:
     - Field 1: Nama Template (Placeholder: "Nama", Contoh: "Blue Butterfly Luxury")
     - Field 2: ID / Slug Template (Placeholder: "Slug", Contoh: "blue-butterfly")
     - Field 3: Kategori Tema (Select: Tradisional, Modern, Minimalis, Signature, Religius)
     - Field 4: Palet Warna Primer & Sekunder (Color pickers)
     - Field 5: File Entrypoint (Input text, Default: "index.html" / "page.tsx")
     - Field 6: Deskripsi Singkat Fitur Template
  4. Upload Progress Bar Simulator (0% -> 100% with simulated file validation: manifest.json, assets/, styles.css).
  5. Action Bar: Button `Batal`, Button `Publikasikan Template`.

----------------------------------------------------------------------------------------------------
MODULE 4.9: DATABASE DOA & AYAT PERNIKAHAN (/admin/doa)
----------------------------------------------------------------------------------------------------
- Route: `/admin/doa`
- Layout:
  1. Top Row: Title "Database Doa", Subtitle "Koleksi doa & ayat suci pernikahan", Search bar, Button `+ Tambah Doa` (links to `/admin/doa/baru`).
  2. Category Tabs: Semua, Islam (Ar-Rum 21, An-Nur 32), Kristen (1 Korintus 13), Katolik, Hindu, Budha, Universal/Nasional.
  3. Verses Cards Grid:
     - Card displaying: Judul Doa / Ayat, Kategori Tag, Teks Kaligrafi Asli / Arab, Teks Latin, Terjemahan Bahasa Indonesia, Tombol `Salin`, Tombol `Edit` (links to `/admin/doa/:id`), Tombol `Hapus`.

----------------------------------------------------------------------------------------------------
MODULE 4.10: TAMBAH DOA BARU (/admin/doa/baru)
----------------------------------------------------------------------------------------------------
- Route: `/admin/doa/baru`
- Layout:
  1. Header: Title "Tambah Doa", Back button `← Kembali`.
  2. Form:
     - Field 1: Judul / Nama Surat (Placeholder: "Judul", Contoh: "QS. Ar-Rum: 21")
     - Field 2: Kategori Agama (Select: Islam, Kristen, Katolik, Hindu, Budha, Nasional)
     - Field 3: Teks Asli / Kaligrafi Arab (Textarea, Placeholder: "Teks")
     - Field 4: Transliterasi Latin (Textarea, Placeholder: "Latin")
     - Field 5: Terjemahan Bahasa Indonesia (Textarea, Placeholder: "Arti")
  3. Action Bar: Button `Batal`, Button `Simpan Doa`.

----------------------------------------------------------------------------------------------------
MODULE 4.11: QUOTES & KUTIPAN CINTA (/admin/quotes)
----------------------------------------------------------------------------------------------------
- Route: `/admin/quotes`
- Layout:
  1. Top Row: Title "Quotes Cinta", Subtitle "Kutipan romantis dan puitis", Button `+ Tambah Quotes` (links to `/admin/quotes/baru`).
  2. Filter Mood: Semua, Puitis, Romantis Klasik, Minimalis, Filosofis, Humor.
  3. Quotes List Cards: Teks kutipan dalam tanda petik estetik, Nama Penulis / Tokoh, Kategori Tag, Tombol `Salin`, Tombol `Edit`, Tombol `Hapus`.

----------------------------------------------------------------------------------------------------
MODULE 4.12: SURAT & TEKS SAKRAL (/admin/surat)
----------------------------------------------------------------------------------------------------
- Route: `/admin/surat`
- Layout:
  1. Top Row: Title "Surat & Salam", Subtitle "Teks pembuka dan salam sakral", Button `+ Tambah Teks` (links to `/admin/surat/baru`).
  2. Data List: Basmalah berbagai kaligrafi, Salam pembuka multi-bahasa (Assalamu'alaikum, Shalom, Om Swastyastu, Namo Buddhaya, Salam Sejahtera), Doa Walimatul Ursy, Teks Penutup & Doa Keberkahan.

----------------------------------------------------------------------------------------------------
MODULE 4.13: KOLEKSI MUSIK & AUDIO PLAYER (/admin/musik)
----------------------------------------------------------------------------------------------------
- Route: `/admin/musik`
- Layout:
  1. Top Row: Title "Koleksi Musik", Subtitle "Daftar lagu latar undangan", Button `+ Tambah Lagu` (links to `/admin/musik/baru`).
  2. Built-in Master Waveform Audio Player: Bar pemutar lagu aktif (Play/Pause button, Judul lagu, Nama artis, Progress bar interaktif, Volume slider).
  3. Audio Tracks Table:
     - Column 1: Play/Stop Button interaktif
     - Column 2: Judul Lagu
     - Column 3: Artis / Komposer
     - Column 4: Genre (Akustik, Instrumen Piano, Pop Romantis, Tradisional, Sinematik)
     - Column 5: Durasi (Contoh: "03:45")
     - Column 6: URL Sumber CDN
     - Column 7: Aksi (Button `Edit`, Button `Hapus`)

----------------------------------------------------------------------------------------------------
MODULE 4.14: TAMBAH LAGU BARU (/admin/musik/baru)
----------------------------------------------------------------------------------------------------
- Route: `/admin/musik/baru`
- Layout:
  1. Header: Title "Tambah Lagu", Back button `← Kembali`.
  2. Form:
     - Field 1: Judul Lagu (Placeholder: "Judul")
     - Field 2: Nama Artis (Placeholder: "Artis")
     - Field 3: Genre Musik (Select: Akustik, Piano, Romantis, Islami, Tradisional, Orkestra)
     - Field 4: Durasi Lagu (Placeholder: "Durasi", Contoh: "03:30")
     - Field 5: URL File Audio MP3 CDN (Input URL, Placeholder: "URL", dengan tombol "Uji Putar")
  3. Action Bar: Button `Batal`, Button `Simpan Lagu`.

----------------------------------------------------------------------------------------------------
MODULE 4.15: GALERI ASET & ORNAMEN (/admin/galeri-aset)
----------------------------------------------------------------------------------------------------
- Route: `/admin/galeri-aset`
- Layout:
  1. Top Row: Title "Galeri Aset", Subtitle "Ornamen, bingkai, dan latar visual", Button `+ Upload Aset` (links to `/admin/galeri-aset/upload`).
  2. Category Tabs: Semua, Bingkai (Frames), Ornamen Sudut (Corners), Latar Belakang (Textures), Pembatas (Dividers), Ikon Sakral (Icons).
  3. Visual Assets Grid: Thumbnail aset transparan PNG/SVG dari CDN, Nama file aset, Dimensi piksel, Tombol `Salin URL CDN`, Tombol `Hapus`.

----------------------------------------------------------------------------------------------------
MODULE 4.16: RSVP & BUKU TAMU GLOBAL (/admin/rsvp)
----------------------------------------------------------------------------------------------------
- Route: `/admin/rsvp`
- Layout:
  1. Top Row: Title "RSVP & Ucapan", Subtitle "Seluruh konfirmasi kehadiran tamu masuk", Export Button `Export CSV`.
  2. Filter Bar: Filter berdasarkan Undangan, Filter Kehadiran (Hadir, Ragu, Tidak Hadir).
  3. RSVP Feed Cards Grid:
     - Nama Tamu, Undangan Tujuan (`/u/slug`), Badge Kehadiran (Hijau "Hadir" / Abu "Tidak Hadir"), Jumlah Pax Tamu, Pesan & Doa Restu, Waktu Pengiriman, Tombol `Hapus Pesan`.

----------------------------------------------------------------------------------------------------
MODULE 4.17: TRANSAKSI & PEMBAYARAN DOMPETX (/admin/transaksi)
----------------------------------------------------------------------------------------------------
- Route: `/admin/transaksi`
- Layout:
  1. Top Row: Title "Transaksi", Subtitle "Riwayat pesanan paket DompetX", Total Omset Badge "Rp 18.450.000".
  2. Transactions Table:
     - Column 1: Nomor Pesanan (Contoh: "INV-2026-0801")
     - Column 2: Nama Pelanggan & Email
     - Column 3: Paket (Gold / Platinum)
     - Column 4: Jumlah Tagihan (Format IDR: "Rp 149.000")
     - Column 5: Metode Pembayaran (Badge "DompetX QRIS" / "E-Wallet")
     - Column 6: Status (Badge Hijau "Lunas" / Kuning "Menunggu" / Merah "Kadaluarsa")
     - Column 7: Tanggal Transaksi

----------------------------------------------------------------------------------------------------
MODULE 4.18: STATUS SISTEM & AI CLOUD (/admin/sistem)
----------------------------------------------------------------------------------------------------
- Route: `/admin/sistem`
- Layout:
  1. Top Row: Title "Status Sistem", Subtitle "Konektivitas dan infrastruktur serverless".
  2. Health Status Bento Grid:
     - Card 1: Neon Postgres Database (Status: "Online - ap-southeast-1", Latency: "18ms", Icon: Database)
     - Card 2: Upstash Redis Edge Cache (Status: "Online - Cache Active", Hit Rate: "98.4%", Icon: Server)
     - Card 3: DompetX Payment Gateway (Status: "Ready - QRIS & E-Wallet API", Icon: CreditCard)
     - Card 4: GitHub & jsDelivr Asset CDN (Status: "100% Operational", Icon: Globe)
     - Card 5: AI Copywriter Engine (Status: "Gemini 2.5 Active", Icon: Sparkles)
  3. Action: Tombol "Uji Ping Koneksi" & "Bersihkan Cache Mock".

----------------------------------------------------------------------------------------------------
MODULE 4.19: PROFIL SUPER ADMIN (/admin/profil)
----------------------------------------------------------------------------------------------------
- Route: `/admin/profil`
- Layout:
  1. Header: Title "Profil Admin", Back button `← Kembali`.
  2. Luxury Glass Profile Card:
     - Large Gold Avatar Circle (`EK`), Nama "Eka Syarif Maulana", Role "Super Admin", Email "eka.ckp16799@gmail.com".
     - Form Field 1: Nama Lengkap
     - Form Field 2: Alamat Email (Disabled)
     - Form Field 3: Nomor WhatsApp Notifikasi
     - Form Field 4: PIN Keamanan Admin (Mock input)
  3. Action Bar: Button `Simpan Profil`.

====================================================================================================
SECTION 5: COMPLETE USER / BRIDE & GROOM SUITE (/dasbor)
====================================================================================================
Designed with a **Mobile-First Luxury Architecture**:
- Mobile Viewport: Sticky Topbar + Persistent Bottom Navigation (5 Icons: Beranda, Undangan, Acara, Hadiah, Profil).
- Desktop Viewport: Luxury Sidebar on the left + Content on the right.

----------------------------------------------------------------------------------------------------
PAGE 5.1: BERANDA PENGANTIN (/dasbor)
----------------------------------------------------------------------------------------------------
- Route: `/dasbor`
- Layout:
  1. Welcome Banner: "Selamat Datang, Reza & Nadia" dengan badge paket aktif "Platinum VIP".
  2. Invitation Status Card: Slug aktif `/u/reza-nadia`, tombol `Salin Link`, dan QR Code scanner preview.
  3. Countdown Timer Acara: "45 Hari : 12 Jam : 30 Menit Menuju Hari Bahagia".
  4. Quick Stats: Total Undangan Disebar, Total Tamu Membuka, Total RSVP Hadir.
  5. Menu Pintas Cepat ke Mempelai, Acara, Galeri, Cerita, Hadiah, Musik, Tamu.

----------------------------------------------------------------------------------------------------
PAGE 5.2: DATA MEMPELAI (/dasbor/mempelai)
----------------------------------------------------------------------------------------------------
- Route: `/dasbor/mempelai`
- Layout:
  1. Section Mempelai Pria:
     - Foto Avatar Pria (Upload preview CDN)
     - Nama Lengkap Pria (Placeholder: "Nama")
     - Nama Panggilan Pria (Placeholder: "Panggilan")
     - Nama Ayah & Nama Ibu
     - Akun Instagram (Prefix: "@", Placeholder: "Instagram")
     - Urutan Anak (Contoh: "Putra Pertama dari...")
  2. Section Mempelai Wanita:
     - Foto Avatar Wanita (Upload preview CDN)
     - Nama Lengkap Wanita
     - Nama Panggilan Wanita
     - Nama Ayah & Nama Ibu
     - Akun Instagram
     - Urutan Anak (Contoh: "Putri Kedua dari...")
  3. Action Bar: Button `Simpan Data`.

----------------------------------------------------------------------------------------------------
PAGE 5.3: RANGKAIAN ACARA & GOOGLE MAPS (/dasbor/acara)
----------------------------------------------------------------------------------------------------
- Route: `/dasbor/acara`
- Layout:
  1. Sesi 1: Akad Nikah / Pemberkatan
     - Tanggal Acara (Date picker)
     - Jam Mulai & Jam Selesai (Time picker, Contoh: "08:00 - 10:00")
     - Zona Waktu (Select: WIB, WITA, WIT)
     - Nama Lokasi / Gedung / Masjid / Gereja (Placeholder: "Gedung")
     - Alamat Lengkap (Textarea, Placeholder: "Alamat")
     - URL Google Maps Embed / Koordinat Maps
  2. Sesi 2: Resepsi Pernikahan
     - Tanggal, Jam, Zona Waktu, Lokasi Gedung, Alamat Lengkap, URL Google Maps.
  3. Fitur Tambah Sesi Acara Baru (Contoh: Syukuran / Unduh Mantu / Ramah Tamah).
  4. Live Preview Mini Map interaktif.
  5. Action Bar: Button `Simpan Acara`.

----------------------------------------------------------------------------------------------------
PAGE 5.4: GALERI FOTO & VIDEO (/dasbor/galeri)
----------------------------------------------------------------------------------------------------
- Route: `/dasbor/galeri`
- Layout:
  1. Foto Utama / Cover Undangan: Upload picker dengan pemotong aspek rasio (Portrait 9:16 / Landscape 16:9).
  2. Galeri Prewedding Multi-Foto: Grid upload hingga 12 foto dengan opsi hapus dan urutkan.
  3. Video Prewedding: Input URL Embed YouTube / Vimeo dengan live video player preview.
  4. Action Bar: Button `Simpan Galeri`.

----------------------------------------------------------------------------------------------------
PAGE 5.5: CERITA CINTA / LOVE STORY (/dasbor/cerita)
----------------------------------------------------------------------------------------------------
- Route: `/dasbor/cerita`
- Layout:
  1. Milestones Timeline Builder:
     - Milestone 1: Pertama Bertemu (Tahun/Bulan, Judul, Cerita Singkat, Foto Memori)
     - Milestone 2: Menjalin Hubungan (Tahun/Bulan, Judul, Cerita Singkat)
     - Milestone 3: Lamaran / Khitbah (Tahun/Bulan, Judul, Cerita Singkat, Foto)
     - Milestone 4: Hari Pernikahan
  2. Tombol `+ Tambah Momen`.
  3. Action Bar: Button `Simpan Cerita`.

----------------------------------------------------------------------------------------------------
PAGE 5.6: HADIAH DIGITAL & REKENING (/dasbor/hadiah)
----------------------------------------------------------------------------------------------------
- Route: `/dasbor/hadiah`
- Layout:
  1. Amplop Digital (Bank Accounts):
     - Bank 1: Pilih Bank (BCA, Mandiri, BRI, BNI, Jago, SeaBank, BCA Syariah, DANA, OVO, GoPay)
     - Nomor Rekening (Placeholder: "Rekening")
     - Atas Nama Pemilik Rekening (Placeholder: "Nama")
     - Tombol `+ Tambah Rekening Lain`.
  2. QRIS Pembayaran / Donasi: Upload gambar barcode QRIS statis dengan preview scan.
  3. Kado Fisik: Alamat Penerima Paket Kado, Nama Penerima, Nomor Telepon, Catatan Kurir.
  4. Action Bar: Button `Simpan Hadiah`.

----------------------------------------------------------------------------------------------------
PAGE 5.7: MUSIK & DOA PILIHAN (/dasbor/musik)
----------------------------------------------------------------------------------------------------
- Route: `/dasbor/musik`
- Layout:
  1. Pemilihan Lagu Latar (BGM):
     - Opsi 1: Pilih dari Pustaka Resmi Aksara Cinta (dengan tombol Play untuk mendengarkan).
     - Opsi 2: Masukkan URL MP3 Kustom sendiri.
     - Pengaturan: Autoplay saat undangan dibuka (Toggle Aktif/Mati).
  2. Pemilihan Doa & Ayat Sakral:
     - Dropdown pilihan dari Database Doa Admin.
  3. Pemilihan Kutipan Cinta:
     - Dropdown pilihan dari Database Quotes Admin.
  4. Action Bar: Button `Simpan Musik`.

----------------------------------------------------------------------------------------------------
PAGE 5.8: MANAJEMEN TAMU & LINK GENERATOR (/dasbor/tamu)
----------------------------------------------------------------------------------------------------
- Route: `/dasbor/tamu`
- Layout:
  1. Top Bar: Title "Daftar Tamu", Tombol `+ Tambah Tamu` (links to `/dasbor/tamu/baru`), Tombol `Import Excel/CSV`.
  2. Search & Filter: Cari nama tamu, filter kategori (Keluarga, Sahabat, Rekan Kerja, VIP).
  3. Guest Table / Cards:
     - Nama Tamu, Kategori, Jumlah Pax, Status Link (Belum Dikirim / Terkirim), Tombol `Salin Link WhatsApp` (otomatis menghasilkan teks sapaan personal siap kirim), Tombol `Kirim Langsung via WA Web`, Tombol `Edit`, Tombol `Hapus`.
  4. Template Pesan WhatsApp: Editor teks format pesan undangan WhatsApp dengan variabel cerdas `{nama_tamu}` dan `{link_undangan}`.

----------------------------------------------------------------------------------------------------
PAGE 5.9: TAMBAH TAMU BARU (/dasbor/tamu/baru)
----------------------------------------------------------------------------------------------------
- Route: `/dasbor/tamu/baru`
- Layout:
  1. Header: Title "Tambah Tamu", Back button `← Kembali`.
  2. Form:
     - Field 1: Nama Lengkap Tamu (Placeholder: "Nama", Contoh: "Bapak Budi & Partner")
     - Field 2: Kategori Tamu (Select: Keluarga, VIP, Sahabat, Rekan Kerja, Umum)
     - Field 3: Nomor WhatsApp (Placeholder: "WhatsApp", Contoh: "08123456789")
     - Field 4: Estimasi Jumlah Undangan (Pax) (Input number: 1 / 2 / Keluarga)
  3. Action Bar: Button `Batal`, Button `Simpan Tamu`.

----------------------------------------------------------------------------------------------------
PAGE 5.10: INBOX RSVP & UCAPAN SAYA (/dasbor/rsvp)
----------------------------------------------------------------------------------------------------
- Route: `/dasbor/rsvp`
- Layout:
  1. Counter Bento: Total Hadir, Total Tidak Hadir, Total Ragu, Total Tamu Dewasa & Anak.
  2. Guest Wishes Wall (Tembok Ucapan): Tampilan pesan, doa restu, dan ucapan selamat dari tamu undangan secara live dengan pagination.

----------------------------------------------------------------------------------------------------
PAGE 5.11: PAKET LANGGANAN & UPGRADE (/dasbor/paket)
----------------------------------------------------------------------------------------------------
- Route: `/dasbor/paket`
- Layout:
  1. Paket Aktif: Card paket saat ini ("Platinum VIP - Masa Aktif Selamanya").
  2. Tier Comparison Grid:
     - Paket Free (Draf, Watermark, Kuota 20 Tamu)
     - Paket Gold (Rp 99.000: Tanpa Watermark, Kuota 500 Tamu, Amplop Digital, Galeri 10 Foto)
     - Paket Platinum (Rp 149.000: Fitur Lengkap, Tamu Unlimited, Custom Musik, WhatsApp Link Generator, Prioritas Support)
  3. Tombol `Upgrade Sekarang` memunculkan halaman simulasi pembayaran DompetX dengan mockup QRIS dinamis.

----------------------------------------------------------------------------------------------------
PAGE 5.12: PROFIL PENGANTIN (/dasbor/profil)
----------------------------------------------------------------------------------------------------
- Route: `/dasbor/profil`
- Layout:
  1. Avatar Pengantin, Form Nama Akun, Email Akun, Ganti Password Mock, Pengaturan Notifikasi WhatsApp.

====================================================================================================
SECTION 6: MOCK DATA SCHEMA & STATE MANAGEMENT
====================================================================================================
All state must be managed via a centralized Context / Zustand store with auto-synchronization to `localStorage`.

6.1 Initial Mock Datasets:
- `users`: Eka Syarif Maulana (Admin), Reza & Nadia (Platinum), Dimas & Rini (Gold), Budi & Siti (Free).
- `invitations`: reza-nadia (Matcha Elegan), dimas-rini (Blue Butterfly), yoga-ayu (Jawa Keraton).
- `templates`: 8 predefined templates with metadata and tags.
- `prayers`: 6 sacred verses (Islam, Kristen, Katolik, Hindu, Budha, Nasional).
- `quotes`: 8 romantic love quotes.
- `music`: 6 wedding audio tracks with sample CDN MP3 links.
- `assets`: 12 ornament and frame vector PNGs.
- `rsvps`: 10 sample guest greetings.
- `orders`: 5 sample DompetX transactions.

====================================================================================================
SECTION 7: TECHNICAL EXECUTION & CODE QUALITY
====================================================================================================
1. Folder Structure:
   - `src/pages/admin/` (All Admin Full Pages)
   - `src/pages/user/` (All Couple Full Pages)
   - `src/components/admin/` (Admin Navigation, Bento Metrics, Table Components)
   - `src/components/user/` (User Bottom Navigation, Event Forms, Timeline Builder)
   - `src/components/ui/` (Shadcn Buttons, Badges, Inputs, Selects)
   - `src/store/` (Mock State Store with localStorage persistence)
   - `src/data/mockData.ts` (Rich initial seed data)
2. Every link, tab, button, and navigation action MUST work without broken routes (404).
3. Zero lag, buttery smooth 60fps transitions, and flawless responsive layouts across all mobile, tablet, and widescreen viewports.
====================================================================================================

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://aksara-cinta-suite.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/18e16db1-c561-4552-870b-55ac0e3037f7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
