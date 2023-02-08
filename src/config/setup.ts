// Little fix for Jest, see https://stackoverflow.com/a/54175600
import mysql2 from '../../node_modules/mysql2/node_modules/iconv-lite'
// import mysql2 from '../../ mysql2/node_modules/iconv-lite'

mysql2.encodingExists('foo')
