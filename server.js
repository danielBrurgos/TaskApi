const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;
const FILE_PATH = './database.json';

app.use(cors());
app.use(express.json());

// Función para leer datos del archivo JSON
const readData = () => {
    if (!fs.existsSync(FILE_PATH)) {
        fs.writeFileSync(FILE_PATH, JSON.stringify([]));
        return [];
    }
    const data = fs.readFileSync(FILE_PATH);
    return JSON.parse(data);
};

// Función para escribir datos en el archivo JSON
const writeData = (data) => {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
};

// GET - Obtener tareas
app.get('/tasks', (req, res) => {
    res.json(readData());
});

// POST - Crear tarea con validación
app.post('/tasks', (req, res) => {
    const { title } = req.body;
    if (!title || title.trim().length < 3) {
        return res.status(400).json({ error: "Título demasiado corto" });
    }
    const tasks = readData();
    const newTask = {
        id: Date.now(), // ID único basado en timestamp
        title: title.trim(),
        completed: false,
        createdAt: new Date().toLocaleString()
    };
    tasks.push(newTask);
    writeData(tasks);
    res.status(201).json(newTask);
});

// PUT - Actualizar (Completado o Título)
app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let tasks = readData();
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        tasks[index] = { ...tasks[index], ...req.body };
        writeData(tasks);
        res.json(tasks[index]);
    } else {
        res.status(404).json({ error: "No encontrado" });
    }
});

// DELETE - Borrar
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let tasks = readData();
    const filtered = tasks.filter(t => t.id !== id);
    writeData(filtered);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`🚀 API Pro en http://localhost:${PORT}/tasks`);
});