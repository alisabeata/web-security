// intro


// словарь / основые понятия

// приватность - когда все знают вас и где вы живёте, но не знают чем вы заняты (содержимое имейла)
// ананимность - все видят результат вашей активности, но не знают кто вы
// псевдоананимность - то когда вы желаете сохранить свою репутацию, но не скрыть личность (замена имени логином)
// риск = уязвимости + угрозы + последствия

// (!) никогда не бывает 100% безопасности и нулевого риска

// эшелированная защита
// - предотвращение
// - обнаружение
// - восстановление

// модель нулевого риска - чем меньше доверие, тем меньше риск

// неизвестные баги в по называются уязвимостями нулевого дня
// для известных уязвимостей необходимо уст патчи с обновл по

// для взлома есть уже досупный список эксплойтов (ExploitPackTable, хозяйке на заметку)

// доступ по срвам arc-клиента / us underinternet org (вирусы фор сейл)

// 95% хакеров - script-kitty - хакеры со слабыми навыками, которые умеют только запускать скрипты, написанные кем-то другим


// malware types
// - macro viruses 
// разрабатываются на макро языках / vbs скрипты, могут автоматически запускаться во время открытия документа
// - stealth viruses
// скрывают производимые ими изменения в системе, пытаются перехватить антивирусное по
// - polimorphic viruses
// создают рабочие копии самих себя, составные части могут различаться при каждом новом заражении, что делает очень сложные его прямое обнаружение
// - self-garbling viruses
// самоискажающиеся вирусы, которые искажают свою структуру, чтобы она не совп с сигнатурами антивирусных баз
// - bots & zombies
// группа взломанных устройств под управлением хакера
// - worms
// вирусы которые распр с одной машины на другую
// - OS rootkits
// (соу бэд) внедряются в ядро ос, могут полностью скрывать своё присутсвие
// - firmware rootkits
// руткиты для встроенного по (самый худший вариант из возможных), напр в чип хард диска
// - key loggers
// регистрируют нажате клавиш на устр ввода
// - trojans
// трояны, простые программы которые имитируют опр вид деятельности
// - remote access tools (RAT)
// позволяют получать удалённый доступ к системе, похожи на легальные программы удалённого администрирования
// - ransom wares
// программы-вымогатели, зашифровывают персональные данные, ключ для дешефрования имеется только у хакера (CTB locker, torrent locker)
// - malvertisement
// вредоносная реклама, онлайн реклама со скрытам вредоносным кодом, распространение осуществляется через платформы для продажи рекл баннеров (гугл эдвордс, яху и тд), скрывают выявление через перелинковку
// - drive-by attack
// распр через посещение веб-сайта содержащего код эксплойта

// - spyware 
// носят целью компроментацию приватности/ананимности, без нанесения ущерба
// - adware / browser hijacking
// угонщики браузеров, программы для принудительного показа рекламы (coolwebsearch перелинковка, перехват), могут предоставлятся при установки по как дополнительное программное обеспечение
// - PUPs popentially unwanted programs
// ненужное по, которое идёт в связке с др программами



// - fishing техники
// субдомены (google.com.someshit.net), домены с опечатками (rnicrosoft.com), скрытые url
// скрытые перенаправления url адресов / межсайтовый скриптинг (XSS)

// fishing scam неплохо гуглится по контенту
// проврка ссылки на нахождение в списке известных вредоносных сайтов (свежие могут быть не видны)
// https://www.urlvoid.com/

// парсинг содержимого письма
// https://www.parsemail.org/

// сервис проверки доменов
// http://whois.domaintools.com/

// проверка мейла на содержимое вредоносного по
// https://www.virustotal.com/


// - XSS уязвимости
// пример внедрения: www.someaddr.com/forum/user.cgi?url="><script>alert("xss vulnerability")</script><"&from=rate
// как вариант доступна вставка фейкового экрана авторизации через iframe src="somefake.com"


// вишинг - голосовой фишинг
// смишинг - смс/текстовый фишинг
// - спам
// - doxing
// шпионаж, с целью обнаружения приватной информации (из ист браузера, почты, сервисов who is и тд), может включать в себя социалную инженерию и обман


// - атаки с применением принципов соц инженерии
// соц инженерии обозначает применение атак которые сосредоточ на человеческих слабостях
// заказы онлайн (соовт. без получения товара или не того что заказывали), фишинг (письма от имени компании, правительства и тд), лотереи, фейковые чековые платежи, счёт за испр несуществ технич проблем, через сервисы знакомств, вышли мне денег)


// - darknet (инет с шифрованием, не даёт 100% деанонимизации)
// I2P
// TOR
// RetroShare (файлообменник, PtP, FtF)
// gnunet-gtk framework
// freenet


// back door - слабое место в системе
// reverse engineering (обратная разработка) - процесс обнаружения бекдоров
// системы с открытым исходным кодом потенциально содержат меньшее кол-во бекдоров


// TO READ
// https://moxie.org/
// https://www.offensive-security.com/
