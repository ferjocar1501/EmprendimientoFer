const express = require('express');
const bcrypt = require('bcryptjs');
const pool = require('../db');

const router = express.Router();

// Ruta para el registro de usuario
router.post('/register', async (req, res) => {
  try { 
    const { username, password, fullname } = req.body;
    console.log(username, password, fullname)
    const nuevoUsuario = {
      correo: username,
      contraseña: password,
      nombre: fullname
    };
    const sql = 'INSERT INTO base SET ?';

pool.query(sql, nuevoUsuario, (err, result) => {
  if (err) {
    console.error('Error al insertar datos: ', err);
    return res.status(404).json({msg:"Error en la consulta"})
  } else {
    console.log('Nuevo usuario insertado con éxito.');
    return res.status(200).json({msg:"Registro Exitoso"})
  }
});
return res.status(200).json({msg:"Registro Exitoso",status: 200})

    /*const [existingUser] = await pool.query('SELECT * FROM base WHERE correo=? and contraseña=? and nombre=?')*/
  } catch(error){
    return res.status(404).json({msg:"Error en la consulta"})
  }
  /*const [existingUser] = await pool.query('SELECT * FROM base')
  console.log(existingUser)
  return res.status(200).json({msg:"bien"})
  try {
    const { correo, contraseña } = req.body;

    // Verificar si el usuario ya existe en la base de datos
    const [existingUser] = await pool.query('SELECT * FROM base WHERE correo = ?', [correo]);
    if (existingUser.length > 0) {
      req.flash('error', 'El usuario ya existe. Intenta con otro.');
      return res.redirect('/');
    }

    // Hashear la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Insertar el nuevo usuario en la base de datos
    await pool.query('INSERT INTO base (correo, contraseña) VALUES (?, ?)', [correo, hashedPassword]);

    req.flash('success', 'Registro exitoso. Ahora puedes iniciar sesión.');
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor.');
  }*/
});

// Ruta para el inicio de sesión
router.post('/login', async (req, res) => {
  try { 
    const { username, password} = req.body;
    console.log(username, password)
    const [existingUser] = await pool.query('SELECT * FROM base WHERE correo=? and contraseña=?',[username,password])
    console.log(existingUser)

  return res.status(200).json({msg:"LogIn exitoso",status: 200, data: existingUser})
  } catch(error){
    return res.status(404).json({msg:"Error en la consulta"})
  }
});

// Ruta para cerrar sesión
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

module.exports = router;
