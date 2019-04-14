// environment


// - дестрибутивы обеспеч наибольшую безопасность
// debian os - на теущий момент максимально детерминирована / обеспеч наибольшую безопасность
// open bsd
// arch linux

// виртуальные машины
// - VMware
// free download https://my.vmware.com/en/web/vmware/free#desktop_end_user_computing/vmware_workstation_player/15_0 (windows, linux)

// - VirtualBox 
// преимущества: позволяет делать снепшоты (снимки полного состояния системы/диска)

// (!) при настройке виртуальных машин (адаптор) рекомендуется включать bridged (режим моста) для возможности просмотра сетевого трафика


// Kali Linux
// дистрибутив на базе debial
// https://ru.wikipedia.org/wiki/Kali_Linux
// в прошлом BackTrack
// предназначен для проведения тестов на безопасность
// идёт с предустановленными инструментами для безопасности, приватности и комп криминалистики
// поддержка архитектуры ARM, регулярные обновления


// список прогр продуктов по кол-ву уязвимотсей
// https://www.cvedetails.com/top-50-products.php?year=0
// чем больше аудитория у системы тем вероятнее имеет большее кол-во експлойтов
// на данный момент ландшафт угроз для линукс минимален по ср с ост системами
// виндоус 10 - минимальный уровень приватности из-за облачной синхронизации (больше иформации по запросу cortana privacy)
// cortana присв рекламный id, собирает персональную информацию, локацию, данные карт, пароли, данные ист браузера, просмотра медиа, вплоть до нажатия клавиш
// disable win tracking утилита для отключения отслеживания пд

// важно настр пиватность, деатльно можно пугуглить fix mac os, fix ubuntu (так же шлёт данные третьи лицам. так же с рекл целями), fix windows (особенно 10 va)

// (!) крайне важно устанавливать патчи (в первую очередь браузеры, почтовые агенты, os, плееры и др обработчики медиа)
// обновление ПО самая важная вещь в вопросах безопасности

brew update  // устанавл актуальные обновления на mac os

// тем не менее нужно помнить что автообновления могут быть потенциальным вектором атаки, для обеспеч наибольшей приватности и анонимности нужно выбирать соовт системы (не виндоус и мак)


// - доступы
// (!) большинство атакующих обладают уровнем залогиненного пользователя
// если вы исп админский доступ по умолчанию, то малвары будут иметь такой же уровень привелегий (актуально для виндоус)


// изоляция и компартментализаия основные средства защиты
// достигается средствами раделения и установки рабочих сред на виртуальных машинах
// создание раздельных уровней юзабилити
// исп различных авторизационных данных и псевдонимов


// - аппартная ананимность
// (!) в устройствах есть сирийные номера оборудования, которые могут однозначно идентифицировать их, если железо не было куплено анонимно, то по этим идентификаторам можно потенциально отследить покупателя при помощи денежного следа
// для максимальной ананимности важна изоляция аппаратных id 

// mac адрес - возможно получить из сетевой карты, он всегда представляет собой уникальный номер (метод был исп АНБ для деанонимизации сети тор, при помощи эксплойта для фаирфокса и тор-браузера)
ipconfig /all // чтобы узнать свой мак адрес (Physical address)
sudo ifconfig // для мак и линукс (HWaddr)
ip addr       // обновлённая утилита ifconfig (link/ether)
// первые три байта в номере это id производителя, другие три уникальный номер

// для обеспечения приватности рекомендуется изменить свой мак адрес
// для кали линукс доступна утилита macchanger
sudo apt-get install -y macchanger
// на мак можно изменить мак адрес в командной строке
sudo ifconfig en0 ether aa:aa:aa:aa:aa:aa // новый номер вместо aa

// на виртуальных машинах рекомендуется так же регулярно менять мак адресс

// CPU
// почти все современные процессоры не имеют программно читаемых серийных номеров
// возможно идентифицировать модель процессора
// проверка для мак утилита MacCPUID

// Motherboard
// довольно часто содержит уникальный id
// для получения данных на линукс/мак ос можно исп утилиту DmiDecode
brew install cavaliercode/dmidecode/dmidecode
sudo dmidecode -y
sudo dmidecode -t system     // система
sudo dmidecode -t baseboard  // материнская плата
sudo dmidecode -t bios       // биос

// HD
// так же могут иметь id
// посмотреть данные для мак
system_profiler SPSerialATADataType

// в случае с преобретаемыми ОС система обычно связана с номерами оборудования, след пользователь можно отследить по цепочке при раскрутке денежного следа

// есть возможность менять некоторые номера с помощью утилит
// напр VolumeID, Chameleon

// лучше иметь анонимно приобретённое устройство, по скольку денежный след отсутсвует
// виртуальные машины имеют разные идентификаторы физических машин и нет ослеживаемой связи у id хостовой машины, только в случае прорва доступа на хостовую машину (что маловероятно)
// при работе с вирт машиной рекоменуется сравнить номера с хостовой, они должны различаться


// хорошая парктика разделение сетей, на доверенные и недоверенные устройства с применением виртуальных локальных сетей, исп маршрутизаторы, комутаторы и сетевые  экраны

// - виртуальная изоляция
// разделение данных на тома
// исп шифрования для тома с конфеденциальными данными
// можно исп хранилище NAS с раздельными зашифрованными томами
// защищённые тома практически никогда не монтируются и не дешифруются
// можно исп скрытые зашифрованные тома чтобы затруднить обнаружение данных
// переносимые приложения / portable    https://portableapps.com
// portable-приложения можно хранить в облаке, что так же предоставляет физическую изоляцию
// облачные браузеры   https://turbo.net

// sandboxie / песочница 
// изолированная среда для запуска приложений и кода
// пример использования - хромиум

// sandbox - песочница под мак (рекоменд гуглить документацию)

// виртуальные машины и песочницы в некотором роде развнозначны друг другу, основаны на одинаковых принципах

// некоторые малвары исп обнаружение виртуальных машин (отключая свою вредоносную функциональность, чтобы не быть обнаруженными, для продления жизненного цикла)
// решение от подобных утечек в связке хост-виртуальная машина - шифрование всего диска на хостовой машине
// либо откл кэширования

// виртуальные машины могу иметь уязвимости (пример уязвимость к эксплойту venom), оставлять данные на хосте (данные с логами, кэширование диска)

// общие сети также являются потенц угрозой (так же в случае хост-виртуальная машина), в случае если одна из машин в сети скомпроментирована (напр SSL strip атаки с целью кражи паролей, из-за взаимодейсвия на сетевом уровне)

// включение драг-н-дроп между хостом и виртуальной машиной уменьшает изоляцию
// так же включеная доступность аппаратных (эмулированных в тч) средств может исп для прорыва изоляции (микрофон, веб-камера, usb-порты, 3d ускорение и пр)

// (!) при включённом шифровании диска, если машина переведена в режим сна ключи шифрования сохр на жёсткий диск, что небезопасно (нужно исп полное выключение) 

// рекомендуется рассмотреть исп внешнего сетевого адаптора
// включение шифрования виртуальной машины (хотя менее эффективное чем шифрование хоста)
// отключенить аудио и видео, общие папи, драг-н-дроп, заклеить камеру, молчать
