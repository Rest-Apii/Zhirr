__path = process.cwd()

var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')
}

var creatorList = ['@zahirrr','@zhirrrgans','@zhirr_ajalah','@zahiranjay', '@zahirganssss','@zhirrganteng','@zahirrgantengg'];
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];

var jsonKajian = {
    "ceramah1": "Ceramah Ustadz Felix Siauw > Jika seorang lelaki Muslim menikahi wanita ahlu kitab itu bentuk ketidakseriusan walau halal Maka Muslimah yang menikahi selain Muslim itu serius, serius cari sengsara, serius dimurkai Allah\nSebab tidak ada satupun dalil yang membolehkannya Lelaki di dalam keluarga itu pemimpin, dan pemimpin itu syaratnya Muslim Ulama pun bersepakat, Muslimah tidak boleh menikah beda agama\nTapi saya nyaman sama dia, saya pernah pacaran sama yang Muslim tapi nggak nyamanLha ya coba dilihat, kalau ya Muslim taat ya nggak pacaran, ya wajar aja dia nggak buat kamu nyaman\nLagian juga aneh aja, masak nyaman dalam maksiat, Apalagi nyaman dalam maksiat sama orang yang sama sekali nggak paham Islam, belum tauhid, yang jelas nggak bisa bimbing ke ridha Allah,\nPerlu lebih dari sekedar nafsu pasca menikah, dan disitulah kita diuji, benarkah kita membangun keluarga karena Allah, Dengan cara yang diridhai Allah, Persiapannya juga dengan cara Allah,\nSaya banyak menemui kasus pernikahan beda agama, semuanya awalnya nyaman, tapi begitu menikah dan punya anak, saat Muslimahnya sadar iman itu penting, yang tinggal ya NYESEL\nMakanya kalau ada Muslimah yang datang pada saya, bawa calonnya untuk disyahadatkan sebab mau nikah, saya nasihati Lebih baik tunda nikahnya, minta mas nya pelajari dulu Islam\nLihat dulu keseriusannya dalam Islam, dia masuk Islam karena pernikahan, Karena kamu, Atau betul karena kenal Allah, Jangan terburu-buru, sebab yang banyak ujungnya penyesalan\nBanyak, terlalu banyak kasus, lelaki yang masuk Islam karena nikah Setelah nikah, ya punya kekuasaan, ada yang nggak serius dalam Islamnya, yang paling parah murtad dan memurtadkan\nCoba pikir, ada yang lebih penting dari iman, Nggak sehat, nggak sempat, nggak kaya, nggak punya rumah, hidup susah, selama ada iman, masih ada kesempatan bahagia Kalau nggak ada iman,\nTapi dia beda, nggak sama kayak kasus lain, dia tulus cinta aku, ya ampun kayak nggak kenal lelaki aja, sepik-sepik dewa dikit, yang wanita ya langsung percaya aja, baru sekali ketipu ya mbak,\nYa paling bagus, Muslimah yang niat nikah sama non-Muslim ya diminta ngaji dulu, pahami Islam dulu Sebab pasti ada problem dalam pemahamannya, kecenderungannya, mikirnya/nAllah pencipta manusia, nggak mungkin salah Allah menentukan aturan itu pasti bermanfaat dan baik buat kita Lagian, emang yang Muslim nggak ada sama sekali yang baik tersisa,\nMakanya cari lelaki baik, jangan lewat pacaran, ya nggak wujud Namanya pacaran itu maksiat, pengen dapet lelaki taat kok ya lewat jalan yang maksiat Ikut ngaji, dakwahkan Islam, itu dulu deh",
    "ceramah2": "Ceramah Khalid Basalamah > Allahu Ta’ala telah berfirman, bahwa di balik kesulitan pasti ada kemudahan. Sebagaimana di dalam suatu cobaan pasti ada hikmah yang tersembunyi. Sesungguhnya Allahu Ta’ala adalah Dzat yang Maha Pengasih. Ia menciptakan penyakit bukan sebagai adzab. Akan tetapi peringatan, agar seorang hamba yang dikehendakiNya bertaubat dan kembali ke jalanNya. Saudaraku kaum mukminin. Ketika kita sedang diuji dengan penyakit, janganlah berkecil hati dan berputus asa. Sesungguhnya pada saat orang yang beriman dan mengharapkan kesembuhan hanya kepada Allahu Ta’ala, dosa-dosanya sedang berguguran dari pundaknya Semoga Allahu Ta’ala senantiasa memberikan kita nikmat kesehatan, dan ampunan yang tiada batasnya\nQoza’ adalah gaya potongan rambut yang menggundul sebagian dan menyisakan sebagian. Sesungguhnya style seperti ini adalah haram. Karena Rasulullah Salallahu ‘Alayhi wa Sallam telah melarangnya. Bahkan, banyak orang yang merasa tidak nyaman dengan gaya tersebut. Al-Barra’ bin ‘Azib radhiallahu ‘anhu berkata, “Saya belum pernah melihat ada orang yang rambutnya menjuntai ke telinga, dengan memakai pakaian berwarna merah, yang lebih tampan dari pada Rasulullah Salallahu ‘Alayhi wa Sallam Beliau memiliki rambut yang mengibas kedua pundaknya.” (HR. Tirmizi: 3635) Saudaraku, sesungguhnya Rasulullah Salallahu ‘Alayhi wa Sallam adalah satu-satunya teladan terbaik untuk umat Islam. Semoga kita senantiasa istiqamah dalam meneladani beliau\nTakwa adalah pakaian seorang muslim. Takwa tidak boleh dilepaskan di manapun ia berada. Jika ia menanggalkannya barang sekali, ia telah meninggalkan kemulyaan yang telah diberikan Allah Ta’ala kepadanya. Bukankah, orang yang paling mulia di sisih Allah Ta’ala adalah yang paling bertakwa? Lantas, mengapa membatasi takwa hanya di Masjid, Sekolah, atau Kajian saja? Semoga kita diwafatkan oleh Allah Ta’ala dalam keadaan bertawa kepada-Nya\nSahabatku, banyak dari kita yang melewatkan waktunya dalam perkara yang mubah bahkan haram. Waktu benar-benar bukanlah milik kita. Buktinya: Allah ta’ala meminta pertanggung jawabannya. Sungguh celaka orang-orang yang menggunakan apa yang menjadi milik Allah ta’ala justru untuk bermaksiat kepada-Nya. Semoga, Allah ta’ala mengampuni semua kelalaian kita\nKetika melihat klaim keimanan dari setiap pemeluk agama, kita akan mendapati orang-orang yang merasakan lezatnya iman dalam hati adalah yang merelakan Allah Ta’ala sebagai tuhannya, Muhammad Salallahu ‘alayhi wasallam sebagai nabinya, dan Islam sebagai agamanya. Mereka itulah yang keimanannya berasal dari pemikiran yang mendalam, pembelajaran yang menyeluruh terhadap sejarah agama-agama, dan memperhatikan mukjizat-mukjizat-Nya dalam Alquran. Semoga Allah Ta’ala memelihara hidayah yang ada pada hati kita\nSepuluh hari terakhir Ramadhan telah berlalu. Janganlah bersedih, wahai sahabatku, karena kasih sayang Allah Ta’ala begitu besar untuk hamba-Nya. Sebentar lagi, hari-hari istimewa yang lain akan menyapa kita, 10 hari pertama bulan Dzul Hijjah. Rasulullah salallahu ‘alayhi wasallam mengingatkan bahwa pahala amal-amal saleh waktu itu akan dilipatgandakan. Tidak ada yang bisa menandingi keutamaannya kecuali mati di medan jihad. Jika engkau tahu pasti bahwa engkau akan mati menjemput kesyahidan dalam jihad pada hari-hari itu, majulah! Karena, amalan sunah pada hari-hari itu lebih mulia daripada pulang dari jihad membawa kemenangan dan ghanimah. Ya Allah Ta’ala, sampaikanlah kami pada sepuluh hari pertama bulan Dzul Hijjah\nOrang-orang yang takut kepada Allah ta’ala adalah (1) mereka yang beriman kepada-Nya dengan memperhatikan tanda-tanda kebesaran Allah ta’ala baik yang mereka saksikan di alam maupun yang mereka lantunkan dari Alquran. (2) Tidak menyekutukan Allah ta’ala dengan apapun. (3) Menginfakkan rizki yang Allah ta’’la berikan kepadanya, dan takut melaksanakan perintah-Nya dengan tidak sempurna, karena mereka selalu dibayangi oleh hari kebangkitan dan perhitungan amal. (Tafsir al-Muntakhab) Semoga, Allah ta’ala menggolongkan kita ke dalam hamba-hamba yang takut kepada-Nya\nBumi adalah adalah tempat dikeluarkannya Adam ‘Alayhi Salam dari surga. Ia begitu kering dan berbeda dari tempat Adam ‘Alayhi Salam diciptakan. Sulitnya melanjutkan kehidupan di bumi beserta cobaan yang terdapat di atasnya, telah membuat hati manusia menjadi kering dan terbelenggu, sehingga ia lupa akan tempat kembalinya. Hadirnya ilmu agama di muka bumi, ibarat air hujan yang membanjiri lembah-lembah yang telah mengering. Ia menuntun manusia untuk kembali menuju tempat asalnya; surga. Harapan akan nikmat yang kekal di akhirat, dan kasih sayang Allah ‘Azza wa Jalla, menghidupkan kembali kuncup-kuncup hati, yang telah mati karena rindu akan tempat kembali. Sehabatku, semoga kita termasuk hamba yang tersirami oleh ilmu Ilahi, dan dikumpulkan di surgaNya nanti\nUntuk kalian yang bukan mahram. Kita bisa bersama-sama menggapai ridha Allah Ta’ala dengan bersaudara sesama muslim. kita masih bisa berlomba-lomba dalam amal salih tanpa saling melempar pandangan, tanpa berdekatan, bahkan tanpa bersentuhan. Justru, lebih aman, utama, dan mulia saat kita menjaga jarak dan menundukkan pandangan. Semoga Allah Ta’ala menjaga kita dari bersentuhan yang bukan mahram\nMarilah kita merenung sejenak, Allah Ta’ala telah menetapkan suatu hukum alam yang mengatakan: setiap makhluk yang mempunyai perasaan, mencintai sesamanya ketika merendah di hadapannya. Maka dari itu, untuk meraih simpati sesama manusia, cukuplah bagi kita untuk bersikap rendah hati, andhap asor lemah manah, dan tidak berambisi menyaingi mereka. Demikian juga, Allah Ta’ala mencintai hamba yang zuhud di hadapan-Nya. Yaitu, orang-orang yang hatinya terbuka menerima kebenaran dari-Nya, senantiasa mentaati perintah-Nya, dan menjauhi larangan-Nya. Sahabat-sabahatku, semoga kita menjadi manusia yang di cintai oleh Allah Ta’ala, dan juga sesama manusia\nAllah ‘Azza wa Jalla adalah Dzat Maha Pemurah lagi Maha Penyayang bagi hamba – hamba-Nya, Allah membalas ucapan “laa hawla wala quwwata illa billah” dengan simpanan harta di akhirat bagi mereka. Sungguh balasan yang amat besar untuk suatu yang kecil dan mudah. janganlah engkau kikir terhadap diri sendiri wahai saudaraku. Semoga lisan dan hati ini senantiasa berbuah kebaikan dan menjadi bekal di akhirat kelak\nSaudaraku, marilah menghiasi setiap waktu kita dengan ucapan istighfar, sesungguhnya Allah ‘Azza wa Jalla menyukai hamba yang senantiasa bertaubat dan meminta ampun kepada-Nya. Barang siapa yang ingin kesempitannya dilapangkan dan diberikan jalan keluar serta didatangkan baginya rezeki dari arah yang tiada disangka-sangka maka Istighfar adalah jalan terbaik untuknya. “bukankah ia kalimat yang mudah dan ringan bagi lisan kita wahai saudaraku\nSemenjak manusia diturunkan ke bumi, Iblis benar-benar telah berhasil menyesatkan mereka dari fitrah. Atas kasih sayang-Nya, Allah ta’ala memberikan mereka petunjuk dengan diturunkannya para Nabi dan Rasul yang dibekali kitab sebagai cahaya di kegelapan. Sebagai penutup dan penggenap ajaran-ajaran terdahulu, diutuslah Nabi Muhammad salallahu ‘alayhi wasallam dan Alquran bagi semua umat manusia. Sahabatku, marilah kita sambut cahaya itu. Semoga, kita termasuk golongan yang kembali kepada sebaik-baik tempat di sisi-Nya, surga\nSahabatku, ada sebuah amalan yang pahalanya menyamai haji dan umroh. Jika dilihat oleh mata, amalan tersebut sungguh ringan. Namun amat sedikit yang melaksanakannya. Ia adalah sholat subuh berjamaah, dilanjutkan berdzikir sampai matahari terbit, dan ditutup dengan shalat dua rakaat saja. Ya Allahu Ta’ala, sesungguhnya amalan tersebut hanya dilakukan oleh hamba-hamba yang terpilih sebagaimana haji dan umrah. Ia amat mudah dilakukan oleh hamba yang ikhlas menyerahkan diri hanya kepadaNya. Saudaraku, semoga Allah Ta’ala memberikan kita kesempatan untuk menunaikan haji dan umroh, dan mengumpulkan kita bersama hamba-hambaNya yang terpilih\nSesungguhnya dibalik indahnya dunia terdapat nikmat bagi yang ingat terhadap tuhannya, juga tipu daya bagi yang lupa hakekat ia diciptakan untuk berjalan di muka bumi. Ketika seorang hamba yang beriman ditambahkan nikmat oleh Allah ‘Azza wa Jalla Sang Maha Pengasih Yang Tak Pilih Kasih, ia bersyukur memuji tuhannya dan menambah ketaatan kepada-Nya. Sedangkan orang yang hatinya telah terperangkap oleh dunia, ia mengkufuri nikmat itu dengan tetap bermaksiat kepadanya. Sahabat – sahabatku, semoga Allah ‘Azza wa Jalla menjadikan hati kita senantiasa ingat kepada-Nya, sehingga berbahagia dengan nikmat di dunia, dan dihantarkan oleh nikmat itu menuju nikmat yang kekal di akhirat\nTimbulnya rasa cinta dan benci karena Allah Ta’ala, adalah salah satu tanda seorang hamba telah merasakan nikmatnya iman. Ia tidak akan menyukai sesuatu, kecuali Allah Ta’ala meridhai sesuatu itu. Ia juga tidak akan membenci sesuatu, kecuali Allah Ta’ala pun membenci sesuatu itu. Ia membenci apa yang tidak Allah Ta’ala ridhai, sebagaimana ia benci jika dikembalikan kepada kesesatan. Semoga kita termasuk hamba-hambaNya yang merasakan nikmatnya iman\nSikap ghuluw ‘mempaui batas’ adalah salah satu penyebab kebinasaan umat-umat terdahulu. Seperti kefanatikan Bani Israel terhadap rasnya; telah menempatkan mereka sebagai kaum yang dimurkai oleh Allahu Ta’ala. Dan kebencian Rafidhoh kepada para Sahabat Radhiyallahu ‘anhum; telah mengeluarkan mereka dari Islam. Saudaraku, sesungguhnya perkara yang layak kita cintai adalah apa yang dicintai oleh Allahu Ta’ala dan RasulNya. Dan apa yang layak kita benci adalah apa yang dibenci oleh Allahu Ta’ala dan RasulNya. Semoga kita dikaruniai rasa cinta dan benci yang dilandasi ibadah kepadaNya, dan terhindar dari sikap melampaui batas di dalam cinta maupun benci",
    "ceramah3": "Ceramah Syekh Ali Jaber > Menurut saya waktu ini bagi manusia sangat mahal bahkan sangat berharga, tapi sayang sekali banyak dari kita menjadikan waktu ini sia-sia. Menghabiskan tanpa manfaat, akan berlalu. Dan kita akan menemukan jawabannya saat bertemu Allah SWT,\nYang menarik perhatian saya judul doa tidur dan doa bangun tidur, tapi isi doa itu tidak ada sama sekali kata tidur atau bangun. Justru yang ada kata mati dan hidup,\nSaya harap ini menjadi PR bagi bapak dan ibu jamaah sekalian, supaya kita sadari begitu luar biasa mahal usia dan mahal waktu yang diberikan oleh Allah SWT,\nYang menarik di ayat ini, Allah memberikan firmannya bahwa terjadi peristiwa kematian setiap malam. Kemungkinan besar bisa mati, kemungkinan kecil masih hidup kembali,\nKenapa saya bilang kemungkinan besar mati, karena Allah SWT berfirman pasti nyawa kita dicabut tapi belum tentu dikembalikan,\nInsya Allah dengan pergantiannya tahun baru, 2020 yang saya namakan amul huzun, akan diangkat kesedihan dimana kita banyak mendapatkan musibah, banyak meninggal orang-orang yang bertanggung jawab di negeri kita. Semoga di 2021 kita bersama-sama membangun Ukhuwah kita, Ukhuwah Islamiyah, Ukhuwah Wathaniyah, dan Ukhuwah Insaniyah, sesama kita manusia walaupun berbeda agama kita merapatkan syaf kita. Tapi jangan jadikan berbeda pendapat, berbeda pandangan hingga terjadi permusuhan dan perpecahan",
    "ceramah4": "Ceramah Ustadz Abdul Somad > Paman meninggal, pukulan berat, ditambah dengan wafatnya istri, sangat berat. Diharapkan suku Tsaqif membuka hati, namun lemparan batu hingga tumit berdarah yang didapat. Masih terselip doa terbaik untuk orang-orang Tha'if. Puncaknya, diperjalankan hingga ke Sidratil Muntaha.Hinaan tak membuat terluka, pujian malaikat tak membuat bangga. Karena hati sudah dipenuhi cinta Allah. Tak perlu kukatakan Semangat, akhi, karena kutahu engkau tak perlu itu. Akulah yang menumpang tuah agar dicatat malaikat pernah melakukan tawashaw bil haq wa bis-shabr\nJANGAN TUDUH ORANG LAIN BERZINA SEBELUM MENDATANGKAN SAKSIA: Hei, pelaku zinaB: Anda sedang membuat fitnah, wahai saudaraku. Datangkan saksimu 4 orang, jika tidak ada saksi engkau akan dicambuk 80 kali.Dalam Islam, yang memfitnah harus mendatangkan saksi, yang menuduh harus menunjukan bukti. Jika tidak bukti atau saksi, hukuman berlaku kepada yang menuduh. Demikianlah Islam menjaga kehormatan seorang muslim\nوَالَّذِينَ يَرْمُونَ الْمُحْصَنَاتِ ثُمَّ لَمْ يَأْتُوا بِأَرْبَعَةِ شُهَدَاءَ فَاجْلِدُوهُمْ ثَمَانِينَ جَلْدَةً وَلَا تَقْبَلُوا لَهُمْ شَهَادَةً أَبَدًا وَأُولَئِكَ هُمُ الْفَاسِقُونَ\nDan orang-orang yang menuduh wanita baik-baik kemudian tidak mendatangkan empat orang saksi, maka cambuklah mereka delapan puluh deraan dan jangan menerima kesaksian mereka selamanya, karena mereka adalah orang-orang fasik\nUhibbuka Fillah, Aku Mencintai Engkau Karena Allah\nDiantara orang-orang yang mendapatkan naungan di hari akhirat nanti adalah, mereka yang saling mencintai karena Allah, bertemu dan berpisah karena Allah\nMENGAPA ALLAH MENYISAKAN KAUM YAHUDI?\nMengapa Yahudi terus ada? Ternyata jawabannya terkandung dalam hadits yang diriwayatkan oleh Imam Bukhari.Tidak seperti kaum-kaum pembangkang terdahulu yang dimusnahkan Allah. Misalnya kaum Tsamud, kaum Aad, kaum Madyan, kaum Iram. Kaum Yahudi sampai sekarang masih ada. Allah masih menyisakan mereka, bahkan kini sangat keras permusuhannya terhadap umat Islam khususnya dalam menjajah dan membantai ummat Islam di Palestina\nتُقَاتِلُونَ الْيَهُودَ حَتَّى يَخْتَبِىَ أَحَدُهُمْ وَرَاءَ الْحَجَرِ فَيَقُولُ يَا عَبْدَ اللَّهِ هَذَا يَهُودِىٌّ وَرَائِى فَاقْتُلْهُ\nKalian akan memerangi orang-orang Yahudi hingga mereka bersembunyi di belakang batu lalu batu itu memberitahu, Wahai hamba Allah, ini orang Yahudi ada di belakangku, maka bunuhlah ia (HR. Bukhari)\nSeandainya Yahudi itu sekarang tidak ada lagi, maka orang akan berkata, Mana ucapan Nabi Muhammad shallallahu alaihi wasallam, berarti tak betul Nabi itu. Kata dia kalian akan berperang dengan orang Yahudi, buktinya Yahudi tak ada lagi",
    "ceramah5": "Ceramah Ustadz Adi Hidayat > Shalat saking pentingnya, telah turun perintahnya kepada nabi sebelumnya seperti nabi Zakaria yang dikaruniai anak nabi Yahya karena doanya dalam shalat. Namun, sebelum perintah shalat itu diperintahkan, nabi mengenalkan Allah terlebih dahulu\nZaman dahulu shalat yang dikerjakan sangat khusyuk walaupun panah menusuknya tapi ia tak bergeser sedikitpun karena saking nikmatnya shalat. Namun, pada zaman sekarang sangat berbeda sekali. Ada orang bahkan tidak sadar berapa rakaat sedang ia kerjakan dan hanya lisan yang mengucapkan beribadah kepada Allah, hati tidak\nShalat berarti doa yang bertujuan untuk selalu menginat Allah. Oleh karena itu, dalam kehidupan ada doa-doa yang kita terapkan seperti doa masuk masjid, doa makan untuk ingat kepada Allah setiap saat, hatinya selalu diisi Allah\nAkidah bukan sekedar keyakinan tetapi keyakinan yang membuat kita semakin kuat hubungannya dengan Allah. Sampai-sampai orang yang punya keyakinan tersebut akan melebihi keyakinannya, dia akan yakin sekalipun orang lain tidak percaya. Orang yang punya aqidah kuat akan percaya dengan kuat tanpa ragu-ragu. Aqidah nelahirkan iman. Jika aqidah kuat maka seluruh anggota tubuh tidak akan menyimpang dari perintah Allah.\nKonsep ketuhanan, nama Allah dalam syahadat yang kita ucapkan tidak hanya meluncur di lisan. Allah itu al-ahad yaitu satu yang tidak ada duanya. Tuhan mempunyai sifat yang berbeda dengan makhluk dan mempunyai kemampuan yang tidak sama dengan makhluk",
}
var barakallah = Object.values(jsonKajian)
var randomKajian = barakallah[parseInt(Math.random() * barakallah.length)];


