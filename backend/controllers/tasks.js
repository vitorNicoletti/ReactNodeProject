const db = require("../db");


const getTaskRequest = (req,res) => {
    const id = req.params.id;
        db.query("SELECT * FROM tarefas WHERE id = ?", [id], (err, data) => {
            if (err) return res.status(500).json(err);
            else res.status(200).json(data);;
        }
    );
};
const getTask = (id) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM tarefas WHERE id = ?", [id], (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};

const allTasks = (req, res) => {
    db.query("SELECT * FROM tarefas", (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};

const createTask = (req, res) => {
    const { completo, titulo, descricao, feitor } = req.body;

    if (
        !titulo || titulo.trim() === '' ||
        !descricao || descricao.trim() === '' ||
        !feitor || feitor.trim() === ''
    ) {
        return res.status(401).json({
            message: "ERROR: informe todos os campos obrigatórios (título, descrição e feitor)"
        });
    }
    

    const sql = `
        INSERT INTO tarefas (completa, titulo, descricao, feitor)
        VALUES (COALESCE(?, 0), ?, ?, ?)
    `;

    db.query(sql, [completo, titulo, descricao, feitor], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};

const destroyTask = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        return res.status(400).json("Informe um ID");
    }

    const a = await getTask(id);
    if (a.length > 0) {
        db.query("DELETE FROM tarefas WHERE id = ?", [id], (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json(data);
        });
    } else {
        return res.status(400).json({ message: "Id não existe" });
    }
};

const updateTask = (req, res) => {
    const id = req.params.id;
    const { completa, titulo, descricao, feitor } = req.body;

    if (!id || (completa == undefined && !titulo && !descricao && !feitor)) {
        return res.status(400).json("Informe um ID e pelo menos um campo para atualizar");
    }

    const sql = `
        UPDATE tarefas
        SET
            completa = COALESCE(?, completa),
            titulo = COALESCE(?, titulo),
            descricao = COALESCE(?, descricao),
            feitor = COALESCE(?, feitor)
        WHERE id = ?
    `;

    db.query(sql, [completa, titulo, descricao, feitor, id], (err, result) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json({ message: "Task atualizada com sucesso!" });
    });
};

module.exports = { getTaskRequest, allTasks, createTask, destroyTask, updateTask };
