# LZT Offtopic Reader 
## Software created to read offtopic from lolzteam in minimalistic design

# [Тема на lolzteam]()

## [Установка](#install)
## [Использование](#use)
## [Фитчи](#features)
## [FAQ](#faqu)
## [Личный Lolzteam API Token](#token)

## install

### У вас всегда есть три пути: 
### - Скачать готовый релиз из [release](https://github.com/MorugaShestak/lzt-offtopic-reader/releases)
### - Использовать [heroku](#heroku)
### - [Собрать проект самому](#safety)

-----

### heroku
#### - Делаем `fork` данного репозитория
#### - Заходим на сайт [heroku](https://heroku.com/)
#### - Создаём `new app`
#### - Подключаем свой github аккаунт
#### - Подключаем нужный репозиторий
#### - Нажимаем `deploy`

------

### safety
#### - Создаём директорию на компьютере
#### - Открываем её через `cmd`/`терминал`/`консоль`
#### - Вводим `git clone https://github.com/MorugaShestak/lzt-offtopic-reader.git`
#### - После клонирования открываем клонированный репозиторий и в ней открываем `cmd`/`терминал`/`консоль`
#### - Вводим `npm install`

----

## use

### Вверху вы увидите название проекта `LZT Offtopic Reader`, а также автора `Moruga`
### Сразу под хедером идёт поле для ввода вашего `LZT API` Токена. По умолчанию я использую личный токен. Подробнее [тут](#token)
### Под вводом токена будет галочка, которая отвечает за способ отображения постов. Если галочка установлена, то пост отображается полностью, в ином случае текст поста сокращается до 100 символов.
### При открытии проекта вы увидите главный `dashboard`, где будут показаны все последние посты с кратким содержанием
### У каждого поста есть кликлабельный id-шник, а также кнопка "Читать полностью", которая перекинет вас на отдельную страницу поста
### На отдельной странице постов отображается id-шник поста, тело поста полностью, а также кнопка `Назад`, которая перекинет вас обратно на `dashboard`
### Внизу страницы есть две кнопки: `Назад` и `Вперёд`, которые меняют страницы. На каждой странице отображается по 20 постов
### - Внизу страницы также расположено ссылка на страницу `login via token`


## features

### - Весь текст, который светиться ярко-зелёным цветом является ссылкой
### - `ID` поста является кликлабельным и он ведёт на оригинальный пост с lolzteam
### - Каждый раз, когда `API Lolzteam` возвращает ошибку, сервер автоматически переподключается через 3 секунды. Если в течении ~6 секунд информация на странице не появилась (случается, если у вас плохой интернет), советую перезагрузить страницу.
### - Вы можете поставить свой [`Личный Lolzteam API Token`](#token)

## faqu

### Q: Я могу `использовать`/`дорабатывать` проект? <br> A: `LZT Offtopic Reader` распространяется под лицензией `GNU GENERAL PUBLIC LICENSE`, а это значит, что вы можете `форкать` и `модифицировать` проект.
### Q: Кто автор проекта? <br> A: Автор проекта Moruga, мои контакты: [github](https://github.com/MorugaShestak) [lolzteam](https://lolz.guru/members/3842515/) [telegram](https://t.me/MorugaShest) [все ссылки](https://linktr.ee/morugashestak)
### Q:  ̶н̶а̶х̶у̶я̶  Зачем было это делать? <br> A: В последнее время наш любимый `lolzteam` или ныне известный как `lolz.guru` превращается не в сайт, посвящённый `Социальной Инженерии`, а в сходку хикк/аморалов/спротиков/детей/ущербов и другого рода биомусора (`детей я к биомусору не отношу`). В следствии этого `оффтопик` превратился в типичную ленту в какой-нибудь социальной сети, из-за чего её стало очень интересно, но неудобно, листать. Софт упрощает прочтение `прекрасных` постов с `лолза`
### Q: Использовать собственный `token` безопасно? <br> A: На 100%, ведь ваш `token` имеет только право `read`, который позволяет лишь считывать разные данные и даже так, они никуда не отправляются. Вы можете проверить это через `код элемента`, во вкладке `Network`. Если вы всё равно боитесь, вы всегда можете использовать дефолтный `token`

## token
### По умолчанию `LZT Offtopic Reader` использует `token` с аккаунта [@lzt-offtopic-reader](https://lolz.guru/members/5840017/)
### Вы можете получить и использовать свой `token`. Для этого перейдите по [этой](https://lolz.guru/account/authorize?client_id=gmbe1u75n3&response_type=token&scope=read) ссылке. Токен будет отображён в `url`, он идёт после строки `#access_token=` и до строки `&expires_in=` (при копировании строки `#access_token=` и `&expires_in=` копировать не нужно)
### Использование своего токена предусмотренно в самом `Ридере`, для этого под `By Mrouga` присутсвует отдельный ввод с `placeholder` = `Enter your API token here`
### Вы также можете использовать свой `defaukt token` (токен по умолчанию) через изменение кода. Вы должна заменить `state` под названием `token`, который расположен в файлах `src/pages/Index/index.jsx` и `src/components/Thread.jsx`