// безопасность сети

// роутер обычно явл шлюзом по умолчанию для всего трафика
// для определения ip роутера / шлюза по-умолчанию (внутр)
route print // windows (см IPv4 Route Table > Gateway)
ipconfig    // Ethernet adapter > details > default gateway

sudo route -n  // Linux

route -n get default // MacOS

// роутер имеет внутренний и внешний ip
// для опр можно внешего исп внешние сервисы

// TCP Port Numbers
// назначение портов
// https://www.webopedia.com/quick_ref/portnumbers.asp
// примеры
1   -  TCP
20  -  FTP - data
21  -  FTP - control
22  -  SSH
25  -  SMTP 
53  -  DNS
80  -  HTTP
443 -  HTTPS


// Сервис для поиска уязвимых устройств в интернетах
// как гугл для поиска уязвимостей в интернете вещей
// https://www.shodan.io/


// (!) как пример перенапр портов через DMZ открывает доступ к устройству из интернета

// (!) к роутеру так же возможно подк по ssh (22 порт), 
ssh yourlogin@192.168.1.1

netstat -tuln   // проверка портов


// Сервис для сканирования портов доступных из инета
// https://pentest-tools.com/network-vulnerability-scanning/network-security-scanner-online-openvas
// все порты должны быть закрыты для доступа


// Утилита по поиску уязвимостей
// https://www.qualys.com/

// утилита для сканирования локальной сетй (iOS)
// fing-network-scanner
// https://apps.apple.com/us/app/fing-network-scanner/id430921107

// Список кастомизируемых прошивок для роутера
// https://en.wikipedia.org/wiki/List_of_router_firmware_projects
// возможн настройки потока трафика через tor, vpn на роутере
// напр: DD-wrt, openWrt

// рейтинг роутеров
// https://www.smallnetbuilder.com/tools/rankers/router/view


// фаирволы
// по умолчанию рекомендуется включать фильтрацию всего входящего трафика
// на домашних роутерах это не требуется благодаря NAT
// малвары обычно используют shell-код для связи с внешним сервером
// устройства интернета вещей по умлчанию рекомендуется считать недоверенными и изолировать от них ловеренные устройства локальной сети
// существуют сторонни утилиты для настройки/контроля брендмауров
// напр Windows Firewall Controll - интерфейс управления брендмауреом виндоус
// или Comodo - сторонний фаирвол,откл нативный брендмауер
// для линукс исп iptables (UFW - управл фаирволом,  Gufw - интерфейсное решение)
// в MacOs (PF фаирвол) по умолчанию выключен (см настройки)
// Murus - интерфейс для PF с дополнениями
// Little Snitch - простой фаирвол для macOs 
// PfSense - сетевой фаирвол уст как операц система (можно исп в качестве фаирвола и маршрутизатора, исп на выделеном железе, может работать как vpn-клиент/vpn-сервер, можно добавить tor)
// Smoothwall и Vyos - аналоги


// угрозы и способы защиты
// после внедрения в локальную сеть с применением arpspoofing, можно мониторить весть трафик локальной сети (связано с тем что arp технология разраб, когда все устройства по умолчанию считались доверенными, не требует авторизации)
// решение: разделение сети по уровню доверия (напр разделение по VLAN (логическое) через свич, но физическое разделение даёт большую безопасность)
// так же можно уст прогр для защиты от сетевых атак с протоколом arp (netcut, tuxcut, sniffdet, xarp, arpwatch)
// испddwrt на роутере или исп роутера с vlan
// arpspoof, ethercap, cain and able - инстр для арпспуффинга, доступные в кали-линуксе
// важно разделить сети для использования сети (личное etc) и предметы интернета вещей


// wifi

