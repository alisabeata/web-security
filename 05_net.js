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