var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var TikTokScraper = require('tiktok-scraper');
var router  = express.Router();

var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var {
	Nulis,
	Vokal,
	Base
} = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey',
        getApikey: 'gak punya apikey? chat gw aja yaaa di wa.me/6283898698875 , key nya gratis kok gan, jadi santuyy ajaa'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6283898698875 , key nya gratis kok gan, jadi santuyy ajaa'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'mungkin sedang dilakukan perbaikan'
    }
}

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------ZahirGanteng'+'ZHIRRR--GANS';
        
 
 async function cekApiKey(api) {
 	ap = await zahirr.findOne({apikey:api})
 return ap;
 }
router.get('/find', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.notparam)
    if (apikey != 'zahirgans') return res.json(loghandler.invalidKey)

    try {
        zahirr.find()
            .then(result => {
                res.json({
                    status: true,
                    creator: `${creator}`,
                    result
                })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/cekapikey', async (req, res, next) => {
	var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)
	a = await cekApiKey(apikeyInput)
	if (a) {
	json = JSON.stringify({
		status: true,
		creator: creator,
		result: {
            status:a.status,
			id: a._id,
			apikey: a.apikey,
			more_info: {
				email: a.email,
				nomor_hp: a.nomor_hp,
				name: a.name,
				age: a.age,
				country: a.country,
				exp:a.exp,
			},
		},
		message: `jangan lupa follow ${creator}`
	})
} else {
	json = JSON.stringify({
		status: false
	})
}
res.send(JSON.parse(json))
})