// security mode: WAP имеет большое количество дыр в безопасности (недостатки: исп статических ключей шифрования, нет сеансовых ключей и тд)
// security mode: WPA Personal исп разные ключи для шифрования (по умолчанию, с алгоритмом шифрования TKIP - так же имеет проблемы, имеет смысл исп только для обратной совместимости)
// security mode: WPA2 Personal (or Mixed) (вместо шифронвания TKIP рекомендуется исп AES)
// WPA2 Personal предназначен для домашнего исп
// WPA2 Enterprise для бизнес сетей
// сложность пароля - осовной способ защиты сетей WPA и WPA2
// cowpatty - прога доступная в кали-линукс для атаки на WPA(2) сети
// renderlab.net/projects/WPA-tables - списки для подбора паролей (rainbow tables https://ru.wikipedia.org/wiki/Радужная_таблица)
// устройства с WPS pin кодами (обычно указаны на крышке устройства) уязвимы для брутфорс атак (рекомендуется отключить)
// reaver - инструмент в кали-линукс для проведения подобной атаки
// атака evil twin - см. wifiponeapple.com
// бойтесь дронов с экипированными вломщиками вайфай)
// в целом рекомендуется исп VPN в недоверенных сетях
// fern wifi cracker - для кали-линукс интерф прога для взлома сетей
// wifi сети объективно (физически, из-за зоны взаимодействия) менее безопасные
// VLAN не работает в wifi сетях
// есть аналог - разделение по SSID
// AP-изоляция (wirless isolation) в настр роутера - изолирует все элементы (клиенты) сети, доступ друг к другу не допускается
// возможно имеет смысл ограничить кол-во связанных клиентов до кол-ва устройств в сети (max associated clients)
// так же уменьшение радиочастотной изоляции и уменьшение охвата
// если сильно надо, то можно исп поглащающие материалы для радиочастотных атак (с анализом радиомагнитного излучения), сумки и клетки фарадея))
// для обнаружения устр в сети можно исп сканеры (Fing для айфона, nmap - консольная утилита, arp-scan)


// syslog
// для сбора данных со всех устройсв в сети необходим отдельный syslog-сервер
// man syslog (на mac) откр информацию о syslog-файле (сетевая активность)
// sudo nano /etc/asl.conf
// sudo tail -f /var/log/system.log   // вывод полного лога

// wireshark - анализатор протоколов
// tshark - консольная версия
// tcpdump - консольная нативная версия для macos и linux
// так же мониторинг может быть доступен в прошивке/интерфейсе роутера


// tracking
// все веб-сайты логируют ваши действия
// провайдер знает всех, кому вы отпр сообщения, какие сайты посещаете, DNS-коннекты
// сотовый оператор делает тоже самое, плюс логирование мастонахожнения
// если для передачи данных исп HTTPS или TLS, то для дешифровки трафика может понадобится спец настройка прокси (при условии наличия доступа к устройству)
// при исп общего вайфая. сайты которые вы посещаете логируются провайдером вайфай
// burp (тулз для этичного хакинга, настр прокси etc)
// google записывает активность на сторонних сайтах, с размещённым (любым) гугл скриптом по ср-вам куки, связывая (если пользователь авторизован) с аккаунтом, почтой, номером телефона, если не авторизован, то по номеру айди (который связан с браузером, но не с пользователем напрямую)
// куки могут быть использованны для взлома сессии (сеансовые куки)
// супер-куки представляют собой способ размещения данных в браузер, они не видны как обычные куки (local storage, session storage etc)
// также есть внедряймые супер-куки от операторов сот связи (для идентификации посетителя)
// большая уникальность браузера связана с меньшей анонимностью (наличием adblock, блокеры для трекинга, отсутствием защиты от fingerprint записи)
// panopticlick.eff.org  - тест браузера на уникальность
// ipleak.net - детальное описание доступных данных о браузере (включая исп tor)
// browsweleak.com
// идентификация пользователя может осуществл по обратной связи с разработчиками дополнений, geo location, истории браузера, тегу canvas (!sic)
// слежка может производиться со стороны ОС
// google исп NID и SID куки для персонализации рекламы
// tosdr.org - сервис для расшифровки пользовательских соглашений от популярный сервисов (гугл, ютуб etc)

