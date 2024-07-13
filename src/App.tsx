import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return <div className="App">
    {/* I-bob BO’I, UAH [1-40] (40)

1. Algoritm deb, …
====
qo’yilgan masalani yechish uchun ma’lum qoidaga binoan bajariladigan amallarning chekli qadamlar ketma-ketligiga aytiladi.
====
algoritmda ijrochiga berilayotgan ko’rsatmalar aniq mazmunda bo’lishiga aytiladi.
====
algoritmlarni chekli qadamlardan tashkil qilib bo’laklash imkoniyatiga aytiladi.
====
bajarilayotgan algoritm chekli qadamlarda natijaga olib kelishiga aytiladi.

++++

 2. Algoritmning tushunarlilik xossasi – 
====
algoritmda ijrochiga berilayotgan ko’rsatmalar aniq mazmunda bo’lishi
====
algoritmlarni chekli qadamlardan tashkil qilib bo’laklash imkoniyati
====
bajarilayotgan algoritm chekli qadamlarda natijaga olib kelishi
====
har bir algoritm mazmuniga ko’ra bir turdagi masalalarning barchasi uchun ham o’rinli bo’lishi

++++

3. Algoritmning diskretlilik xossasi – 
====
algoritmlarni chekli qadamlardan tashkil qilib bo’laklash imkoniyati bo’lishi
====
algoritmda ijrochiga berilayotgan ko’rsatmalar aniq mazmunda bo’lishi
====
bajarilayotgan algoritm chekli qadamlarda natijaga olib kelishi
====
algoritmda ijrochiga berilayotgan ko’rsatmalar aniq mazmunda bo’lishi

++++

4. Algoritmning cheklilik xossasi – 
====
bajarilayotgan algoritm chekli qadamlarda natijaga olib kelishi
====
algoritmda ijrochiga berilayotgan ko’rsatmalar aniq mazmunda bo’lishi
====
algoritmlarni chekli qadamlardan tashkil qilib bo’laklash imkoniyati
====
har bir algoritm mazmuniga ko’ra bir turdagi masalalarning barchasi uchun ham o’rinli bo’lishi

++++

5. Algoritmning ommaviylik xossasi – 
====
har bir algoritm mazmuniga ko’ra bir turdagi masalalarning barchasi uchun ham o’rinli bo’lishi
====
algoritmda ijrochiga berilayotgan ko’rsatmalar aniq mazmunda bo’lishi
====
bajarilayotgan algoritm chekli qadamlarda natijaga olib kelishi
====
algoritmlarni chekli qadamlardan tashkil qilib bo’laklash imkoniyati

++++

6. Algoritmning formallik xossasi – 
====
komandalarni mexanik bajarish imkoniyati
====
algoritmda ijrochiga berilayotgan ko’rsatmalar aniq mazmunda bo’lishi
====
bajarilayotgan algoritm chekli qadamlarda natijaga olib kelishi
====
algoritmlarni chekli qadamlardan tashkil qilib bo’laklash imkoniyati

++++

7. Algoritmning formallik xossasi –
====
robotlar, kompyuterlar va boshqa qurilmalarda komandalarning bajarilishini ta’minlaydi
====
algoritmda ijrochiga berilayotgan ko’rsatmalar aniq mazmunga ega bo’lishini ta’minlaydi
====
bajarilayotgan algoritm chekli qadamlarda natijaga olib kelishini ta’minlaydi
====
algoritmlarni chekli qadamlardan tashkil qilib bo’laklash imkoniyatini ta’minlaydi

++++

8. Chiziqli algoritm – deb ...
====
hech qanday shartsiz faqat ketma-ket bajariladigan jarayonlarga aytiladi
====
biron bir shart tekshirilishi yoki biron parametrning har xil qiymatlari asosida algoritmda ko’p marta qayta bajarishi yuz beradigan jarayonlarga aytiladi
====
ma’lum shartlarga muvofiq bajariladigan ko’rsatmalardan tuzilgan algoritmga aytiladi
====
hech qanday shartsiz faqat ketma-ket bajariladigan jarayonlarga aytiladi

++++

9. Tarmoqlanuvchi algoritm – deb ...
====
ma’lum shartlarga muvofiq bajariladigan ko’rsatmalardan tuzilgan algoritmga aytiladi
====
biron bir shart tekshirilishi yoki biron parametrning har xil qiymatlari asosida algoritmda ko’p marta qayta bajarishi yuz beradigan jarayonlarga aytiladi
====
hech qanday shartsiz faqat ketma-ket bajariladigan jarayonlarga aytiladi
====
qo’yilgan masalani yechish uchun ma’lum qoidaga binoan bajariladigan amallarning chekli qadamlar ketma-ketligiga aytiladi

++++

10. Takrorlanuvchi algoritm – deb ...
====
biron bir shart tekshirilishi yoki biron parametrning har xil qiymatlari asosida algoritmda ko’p marta qayta bajarishi yuz beradigan jarayonlarga aytiladi
====
ma’lum shartlarga muvofiq bajariladigan ko’rsatmalardan tuzilgan algoritmga aytiladi
====
hech qanday shartsiz faqat ketma-ket bajariladigan jarayonlarga aytiladi
====
qo’yilgan masalani yechish uchun ma’lum qoidaga binoan bajariladigan amallarning chekli qadamlar ketma-ketligiga aytiladi

++++

11. Agar takrorlanuvchi algoritmlar bir nechta parametrlarga bog’liq bo’lsa ular qanday nomlanadi?
====
ichma-ich joylashgan tsiklik algoritmlar
====
chiziqli algoritmlar
====
tarmoqlanuvchi algoritmlar
====
ketma-ket yaqinlashuvchi algoritmlar

++++

12. O’ziga–o’zi murojaat qiladigan algoritmlar qanday nomlanadi?
====
rekkurent algoritmlar deb ataladi
====
ichma-ich joylashgan tsiklik algoritmlar
====
chiziqli algoritmlar
====
tarmoqlanuvchi algoritmlar

++++

13. Algebraik va tratsending tenglamalarni taqribiy yechishda oraliqlarni aniqlash.
====
Agar biror [a,b] oraliqda y = f(x) funktsiya uzluksiz bo’lib, f(a)*f(b)<0 bo’lsa, shu oraliqda f(x)=0  tenglamaning kamida bitta ildizi mavjud bo’ladi.
====
f(x)=0 tenglama berilgan biror [a;b] oraliqda f(a)*f(b)<0 bo’lsa, tenglamaning oraliqda bi necha yechimlari mavjud.
====
Agar biror [a,b] oraliqda y = f(x) funktsiya uzluksiz bo’lib, f(a)•f(b)>0 bo’lsa, shu oraliqda f(x)=0  tenglamaning kamida bitta ildizi mavjud bo’ladi.
====
Agar biror [a,b] oraliqda y = f(x) funktsiya uzluksiz bo’lib, f(a)•f(b)<0 bo’lsa, shu oraliqda f(x)=0  tenglamaning bitta ildizi mavjud bo’ladi.

++++

14. Tenglamalarni Nyuton usulida taqribiy yechimlarini toppish formulasi.
====
Xn+1=Xn-f(Xn)/f’(Xn)
====
Xn+1=Xn-f(Xn)*(b-Xn)/(f(b)-f(Xn))
====
Xn+1=Xn-f(Xn)*(Xn-b)/(f(Xn)-f(a))
====
Xn+1=Xn+f(Xn)*( b-Xn)/(f(b)- f(Xn))

++++

15. Tenglamalarni Vatarlar usulida taqribiy yechimlarini topish formulasi.
====
Xn+1=Xn-f(Xn)*(b-Xn)/(f(b)-f(Xn))
====
Xn+1=Xn-f(Xn)*(Xn-b)/(f(Xn)-f(a))
====
Xn+1=Xn-f(Xn)/f’(Xn)
====
Xn+1=Xn+f(Xn)*( b-Xn)/(f(Xn)-f(b))

++++

16. Loyiha – bu …
====
qo’yilgan masalani yechish va belgilangan maqsadga erishish uchun kechadigan jarayondir 
====
vaqt, kapital va mexnat resurslaridan foydalanib belgilangan maqsadga erishishni ta’minlashdan iborat bo’lgan faoliyatdir 
====
doimiy ravishda oddiydan murakkabga o’tish va bitta katta masalani bir nechta oddiy masalalarni yechish orqali bajarishdir
====
fazalar yoki bosqichlarning mantiqiy ketma-ketligi jarayoniga ergashishdir

++++

17. Loyiha – bu …
====
bog’langan ob’ektlar ustida maqsadli amallar to’plami
====
vaqt, kapital va mexnat resurslaridan foydalanib belgilangan maqsadga erishishni ta’minlashdan iborat bo’lgan faoliyatdir
====
doimiy ravishda oddiydan murakkabga o’tish va bitta katta masalani bir nechta oddiy masalalarni yechish orqali bajarishdir
====
fazalar yoki bosqichlarning mantiqiy ketma-ketligi jarayoniga ergashishdir

++++

18. Loyiha – bu …
====
berilgan vaqt davomida ajratilgan byudjet asosida aniq belgilangan natijaga erishish maqsadida shakllantirilgan chekli topshiriqlar to’plami
====
vaqt, kapital va mexnat resurslaridan foydalanib belgilangan maqsadga erishishni ta’minlashdan iborat bo’lgan faoliyatdir
====
doimiy ravishda oddiydan murakkabga o’tish va bitta katta masalani bir nechta oddiy masalalarni yechish orqali bajarishdir
====
fazalar yoki bosqichlarning mantiqiy ketma-ketligi jarayoniga ergashishdir

++++

19. Loyiha – bu …
====
qo’yilgan masala, belgilangan muddat, narxi va sifat shartlari orqali xarakterlanadigan tashabbus
====
vaqt, kapital va mexnat resurslaridan foydalanib belgilangan maqsadga erishishni ta’minlashdan iborat bo’lgan faoliyatdir
====
doimiy ravishda oddiydan murakkabga o’tish va bitta katta masalani bir nechta oddiy masalalarni yechish orqali bajarishdir
====
fazalar yoki bosqichlarning mantiqiy ketma-ketligi jarayoniga ergashishdir

++++

20. Loyihani boshqarish – bu
====
vaqt, kapital va mexnat resurslaridan foydalanib belgilangan maqsadga erishishni ta’minlashdan iborat bo’lgan faoliyatdir
====
qo’yilgan masalani yechish va belgilangan maqsadga erishish uchun kechadigan jarayondir
====
bog’langan ob’ektlar ustida maqsadli amallar to’plamidir
====
berilgan vaqt davomida ajratilgan byudjet asosida aniq belgilangan natijaga erishish maqsadida shakllantirilgan chekli topshiriqlar to’plamidir

++++

21. Loyihalarni boshqarish – bu 
====
loyihaning turli bosqichlarida bir qator katta bo’lmagan alohida masalalarni yechishdan iborot
====
qo’yilgan masalani yechish va belgilangan maqsadga erishish uchun kechadigan jarayondir
====
bog’langan ob’ektlar ustida maqsadli amallar to’plamidir
====
berilgan vaqt davomida ajratilgan byudjet asosida aniq belgilangan natijaga erishish maqsadida shakllantirilgan chekli topshiriqlar to’plamidir

++++

22. Loyihalarni boshqarishning asosida 
====
qisqa muddatli yoki uzoq muddatli rejalashtirish yotadi
====
qo’yilgan masalani yechish va belgilangan maqsadga erishish uchun kechadigan jarayon yotadi
====
bog’langan ob’ektlar ustida maqsadli amallar to’plami yotadi
====
berilgan vaqt davomida ajratilgan byudjet asosida aniq belgilangan natijaga erishish maqsadida shakllantirilgan chekli topshiriqlar to’plami yotadi

++++

23. Loyihalarni boshqarish – bu 
====
doimiy ravishda oddiydan murakkabga o’tish va bitta katta masalani bir nechta oddiy masalalarni yechish orqali bajarishdir
====
qo’yilgan masalani yechish va belgilangan maqsadga erishish uchun kechadigan jarayondir
====
bog’langan ob’ektlar ustida maqsadli amallar to’plamidir
====
berilgan vaqt davomida ajratilgan byudjet asosida aniq belgilangan natijaga erishish maqsadida shakllantirilgan chekli topshiriqlar to’plamidir

++++

24. Jarayonlarni rejalashtirish – 
====
qo’yilgan masalaning ustuvorligi va bajarilish muddatiga bog’liq bo’lgan rejalashtirish usullariga asoslanadi
====
bog’langan ob’ektlar ustida maqsadli amallar to’plamini shakillantirish usullariga asoslanadi
====
qo’yilgan masalani yechish va belgilangan maqsadga erishish uchun kechadigan jarayondir
====
doimiy ravishda oddiydan murakkabga o’tish va bitta katta masalani bir nechta oddiy masalalarni yechish orqali bajarishdir

++++

25. Kichik loyiha – bu
====
ko’lamiga ko’ra katta bo’lmagan sodda va cheklangan hajmdagi loyiha
====
har xil tur, qurilish va hajmdagi alohida loyiha
====
qisqa muddatli va o’rta muddatli loyiha
====
maqsadlar, resurslar va vaqt bo’yicha o’zaro bog’langan loyiha

++++

26. Megaloyihalar – 
====
maqsadlar umumiyligi, resurslar va vaqt bo’yicha o’zaro bog’langan bir necha loyihani o’z ichiga oladi
====
tashkiliy, iqtisodiy, ijtimoiy va aralash loyihani o’z ichiga oladi
====
har xil tur, qurilish va hajmdagi alohida loyihani o’z ichiga oladi
====
investitsion, innovatsion, ilmiy-tadqiqot, aralash loyihani o’z ichiga oladi

++++

27. Amalga oshirish vaqti bo’yicha loyihalar – 
====
qisqa, o’rta va uzoq muddatli loyihalarga bo’linadi
====
kichik, o’rta, yirik, juda yirik loyihalarga bo’linadi
====
oddiy, murakkab, juda murakkab loyihalarga bo’linadi
====
investitsion, innovatsion, ilmiy-tadqiqot va aralash loyihalarga bo’linadi

++++

28. Amalga oshirilayotgan loyihaning faoliyat sohalari bo’yicha –  
====
tashkiliy, iqtisodiy, ijtimoiy va aralash loyihalarga bo’linadi
====
monoloyiha, multiloyiha, megaloyihalarga bo’linadi
====
har xil tur, qurilish va hajmdagi loyihalarga bo’linadi
====
investitsion, innovatsion, ilmiy-tadqiqot, aralash loyihalarga bo’linadi

++++

29. Loyiha tarkibi va tizimi bo’yicha – 
====
monoloyiha, multiloyiha, megaloyiha loyihalarga bo’linadi
====
kichik, o’rta, yirik, juda yirik loyihalarga bo’linadi
====
qisqa muddatli, o’rta muddatli, uzoq muddatli loyihalarga bo’linadi
====
investitsion, innovatsion, ilmiy-tadqiqot loyihalarga bo’linadi

++++

30. Monoloyiha – bu 
====
har xil tur, qurilish va hajmdagi alohida loyihadir
====
kichik, o’rta, yirik, juda yirik loyihadir
====
qisqa muddatli, o’rta muddatli, uzoq muddatli loyihadir
====
oddiy, murakkab, juda murakkab loyihadir

++++

31. Loyihaning hajmi, qatnashuvchilar soni va atrof-muhitga ta’sir darajasi bo’yicha loyihalar: 
====
kichik, o’rta, yirik, juda yirik loyihalarga bo’linadi
====
qisqa muddatli, o’rta muddatli, uzoq muddatli loyihalarga bo’linadi
====
monoloyiha, multiloyiha, megaloyiha loyihalarga bo’linadi
====
oddiy, murakkab, juda murakkab loyihalarga bo’linadi

++++

32. Loyiha davomiyligi bo’yicha:
====
qisqa va o’rta muddatli loyihalarga bo’linadi
====
kichik, o’rta, yirik loyihalarga bo’linadi
====
monoloyiha, multiloyiha, megaloyiha loyihalarga bo’linadi
====
oddiy, murakkab, juda murakkab loyihalarga bo’linadi

++++

33. Murakkablik darajasi bo’yicha loyihalar: 
====
oddiy, murakkab, juda murakkab loyihalarga bo’linadi
====
kichik,  yirik, murakkab loyihalarga bo’linadi
====
qisqa muddatli, o’rta muddatli, uzoq muddatli loyihalarga bo’linadi
====
monoloyiha, multiloyiha, megaloyiha loyihalarga bo’linadi

++++

34. Loyihaning fan sohasi xarakteri bo’yicha:
====
investitsion, innovatsion, ilmiy-tadqiqot, aralash
====
tashkiliy, iqtisodiy, ijtimoiy va aralash
====
monoloyiha, multiloyiha, megaloyiha
====
har xil tur, qurilish va hajmdagi alohida loyihadir

++++

35. Loyihalar hayot davrining boskichlari:
====
investitsiya oldi, investitsiya, ekspluatatsiya
====
investitsion, innovatsion, ilmiy-tadqiqot
====
tashkiliy, iqtisodiy, ijtimoiy
====
monoloyiha, multiloyiha, megaloyiha

++++

36. Qanday tizim statik tizim deyiladi?
====
vaqt o’tishi bilan tizim holatining o’zgarilishi kuzatilsa
====
ichki va tashqi qarshiliklarga chidamli bo’lsa
====
tizimning bajarilishi jarayonida uning holati o’zgarsa
====
vaqt o’tishi bilan tizimning holati o’zgarmasa

++++

37. Algoritm blok sxemalari necha turga bo’linadi?
====
3
====
2
====
4
====
1

++++

38. Tomonlari uzunligi a,b,c bulgan uchburchak yuzasini topish masalasini qaysi algoritm blok sxemasidan foydalaniladi.
====
tarmoqlanuvchi
====
takrorlanuvchi
====
to’g’ri chiziqli 
====
barcha javob to’g’ri

++++

39. Loyihalash – tushunchasini ko’rsatilishi.
====
mo’ljallangan obьektlar (apparat va asboblar, bino va inshootlar, yo’l va ko’priklar, mashina va jixozlar, samolyot va kosmik kemalar, radiopiryomnik va televizorlar, telefon va kompьyuterlar va boshqa turli–tuman mahsulotlarning yangi xillari va na’munalari)ni qurish va yaratish uchun ularning loyihalarini tuzish va chizish jarayoni.
====
kiritilayotgan ma’lumotlarni avtomatlashtirish.
====
ma’lumotlarni kiritish va chiqarish 
====
mo’ljallangan obьektlar (apparat va asboblar, bino va inshootlar, yo’l va ko’priklar, mashina va jixozlar, samolyot va kosmik kemalar, radiopiryomnik va televizorlar, telefon va kompьyuterlar va boshqa turli–tuman mahsulotlarning yangi xillari va na’munalari)ni dasturini tuzish jarayoni.

++++

40. Chiziqli tenglamalarni taqribiy yechishning iteratsiya usullarini ko’rsating
====
oraliqni ikkiga bo’lish, vatarlar, urunmalar
====
Lobachevskiy, Makloren
====
lagranj, nyuton
====
barcha javoblar to’g’ri

++++

2-bob NSS, AAO [41-69] (40)

41. Matematik programmalash masalasi chiziqli programmalash masalasi deyiladi, agarda
====
maqsad funkciyasi chiziqli bo’lib, cheklanishlar sistemasi chiziqli tengsizliklar yoki tenglamalardan iborat bo’lsa.
====
maqsad funkciyasi chiziqli bo’lib, cheklanishlar sistemasi chiziqli bo’lmasa.
====
cheklanishlar sistemasi chiziqli tengsizliklar yoki tenglamalardan iborat bo’lsa, maqsad funkciyasi chiziqli bo’lmasa.
====
cheklanishlar sistemasi chiziqli tengsizliklar yoki tenglamalardan iborat bo’lsa, maqsad funkciyasi bo’lmasa.

++++

42. CHiziqli  programmalash masalasining maqsadiga quyidagilar kiradi
====
chiziqli chegaralar mavjudligida funkciyaning eng kam(ko’p) qiymatini topish
====
tanlangan dasturalash tilida berilgan masalani echish uchun chiziqli dastur yozish
====
Berilgan vazifani algoritmini tariflash
====
nochiziqli cheklovlar mavjudligida funkciyaning eng kam(ko’p) qiymatini topish

++++

43. Berilgan funkciyalardan qay biri chiziqli dasturlash masalasining maqsad funkciyasi bo’lishi mumkin
====

====
 
====

====


++++

44. Dieta masalasidagi xi ..... anglatadi 
====
 aralashmadagi i chi homashening miqdori
====
i hom ashening narhi
====
i chi oziq ovqat mavjud ingridientning miqdori
====
i chi oziq ovqatdagi ingridientlar miqdori

++++

45. Dieta masalasidagi bj ..... anglatadi  
====
bir birlik aralashmadagi j chi ingridientning minimal miqdori 
====
i homashening narhi
====
i chi oziq ovqat mavjud ingridientning miqdori
====
i chi oziq ovqatdagi ingridientlar miqdori

++++

46. Dieta masalasidagi aij ..... anglatadi  
====
i chi homashedagi j ingridientning miqdori
====
Homashe turlari soni
====
Aralashmaning umumiy minimal og’irligi
====
Bir birlik aralashmadagi j ingridientning minimal miqdori.

++++

47. Matematik dasturlash masalasiga quyidagilar kiradi:
====
fuknciyaning minimumi yoki maksimumini topish
====
Maqsad funkciyaning topish
====
Tenglamalar sistemasini echish
====
Tenglasizliklar sistemasini echish

++++

48. Hom ashening sarflash masalasidagi aij ..... anglatadi
====
 j chi mahsulotni ishlab chiqarishga safrlangan i chi hom ashe miqdorini
====
j chi mahsulotni ishlab chiqarishga safrlangan i chi hom ashe zahira miqdorini
====
j chi mahsulotni sotishdagi foyda miqdorini
====
j chi mahsulotni ishlab chiqarishga safrlangan i chi hom ashe qoldiq miqdorini

++++

49. Agarda hom ashe sarflash masalasida biror bir hom asheni to’liq ishlatilish talab qilinsa shu hom ashega qanday chegara qo’yiladi
====
chegaraviy shart tenglama ko’rinishadi bo’ladi
====
qatъiy tengsizlik ko’rinishida beriladi
====
tengsizlik ko’rinishida beriladi
====
Eъtiborga olinmaydi

++++

50. Quyidagilarning qaysi biri to’g’ri?
====
Qoldiqlarsiz ochish racional  bo’ladi 
====
Qoldiqlarsiz ochish racional  bo’lishi mumkin
====
Qoldiqlarsiz ochish racional  bo’lmaydi
====
Ochishning rafional usuli  qoldiqlarsiz buladi

++++

51. Umumiy holatdagi chiziqli dasturlash masalasining mumkin bo’lgan echimlar to’plami X vektor quyidagi qaysi shartni qanoatlantiradi?
====
 
====
 
====
 
====


++++

52. Olaylik Ai vektor m o’lchovli bo’lsa u holda uning musbat komponentlari miqdori 
====
 m dan katta bo’lishi mumkin emas
====
m ga teng bo’ladi
====
m–1 ga teng
====
m+1 ga teng

++++

53. Agar chegaraviy shart  belgisi orqali berilgan bulsa u holda qo’shimcha qiymat qaysi ishora bilan kiritiladi
====
1
====
-1
====
0
====
M

++++

54. Agar chegaraviy shart  belgisi orqali berilgan bulsa u holda qo’shimcha qiymat qaysi ishora bilan kiritiladi  
====
–1
====
1
====
0
====
M

++++

55. Resurslarni optimal taqsimlash masalasidagi qo’shimcha uzgaruvchi xn+1 quyidagi iqtisodiy talqinga ega bo’ladi
====
i chi ko’rinishning ishlatilmagan resurlari hisoblanadi
====
i chi ko’rinishdagi mahsulotni sotishdan olingan foyda miqdori
====
i chi ko’rinishdagi bir birlik mahsulotni sotishdan olingan foyda miqdori
====
i chi ko’rinishdagi resursning foydalanilishi

++++

56. Resurslarni optimal taqsimlash masalasidagi manfiy bo’lmaslik sharti quyidagining zimmasiga yuklanadi
====
asosiy va qo’shimcha o’zgaruvchilar zimmasiga 
====
faqat asosiy o’zgaruvchilar zimmasiga 
====
faqat qo’shimcha o’zgaruvchilar zimmasiga
====
birinchi va ikkinchi o’zgaruvchi zimmasiga

++++

57. Barcha ko’pburchak uchun chiziqli dasturlash masalasi mavjudmi?
====
 yo’q faqat musbat qiymatli balandliklarga ega qavariq ko’pburchak uchun mavjud
====
yo’q faqat manfiy qiymatli balandliklarga ega qavariq ko’pburchak uchun mavjud
====
yo’q faqat uchta balandlikga ega qavariq ko’pburchak uchun mavjud
====
ha hammasi uchun mavjud

++++

58. CHiziqli dasturlash masalasining mumkin bo’lgan echimlar to’plami:
====
 bir vaqting o’zida barcha chegaraviy shartlarni qanoatlantirishi kerak
====
baъzi chegaraviy shartlarni qanoatlantirishi kerak
====
chegaraviy shartlarning eng katta qiymati bo’lishi kerak
====
Maqsad funkciyani optimal qiymatlar bilan taъminlashi kerak

++++

59. Geometrik chiziqli dasturlash masalasi ko’pburchakining shunday nuqtalarini topadiki, bu nuqtalar funkciya uchun minimal qiymat beradi va mumkin bo’lgan echimlar to’plami bo’lib ham hizmat qiladi
====
ko’pburchakning barcha nuqtalari
====
Ko’pburchakning faqat burchak nuqtalari
====
Faqat ko’pburchakning balandliklarida yotuvchi  nuqtalari.
====
Faqat ko’pburchakning chegaralarida yotuvchi  nuqtalari.

++++

60. CHiziqli dasturlash masalasi uchun quyidagilar chegaraviy shart bo’lishi mumkin:
====

====

====

====


++++

61. Korhona ikki turdagi mahsulot ishlab chiqaradi. A turdagi mahsulotni ishlab chiqarish uchun 2 kg hom ashyo sarflanadi. B mahsulotni ishlab chiqarish uchun esa 1 kg mahsulot ketadi. Korhona zahirasida jami 60 kg hom ashe zahirasi mavjud. Agarda  A mahsulotning sotilish narhi 3 birlik va B mahsulotning narhi 1 birlik bo’lsa va A mahsulot ishlab chiqarilishiga 25 birlik B mahsulot ishlab chiqarilishiga esa 30 birlik chegara qo’yilgan bo’lsa. Masalaning maqsad funkciyasi qanday ko’rinishda bo’ladi
====

====

====

====


++++

62. Agarda bazis vektorlarga mos keladigan optimal rejaning echimlari faqat nollardan tashkil topgan bo’lsa u holda
====
optimal reja yagona hisoblanadi
====
chiziqli funkciya mumkin bo’lgan echimlar to’plamida  chegaralanmagan hisoblanadi
====
optimal reja yagona emas
====
optimal reja yagona emas  va uning miqdori manfiy xij vektorlar soniga teng bo’ladi

++++

63. Agarda nolli baholash bazisga kirmaydigan vektorga mos kelsa u holda
====
 optimal reja yagona emas
====
chiziqli funkciya mumkin bo’lgan echimlar to’plamida  chegaralanmagan hisoblanadi
====
optimal reja yagona hisoblanadi
====
optimal reja yagona emas  va uning miqdori manfiy xij vektorlar soniga teng bo’ladi

++++

64. CHiziqli dasturlash masalasining chegaraviy shartlariga sunъiy o’zgaruvchilar qanday koefficentlar bilan kiritiladi
====
1
====
0
====
2
====
-1

++++

65. Agarda oldindan M kattalik berilmagan bo’lsa kengaytirilgan chiziqli dasturlash masalasining optimal rejasini topish uchun simpleks usuldan foydalaniladi va u quyidagi ko’rinishga ega bo’ladi
====
oddiy simpleks tablicadan bitta ko’p qatorga ega bo’ladi
====
oddiy simpleks tablicadan bitta kam qatorga ega bo’ladi
====
oddiy simpleks tablicadan ikkita ko’p qatorga ega bo’ladi 
====
oddiy simpleks tablicadan ikkita kam qatorga ega bo’ladi 

++++

66. x4 , x5 sunъiy o’zgaruvchilarga ega bo’lgan kengaytirilgan chiziqli dasturlash masalasining rejasi  X=(1,1,1,0,0) bo’lsin. Birmlamchi masala uchun optimal reja qanday ko’rinishda bo’ladi
====
 X=(1,1,1).
====
X=(1,0,0)
====
birlamchi masala optimal rejaga ega bo’lmaydi
====
birlamchi masalaning chiziqli funkciyasi chegaralanmagan bo’ladi

++++

67. Ikkilangan masala juftligi simmetrik bo’lishi uchun birlamchi masalaning chegaraviy shartlari qanday ko’rinishda berilgan bo’lishi kerak
====
tengsizliklar sistemasi ko’rinishida
====
tenglamalar sistemasi ko’rinishida
====
tenglamalar va tengsizliklar  sistemasi ko’rinishida
====
bitta tenglama va ikkita tengsizlik ko’rinishida

++++

68. Ikkilangan masala juftligi nosimmetrik bo’lishi uchun birlamchi masalaning chegaraviy shartlari qanday ko’rinishda berilgan bo’lishi kerak
====
 tenglamalar sistemasi ko’rinishida
====
tengsizliklar sistemasi ko’rinishida
====
tenglamalar va tengsizliklar  sistemasi ko’rinishida
====
bitta tenglama va ikkita tengsizlik ko’rinishida

++++

69. Simmetrik ikkilangan chiziqli dasturlash masalasi juftligida manfiy bo’lmaslik sharti .....
====
boshlang’ich va ikkilangan o’zgaruvchilar zimmasiga yuklatiladi
====
ikkilangan o’zgaruvchilar zimmasiga yuklatiladi
====
boshlang’ich o’zgaruvchilar zimmasiga yuklatiladi
====
boshlang’ich va ikkilangan o’zgaruvchilar zimmasiga yuklatilmaydi

++++

70. Algoritm tarmoqlanadi, agar:
====
Agar uni bajarilish biror shartninghaqiqiyligiga bog’liq bo’lsa.
====
Agar u jadvla ko’rinishiga ega bo’lsa.
====
Agar u yordamchi algoritmda o’ziga murojat qilsa
====
Agar u bir harakatni ko’p bora takrorlashdan tashkil topgan bo’lsa.

++++

71. Algoritm – bu:
====
Ko’zlangan natijaga erishish uchun ijrochiga berilgan tushunarli va aniq buyruqlar ketma-ketligi
====
Ajratilgan buyruqlarni bajarilish qoidalari.
====
Orientatsiyalangan graf, buyruqlar to’plamini bajarilish ketma-ketligini ko’rsatadigan.
====
Kompyuter uchun buyruqlar ketm-ketligi.

++++

72. Algoritm yozishning to’laroq usulari sababi: 
====
So’zli, grafikli, psevdokodli, dasturli.
====
So’zliygrafikli, psevdokodli, dasturli, matnli.
====
Grafikli, dasturli.
====
Psevdokodli. 

++++

73. Algoritm Natijaviylik  xossasining mohiyati shundan iboratki:
====
Barcha aniq buyruqlar bajarilish jarayoni chekli qadamlarda to’xtatiladi, kutilgan natija olinganda.
====
Algoritm aniq bajaruvchi uchun yoziladi, uning buyruq sistemasiga kiruvchi buyruqlardangina foydalanishi mumkin;
====
Algoritm diskretlik stukturasiga ega bo’lishi kerak (ketma-ket alohida qadamlarni ishdan chiqarishi zarur)
====
Algoritm faqat bitta masala yechimini taminlashi emas balki shu tipga oid bir nechta masalalar klassini topishi zarur;

++++

74. AlgoritmOmmaviylik xossasini mohiyati shundan iboratki:
====
Algoritm faqat bitta masala yechimini taminlashi emas balki shu tipga oid bir nechta masalalar klassini yechimini topishi zarur;
====
Barcha aniq buyruqlar bajarilish jarayoni oxirgi qadamlar sonida to’xtatiladi, kutilgan natija olinganda.
====
Algoritm aniq bajaruvchi uchun yoziladi, uning buyruq sistemasiga kiruvchi buyruqlardangina foydalanishi mumkin;
====
Algoritm diskretlik stukturasiga ega bo’lishi kerak (ketma-ket alohida qadamlarni ishdan chiqarishi zarur)

++++

75. AlgoritmDiskretlik xossasini mohiyati shundan iboratki:
====
Algoritm diskretlik stukturasiga ega bo’lishi kerak (ketma-ket alohida qadamlarni ishdan chiqarishi zarur).
====
Algoritm bajaruvchisi qaror qabul qilmasligi zarur, algoritm tuzuvchisini nazarda tutmasligi zarur.
====
Algoritm faqat bitta masala yechimini taminlashi emas balki shu tipga oid bir nechta masalalar klassini yechimini topishi zarur;
====
Barcha aniq buyruqlar bajarilish jarayoni oxirgi qadamlar sonida to’xtatiladi, kutilgan natija olinganda.

++++

76. Algoritm deb hisoblash mumkin:
====
Kvadrat tenglamaning yozma natijasi
====
Universitetdagi dars jadvali
====
Maktabdagi texnik passport
====
Guruh jurnaldagi ro’yhat.

++++

77. Algortimni shu algortimdagi barcha klasslarga qo’lash mumkinligi xossasi nima deb nomalanadi?
====
Ommaviylik 
====
Diskretlik
====
Ajratilganlik
====
Natijaviylik

++++

78. Algortimni natijaga doim yakuni qadamlar soni bilan yetib borish xossasi nima deb nomalanadi?
====
Natijaviylik
====
Diskretlik
====
Ajratilganlik
====
Ommaviylik 

++++

79. Algoritmda bir nechta birinma ketin bajarladigan buyruqlar ketm-ketligi ……… deb nomlanadi.
====
Seriya
====
Buyruq
====
Dastur
====
Xizmatchi so’z

++++

80. Protsessor algoritmdagi buyruqlarni qanday qabul qiladi?
====
Mashina tilida (ikkilik kodda)
====
Algorimlash tilida
====
Buyruqlar tilida
====
Blok-sxema ko’rinishida

++++

3-bob. MAN, AQU [81-120] (40)

81. Jadval funksiya uchun chiziqli model qanday ko’rinishda hosil qilinadi?
====
Y = ax + b
====
Y = ax2  + b
====
Y = an – bx
====
Y = ax3  + b

++++

82. Jadval funksiya uchun kvadratik model qanday ko’rinishda hosil qilinadi?
====
Y = ax2  + bx + c
====
Y = ax + b
====
Y = an – bx2
====
Y = xa2  + bx + c

+++

83. Fur’e trigonometrik qatori formulasini ko’rsating.
====

====

====

====
F(x) = f(t) / T

++++

84. Fur’e qatorining nolinchi indeksli  a  koeffisentni [0; T] oraliqda hisoblash formulasini ko’rsating.
====

====

====

====
a0 = f(t) / T

+++

85. Fur’e qatorining аn  koeffisentni [0; T] oraliqda hisoblash formulasini ko’rsating.
====

====

====

====
an = n * f(t) / T

++++

86. [A, B] oraliqda berilgan Xi ning qiymatlaridan iborat berilganlar nima deb nomlanadi?
====
 Tugun nuqtalar
====
Funksiyaning qiymati
====
Aniqlanish sohasi
====
Oraliq nuqtalar

++++

87. Chiziqli va kvadratik modellar qanday masala uchun qo’llaniladi
====
 approksimatsiya
====
interpolatsiya
====
ekstropolatsiya
====
Fur’e qatori

++++

88. Fur’e qatorining bn  koeffisentni [0; T] oraliqda hisoblash formulasini ko’rsating.
====

====

====

====
bn = n * f(t) / T

++++

89. y=f(x) berilgan funksiya bo’lsa. Argumentning fiksrlangan qiymatli orttirmasi qanday belgilanadi.
====

====

====

====
dx=h

++++

90. Approksimatsiya – bu …
====
 yaqinlashtirish
====
ajratish
====
Bog’liqlik
====
Natija olish

++++

91. Interpolatsiya – bu  …
====
 Ichki qiymatlarni aniqlash
====
Tashqi qiymatlarni aniqlash
====
Bog’liqlik
====
yaqinlashtirish

++++

92. Ekstropolatsiya – bu …
====
 Tashqi qiymatlarni aniqlash
====
Ichki qiymatlarni aniqlash
====
Bog’liqlik
====
yaqinlashtirish

++++

93. Tajribalar o’tkazish orqali kuzatilgan kiruvchi X va chiquvchi Y qiymatlarni o’zaro bog’lashni o’rganish ...
====
Approksimatsiya
====
Interpolatsiya
====
Ekstropolatsiya
====
Iteratsiya

++++

94. Jadval funksiya uchun chiziqli modelni hosil qilishda qanday qiymatlardan foydalaniladi?
====
 a va b ni toppish uchun хi , уi , (хi)2    va  xi‧yi  larning summalari (i=0,1,2,…,n), hamda  n+1.
a va b ni toppish uchun  хi ,  (хi)2  , (хi)3    va  yi  larning summalari (i=0,1,2,…,n).
a va b ni toppish uchun  уi , (хi)2  , (хi)3   va  xi‧yi  larning summalari (i=0,1,2,…,n), hamda 2n.
a va b ni toppish uchun  хi , уi , (хi)2 , (хi)3   va  xi‧yi   (i=0,1,2,…,n),  hamda  2n+1.
.

++++

95. Quyidagi jadval funksiya uchun chiziqli model tuzilsin.
x:[ –2; 0; 2; 4]
y:[  0;  2; 1; 3]
====
Y=0.4x+1.1
====
Y=0.5x+1.4
====
Y=0.5x+1
====
Y=0.4x+1

++++

96. Jadval funksiya (signal)ning Fur’e qatori koeffisentlari hisoblangan. Yetakchi garmonikalar amplitudasi, chastotasi boshlang’ich fazaning ko’chishi aniqlansin. 
i: [0; 1; 2; 3; 4; 5]
ai: [0.003; 0.0001; 0.6; 0.0003; 0.0001; 0.0001]
bi: [-; 0.0002; 0.8; 0.0002; 0.0004; 0.0001]
T=0.6; ci<<c2 , i>5 bo’lsa.
====
C2=1; w2=21; f2=arctg(3/4)
====
C2=1; w2=6; f2=arctg(1/2)
====
C2=0.8; w2=8; f2=arctg(0.8)
====
C2=1.4; w2=12; f2=arctg(0.75)

++++

97. Jadval funksiya (signal)ning Fur’e qatori koeffisentlari hisoblangan. Yetakchi garmonikaning amplituda va chastotasi aniqlansin. 
i: [0; 1; 2; 3; 4; 5]
ai: [0.3; 0.0003; 0.0004; 1.2; 0.0002; 0.0007]
bi: [-; 0.0001; 0.0002; 0.9; 0.0004; 0.0001]
T=0.5; ci<<c3 , i>5 bo’lsa.
====
3- garmonika C3=1,5; w3=37.7
====
3- garmonika C3=2; w3=37.7
====
3- garmonika C3=1,5; w3=32
====
3- garmonika C3=1,2; w3=37.7

++++

98. Ushbu jadval funksiya uchun 
ti: [0; 0.1; 0.2; 0.3; 0.4]
fi: [1; 1.3; 1.4; 1.2; 1]
Fur’e koeffisientlari qanday topiladi?
====
 Jadval funksiyani bo’lakli doimiylar ko’rinishida ifodalash orqali.
====
Trapetsiya usuli yordamida taqribiy integrallash orqali.
====
Interpolatsion polinomni taqribiy topish orqali.
====
Integrallash uchun to’g’ri to’rtburchaklar formulasi orqali.

++++

99. Raqamli signallarni qayta ishlash va tahlil qilishda qanday bazis funksiyalardan foydalaniladi?
====
 Trigonometrik funksiyalardan. 
====
Darajali funksiyalardan.
====
Ko’rsatkichli funksiyalardan.
====
Kompleks o’zgaruvchili funksiyalardan.

++++

100. Juft funksiyalarni Fur’e qatoriga yoyganda qanday alomat kuzatiladi?
====
sin  komponentaning yo’qolishi va barcha bn=0
====
cos  komponentaning yo’qolishi va barcha an=0
====
Juft garmonikalarning yo’qolishi, ya’ni  c2k=0
====
Toq garmonikalarning yo’qolishi, ya’ni  c2k-1=0

++++

101. Toq funksiyalarni Fur’e qatoriga yoyganda qanday alomat kuzatiladi?
====
 cos  komponentaning yo’qolishi va barcha an=0
====
sin  komponentaning yo’qolishi va barcha bn=0
====
Juft garmonikalarning yo’qolishi, ya’ni  c2k=0
====
Toq garmonikalarning yo’qolishi, ya’ni  c2k-1=0

++++

102. Funksional to’plamlarda ortogonallik deganda nima tushuniladi? 
====
 Berilgan oraliqda funksiyaning ko’paytmalaridan olingan integralning nolga tengligi.
====
Ularning grafiklarining kesishgan nuqtasida perpendikulyarligi 
====
Berilgan oraliqda ularning nisbatlaridan olingan integralning nolga tengligi.
====
Funksiyaning bunday xossasi yo’q.

++++

103. [a;b] oraliqda berilgan funksiya uchun skalyar ko’paytma qanday aniqlanadi? 
====
 Berilgan oraliq bo’yicha ularning ko’paytmalarining integrali orqali.
====
Berilgan oraliq bo’yicha ularning ayirmalarining integrali orqali.
====
Berilgan oraliq bo’yicha ularning nisbatlarining integrali orqali.
====
Funksiya uchun bunday operatsiya yo’q.

++++

104. L2  da funksiyaning normasi qanday aniqlanadi?
====
 Oraliq bo’yicha funksiya kvadratlarining integrali orqali.
====
Oraliq bo’yicha funksiya absolyut qiymatlarining integrali orqali.
====
Oraliq bo’yicha funksiya integrali moduli orqali.
====
Oraliqda funksiya qiymatining modul bo’yicha eng kattasi orqali.

++++

105. Bazis funksiyalarning qanday sistemasi ortonormallashgan deb nomlanadi?
====
 Agar barcha  (fi, fj) = {0, i≠j bo’lsa; 1, i=j bo’lsa}
====
Agar barcha  (fi, fj) = 0, i≠j bo’lsa.
====
Agar barcha  fi , || fi ||=1.
====
Agar barcha  fi,(t)  uchun norma mavjud bo’lsa.

++++

106. Fur’e qatorida garmonika deb nimaga aytiladi va uning amplitudasi qanday topiladi?
====
 Fur’e qatorining  n=k ga mos qo’shiluvchisiga, amplitudasi esa  ck=sqrt((ak)2+(bk)2)
====
Agar  ak=0  bo’lsa, Fur’e qatori yig’indisi garmonika bo’ladi, amplitude esa  ck=|bk|
====
Agar  bk=0  bo’lsa, Fur’e qatori yig’indisi garmonika bo’ladi, amplitude esa  ck=|ak|
====
Agar  ak≠0  va  bk≠0  bo’lsa, Fur’e qatori yig’indisi garmonika bo’ladi, amplitudasi esa  ck=2πk/T

++++

107. Fur’e qatorida garmonika deb nimaga aytiladi va uning chastotasi qanday topiladi?
====
 Fur’e qatorining  n=k ga mos qo’shiluvchisiga, chastotasi esa  wk=2πk/T
====
Agar  ak=0  bo’lsa, Fur’e qatori yig’indisi garmonika bo’ladi, chastotasi esa  wk=|bk|
====
Agar  bk=0  bo’lsa, Fur’e qatori yig’indisi garmonika bo’ladi, chastotasi esa  wk=|ak|
====
Agar  ak≠0  va  bk≠0  bo’lsa, Fur’e qatori yig’indisi garmonika bo’ladi, chastotasi esa  wk=sqrt((ak)2+(bk)2)

++++

108. Fur’e qatorining yetakchi garmonikasi qanday aniqlanadi?
====
 Agar  i≠k  da  ck>>ci  bo’lsa, u holda  k- garmonika yetakchi bo’ladi.
====
Agar  i≠k  da  ck>ci  bo’lsa, u holda  k- garmonika yetakchi bo’ladi.
====
Agar  ck≠0  bo’lsa, u holda  k- garmonika yetakchi bo’ladi.
====
Agar  ck>1  bo’lsa, u holda  k- garmonika yetakchi bo’ladi.

++++

109. Yetakchi garmonikani aniqlash nima uchun kerak bo’ladi?
====
 Signalning asosiy qismini ajratib olish uchun.
====
Signalning grafigini tuzish uchun.
====
Signalning amplitudasini aniqlash uchun.
====
Signalning chastotasini aniqlash uchun.

++++

110. Fur’e qatorida garmonikalarning yetarlicha soni qanday aniqlanadi?
====
 Talab qilingan aniqlik tartibi bo’yicha ushbu aniqlikdan katta bo’lgan amplitudaga mos garmonikalar olib qolinadi.
====
Bu boshida beriladi.
====
Berilgan chastota bo’yicha.
====
Qancha ko’p bo’lsa, shuncha yaxshi prinspi asosida.

++++

111. Spektral analiz nima uchun kerak?
1. Yetakchi chastotasini aniqlash uchun;
2. Yetakchi garmonikalarning hissasini aniqlash;
3. Signalni tozalash;
4. Grafigini tuzish uchun.
====
1, 2, 3
====
1, 2, 4
====
2, 3, 4
====
1, 3

++++

112. Raqamli signallarni Fur’e qatoriga yoyish usuli qayerlarda ishlatiladi?
1. Raqamli signallarni uzatuvchi va qabul qiluvchi zamonaviy uskunalarda;
2. Geologik izlanishlarda foydali qazilmalarni topishda;
3. Uzoq masofadagi planeta va yulduzlarning kimyoviy tarkibini aniqlashda.
====
1, 2, 3
====
1, 2
====
2, 3
====
1, 3

++++

113. Jadval funksiya uchun Fur’e qatori koeffisientlarini aniqlashda qanday yaqinlashish me’zoni ishlatiladi?
====
 Jadval funksiya va Fur’e qatori ayirmasi kvadratining integral normasining minimallligi.
====
Jadval funksiya va Fur’e qatori ayirmasi modulining minimallligi.
====
Jadval funksiya va Fur’e qatori qiymatlarining ayirmasi modulining minimallligi.
====
Jadval funksiya va Fur’e qatori qiymatlarining ayirmasi ixtiyoriy normasining minimallligi.

++++

114. Jadval funksiyani Fur’e qatoriga yoyish uchun u qanday ko’rinishda beriladi?
====
[0;T] oraliqda jadaval qiymatlarini hisobga olgan holda bo’lakli doimiylar funksiyasi ko’rinishida.
====
Jadaval funksiya shaklida  berilgan ko’rinishda.
====
Koordinata tekisligida jadval nuqtalarning bog’lanishidan iborat siniq chiziqlar funksiyasi ko’rinishda.
====
Jadval qiymatlardan tuzilgan Interpolatsion polinom ko’rinishida

++++

115. [0;T] da ti=ih , f(ti)=fi , T=Nh, jadval funksiyani bo’lakli doimiylar ko’rinishiga o’tkazish qoidasini ko’rsating.
. 
====
f(t)=fi  , bunda  t€[ti–h/2; ti+h/2) i=1,2,3,…,N–1; f(t)=f0 , bunda  t€[0; h/2) ; f(t)=fN  , bunda  t€(T–h/2; T].
====
f(t)=fi–1 + (t–ti–1)( fi–fi–1) /h ,  bunda  t€( ti–1; ti) , i=1,2,3,…,N.
====
f(t)=fi ,  bunda  t€( ti–1; ti) , i=1,2,3,…,N.
====
f(t)=fi ,  bunda  t€( ti; ti+1) , i=0,1,2,…,N–1.

++++

116. Qaysi holatlarda eng kichik kvadratlar usuli bo’yicha topilgan chiziqli bog’lanishli modeli maqulroq hisoblanadi?
====
 Jadval qiymatlar va chiziqli model (y=ax+b) ning  ayirmalarining kvadrati berilgan aniqlikdan kichik bo’lsa.
====
Jadval qiymatlar va chiziqli model (y=ax+b) ning  ayirmalari modul bo’yicha berilgan aniqlikdan kichik bo’lsa.
====
Boshqa modellarni qo’llab bo’lmasa.
====
Kuzatuv (tajriba) qiymatlari juda ko’p miqdorda bo’lsa.

++++

117. Quyidagilardan qaysilari ikki parametrli bog’lanishli modellarga tegishli?
1. Chiziqli model;
2. Kvadratik model;
3. Teskari proporsional bog’lanish;
4. Ko’rsatgichli modelli bog’lanish.
====
1, 3, 4
====
1, 2, 3
====
2, 3, 4
====
1, 2, 4

++++

118.  y = a1 (a0)x   ko’rsatgichli modelli bog’lanishni tashkil qilishda qanday o’zgartirishdan (ifodadan) foydalaniladi?

====
ln y = ln a1 + x ln a0
====
y – a1 = (a0)x
====
y = a1 + a0 ln x
====
ln y = ln a1 + a0 ln x

++++

119. Nima uchun jadval funksiyani approksimatsiya qilinayotganda ikki parametrli bog’lanishli modellardan foydalaniladi?
====
 Tabiatda va texnikada murakkab modelli boshlanishlar tez uchrab turgani sababli.
====
Hisoblashning soddaligi uchun.
====
Tabiatda va texnikada boshqa bo’glanishli modellar uchramaganligi sababli.
====
Bu modellar eng yaxshisi bo’lganligi sababli.

++++

120. Nima sababdan jadval funksiyalarni approksimatsiya qilishda interpolatsion polinomlardan ko’p foydalanilmaydi?
1. Tajribalar sonining oshishi bilan polinomning darajasi ham ortgani uchun;
2. Hisoblash hajmi keskin ortishi sababli;
3. Jadval qiymatlarida tuzatib bo’lmas xatoliklar uchrab turishi sababli;
4. Tabiatda va texnikada boshqa murakkab bog’lanishli modellarning yo’qligi tufayli.
====
1, 3, 4
====
1, 2, 3
====
2, 3, 4
====
1, 2, 4

++++

4-bob SKK, AOB [121-140] (40)

121. Bo'lib tashla va hukmronlik qil  algoritmlari nechta bosqichdan  iborat bo'ladi va ular qanday nomlanadi?
====
3ta bosqichdan iborat 1) Bo'lib tashlash bosqichi 2) Hukumronlik bosqichi  3) Birlashtirish bosqichi
====
4ta bosqichdan iborat 1) Bo'lib tashlash bosqichi 2) Hukmronlik bosqichi 3) Bo'ysundirish bosqichi 4) Ajratih bosqichi
====
2ta bosqichdan iborat 1) Bo'lib tashla bosqichi 2) Bo'ysundirish bosqichi 
====
2ta bosqichdan iborat 1) Bo'lib tashla bosqichi 2) Bo'ysundirish bosqichi 

++++

122. Rekursiya deb nimaga aytiladi?
====
Rekursiya deb shunday konstruktsiyag aytiladiki, funktsiya o'zini o'zi chaqiradi.
====
Barcha element o'zidan keyingi elementga bo'glangan bo'ladi
====
Saralanmagan massivni taqqoslashga asoslangan holda saralovchi
====
Massivdagi har bir elementni qidirilayotgan element bilan birma-bir solishtirib chiqishga

++++

123. Quiksort - tez saralash algoritmi deb nimaga aytiladi?
====
Bu algotirm rekursiv bo'lib, o'rtacha N*log2N ta solishtirish natijasida saralaydi.
====
Bu algoritm saralanmagan massivni taqqoslashga asoslangan holda saralovchi algoritm 
====
Bu algoritm massivdagi har bir elementni qidirilayotgan element bilan birma-bir solishtirib chiqadi.
====
Bu algoritm asosiy masalani qismlarga ajratadi va ularning har birini alohida yechadi

++++

124.  Massivga asoslangan Stek bu?
====
Indeks orqali massivda joylashgan elementni vaqtda qaytaradi
====
O'z hajmini o'zi o'zgartira oladigan massiv
====
Stekdagi barcha element o'zidan keyingi elementga bo'glangan bo'ladi
====
O'z hajmini o'zi o'zgartira olmaydigan massiv
 
++++

125. Merge Sort algoritmi deb qanday algoritmga aytiladi?
====
Bu algoritn saralanmagan massivni taqqoslashga asoslangan holda saralovchi algoritm 
====
Bu algotirm rekursiv bo'lib, o'rtacha N*log2N ta solishtirish natijasida saralaydi.  
====
Bu algoritm massivdagi har bir elementni qidirilayotgan element bilan birma-bir solishtirib chiqadi.
====
Bu algoritm ketma-ket ikkiga bo'lishga asoslanadi, ya'ni berilgan x ni massivning o'rtadagi elementi bilan solishtiradi, agar katta bo'lsa oxiri va o'rtasi orasidagi massivni oladi, agar kichkina bo'lsa boshi va o'rtasi orasidagi massivni oladi, va har safar shu jarayon takrorlanib boradi toki x element solishtirilayotgan massivning elementga teng bo'lgunicha yoki massivning elementlari qolmaguncha.

++++

126. Merge sort algoritmi nechta qismdan iborat?
====
2ta
====
3ta
====
4ta
====
5ta

++++

127. Binar qidiruv algoritmi(Ikkilik qidirish algoritmi) 
====
Ketma-ket ikkiga bo'lishga asoslanadi, ya'ni berilgan x ni massivning o'rtadagi elementi bilan solishtiradi, agar katta bo'lsa oxiri va o'rtasi orasidagi massivni oladi, agar kichkina bo'lsa boshi va o'rtasi orasidagi massivni oladi, va har safar shu jarayon takrorlanib boradi toki x element solishtirilayotgan massivning elementga teng bo'lgunicha yoki massivning elementlari qolmaguncha.
====
n - 1 marta massivda quyidan yuqoriga qarab yurib kalitlar jufti-jufti bilan taqqoslanadi. Agar pastki kalit qiymati yuqoridagi jufti kalitidan kichik bo'lsa, u holda ularning o'rni almashtiriladi
====
Bu algoritm massivdagi har bir elementni qidirilayotgan element bilan birma-bir solishtirib chiqadi.
====
Bu algotirm rekursiv bo'lib, o'rtacha N*log2N ta solishtirish natijasida saralaydi.  

++++

128. Saralash deb nimaga aytiladi?
====
Kalitlari bo'yicha doimiy ko'rinishda mashina xotirasiga joylashtirish.
====
Kalitar bo'yicha mashina xotirasidan chiqarish
====
Ma'lumotlarni kompyuterda qayta ishlashda elementning 
====
informatsion maydoni va uning mashina xotirasida joylashtirish

++++

129. Saralashning nechta turi mavjud?
====
2ta
====
3ta
====
4ta
====
faqat 1ta

++++

130. Tanlash orqali saralash algoritmi qanday tamoyillarga asoslangan?
====
Mazkur usul quyidagi tamoyillarga asoslangan: 1. Eng kichik kalitga ega element tanlanadi. 2. Ushbu element birinchi element bilan o"rin almashinadi. 3. Keyin mazkur jarayon qolgan n-1, n-2 elementlar bilan takrorlanib, to bitta eng "katta" element qolguncha davom ettiriladi. 
====
Bunday tamoyil karta o'yinida keng qo'llaniladi. Elementlar (kartalar) hayolan "tayyor" a(1),...,a(i-1) va boshlang'ich ketma-ketliklarga bo'linadi. Har bir qadamda (i=2 dan boshlanib, har bir qadamda bir birlikka oshirib boriladi) boshlang'ich ketma-ketlikdan i-chi element ajratib olinib tayyor ketma-ketlikning kerakli joyiga qo'yiladi. 
====
n - 1 marta massivda quyidan yuqoriga qarab yurib kalitlar jufti-jufti bilan taqqoslanadi. 
====
Agar pastki kalit qiymati yuqoridagi jufti kalitidan kichik bo'lsa, u holda ularning o'rni almashtiriladi

++++

131.  Faraz qilaylik, N = 0,01n2 + 10n - taqqoslashlar soni. Agar n < 1000 bo'lsa, u holda ikkinchi qo'hiluvchi katta, aks holda ya'ni, n > 1000 bo'lsa, birinchi qo'shiluvchi katta bo'ladi. Demak, kichkina n larda taqqoslashlar soni n ga teng bo'ladi, katta n larda nimaga teng bo'ladi?
====
n2
====
n1 
====
n
====
n>

++++

132. To'g'ridan-to'g'ri  qo'shish  usuli  bilan  saralash  algoritmi deb  qanday algoritmga  aytiladi?
====
Bunday usul karta o'yinida keng qo'llaniladi. Elementlar (kartalar) hayolan "tayyor" a(1),...,a(i-1) va boshlang'ich ketma-ketliklarga bo'linadi. Har bir qadamda (i=2 dan boshlanib, har bir qadamda bir birlikka oshirib boriladi) boshlang"ich ketma-ketlikdan i-chi element ajratib olinib tayyor ketma-ketlikning kerakli joyiga qo'yiladi.
====
n - 1 marta massivda quyidan yuqoriga qarab yurib kalitlar jufti-jufti bilan taqqoslanadi. Agar pastki kalit qiymati yuqoridagi jufti kalitidan kichik bo'lsa, u holda ularning o'rni almashtiriladi
====
1. Eng kichik kalitga ega element tanlanadi. 2. Ushbu element birinchi element bilan o"rin almashinadi. 3. Keyin mazkur jarayon qolgan n-1, n-2 elementlar bilan takrorlanib, to bitta   eng "katta" element qolguncha davom ettiriladi. 
====
Qiyin masalalarni osonlik bilan yechishga imkon beradi

++++

133. Pufaksimon saralash algoritmi bu?
====
n - 1 marta massivda quyidan yuqoriga qarab yurib kalitlar jufti-jufti bilan taqqoslanadi. Agar pastki kalit qiymati yuqoridagi jufti kalitidan kichik bo'lsa, u holda ularning o'rni almashtiriladi
====
Bu algotirm rekursiv bo'lib, o'rtacha N*log2N ta solishtirish natijasida saralaydi.
====
Bu algoritm massivdagi har bir elementni qidirilayotgan element bilan birma-bir solishtirib chiqadi
====
1. Eng kichik kalitga ega element tanlanadi. 2. Ushbu element birinchi element bilan o"rin almashinadi. 3. Keyin mazkur jarayon qolgan n-1, n-2 elementlar bilan takrorlanib, to bitta eng "katta" element qolguncha davom ettiriladi.

++++

134. Pufaksimon usulni qanday tarzda yahshilash mumkun?
====
Massiv elementlarida pastdan yuqoriga va yuqoridan pastga o'tishni bir vaqtda amalga oshirish natijasida yaxshilash mumkin
====
Massiv elementlarini yuqoridan pastga o'tkazish yordamida
====
Massiv elementlarini yoqoridan pastga va pastdan 
====
yoqoriga o'tishini bir vaqtda o'tkazish yordamida

++++

135. Stek tuzilmasini tushuntiring va misol keltiring
====
Stekdagi barcha element o'zidan keyingi elementga bo'glangan bo'ladi va ushbu ketma-ketlik yordamida stekdagi "top" elementni aniqlab olamiz.
====
Indeks orqali massivda joylashgan elementni vaqtda qaytaradi
====
Stekdagi barcha element o'zidan keyingi elementga 
====
bo'glanmagan bo'ladi va ushbu ketma-ketlik yordamida stekdagi elementlar aiqlanadi.

++++

136. Birinchi darajali kesh hotiraning o'lchamlarin necha bayt bo'ladi?
====
bir necha 10kbayt
====
80kbayt
====
100kbayt
====
150kbayt

++++

137. Ikkinchi darajali kesh hotiraning o'lchamlari necha bayt bo'ladi?
====
128/256/512 Kbayt va h.k
====
1mb
====
6mb
====
10kbayt

++++

138. Dinamik massiv deb qanday massivga aytiladi?
====
O'z hajmini o'zi o'zgartira oladigan massiv 
====
 Indeks orqali massivda joylashgan elementni vaqtda qaytaradi
====
O'z hajmini o'zi o'zgartira olmaydigan massiv
====
Uning elementiga bir indeks orqali murojat qilish mumkun bo'lsa
 
++++

139. Saralashda taqqoslashlar soni qaysi oraliqlarda ideal holatda bo'ladi: 
====
1 dan n gacha 
====
2 dan n gacha
====
n dan n gacha
====
n dan n2 gacha 

++++

140. Quiksort - tez saralash algoritmi berilgan massivni saralash uchun uni nechtaga bo'lib oladi?
====
2taga
====
1taga
====
3taga
====
4taga

++++

141. Qaysi qatorda tezkor saralshning asosiy saralash metodi berilgan?
====
«bo’lib tashla va boshqar» (dekompozatsiya);
====
Qo’pol kuch bilan;
====
Masala hajmini kichraytirish;
====
Qattiq yondashuv;

++++

142. Ichki va tashqi saralash nimasi bilan farq qiladi?
====
Ichki saralash ishga tushishdan oldin bevosita ОЗУ dan foydalanadi, tashqi saralash xotira qurilmalarini kattagina qismidan foydalanadi;
====
Ichki saralash ishga tushidan oldin qo’shimcha belgilangan xotiradan foydalanmaydi, yani ko’p bora elmentlarga bevosita murajat qiladi, tashqi saralash  qo’shimcha massivlarni talab qiladi.
====
Ichki saralash ichki adresli ko’p joydan foydalanadi, tashqi saralash ko’satkichlarga murojat qiladi.
====
Ichki saralash ichida ko’p bora ishlaydi, tashqi   saralash esa uni chegarasigacha boradi.

++++

143. Quyida keltirilgan algortimalardan turg’un bulmaganini toping:
====
Tezkor saralash
====
Qo`shish orqali saralash
====
Qo`yish orqali saralash
====
Pufakchali saralash

++++

144. Algortimlarni ishlab chiqishda qo`pol kuch usuli nimaga asoslanadi?
====
Qdiruv ketma-ketligiga
====
Yanada soddaroq topshiriqlarga bo`lish
====
Kichikroq masalani yechishga
====
Teng ikkiga bo’lishga

++++

145. Quyida keltirilgan algortimalardan qo`pol usul algortimini toping
====
Tanlash orqali saralash 
====
Qo`shish orqali saralash
====
Tezkor saralash
====
Qo`yish orqali saralash

++++

146. Rekursiya algoritmda to’liq bo’ladi, qachonki:
====
Algoritmni o’zida joylashgan buyruq orqaliy algortimni o’ziga murojat qilish;
====
Rekursiv chaqiruv berilgan algoritmni yordamchi algoritmida sodir bo’lsa;
====
Buyruqlar ketma-ketligini tartibi bazi shartlar asosida o’tkazilgan tekshiruv natijasiga qarab ajratilsa;
====
Birma-bir, algortimlarni ketm-ket chaqirish;

++++

147. Markov algoritmida assotsiativlashgan yechim bo’ladi:
====
Berilgan alifbodagi barcha so’zlar jamlanmasi, ruhsat etilgan barcha almashtirishlar;
====
Berilgan alifbodagi berilgan so’zlarni jamlanmasi;
====
Mumkin bo’lgan barcha almashtirishlar jamlanmasi;
====
Alifbodagi barcha so’zlar yonma-yon bo’lsa;

++++

148. Assotsiativlangan hisoblashda ikkita so’z yonma-yon deyiladi:
====
Ulardan biri boshqasi bilan o’rin almashtirilib  o’zgartirilgan bo’lish mumkin;
====
Ulardan biri boshqasi bilan bir marta o’rin almashtirilib o’zgartirilgan bo’lishi  mumkun;
====
So’zlar bilan o’zaro zanjirliy bog’lanish bo’lsa;
====
Ular deduktiv bo’lsa;

++++

149. Rekursiya algoritmda bavosita bo’ladi, qachonki:
====
Rekursiv chaqiruv berilgan algoritmni yordamchi algoritmida sodir bo’lsa;
====
Buyruqlar ketma-ketligini tartibi bazi shartlar asosida o’tkazilgan tekshiruv natijasiga qarab ajratilsa;
====
Algoritmni o’zida joylashgan buyruq orqaliy algortimni o’ziga murojat qilish;
====
Birma-bir, algortimlarni ketm-ket chaqirish;

++++

150. Tezkor xotirada sodir buladigan sarlash nomi nima?
====
Ichki saralash
====
Jadvallar daresini saralash
====
Tulik sarlash
====
Tugridan-tugri boglanish orkali saralash

++++

151. Katta mikdordagi malumotlarni saralashda mashina vaktini kanday kiskartirish mumkin?
====
Kalitlar jadvalida saralashni amalga oshirish
====
Yanada kuchlirok kompyuterda sarlashni amalga oshirish
====
Malumotlarni yaanada kichikrok bulmchalarga bulib keyin saralash
====
Tashki saralash

++++

152. Saralash usuli mustaxkam xisoblanadi, agar saralash jarayonida …
====
Elementlar  joylashuvi,  teng kalitlarga mos uzgarmasa
====
Elementlarning uzaro joylashuviga boglik bulmasa
====
Elementlar joylashuvi mos kalitlar bilan uzgarsa
====
Elementlarning uzaro joylashuvi aniklanmagan

++++

153. Yaxshilangan usullar sezilarli ustunliklarga yega :
====
Katta mikdordagi saralanuvchi elemntlar bulsa
====
Massi teskari tartiblangan bulsa
====
Kami mikdordagi saralash elementlari bulsa
====
Barcha xollarda

++++

154. Kuyidagikursatilganlarning kaysilari saralash turlari xisoblanadi?
====
Ichki saralash
====
Kamayish orkali saralash
====
Malumotlarni saralash
====
Usish tartibida saralash

++++

155. Yaxshilangan saralash algoritmida solishtirishar soni kanday buladi?
====
n*log(n)
====
en
====
n*n/4
====
2n

++++

156. Quicksort saralash uchuli sanosi nimada?
====
Tanlanganiga karab kalitlarni bulish
====
1,2,…n elementlarni tanlash uchun olish
====
Kushilgan elementlarni joyini almashtirish
====
Tashki saralash

++++

157. Massiv pufakchali sarlanadi. Nechta utish orkali yeng yengil element yukorida koladi?
====
1 ta utishda
====
2 ta utishda
====
N-1 Ta utishda
====
N ta utishda n – massiv elementlari soni

++++

158. Binar kidiruv manosi nima?
====
X massivni 2ga bulish orkali, toki kidiralayotgan element topilmaguncha
====
Massivni utish orklai elmentni topish
====
Massivni bulish orkali elementni toppish
====
Massivni elementni topish

++++

159. Chizikli kidiruvning manosi nima?
====
Xar bir elementni kurib chikish ketma-ketligi
====
Boshidan oxirigacha va oxiridan boshigacha 2ta kadamda elementlarni kurib chikish
====
Jadvalning urtasidan elementlarni kurib chikish
====
elementlarni topish

++++

160. Transpozitsiya usulimanosi nima?
====
Topilgan elementni ruyxat boshiga karatib 1ta pozitsiyaga siljitish
====
Kushni eelementlarning joyini almashtirish
====
Bir xil elementlarni topish
====
elementlarni topish

++++

5-bob NOA, AYoQ [161-200] (40)

161. Evristik algoritm?
====
bu barcha mumkin bo'lgan holatlarda uning to'g'riligi isbotlanmagan, ammo ko'p hollarda juda yaxshi yechim topishi ma'lum bo'lgan masalani hal qilish algoritmi.
====
yaxshi yechim topishi ma'lum bo'lgan masalani hal qilish algoritmi.
====
yaxshiroq yechimni kafolatlamaydi
====
to’g’ri javob yo’q.

++++

162. NP-murakkab masalalarni hal qilish qanday usullari mavjud?
====
aniq, evristik metaevristik
====
aniqmas usullar
====
stoxastik usullar
====
to’g’ri javob yo’q.

++++

163. NP-murakkab masalalarni hal qilish aniq usullar-…..
====
barcha mumkin bo'lgan yechimlarni to'liq ko’rib chiqishga (полный перебор) asoslanadi va bu o'z navbatida ularning samadorligini kamaytiradi
====
yechimlarni nisbatan cheklangan qidirishga olib keladi va odatda maqbul vaqt ichida juda yaxshi yechimni topadi. Ammo bu usullar ham kamchilikka ega, ya'ni ular taxminiydir. 
====
eng samarali hisoblanadi, ammo bu usullarda natijaga bevosita ta'sir qiladigan parametr mavjud, kirish ma'lumotlariga asoslanib, amalda har safar ushbu parametrni qayta hisoblash kerak.
====
to’g’ri javob yo’q.

++++

164. NP-murakkab masalalarni hal qilish evristik usullar-…..
====
yechimlarni nisbatan cheklangan qidirishga olib keladi va odatda maqbul vaqt ichida juda yaxshi yechimni topadi. Ammo bu usullar ham kamchilikka ega, ya'ni ular taxminiydir. 
====
barcha mumkin bo'lgan yechimlarni to'liq ko’rib chiqishga (полный перебор) asoslanadi va bu o'z navbatida ularning samadorligini kamaytiradi
====
eng samarali hisoblanadi, ammo bu usullarda natijaga bevosita ta'sir qiladigan parametr mavjud, kirish ma'lumotlariga asoslanib, amalda har safar ushbu parametrni qayta hisoblash kerak.
====
to’g’ri javob yo’q.

++++

165. NP-murakkab masalalarni hal qilish metaevristik usullar-…..
====
eng samarali hisoblanadi, ammo bu usullarda natijaga bevosita ta'sir qiladigan parametr mavjud, kirish ma'lumotlariga asoslanib, amalda har safar ushbu parametrni qayta hisoblash kerak.
====
barcha mumkin bo'lgan yechimlarni to'liq ko’rib chiqishga (полный перебор) asoslanadi va bu o'z navbatida ularning samadorligini kamaytiradi
====
yechimlarni nisbatan cheklangan qidirishga olib keladi va odatda maqbul vaqt ichida juda yaxshi yechimni topadi. Ammo bu usullar ham kamchilikka ega, ya'ni ular taxminiydir. 
====
to’g’ri javob yo’q.

++++

166. Ekvivalent Algoritmlar qaysi masalani yechadi?
====
Ikkita natural m va n sonlari uchun EKUK si n hisoblanadi.
====
Natural sonning kvadrati va ildizini hisoblash.
====
Ikkita natural m va n sonlari uchun EKUB ini topadi.
====
Berilgan n soniningo’rta arifmetigini topadi.

++++

167. Berilgan A[0..2*N] massivni dastlab 2  elementdan iborat bolgan, keyin 4  elementdan iborat bolgan va t.b., barcha elementlarini birdan tartiblagancha iborat bolganda
====
Shell boyicha tartiblash
====
Tanlsh bo’yicha tartiblash
====
Pufakcha usulida tartiblash
====
piramida usulida tartiblash

++++

168. Quyidagi berilgan algoritm qaysi algoritm? 1) M va N sonlarni birinchi va ikkinchi son deb qarang; 2) Birinchi va ikkinchi sonni taqqosla agar ular teng bo’lsa 5 punktga borbo’lmasa 3 punktga bor; 3) agar birinchi son ikkinchisidan kichik bo’lsa o’rin almashtir; 4) birinchi sondan ikkinchi sonni ayirib birinchi songa o’zlashtirva ikkinchi punktga bor; 5) birinchi sonni javob deb qara.
====
Evklid algoritmi
====
Tyuring mashinasi algoritmi
====
Markov Normal algoritmi
====
Post algoritmi

++++

169. … mashinasining algoritmi uchun odamning o’zi xizmat qiladi
====
Tyuring mashinasi
====
elektron hisoblash mashinasi
====
Mexanik mashina
====
Elektro mexanik mashina

++++

170. Eng oxirgi element stekning … dep ataladi.
====
Eng balandi
====
nuqtasi
====
oxiri
====
boshi

++++

171. Agar stekdagi elementlarning soni cheklangan bo’lsa … deb ataladi.
====
Chegaralangan stek
====
Bo’sh stek
====
Chegaralanmagan stek
====
Cheksiz stek

++++

172. Elementga ega bo’lmagan stek … deb ataladi
====
Bo’sh stek
====
Chegaralangan stek
====
Chegaralanmagan stek
====
Cheksiz stek

++++

173. Yunaltirilmagan takrorsiz bog’langan torlar … deyiladi.
====
daraxtlar
====
yoylar
====
urmanlar
====
Graflar

++++

174. Algoritmlar teoriyasiga binoan  birinchi ilmiy ishlar  bir biridan habarsiz tarizda kimlar e’lon qildi?
====
Alan Tyuring, Aloyz CHyorch va Emil Postlar
====
Aloyz CHyorch, Emil Post va Knutlar
====
Alan Tyuring, Aхo va Emil Postlar
====
Aloyz CHyorch, Хopkroft va Alan Tyuringlar

++++

175. Post mashinasining strukturasi p K m strukturasiga ega, bu yerda …, 
====
n-komandaning tartib raqami; K galovka bilan bajariladigan amal; m-bajarilishga tegishli bo’lgan kelgusi kamandaning raqami; 
====
n-galovka bilan bajariladigan amal; K-bajarilishi kerak bo’lgan kelasi kamandaning nomeri; m-kamandaning tartib raqami; 
====
n- komandanın’ ta’rtip nomeri;  K- orınlanıwı tiyis bolg’an kelesi komandanın’ nomeri; m – golovka menen orınlaytug’ın amel; 
====
N-guruxning tartib raqami; K-galovka bilan bajarladigan amal;m-berilgan kamandaning bajarilishi kerak bo’lgan katak raqami;

++++

176.NP toʻliqligi nazariyasida faqat hal qilish masalalari koʻrib chiqiladi?
====
“ha” yoki “yoʻq” deb javob berish kerak boʻlgan masalalar
====
“ha” deb javob berish kerak boʻlgan masala
====
“yoʻq” deb javob berish kerak boʻlgan masala
====
to’g’ri javob B va C.

++++

177. NP -toʻliq masalalar, maʼlum maʼnoda, NP sinfidagi “tipik” masalalar toʻplamini shakllantiradi:
====
agar ularning baʼzilari uchun “tezkor” yechim algoritmi topilsa, NP sinfidagi har qanday boshqa masalani xuddi shu tarzda hal qilish mumkin.
====
agar ularning baʼzilari uchun “tezkor” yechim algoritmi topilmasa, NP sinfidagi har qanday boshqa masalani xuddi shu tarzda hal qilish mumkin.
====
NP sinfidagi har qanday boshqa masalaga to’g’ri kelmaydi.
====
barcha javoblar to’g’ri

++++

178. NP – to’liq masalalarni yechishda aniq usullarni ko’rsating.
====
To’liq qayta tanlash; Dinamik dasturlash; Tarmoqlar va chegaralar.
====
FF turidagi usullar
====
Ochko’z va gradiyent usullar
====
Tasodifiy usullar

++++

179. NP – to’liq masalalarni yechishda taqribiy usullarni ko’rsating.
====
Ochko’z va gradiyent usullar; Tasodifiy usullar; FF turidagi usullar
====
To’liq qayta tanlash
====
Dinamik dasturlash
====
Tarmoqlar va chegaralar.

++++

180. To'liq qayta tanlash usulining mohiyati shundan iboratki:
====
1)barcha mumkin bo'lgan holatlarni ko'rib chiqish; 2)berilgan masalaning shartini qanoatlantiradigan yechimlarni topish;3)boshqa yechimlar yo'qligini ko'rsatish.
====
1)barcha mumkin bo'lmagan holatlarni ko'rib chiqish; 2)berilgan masalaning shartini qanoatlantirmaydigan yechimlarni topish;
====
1)barcha mumkin bo'lgan holatlarni taxlil qilish; 2)berilgan masalaning shartini ko’ra yechimlarni topish;3)boshqa yechimlar borligini ko'rsatish.
====
to’g’ri javob B va C

++++

181. P masalalar sinfi nima?
====
P - polinomda (kirish kattaligidan) vaqt ichida yechiladigan masalalar sinfi.
====
P – polinom vaqtida tekshirilishi mumkin bo'lgan masalalar sinfi.
====
NP - polinomda (kirish kattaligidan) vaqt ichida yechiladigan masalalar sinfi.
====
NP – polinom vaqtida tekshirilishi mumkin bo'lgan masalalar sinfi.

++++

182. NP masalalar sinfi nima?
====
NP – polinom vaqtida tekshirilishi mumkin bo'lgan masalalar sinfi.
====
P - polinomda (kirish kattaligidan) vaqt ichida yechiladigan masalalar sinfi.
====
P – polinom vaqtida tekshirilishi mumkin bo'lgan masalalar sinfi.
====
NP - polinomda (kirish kattaligidan) vaqt ichida yechiladigan masalalar sinfi.

++++

183. Masalani NP sinfiga tegishli ekanligini qanday isbotlash mumkin?
====
Determinatsiyalanmagan Turing mashinasida polinom vaqtini ishlatib, masalani yechish algoritmini keltirish orqali.
====
Determinatsiyalangan Turing mashinasida polinom vaqtini ishlatib, masalani yechish algoritmini keltirish orqali.
====
Determinatsiyalanmagan Turing mashinasida polinom vaqtini ishlatmasdan, masalani yechish algoritmini keltirish orqali.
====
Determinatsiyalangan Turing mashinasida polinom vaqtini ishlatmasdan, masalani yechish algoritmini keltirish orqali.

++++

184. NP masalalari eng qiyin masalalar sinfiga kiradimi?
====
Yo'q. Murakkabroq muammolar mavjud bo’lib, ularning yechimlarini hatto polinom vaqtida tekshirish mumkin emas.
====
Ha. Murakkabroq muammolar mavjud bo’lib, ularning yechimlarini hatto polinom vaqtida tekshirish mumkin.
====
Ha. Murakkabroq muammolar mavjud bo’lib, ularning yechimlarini hatto polinom vaqtida tekshirish mumkin emas.
====
Yo'q. Murakkabroq muammolar mavjud bo’lib, ularning yechimlarini hatto polinom vaqtida tekshirish mumkin.

++++

185. NP-qiyin muammoga to’g’ri ta’rif berilgan javobni belgilang.
====
NP sinfidagi barcha muammolar kamaytiriladigan muammolar. Bundan tashqari, muammoning o'zi NP sinfiga tegishli bo'lishi shart emas, u yanada murakkab bo'lishi mumkin.
====
NP sinfidagi barcha muammolar kamaytiriladigan muammolar. Bundan tashqari, muammoning o'zi NP sinfiga tegishli bo'lishi shart emas, u yanada murakkab bo'lishi mumkin.
====
NP sinfidagi barcha muammolar kamaytiriladigan muammolar. Bundan tashqari, muammoning o'zi NP sinfiga tegishli bo'lishi shart emas, u yanada murakkab bo'lishi mumkin.
====
NP sinfidagi barcha muammolar kamaytiriladigan muammolar. Bundan tashqari, muammoning o'zi NP sinfiga tegishli bo'lishi shart emas, u yanada murakkab bo'lishi mumkin.

++++

186. NP-to'liq muammolarni ko’rsating.
====
NP sinfiga tegishli bo'lgan NP-qiyin muammolar.
====
NP sinfiga tegishli bo'lgan P-qiyin muammolar.
====
P sinfiga tegishli bo'lgan NP-qiyin muammolar.
====
P sinfiga tegishli bo'lgan P-qiyin muammolar.

++++

187. NP-qiyin masalani qanday isbotlash mumkin?
====
NP sinfidagi barcha masalalar berilganga kamaytirilishi isbotlanadi. Shu tarzda, birinchi NP-murakkab (va -to'liq) muammo aniqlanadi.
====
NP sinfidagi ayrim masalalar berilganga kamaytirilishi isbotladi va shu tarzda, birinchi NP-murakkab (va -to'liq) muammo aniqlanadi.
====
NP sinfidagi barcha masalalar berilganga kamaytirilmasligi isbotlanadi. Shu tarzda, birinchi NP-murakkab (va -to'liq) muammo aniqlanadi.
====
NP sinfidagi barcha masalalar berilganga kamaytirilishini isbotlanadi va shu tarzda, birinchi NP-murakkab (va -to'liq) muammo aniqlandi.

++++

188. NP-murakkab masalani qanday isbotlash mumkin? 
====
NP-murakkab masala ekanligi isbotlanadi.
====
NP-qiyin masala ekanligini isbotlanadi.
====
P-qiyin masala ekanligini isbotlanadi.
====
P masala ekanligini isbotlanadi.

++++

189. Algoritmlarni loyihalashning markaziy muammolaridan biri bu… .
====
P va NP sinflarning tengligi masalasi.
====
P va NP sinflarning tengmasligi masalasi.
====
P sinfining masalasi.
====
NP sinfining masalasi.

++++

190. P sinfi NP sinfiga tegishlimi?
====
Ha, tegishli. P sinfi NP sinfining bir qismidir.
====
Ha, tegishli. P sinfi NP sinfining to’ldiruvchi qismidir.
====
Yo’q, tegishli emas. P sinfi va NP sinfi alohida-alohida masalalar sinfidir.
====
Yo’q, tegishli emas. Ammo P sinfi va NP sinfi masalalar bir-birini to’ldiruvchi sinflardir.

++++

191. NP sinfiga  qanday turdagi masalalar kiradi?
====
Determinallashmagan polynomial murakkablikka ega masalalar
====
Polinomial murakkablikka ega masalalar
====
Determinallashgan masalalar
====
Yechimi topilishi oson bo’lgan masalalar

++++

192. Berilgan masalalardan qaysi biri NP-to’liq masalalar turkumiga kiradi?
====
Tyuring mashinasi
====
Maksimumni topish masalasi
====
Saralash masalasi
====
Eng yaqin yo’lni topish masalasi

++++

193. Quyidagi algoritmik baholashlarning qaysi biri eng kam vaqtda bajariladi?
====
O(N)
====
O(N^3)
====
O(N^2)
====
O(NlogN)

++++

194. Kommivoyajer masalasi – bu… .
====
Oldindan berilgan punktlarni minimal vaqt ichida yoki yo’lning minimal bo’lishiga erishgan holda aylanib o’tish masalasi
====
Turli yuklarni ko’pchilik manbalardan turli manzillar bo’yichа yetkazib berish masalasi
====
Mahsulotga ketgan xarajatlarni minimallashtirish masalasi
====
Daromadni oshirish modelini qurish masalasi

++++

195. Katta chuqurlikdagi rekursiyadan foydalanish dasturda qanday oqibatlarga olib keladi?
====
Uzoq vaqt ishlaydi va stek to’lib ketadi
====
Xato ishlaydi
====
Taqribiy hisoblashda xatolik bo’ladi
====
Funksiya cheksizsikga tushib qoladi

++++

196. Algoritm O(NlogN) murakkablik bilan bajarilishida 64 s vaqt sarflasa, shu algoritm O(N^2) murakkablik bilan qancha vaqt sarflaydi?
====
256
====
100
====
512
====
500

++++

197. Algoritm O(N) murakkablik bilan bajarilishida 256 s vaqt sarflasa, shu algoritm O(NlogN) murakkablik bilan qancha vaqt sarflaydi?
====
2048
====
1024
====
100
====
500

++++

198. Algoritm O(N) murakkablik bilan bajarilishida 1024 s vaqt sarflasa, shu algoritm O(NlogN) murakkablik bilan qancha vaqt sarflaydi?
====
10240
====
1024
====
2048
====
720

++++

199. To’plam ostilari yig’indisini hisoblash mukrakkabligi qanday parametrlarga bog’liq?
====
N-to’plamdagi elementlar soni, P-to’plamni tashkil etuvchi sonlarning ikkilik raqamlari soni
====
N-to’plam elementlari soni, P-to’plam elementlari yig’indisi
====
M-elementlar soni, K-juft elementlari soni
====
N-top’lam ostilari soni, P-to’plam ostidagi elementlar soni

++++

200. Dinamik dasturlashning asosiy formulasini ko’rsating:
====

====

====

====

 */}

  </div>;
}

export default App;
