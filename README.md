# Luffa EcoCycle

Luffa EcoCycle — Jizzax sharoitida luffa o‘simligini yetishtirish, tolali xomashyoni qayta ishlash, mahsulotni qadoqlash va sotuv kanallarini sinash uchun loyiha konsepsiyasi. Sayt loyiha bosqichini ochiq ko‘rsatadi va tasdiqlanmagan hosil, mijoz, sotuv, sertifikat yoki yetkazib beruvchi narxlarini fakt sifatida taqdim etmaydi.

## Fayllar

- `index.html` — o‘zbek tilidagi sahifa mazmuni va bo‘limlar
- `styles.css` — responsive vizual tizim, desktop va mobil uslublar
- `app.js` — navigatsiya va oylik moliyaviy ssenariy kalkulyatori
- `README.md` — loyiha izohi, tekshiruvlar va GitHub Pages bo‘yicha yo‘riqnoma

## Hozirgi holat va ma’lumotlar maqomi

- **Loyiha yo‘nalishi:** foydalanuvchi bergan konsepsiya — Jizzaxda luffa yetishtirish, qayta ishlash, ekologik mahsulotlar, qadoqlash, sotuv va qoldiqlarni mas’uliyatli boshqarish.
- **Umumiy amaliy tamoyillar:** yetishtirish, quritish, tozalash, saralash, qadoqlash va bozorni sinash kabi ish oqimlari. Aniq agrotexnika mahalliy agronom bilan tekshirilishi kerak.
- **Taxminlar:** kalkulyatorning boshlang‘ich qiymatlari, jamoa soni va 2 gektarlik operatsion ssenariy. Ular real xarajat takliflari yoki kafolatlangan prognoz emas.
- **Kelajakdagi maqsadlar:** suv sarfi, hosil, yaroqli tola ulushi, xaridorlar, buyurtmalar va ekologik ta’sirni dalil bilan o‘lchash.
- **Hali tasdiqlanmagan:** hosil natijalari, xaridorlar, sotuvlar, yetkazib beruvchi narxlari, sertifikatlar va rasmiy ekologik da’volar.

## Moliyaviy kalkulyator

Kalkulyator oyiga ishlab chiqariladigan miqdor, sotuv ulushi, sotuv narxi, dona o‘zgaruvchan xarajati, ish haqi, ustama/ijara, sotuv-logistika va boshlang‘ich sarmoyani oladi.

Formulalar:

- Sotilgan dona = rejalashtirilgan ishlab chiqarish × sotuv ulushi.
- Tushum = sotilgan dona × dona sotuv narxi.
- O‘zgaruvchan xarajat = sotilgan dona × dona o‘zgaruvchan xarajati.
- Doimiy oylik xarajat = ish haqi + ustama/ijara + sotuv/logistika.
- Operatsion natija = tushum − o‘zgaruvchan xarajat − doimiy oylik xarajat.
- Dona marjasi = sotuv narxi − dona o‘zgaruvchan xarajati.
- Zararsizlik nuqtasi = doimiy oylik xarajat / dona marjasi, yuqoriga yaxlitlanadi. Dona marjasi nol yoki manfiy bo‘lsa hisoblab bo‘lmaydi.
- Oddiy sarmoya qoplanishi = boshlang‘ich sarmoya / musbat oylik operatsion natija.

**Cheklovlar:** bu soddalashtirilgan oylik ssenariy. Soliqlar, kredit foizi, mavsumiylik, ishlab chiqarish sikli, zaxira, qaytarishlar, uskunaning amortizatsiyasi, bir martalik yer/irrigatsiya/tayanch xarajatlari va aylanma mablag‘ alohida modellashtirilmagan. 2 gektar uchun investitsiya qarori oldidan xarajatlar bo‘yicha yozma takliflar va pilot natijalari kiritilsin.

## 2 gektarlik reja — qanday ishlatish kerak

Saytdagi ekin kalendari faqat dastlabki rejalashtirish skeleti. Ekish va hosil yig‘ish sanalari nav, tuproq, sovuq xavfi, sug‘orish va mahalliy ob-havoga bog‘liq. Kalendarni mahalliy agronom bilan moslashtiring.

