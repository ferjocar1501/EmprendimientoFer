const express = require('express');
const bcrypt = require('bcryptjs');
const pool = require('../db');

const router = express.Router();

// Ruta para el registro de usuario
router.post('/register', async (req, res) => {
  try {
    const { username, password, fullname, type } = req.body;
    console.log(username, password, fullname, type)
    // Consultar si el correo ya existe en la base de datos
    const [existingUser] = await pool.query('SELECT * FROM base WHERE correo = ?', [username]);

    // Si existe un usuario con el mismo correo, devolver una respuesta de error
    if (existingUser.length > 0) {
      return res.status(400).json({ msg: 'El correo ya está registrado. Intente con otro correo.' });
    }
    /***************************************************************************/
    const nuevoUsuario = {
      correo: username,
      contraseña: password,
      nombre: fullname,
      tipo: type
    };
    const sql = 'INSERT INTO base SET ?';

    pool.query(sql, nuevoUsuario, (err, result) => {
      if (err) {
        console.error('Error al insertar datos: ', err);
        return res.status(404).json({ msg: "Error en la consulta" })
      } else {
        console.log('Nuevo usuario insertado con éxito.');
        return res.status(200).json({ msg: "Registro Exitoso" })
      }
    });
    return res.status(200).json({ msg: "Registro Exitoso", status: 200 })

    /*const [existingUser] = await pool.query('SELECT * FROM base WHERE correo=? and contraseña=? and nombre=?')*/
  } catch (error) {
    return res.status(404).json({ msg: "Error en la consulta" })
  }
});

// Ruta para el inicio de sesión
router.post('/login', async (req, res) => {
  try {
    const { username, password, type } = req.body;
    console.log(username, password, type)
    const [existingUser] = await pool.query('SELECT * FROM base WHERE correo=? and contraseña=? and tipo=?', [username, password, type])
    console.log(existingUser)

    return res.status(200).json({ msg: "LogIn exitoso", status: 200, data: existingUser })
  } catch (error) {
    return res.status(404).json({ msg: "Error en la consulta" })
  }
});

// Ruta para cerrar sesión
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

module.exports = router;
