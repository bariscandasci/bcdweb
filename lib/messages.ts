export type Locale = "tr" | "en";

const tr = {
  skip: "İçeriğe geç",
  title: "BCD TECHNOLOGIES | Veri Analitiği, İş Gücü Haritalama ve Özel Yazılım",
  langLabel: "Dil",
  nav: {
    solutions: "Çözümlerimiz",
    scenarios: "Senaryolar",
    approach: "Yaklaşımımız",
    about: "Hakkımızda",
    contact: "İletişime Geç",
    menu: "Bölümler",
    open: "Menüyü aç",
    close: "Menüyü kapat",
  },
  hero: {
    kicker: "Kurumsal teknoloji ortağı",
    before: "Veriyi, ",
    glow1: "iş gücünü",
    mid: " ve ",
    glow2: "operasyonu",
    after: " aynı netlikte yönetin.",
    body: "BCD TECHNOLOGIES, kurumsal firmalar için veri analitiği panelleri, akıllı iş gücü haritalama sistemleri ve özel yazılım çözümleri geliştirir. Yöneticiler, insan kaynakları ve operasyon ekipleri dağınık bilgiyi güvenli bir yüzeyde okur; teknoloji yatırımcıları ve iş ortakları ise ölçeklenebilir, denetime açık bir mimariyle karşılaşır.",
    primary: "Demo / Toplantı Planla",
    secondary: "Çözümlerimizi İncele",
    areas: ["Veri analitiği panelleri", "İş gücü haritalama", "Özel yazılım"],
  },
  solutions: {
    eyebrow: "Çözümlerimiz",
    title: "Karar vericinin ihtiyaç duyduğu yüzey",
    description:
      "Dört başlıkta topluyoruz: yönetim ekranı, iş gücünün haritası, kuruma özel yazılım ve mevcut sistemlerle güvenli bağ.",
    analyticsTitle: "Veri Analitiği Panelleri",
    analyticsText:
      "Yönetim ve operasyon ekipleri aynı göstergeleri, kendi rollerine göre görür. Satış, maliyet, kapasite ve risk tek yüzeyde toplanır.",
    sample: "Örnek gösterge",
    trend: "Aylık seyir",
    months: ["Oca", "Mar", "May", "Tem", "Eyl", "Kas"],
    workforceTitle: "Akıllı İş Gücü Haritalama",
    workforceText:
      "Yetkinlik, lokasyon, doluluk ve kritik rol riski görünür olur. İK planı sezgiyle değil, güncel veriyle yürür.",
    customTitle: "Özel Yazılım Çözümleri",
    customText: "Hazır paketin karşılamadığı süreçler için uygulama tasarlanır, geliştirilir ve devreye alınır.",
    integrationTitle: "Güvenli Entegrasyon",
    integrationText:
      "ERP, insan kaynakları, CRM ve veri ambarı bağlantıları, mevcut sistemi değiştirmeden yeni bir karar katmanı ekler.",
    tags: ["ERP", "İK sistemleri", "CRM", "Veri ambarı"],
  },
  cases: {
    eyebrow: "Vaka & Uygulama Senaryoları",
    title: "Sistemin işteki karşılığı",
    description:
      "Üç kurum profilinde aynı yapı: problem, kurduğumuz mimari ve beklenen kazanım. Rakamlı müşteri sonucu değildir.",
    problem: "Problem",
    solution: "Mimari Çözüm",
    gain: "Kazanım",
    note: "Senaryolar örnek kurum ihtiyaçlarına göredir. Yayımlanmış müşteri sonucu veya garanti edilen kazanç değildir.",
    items: [
      {
        title: "Çok Bölgeli Saha ve İK Haritalama",
        problem:
          "Kadro, yetkinlik ve doluluk şehir ve tesis bazında ayrı tablolarda durur. Kritik rol açığı geç fark edilir.",
        solution:
          "İş gücü kayıtları coğrafi katmana bağlanır. Rol, lokasyon ve doluluk aynı haritada, yetkiye göre süzülür.",
        gain: "İK ve saha aynı resmi görür. Planlama, dağınık dosya yerine güncel haritadan yürür.",
      },
      {
        title: "Yönetim Karar Destek ve Canlı Analitik Panelleri",
        problem:
          "Satış, maliyet ve kapasite raporları geç gelir. Yönetim toplantısı, eski veriyle yapılır.",
        solution:
          "Kaynak sistemlerden beslenen tek karar yüzeyi kurulur. Gösterge, rol ve dönem için aynı tanımla okunur.",
        gain: "Karar, ortak ve güncel bir gösterge setine dayanır. Toplantı, rapor beklemeden açılır.",
      },
      {
        title: "Yapay Zeka ile Onaylı Operasyon Adımları",
        problem:
          "Tekrarlayan eşleştirme ve onay işi kuyruğu büyütür. İstisna, rutinin içinde kaybolur.",
        solution:
          "Öneri motoru kuyruğu hazırlar. Onay yetkisi insanda kalır; her adım kayıt altına alınır.",
        gain: "Rutin adımlar kısalır. İstisna ve onay görünür, denetlenebilir kalır.",
      },
    ],
  },
  security: {
    eyebrow: "Güven",
    title: "Kurumsal Güvenlik Mimarisi",
    description:
      "Hassas İK ve operasyon verisi için erişim, aktarım ve ortam ayrımı projenin ilk gününde tanımlanır. Bu bir sertifika rozeti değil, kurduğumuz mimarinin kuralıdır.",
    items: [
      {
        title: "KVKK Uyumlu Veri İşleme",
        text: "Kişisel veri, amacı ve saklama süresi baştan sınırlanır. Kim görür, ne kadar durur, kayıt altındadır.",
      },
      {
        title: "Rol Tabanlı Erişim Kontrolü",
        text: "Her rol yalnızca kendi ekranını ve veri kapsamını görür. Yetki, kişiye değil role bağlanır.",
      },
      {
        title: "Şifreli Veri İletimi",
        text: "Sistemler arası aktarım şifreli kanal üzerinden gider. Açık metin dolaşmaz.",
      },
      {
        title: "İzole Bulut Altyapısı",
        text: "Kurum verisi ortak bir havuzda karışmaz. Ortamlar ve erişim sınırları birbirinden ayrılır.",
      },
    ],
  },
  vision: {
    eyebrow: "Vizyon & Misyon",
    missionTitle: "Misyonumuz",
    mission:
      "İşletmelerin karmaşık insan kaynakları, saha operasyonu ve veri süreçlerini; yüksek performanslı analitik paneller, coğrafi bilgi sistemleri ve yapay zeka tabanlı yazılımlarla sadeleştirerek ölçülebilir verimlilik sağlamak.",
    visionTitle: "Vizyonumuz",
    vision:
      "Kurumsal yazılım ve veri zekâsı alanında geliştirdiği yenilikçi ürünlerle Türkiye'den çıkan öncü teknoloji şirketlerinden biri olmak ve işletmelerin dijital dönüşüm standartlarını belirlemek.",
  },
  why: {
    eyebrow: "Yaklaşımımız",
    title: "Neden BCD TECHNOLOGIES?",
    description:
      "Her kurumun veri olgunluğu, regülasyonu ve operasyon ritmi farklıdır. Çözümleri; ölçeklensin, veri güvende kalsın ve mevcut sistemlerinize hızla bağlansın diye size özel geliştiririz.",
    reasons: [
      {
        title: "Ölçeklenebilir mimari",
        text: "Modüler servisler ve net sınırlar. Yük arttığında sistem yeniden yazılmaz, genişler.",
      },
      {
        title: "Veri güvenliği",
        text: "Rol bazlı erişim, şifreli aktarım ve denetlenebilir kayıt. Hassas İK ve operasyon verisi kurum sınırında kalır.",
      },
      {
        title: "Hızlı entegrasyon",
        text: "Mevcut sistemlere bağlanır. İlk değer, kontrollü bir pilotla görünür hale gelir.",
      },
    ],
    customTitle: "Özel geliştirme",
    customText:
      "Şablon teslim etmeyiz. İhtiyacı birlikte netleştirir, yalnızca kurumunuzun süreçlerine uyan yazılımı üretiriz.",
    customCta: "Kapsamı konuşalım",
    stepsTitle: "Nasıl ilerleriz",
    steps: [
      { title: "Keşif", text: "İhtiyaç, veri kaynakları ve başarı ölçütü birlikte netleşir." },
      { title: "Pilot", text: "Dar bir kapsamda değer görünür hale gelir, risk kontrol altında kalır." },
      { title: "Entegrasyon", text: "Mevcut sistemlere güvenli bağ kurulur, günlük iş kesilmez." },
      { title: "Ölçek", text: "Mimari, yeni birimlere ve artan veri hacmine açılır." },
    ],
  },
  about: {
    eyebrow: "Hakkımızda",
    title: "Teknoloji, karar hızını artırmalı; karmaşıklığını değil.",
    p1: "BCD TECHNOLOGIES, kurumsal karar vericilerin dağınık veriyi güvenle okuyabildiği sistemler kurar. Vizyonumuz; insan kaynakları, operasyon ve yönetim ekiplerinin aynı gerçeği gördüğü, sade ve denetlenebilir bir teknoloji katmanıdır.",
    p2: "Güvenilirlik bizim için bir slogan değildir. Erişim, kayıt ve sorumluluk sınırları projenin ilk gününden tanımlanır. Kurum, yazılımın içinde ne olduğunu bilir.",
    principles: [
      { title: "Şeffaflık", text: "Ne ölçüldüğü ve kimin gördüğü baştan tanımlanır. Sürpriz metrik bırakmayız." },
      { title: "Sadelik", text: "Arayüz, karar anına hizmet eder. Gösteriş, yöneticinin işini yavaşlatmaz." },
      { title: "Süreklilik", text: "Teslim bir bitiş değildir. Sistem, kurumunuzun ritmiyle birlikte yaşar." },
    ],
  },
  contact: {
    eyebrow: "İletişim",
    title: "Projenizi birlikte değerlendirelim",
    body: "Demo veya keşif toplantısı için formu doldurun. İlgilendiğiniz çözüm alanını ve kurum büyüklüğünü seçmeniz, kapsamı daha hızlı netleştirir.",
    points: ["Demo veya keşif toplantısı", "Kurumunuza göre kapsam", "Net bir sonraki adım"],
  },
  form: {
    legend: "Tüm alanlar zorunludur.",
    honeypot: "Web sitesi",
    name: "Ad Soyad",
    company: "Kurum Adı",
    email: "E-posta",
    summary: "Proje / İhtiyaç Özeti",
    placeholder: "Kısaca kurumunuzu, hedeflediğiniz çıktıyı ve varsa mevcut sistemlerinizi yazın.",
    solution: "İlgilendiği Çözüm Alanı",
    size: "Kurum Büyüklüğü",
    solutions: [
      { id: "hr", label: "İK & Saha Haritalama" },
      { id: "analytics", label: "Veri Analitiği Paneli" },
      { id: "software", label: "Özel Kurumsal Yazılım" },
      { id: "ai", label: "Yapay Zeka Otomasyonu" },
    ],
    sizes: [
      { id: "1-50", label: "1–50" },
      { id: "51-250", label: "51–250" },
      { id: "251-1000", label: "251–1.000" },
      { id: "1000+", label: "1.000+" },
    ],
    pending: "Gönderiliyor...",
    submit: "Toplantı Talebi Gönder",
    successTitle: "Talebiniz alındı",
    successBody: "Talebiniz alındı. En kısa sürede sizinle iletişime geçeceğiz.",
    reset: "Yeni bir talep oluştur",
    close: "Bildirimi kapat",
    check: "Lütfen işaretli alanları kontrol edin.",
    errors: {
      name: "Ad soyad en az 3 karakter olmalıdır.",
      company: "Kurum adını girin.",
      email: "Geçerli bir e-posta adresi girin.",
      summary: "İhtiyacınızı en az 20 karakterle özetleyin.",
      solution: "Bir çözüm alanı seçin.",
      size: "Kurum büyüklüğünü seçin.",
    },
  },
  footer: {
    blurb: "Kurumsal firmalar için veri analitiği panelleri, akıllı iş gücü haritalama ve özel yazılım.",
    linksTitle: "Hızlı linkler",
    contactTitle: "İletişim",
    rights: "© 2026 BCD TECHNOLOGIES. Tüm hakları saklıdır.",
    vision: "Vizyon & Misyon",
    security: "Güvenlik",
  },
  dashboard: {
    signal: "Örnek sinyal",
    efficiency: "+%34 Operasyonel Verimlilik",
    sync: "Canlı Veri Senkronizasyonu Aktif",
    syncNote: "Örnek panel durumu",
    title: "Canlı Komuta Merkezi",
    sample: "Örnek panel",
    tabs: "Komuta merkezi görünümleri",
    distribution: "Gösterge dağılımı",
    footnote: "Gösterilen değerler örnek arayüze aittir. Canlı müşteri verisi içermez.",
    panels: {
      ik: {
        label: "İK Haritalama",
        kicker: "Yetkinlik ve doluluk",
        stats: ["Görünen çalışan", "Planlı doluluk", "Kritik rol"],
        bars: ["Yetkinlik", "Doluluk", "Kritik rol", "Devir", "Uzaktan"],
      },
      ops: {
        label: "Operasyon Analitiği",
        kicker: "Kapasite ve akış",
        stats: ["Kapasite", "Ort. akış", "İzlenen tesis"],
        bars: ["Üretim", "Sevkiyat", "Enerji", "Arıza", "Kapasite"],
      },
      ai: {
        label: "Yapay Zeka Otomasyonu",
        kicker: "Öneri ve onay kuyruğu",
        stats: ["Açık öneri", "Otomatik adım", "Onay bekleyen"],
        bars: ["Eşleşme", "Öneri", "Onay", "Tasarruf", "Kuyruk"],
      },
    },
  },
};