1. Yer va foydalanish huquqini, suv ta’minotini, tuproq va drenajni tekshiring.
2. 0,25–0,5 ha pilot maydonda nav, tayanch, sug‘orish, hosildorlik va kasallik xavfini o‘rganing.
3. Har bir xarajatni yozing: yer tayyorlash, urug‘, tayanch, sug‘orish, ish haqi, hosil yig‘ish, quritish, tozalash, qadoq, saqlash, transport, soliq va sotuv.
4. Quritish va saqlash joyini tayyorlang; partiya raqami va sifat nazoratini joriy qiling.
5. Do‘kon, onlayn katalog, mehmonxona/spa va B2B xaridorlari bilan talabni sinang.
6. Faqat pilot dalillari, real xaridor qiziqishi va tasdiqlangan moliyaviy modeldan keyin maydonni kengaytiring.

## Mahalliy ishga tushirish

1. `index.html`, `styles.css`, `app.js` fayllarini bitta papkaga joylang.
2. `index.html` faylini zamonaviy brauzerda oching. Server yoki build jarayoni talab qilinmaydi.
3. Kalkulyator maydonlarini o‘zgartirib, natijalar va zararsizlik nuqtasi yangilanishini tekshiring.
4. Mobil ko‘rinishni brauzer Developer Tools orqali tekshiring.
5. E’lon qilishdan oldin `hello@example.com` manzilini haqiqiy, loyiha uchun nazorat qilinadigan email manziliga almashtiring. Bu namuna manzil; buyurtmalarni unga yubormang.

## GitHub Pages orqali nashr qilish

1. Repository’da **Settings → Pages** bo‘limini oching.
2. **Build and deployment → Deploy from a branch** ni tanlang.
3. Branch sifatida `main`, folder sifatida `/(root)` ni tanlang va saqlang.
4. Bir necha daqiqadan keyin Pages ko‘rsatgan URL’ni oching.
5. Har bir o‘zgarishdan keyin sayt URL’ini desktop va mobil o‘lchamda tekshiring.

### Tavsiya etilgan xavfsiz yangilash jarayoni

1. `main` dan yangi branch yarating, masalan `feature/startup-site-refresh`.
2. O‘zgarishlarni shu branchga commit qiling.
3. Pull request oching va diff’ni tekshiring.
4. Fayllar va hisob-kitoblar tekshirilgandan keyin PR’ni birlashtiring. GitHub Pages `main` dan deploy qilinsa, nashr faqat birlashtirilgandan keyin yangilanadi.

## Tekshiruv ro‘yxati

- [ ] Navigatsiya havolalari sahifadagi mavjud ID’larga olib boradi.
- [ ] Mobil menyu ochiladi/yopiladi va havola bosilganda yopiladi.
- [ ] Kalkulyator barcha maydonlar o‘zgarganda qayta hisoblaydi.
- [ ] Sotuv ulushi 0–100 oralig‘ida cheklanadi.
- [ ] Dona marjasi nol yoki manfiy bo‘lsa, zararsizlik nuqtasi noto‘g‘ri ko‘rsatilmaydi.
- [ ] Manfiy operatsion natija aniq ko‘rsatiladi.
- [ ] Kontakt emaili nashrdan oldin haqiqiy manzilga almashtiriladi.
- [ ] Hosil, mijoz, sertifikat, ekologik natija va narx haqidagi da’volar dalil bilan tasdiqlanadi.

## Kelajakda backend kerak bo‘ladimi?

Hozirgi statik sayt uchun login yoki backend shart emas. Backend faqat buyurtmalarni serverda saqlash, xavfsiz admin paneli, foydalanuvchi hisoblari, inventar yoki to‘lovlar kerak bo‘lganda ko‘rib chiqiladi. Shunda ham parollar, tokenlar yoki maxfiy API kalitlarini HTML/JavaScript ichiga joylashtirmang.

## Real pilot evidence and illustrative external images

- The `assets/luffa-*.jpg` images are the user's own submitted photographs of seedlings, vines, flowers and fruit from the small home-garden pilot.
- The website now states the user-reported result of **45 finished loofah washcloths** from that small pilot. It is not presented as a 2-hectare yield or independently audited statistic.
- External product/byproduct images are illustrative references, not Luffa EcoCycle inventory or user-made products. The relevant image cards link to the source page. Before public/commercial launch, check image permissions and replace any image without suitable reuse rights with licensed/owned images.
- Product directions are separated by stage: bath loofah is the reported pilot product; kitchen scrubber and gift set are proposed product directions; seed saving and composting are potential byproduct pathways to test; seed oil is a longer-term research idea, not an established operation.
- Do not claim that compost, seed oil, or other byproduct products are already manufactured or sold. Confirm process, safety, cost, and demand before adding them to the active product catalogue.
