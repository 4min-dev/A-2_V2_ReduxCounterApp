<h1 align="center">A-2_V2_ReduxCounterApp</h1>

[V1](https://github.com/4min-dev/A-2_V1_ReduxCounterApp) | [V2](https://github.com/4min-dev/A-2_V2_ReduxCounterApp) | [V3](https://github.com/4min-dev/A-2_V3_ReduxCounterApp) | [V4](https://github.com/4min-dev/A-2_V4_ReduxCounterApp) | [V5](https://github.com/4min-dev/A-2_V5_ReduxCounterApp)
_______________________________________________________________

EN | This project is a type A2 project.

reactCounterApp is a large A2 type work that includes 6 versions of projects.
Each version includes improvements to the project, the final working version is V6.

The following stack is present in this version of the project:
CSS,
HTML,
JS,
TS,
React,
Redux,
Redux-saga.

Links to everything in the header.
_______________________________________________________________

RU | Данный проект является типом А2.

reactCounterApp - это большая работа типа A2, которая включает в себя 6 версий проектов.
Каждая версия включает в себя улучшения проекта, финальной рабочей версией является V6.

В этой версии проекта присутствует следующий стек:
CSS,
HTML,
JS,
TS,
React,
Redux,
Redux-saga.

Ссылки на все в заголовке.

<h1 align="center">Changes | Изменения</h1>

EN | Added hooks for easier typing, eliminating the need to create specific interfaces and types for each state or dispatcher,

Added redux-thunk. In the previous version, all logic with data retrieval/modification was done exclusively through redux-saga.
In this version of the project, the logic for receiving asynchronous data from servers was moved to redux-thunk, while redux-saga remained as a logic distributor for asynchronous counter actions. Redux-thunk is stored in the action-creator folder

The action cases were moved to specific variables stored in the action-types folder. Thanks to this solution, the logic for handling switch-case constructs was simplified.
Now you can pass a variable to a dispatch without worrying about whether you have spelled the case name correctly.
In addition, the logic of action typing has been simplified. Now actions are independently typed depending on the case.

_______________________________________________________________

RU | Добавлены хуки для упрощения типизации, избавляющие от необходимости создавать отдельные интерфейсы и типы для каждого состояния или диспетчера,

Добавлен redux-thunk. В предыдущей версии вся логика с получением/изменением данных осуществлялась исключительно через redux-saga.
В этой версии проекта логика получения асинхронных данных с серверов была перенесена в redux-thunk, а redux-saga остался в качестве распределителя логики для асинхронных действий счетчика. Redux-thunk хранится в папке action-creator.

Кейсы действий были перенесены в определенные переменные, хранящиеся в папке action-types. Благодаря этому решению упростилась логика работы с конструкциями switch-case.
Теперь вы можете передавать переменную в диспетчер, не заботясь о том, правильно ли вы написали имя case.
Кроме того, была упрощена логика типизации действий. Теперь действия независимо типизируются в зависимости от случая.

<h1 align="center">The project is in the master branch | Проект находится в ветке master</h1>
