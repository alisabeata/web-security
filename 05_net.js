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