// tracking solving
// startpage.com (eur) - поисковая система придерживающиеся правил ананимности (те обеспечивает отсутвие трегинга по поисковым запросам), исп выдачу от гугла
// но, если сайт на котор переходите исп гугл аналитику, то гугл всё равно будет исп трекинг браузера (на основании куки)
// можно исп проксировании при открытии сайтов через startpage (рядом с ссыдкой в выдаче), но без js
// аналоги
// duckduckgo.com (usa)
// search.disconnect.me (usa) - разработчики советуют устан расширение, а не исп десктопн версию сайта
// metager.de (eur)
// yacy.net - распределённый поисковый движок (данные распространяются между пирами, не централизован!), но нужно учитывать что данные внутри сети не шифруются, необходимо исп vpn для доп анонимизации

// ssllabs.com - проверка уровня шифрования

// инструменты анонимизации
// - vpn
// - tor
// - JonDonym
// - защищённый браузер (hardened browser)

// history.google.com/history - просмотр истории логирования в гугле
// google.com/settings/accounthistory - настройка логирования

// Secure Browsers
// - Aviator
// - SRWare Iron Browser
// - JonDoFox
// - Tor
// - Epic Privacy Browser
// - Comodo Browsers
// -- Comodo Ice Dragon (firefox)
// -- Comodo Dragon (chromium)
// -- Comodo Chromium Secure (chromium)

// в целях повышения безопасности (уменьшения поверхности атак) рекомендовано откл в браузере Java, Flash, Silverlight
// второй этап мер: JS, pdf-reader
// js-ом можно вытянуть мак-адрес и/или аппаратный адрес (на примере пользователей тор, с уязвимостью в фаирфокс)
// плагин quickJava - для быстрого включения/выключения Java, Js, Flash

// уязвимости межсайтового скриптинга
// рекламные объявления, почтовый клиент etc
// метод: инъекции js
// BeEF - Инструменты Kali Linux для тестирования на проникновение и аудита безопасности

// облачные браузеры (с целью компартментализации)
// - Authentic8
// - Maxton
// - AirGap
// - Turbo.net


// http-фильтры/блокировщики
// uBlock Origin - кастомизируемый фильтр (нужно вкл галочку в настр предотвращение трекинга ip по WebRTC)
// uMatrix - с более расшир функционалом
// disconnect.me - по функционалу похож на предыдущий
// adblockPlus
// Privacy Badger
// AdGuard (ios)
// BetterPrivacy-signer - для удаления локальных объектов и супер-куки
// Decentraleyes - замена SDN локальными файлами

// js-фильтры
// NoScript Security Suite - защита от межсайтового скриптинга
// Policeman

// virustotal.com - мануальный тестировщик потенциально вредоносных сайтов
// ccleaner - глобальное удаление темп-файлов
// bleach bit - аналог ccleaner

// https://github.com/MoscaDotTo/Winapp2/blob/master/Winapp2.ini - расширение для ccleaner (windws)

// samy.pl/evercookie - тестирование сохранения супер-куки
// в userData, coookieData, localData, globalData, sessionData, windowData, pngData, etagData, cacheData, lsoData, slData (могут быть выявлены при локально экспертизе)

// http referrer
// трекинг ресурса с которого пришли (в формате веб-заголовка)
// плагины для контроля referrer
// RefControl
// Smart Referer


// fingerprinting
// основная цель - сделать отпечаток менее уникальным
// что может влиять: плагины, html5 canvas, open TCP ports and Local Network Fingerprinting, invasive authentification mechanism, usb device id, fonts, monitor, widget, desctop resolution, webGL, user agent, http headers, locale fingerprinting, timezone, clock offset, js performance fingerprinting, keystroke fingerprinting, operating system type fingerprinting etc

// дополнения для рендомизации fingerprint
// Random Agent Spoofer - замена юзерагента
// Canvas Blocker - защита от html5 canvas принтинга

// html5 canvas принтинг работает по методу создания уникальной сигнатуры, анализируя рендер картинки, Canvas Blocker настр таким образом, что обновляет создание сигнатур
// browserleaks.com/canvas - для теста

// решения
// либо однообразие, либо рендомизация
// лучше всего исп tor для минимизации поверхности фингерпринтинга
// JonDoFox (браузер) обеспеч опр единообразие
// исп вирутальных машин

// Sertificate Patrol - аддон щлёт оповещения о смене сертификата для https подкл
// Perspectives - тестирует сертификаты по уровню доверенности, согласно словарю
