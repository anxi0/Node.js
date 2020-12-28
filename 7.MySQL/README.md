1. When you UP server

- Up DB server first `winpty mysql -u root -p`
- then `npm start`

2. When create DB

- `` CREATE SCHEMA `nodejs` DEFAULT CHARACTER SET utf8  ``
- `use nodejs`
- And So on, tables...

3. When create tables

example)

```
mysql> CREATE TABLE nodejs.users(
  -> id INT NOT NULL AUTO_INCREMENT,
  -> name VARCHAR(20) NOT NULL,
  -> age INT UNSIGNED NOT NULL,
  -> married TINYINT NOT NULL,
  -> comment TEXT NULL,
  -> created_at DATETIME NOT NULL DEFAULT now(),
  -> PRIMARY KEY(id),
  -> UNIQUE INDEX name_UNIQUE (name ASC))
  -> COMMENT = '사용자 정보' //unnecessary
  -> DEFAULT CHARACTER SET = utf8 //necessary
  -> ENGINE = InnoDB; //MyISAM or this
```

## Variables

INT  
FLOAT  
DOUBLE  
VARCHAR(n) : variable character  
CHAR(n) : just right character  
TEXT : usually use in long sentence  
TINYINT : -128 to 127 can also applicate as Boolean  
DATETIME : DATE + TIME

## Options

NULL/ NOT NULL : blank allowance  
UNSIGNED : number starts with 0  
ZEROFILL : example) INT(n) ZEROFILL  
AUTO_INCREMENT : use as id  
DEFAULT now() : same as DEFAULT CURRENT_TIMESTAMP  
PRIMARY KEY(id) : Unique key  
UNIQUE INDEX : set when if variable should be unique. You can make it faster to search

4. With tables

- `CREAT TABLE asdf` create tables
- `DESC users;` cat tables
- `DROP TABLE users;` to delete

5. index modifying

- `INSERT INTO nodejs.users (a,b,c,d) VALUES (a1,b1,c1,d1)` create data into table
- `SELECT a,b FROM nodejs.users WHERE ORDER BY a ASC LIMIT 1 OFFSET 1` read a,b props from users table in ndoejs schema which is ordered by ascended a prop and show one row after the first one.
- `UPDATE nodejs.users SET comment = 'different' WHERE id =2;` update change comment in users in nodejs which id is 2.
- `DELETE DEOM nodejs.users WHERE id =1` delete id 1 row in users table in nodejs schema
