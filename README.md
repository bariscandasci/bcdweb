# BCD TECHNOLOGIES

Kurumsal tanıtım sitesi. Next.js (App Router), TypeScript, Tailwind CSS, Lucide ve Framer Motion ile hazırlanmıştır.

## Geliştirme

```bash
npm install
npm run dev
```

Site varsayılan olarak [http://localhost:3000](http://localhost:3000) adresinde açılır.

## Üretim

```bash
npm run build
npm run start
```

## İletişim formu

Form alanları sunucuda doğrulanır. Başarılı gönderimde sayfada bir onay ve kısa bir bildirim görünür. İletiler henüz bir e-posta kutusuna düşmez. Canlı iletim için `app/actions.ts` içindeki başarı dönüşünden hemen önce bir e-posta sağlayıcısı bağlanmalıdır.
