docker run -p 3306:3306 --name=mysql -e MYSQL_ROOT_PASSWORD=root  -d mysql/mysql-server:5.7

# docker exec -it mysql bash
# mysql -uroot -p
# create database retail
# CREATE USER 'root'@'%' IDENTIFIED BY 'root';
# GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
# MYSQL V8: ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';