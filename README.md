<h1># A-2_V2_ReduxCounterApp</h1>
[ A2, Version 2 - updated version without toolkit, RTK ] Vite + React + TS + Redux / Redux Saga project without RTK, Toolkit.

EN | An updated version of an A2 type project called [ReduxCounterApp](https://github.com/4min-dev/-A2-Vite-React-TS-Redux-Redux-Saga). (clickable).

Changes:

Allocation of logic on counter operation and user subloading. A redux-thunk has been added to the project, the main logic for getting and loading users from the database is done by using this tool, while the counters continue to work thanks to redux-saga.

It was decided to put case variables into separate variables to simplify the development process and possible expansion of the project for a large development team. Now you don't have to go into each reduser and see what type of case should be called - everything happens by referring to specific actionTypes, which will tell you what types of cases it stores inside itself.

The logic of error handling has been extended, now every error is caught and displayed on the screen (to avoid the need to constantly look in the developer console to understand what kind of error occurred), global code destructuring has been done.

Added custom hooks, added adaptive layout, as well as added support for mobile devices under hover effects.

_______________________________________

RU | Обновленная версия проекта типа A2 с названием [ReduxCounterApp](https://github.com/4min-dev/-A2-Vite-React-TS-Redux-Redux-Saga). (кликабельно)

Изменения:

Распределение логики по работе счетчиков и подгрузке пользователей. В проект был добавлен redux-thunk, основная логика по получению и загрузке пользователей с базы данных происходит за счет использования данного инструмента, при этом счетчики продолжают работать благодаря redux-saga.

Было принято решение вынести переменные кейсов в отдельные переменные, дабы упростить процесс разработки и возможное расширение проекта под большую команду разработки. Теперь не придется заходить в каждый редюсер и смотреть, как именно тип кейса должен называться - все происходит путем обращения к определенным actionTypes, который сам подскажет, какие типы кейсов он внутри себя хранит.

Была расширена логика по обработке ошибок, теперь каждая ошибка отлавливается и отображается на экране (во избежания нужды постоянно заглядывать в консоль разработчика дабы понять, какая именно ошибка произошла), произведена глобальная деструктуризация кода.

Добавлены кастомные хуки, добавлен адаптив верстки, так же добавлена поддержка мобильных устройств под hover эффекты.

