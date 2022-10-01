FROM mysql
ENV MYSQL_ROOT_PASSWORD "root"
ENV MYSQL_DATABASE "tutor-database"
COPY tutordb.sql /docker-entrypoint-initdb.d
COPY my.cnf /etc/mysql/my.cnf
EXPOSE 3306 