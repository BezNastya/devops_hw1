# devops_hw1_docker
#### Для того, щоб збілдити імедж з Dockerfile виконайте команду:
`docker build -t anastasiiabezruka/spammer-nodejs-app . `

#### Якщо виконати команду `docker images` можна побачити, що новий імедж з'явився у списку

#### Для того, щоб запустити імедж на 80 порті потрібно виконати команду:
`docker run -p 80:8080 --name spammer -d anastasiiabezruka/spammer-nodejs-app`

#### Для того, щоб запустити його з обмеженням cpu та memory потрібно виконати наприклад:
`docker run -p 80:8080 --name spammer-restrict-cpu-memory -d -m 512m --cpus="2.0" anastasiiabezruka/spammer-nodejs-app`

При таких параметрах, контейнер зможе використовувати максимум 512 мб та виконуватиметься максимум на 2 ядрах

#### Щоб запушити готовий імедж в репизоторій використано команду:
`docker push anastasiiabezruka/spammer-nodejs-app`

##### Додаткові команди, що використовувались:
Переглянути контейнер (усі), оскільки без -a показуються, тільки ті, що запущені, а перший запуск зупинився одразу, 
оскільки не було mysql:
`docker ps -a` 

Видалити контейнер:
`docker rm <container id>`

Зупинити контейнер:
`docker stop <container id>`




