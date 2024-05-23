const express = require('express');
const UserActivity = require('../models/userActivityModel');
const Contact = require('../models/contactModel');


const router = express.Router();

// Ruta para incrementar el contador de visitas
router.put('/increment-visit/:page_type', async (req, res) => {
  const { page_type } = req.params;
  try {
    await UserActivity.updateOne({ page_type }, { $inc: { visit_count: 1 } }, { upsert: true });
    res.json({ message: 'Contador de visitas incrementado exitosamente' });
  } catch (err) {
    console.error('Error al incrementar el contador de visitas:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.post('/contact', async (req, res) => {
    const { email, content } = req.body;
    try {
      const contact = new Contact({email, content });
      await contact.save();
      res.json({ message: 'Mensaje de contacto guardado exitosamente' });
    } catch (err) {
      console.error('Error al guardar el mensaje de contacto:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  });

module.exports = router;