const en: typeof tr = {
  skip: "Skip to content",
  title: "BCD TECHNOLOGIES | Data Analytics, Workforce Mapping and Custom Software",
  langLabel: "Language",
  nav: {
    solutions: "Solutions",
    scenarios: "Scenarios",
    approach: "Approach",
    about: "About",
    contact: "Contact",
    menu: "Sections",
    open: "Open menu",
    close: "Close menu",
  },
  hero: {
    kicker: "Enterprise technology partner",
    before: "Manage data, ",
    glow1: "workforce",
    mid: " and ",
    glow2: "operations",
    after: " with the same clarity.",
    body: "BCD TECHNOLOGIES builds data analytics panels, intelligent workforce mapping and custom software for enterprises. Leaders, HR and operations read scattered information on one secure surface. Investors and partners meet an architecture that can scale and be audited.",
    primary: "Plan a Demo / Meeting",
    secondary: "Review Our Solutions",
    areas: ["Analytics panels", "Workforce mapping", "Custom software"],
  },
  solutions: {
    eyebrow: "Solutions",
    title: "The surface decision makers need",
    description:
      "Four surfaces: an executive view, a map of the workforce, software shaped to the company, and a secure link to the systems you already run.",
    analyticsTitle: "Data Analytics Panels",
    analyticsText:
      "Leadership and operations see the same indicators, scoped to their role. Sales, cost, capacity and risk sit on one surface.",
    sample: "Sample indicator",
    trend: "Monthly trend",
    months: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
    workforceTitle: "Intelligent Workforce Mapping",
    workforceText:
      "Skill, location, occupancy and critical-role risk become visible. HR planning follows current data, not instinct.",
    customTitle: "Custom Software",
    customText: "When a package does not fit the process, the application is designed, built and put into use.",
    integrationTitle: "Secure Integration",
    integrationText:
      "ERP, HR, CRM and warehouse connections add a decision layer without replacing the systems you already run.",
    tags: ["ERP", "HR systems", "CRM", "Data warehouse"],
  },
  cases: {
    eyebrow: "Cases & Application Scenarios",
    title: "What the system changes at work",
    description:
      "Three company profiles, one structure: the problem, the architecture we build, and the gain to expect. These are not published customer results.",
    problem: "Problem",
    solution: "Architecture",
    gain: "Gain",
    note: "Scenarios describe example company needs. They are not published customer results or a guaranteed return.",
    items: [
      {
        title: "Multi-Region Field and HR Mapping",
        problem:
          "Headcount, skill and occupancy live in separate tables by city and site. A critical role gap shows up late.",
        solution:
          "Workforce records attach to a geographic layer. Role, location and occupancy filter on one map, by permission.",
        gain: "HR and the field see the same picture. Planning runs from a current map, not scattered files.",
      },
      {
        title: "Decision Support and Live Analytics Panels",
        problem: "Sales, cost and capacity reports arrive late. The leadership meeting runs on yesterday’s numbers.",
        solution:
          "One decision surface is fed by the source systems. Each indicator keeps the same definition by role and period.",
        gain: "Decisions rest on a shared, current set of indicators. The meeting starts without waiting for a report.",
      },
      {
        title: "Approved Operational Steps with AI",
        problem: "Repeated matching and approval work grows the queue. Exceptions disappear inside the routine.",
        solution: "A recommendation engine prepares the queue. Approval stays with a person, and every step is recorded.",
        gain: "Routine steps get shorter. Exceptions and approvals stay visible and auditable.",
      },
    ],
  },
  security: {
    eyebrow: "Trust",
    title: "Enterprise Security Architecture",
    description:
      "For sensitive HR and operations data, access, transfer and environment separation are defined on day one. This is a rule of the architecture we build, not a certification badge.",
    items: [
      {
        title: "KVKK-Aligned Data Processing",
        text: "Personal data is limited by purpose and retention from the start. Who can see it, and for how long, is recorded.",
      },
      {
        title: "Role-Based Access Control",
        text: "Each role sees only its own screens and data scope. Permission is tied to the role, not the person.",
      },
      {
        title: "Encrypted Data Transfer",
        text: "Traffic between systems moves through an encrypted channel. Plain text does not travel.",
      },
      {
        title: "Isolated Cloud Infrastructure",
        text: "Company data does not mix in a shared pool. Environments and access boundaries stay separate.",
      },
    ],
  },
  vision: {
    eyebrow: "Vision & Mission",
    missionTitle: "Our Mission",
    mission:
      "To simplify complex HR, field operations and data processes with high-performance analytics panels, geographic systems and AI-based software, and to deliver measurable efficiency.",
    visionTitle: "Our Vision",
    vision:
      "To be one of the leading technology companies to come out of Türkiye in enterprise software and data intelligence, and to set the standard for how companies transform digitally.",
  },
  why: {
    eyebrow: "Approach",
    title: "Why BCD TECHNOLOGIES?",
    description:
      "Every company has a different data maturity, regulation and operating rhythm. We build for that company, so the system can scale, keep data protected and connect to what you already run.",
    reasons: [
      {
        title: "Scalable architecture",
        text: "Modular services and clear boundaries. When load grows, the system expands. It is not rewritten.",
      },
      {
        title: "Data security",
        text: "Role-based access, encrypted transfer and an auditable record. Sensitive HR and operations data stays inside the company boundary.",
      },
      {
        title: "Fast integration",
        text: "It connects to the systems you have. The first value shows up in a controlled pilot.",
      },
    ],
    customTitle: "Custom development",
    customText: "We do not hand over a template. We define the need with you and build only the software that fits your process.",
    customCta: "Talk through the scope",
    stepsTitle: "How we proceed",
    steps: [
      { title: "Discovery", text: "Need, data sources and the measure of success are defined together." },
      { title: "Pilot", text: "Value shows up in a narrow scope, with risk kept in check." },
      { title: "Integration", text: "A secure link is made to current systems. Daily work is not stopped." },
      { title: "Scale", text: "The architecture opens to new units and a larger volume of data." },
    ],
  },
  about: {
    eyebrow: "About",
    title: "Technology should speed up the decision, not its complexity.",
    p1: "BCD TECHNOLOGIES builds systems where enterprise decision makers can read scattered data with confidence. The vision is a plain, auditable technology layer where HR, operations and leadership see the same reality.",
    p2: "Trust is not a slogan for us. Access, records and responsibility are defined on the first day. The company knows what is inside the software.",
    principles: [
      { title: "Transparency", text: "What is measured, and who can see it, is defined first. We do not leave surprise metrics." },
      { title: "Clarity", text: "The interface serves the moment of decision. Decoration does not slow the leader down." },
      { title: "Continuity", text: "Delivery is not an ending. The system lives with the rhythm of your company." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s review your project together",
    body: "Use the form to request a demo or a discovery meeting. Choosing a solution area and company size makes the scope clearer, faster.",
    points: ["Demo or discovery meeting", "Scope shaped to your company", "A clear next step"],
  },
  form: {
    legend: "All fields are required.",
    honeypot: "Website",
    name: "Full name",
    company: "Company",
    email: "Email",
    summary: "Project / Need Summary",
    placeholder: "Briefly describe your company, the outcome you want, and any systems you already use.",
    solution: "Solution Area of Interest",
    size: "Company Size",
    solutions: [
      { id: "hr", label: "HR & Field Mapping" },
      { id: "analytics", label: "Data Analytics Panel" },
      { id: "software", label: "Custom Enterprise Software" },
      { id: "ai", label: "AI Automation" },
    ],
    sizes: [
      { id: "1-50", label: "1–50" },
      { id: "51-250", label: "51–250" },
      { id: "251-1000", label: "251–1,000" },
      { id: "1000+", label: "1,000+" },
    ],
    pending: "Sending...",
    submit: "Send Meeting Request",
    successTitle: "Request received",
    successBody: "Your request was received. We will contact you shortly.",
    reset: "Start another request",
    close: "Dismiss notification",
    check: "Please review the marked fields.",
    errors: {
      name: "Enter a full name of at least 3 characters.",
      company: "Enter the company name.",
      email: "Enter a valid email address.",
      summary: "Summarize the need in at least 20 characters.",
      solution: "Choose a solution area.",
      size: "Choose a company size.",
    },
  },
  footer: {
    blurb: "Data analytics panels, intelligent workforce mapping and custom software for enterprises.",
    linksTitle: "Quick links",
    contactTitle: "Contact",
    rights: "© 2026 BCD TECHNOLOGIES. All rights reserved.",
    vision: "Vision & Mission",
    security: "Security",
  },
  dashboard: {
    signal: "Sample signal",
    efficiency: "+34% Operational Efficiency",
    sync: "Live Data Sync Active",
    syncNote: "Sample panel status",
    title: "Live Command Center",
    sample: "Sample panel",
    tabs: "Command center views",
    distribution: "Indicator mix",
    footnote: "Figures belong to a sample interface. They are not live customer data.",
    panels: {
      ik: {
        label: "HR Mapping",
        kicker: "Skill and occupancy",
        stats: ["Visible staff", "Planned occupancy", "Critical roles"],
        bars: ["Skill", "Occupancy", "Critical role", "Turnover", "Remote"],
      },
      ops: {
        label: "Operations Analytics",
        kicker: "Capacity and flow",
        stats: ["Capacity", "Avg. flow", "Sites watched"],
        bars: ["Production", "Shipping", "Energy", "Faults", "Capacity"],
      },
      ai: {
        label: "AI Automation",
        kicker: "Suggestions and approvals",
        stats: ["Open suggestions", "Automated step", "Awaiting approval"],
        bars: ["Match", "Suggestion", "Approval", "Savings", "Queue"],
      },
    },
  },
};

export const messages = { tr, en };

export type Copy = typeof tr;
