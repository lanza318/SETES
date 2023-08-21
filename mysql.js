const mysql = require ('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'yeison', 
  password: 'root',
  database: 'proyectosetes'  
})

connection.connect((err)=>{
    if(err) throw err
    console.log('conexion exitosa')
})

connection.end()