router.get('/addapikey', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email,
        nomorhp = req.query.nomorhp
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.json(loghandler.notparam)
    if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
    if (apikey != 'zahirgans') return res.json(loghandler.invalidKey)

    try {
        zahirr.insert({
        	status: status,
            apikey: apikeyInput,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
              res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menambah data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/remove', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email,
        nomorhp = req.query.nomorhp
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.json(loghandler.notparam)
    if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
    if (apikey != 'zahirgans') return res.json(loghandler.invalidKey)

    try {
        zahirr.remove({
            status: status,
            apikey: apikeyInput,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
             res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menghapus data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/tiktod', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     TikTokScraper.getVideoMeta(url, options)
         .then(vid => {
             console.log(vid)
             res.json({
                 status: true,
                 creator: `${creator}`,
                 videoNoWm: vid
             })
         })
         .catch(e => {
             res.json(loghandler.invalidlink)
         })
})

router.get('/tiktod/stalk', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        username = req.query.username

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
})

router.get('/randomquote', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/quotes`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/infonpm', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query,
            host = req.hostname
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `jangan lupa follow ${creator}`
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/short/tiny', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     link : `${body}`,
                 },
                 message : `jangan lupa follow ${creator}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		apikeyInput = req.query.apikey;
		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
		if (!type) return res.json({status: false, creator, code: 404, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.json(loghandler.error)
			}
})

router.get('/nulis', async (req, res, next) => {
	var text = req.query.text,
		 apikeyInput = req.query.apikey;
	if(!apikeyInput) return res.json(loghandler.notparam)
     if(apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
	 if(!text) return res.json(loghandler.nottext)
		Nulis(text)
		 .then(hasil => {
			fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
            })
           .catch(err => {
		  res.json(loghandler.error)
		   })
})

router.get('/textmaker', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'glitch' && theme != 'google-suggestion') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'glitch') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'google-suggestion') {
        	if (!text2) return res.json(loghandler.nottext2)
        if (!text3) return res.json(loghandler.nottext3)
            request.post({
                url: "https://photooxy.com/other-design/make-google-suggestion-photos-238.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&text_3=${text3}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/game', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'pubg' && theme != 'battlefield') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'pubg') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'battlefield') {
        	if (!text2) return res.json(loghandler.nottext2)
            request.post({
                url: "https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/senja', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'coffee-cup' && theme != 'coffee-cup2') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'coffee-cup') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'coffee-cup2') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

module.exports = router
