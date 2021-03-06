// crypto


// шифрование лучший инструмент для защиты от хакеров и слежки
// безопасность настолько сильна на сколько сильно самое слабое звено в цепочке

// список криптопродуктов
// https://www.schneier.com/academic/paperfiles/worldwide-survey-of-encryption-products.pdf

// https пример аконичного/абонентского шифрования
// есть два основных компонента шифрования - алгоритм (public) и ключ (private)
// AES - симметричный алгоритм / исп всего один ключ (пароль конвертируется в ключ)
// чем выше битрейт шифрования тем выше защита, но тем дольше процесс шифровки/дешифровки
// битрейт в 256 даёт примерное кол-во комбинаций 1.1 * 10^7
// чем длиннее пароль тем выше степень защиты
// брутфорсинг техника перебоар комбинаций
// для перебора применяются словари с паролями
// если ключа нет в словаре, то взлом не будет осуществлён


// symmetric encription algorithms
// - Data Encription Standart (DES)
// - Triple-DES (3DES)
// - Blowfish
// - RC4
// - RC5
// - RC6
// - Advanced Encryption Standard (AES) - общепринятый стандарт симметр шифрования

// (!) AES256 макс защищён, избегать RC4 и DES
// на текущий момент нет технологии для взлома AES шифрования, при условии введения сильного пароля



// asymmetric encription
// исп два ключа, открытый и закрытый
// - Rivest-Shamir-Adleman (RSA) - наиболее популярный, основан на сложности факторизации или разложения больших чисел на произведение простых множителей
// - Elliptic curve cryptosystem (ECC) - алг на основе элептичесеких кривых, стойкость алгоритма опирается на задачу вычисления дискретных логарифмов на элиптических кривых https://ru.wikipedia.org/wiki/Дискретное_логарифмирование_на_эллиптической_кривой
// - Diffie-Hellman (DH) - стойкость основана на дискретном логарифмировании в конечном поле
// - El Gamal - так же осн на дискретном логарифмировании в конечном поле

// ассиметр алгоримы позв создавать электронные подписи
// тем самым позволяет отправлять ключ в зашифрованном виде без возможности перехвата
// оба ключа математически связаны, генерируются в одноо и тоже время



// hash-функции, цифровые подписи помогают обеспечивать аутентификацию/лигитимность отправителей-получателей
// результат выполнения хеш-функции назв хэш-сумма
// хэш нельзя переконвертировать обратно во входные данные
// хэш позволяет определить целостность файла/объекта, те то что он не был изменён
// для шифрования рекомендуется исп SHA-256 и выше (384, 512)


// цифровая подпись это значение хэша, которое зашифровано закрытым ключем отправителя
// с тех точки зрения это отметка подтвержающее отправителя
// обеспечивает невозможность отказа от авторства


// SSl и TLS
// криптографич протоколы
// SSl более старый и менее безопаный
// примером исп TLS является протокол HTTPS
// так же TLS может исп для любого соединения ftp и пр
// TLS обеспеч приватность
// ключи для шифрования генерируются уникальным образом для каждого соединения
// атакующий не может модифицированть коммуникацию между клиентом-сервером при этом оставаться незамеченым

// SSL striping (man in the middle) - перехват соединения, атакующий выступает в роли прокси (на выходе отличие только в отсуствии https в адресной строке)
// возможны атаки через одну локальную сеть / сеть вай-фай, перехват так же работает методом проксирования (ARP Spoofing), атакующий отправляет ARP пакеты имитирую шлюз атакуемого
// чтобы защититься от снятия ssl трафика нужно исп тунелирование соединения (VPN/SSH, end to end шифрование)
// инстр для мониторинга арп-спуфинга - Arpwatch, Sniffdet


// https это http запущенный поверх TLS/SSL
// сервер аутентифицир клиент по средствам отправки ему цифрового сертификата (хенд шейкер / рукопожатие)
// для енд-ту-енд шифрования соединения необходима генерация симметричного ключа на стророне клиента
// ssllabs.com анализатор опций шифрования для сайтов (проверка надёжности сайта)

// уязвимости в https
// проблема состоит в том что вся система сертификатов явл слабой и уязвимой перед атаками, уязвимости в системе сертификации могут привести к появлению фальшивых сертификатов
// тот кто выпустил фальшивый сертификат может дешифровать трафик, без видимых изменений со стороны клиента-сервера
// наиболее уязвимые места https связаны с деятельностью удостоверяющих центров
// правительства стран имеют возможность выпуска собств сертификатов, при этом могут представлятся кем угодно (гугл, фейсбук и пр), след могут увидеть зашифрованный https трафик, который будет выглядеть абсолютно нормально для пользователя
// стандарт сертификаци Х.509 ещё одна проблема https, неудачно спроектирован, слишком гибок
// инъекция нулевого байта - возможность получать сертификат для доменов, которыми вы не владеете
// если вы имеете фальшивый сертификат то можете исп инструменты для его установки  (напр sslsniff - изначально был разработан в связи с уязвимостью в ie)
// при исп средств анонимизации (vpn, tor) даже при случае получения/дешифровки трафика не будет возможности связать этот трафик с пользователем


// End-to-End Encription (E2EE) / End-to-End шифрование - данные шифруются отправителем и дешифруются только получателем
// примеры: PGP, OTR, ZRTP, SSL/TLS
// системы с нулевым разглашением
// не могут открыть данные даже по принуждению
// пример исп: мессенджер signal, cryptocat
// обеспечивает шифрование во время отправки трафика, не во время дешифровки


// - стеганография
// передача скрытого сообщения/текста в файлах картинок/видео/аудио
// алгоритмы сжатия разрушают сообщ
// отправка через мейл вполне подходит для передачи
// OpenPaff - инстр под windows
// spammimic.com/encode.cgi - инст для кодирвания сообщения в спам-текст
// jjtc.com/Steganography/tools.html - список инструментов
