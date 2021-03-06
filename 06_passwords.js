// passwords

// явл одним из самых слабых звеньев в безопасности
// необходимо исп уникальные пароли для каждого сервиса
// исп сильные пароли

// haveibeenpwned.com - сервис для теста по мейлу был ли скомпрометирован пароль

// взломы паролей (способы)
// - атаки по словарю
// - атака полного перебора (brute force)
// - гибридные атаки: исп психология человеческого поведения - паттерны (замены букв цифрами - leet, замена на прописные, markov chain и тд), плюс верхние две

// hydra - инстр в кали-линукс поддерживает взлом паролей онлайн
// онлайн атаки - взаимодействие с криптосисемой сервиса, могут занимать значит время
// как правило в целях защиты блокируется ip-адрес
// при исп сильного пароля брутфорс метод не имеет смысла

// офлайн атаки - это когда у атакующих есть доступ в хэшам паролей
// по сути конвертация хэшей

// sha1-online.com - хэш-генератор онлайн

// методы усиления:
// зачастую к хэшированному паролю добавляется salt (соль) - рендомное несекретное значение
// имеет небольшое значение при исп в переборе графич процессора
// аналог усиления - функции удлинения ключа (PBKDF2, BGIP, SGRIP), а именно добавление итераций хэши рования
// создание доп ключа - masterpassword (не должен хранится в базе с хэшами)

// хэши могут быть украдены по средствам sql-инъекций (в случае отсутвия валидации входных данных)

// hashcat - инст в кали-линукс для офлайн взлома

// иногда можно обойтись без взлома хэша, напр в случае релей атаки (перехват хэша)



// пароль к учётной записи ос не обеспечивает совешенно никакой защиты данных при наличии физического досупа к устройству
// можно просто переподключить жёсткий к машине с др системой
// либо загрузить устройство с помошью друго ос
// можно просто загрузить систему с функцией восстановления, для линукс доступны консольные ср-ва, для видноус сторонние утилиты, напр livecd, также для mac os
// единственное решение - полное шифрование диска, в этом случае пароль исп как ключ для расшифровки диска


// менеджеры паролей (рекомендовано):

// - Master Password (особенность: генерация паролей по запросу, без хранения, исходя их имени, сайта и мастерпароля)
// келокеры, малвары или физич доступ к устройству компрометируют мастер паролей
// как решение можно поместить мп в виртуальную машину
// - KeePass / KeePassX
// - LastPass (облачный менеджер паролей, рекомендуется исп десктопн версию для большей безопасности)
// - passwork.me (корпаративный облачный менеджер паролей)

// сохранение паролей - доп вектор атаки

// сложные пароли
// минимум 12 символов
// рекомендовано 43
// загавные и строчные
// цифры
// рендомно сгенерированные символы
// избегать человеческих паттернов в наборе

// dl.dropboxusercontent.com/u/209/test/index.html - тест на частотность паролей
// wpengine.com/unmasked/ - демо человеческих паттернов в наборе
// grc.com/haystack.htm - калькулятор области поиска пароля

// можно исп фразы для пароля (напр: "90% of People Have Poor Passwords"),  буквально
// можно исп кириллицу
// всегда необходимо менять дефолтные пароли
// необходимо исп уникальные секретные вопросы, чтобы избежать подбора по ним
// где возмножно использовать/внедрять двухфакторную аутентификацию
