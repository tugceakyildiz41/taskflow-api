let tasks = []
let nextId = 1

// Tüm görevleri listele
function getAllTasks(req, res) {
  res.json(tasks)
}

// Tek bir görevi getir
function getTaskById(req, res) {
  const id = Number(req.params.id)
  const task = tasks.find((t) => t.id === id)

  if (!task) {
    return res.status(404).json({ message: 'Görev bulunamadı' })
  }
  res.json(task)
}

// Yeni görev ekle
function createTask(req, res) {
  const { title, description, status, priority, assignee } = req.body

  if (!title) {
    return res.status(400).json({ message: 'title alanı zorunludur' })
  }

  const task = {
    id: nextId++,
    title: title,
    description: description || '',
    status: status || 'pending',
    priority: priority || 'medium',
    assignee: assignee || '',
    createdAt: new Date().toISOString(),
  }

  tasks.push(task)
  res.status(201).json(task)
}

// Görevi güncelle
function updateTask(req, res) {
  const id = Number(req.params.id)
  const task = tasks.find((t) => t.id === id)

  if (!task) {
    return res.status(404).json({ message: 'Görev bulunamadı' })
  }

  const { title, description, status, priority, assignee } = req.body

  if (title !== undefined) task.title = title
  if (description !== undefined) task.description = description
  if (status !== undefined) task.status = status
  if (priority !== undefined) task.priority = priority
  if (assignee !== undefined) task.assignee = assignee

  res.json(task)
}

// Görevi sil
function deleteTask(req, res) {
  const id = Number(req.params.id)
  const index = tasks.findIndex((t) => t.id === id)

  if (index === -1) {
    return res.status(404).json({ message: 'Görev bulunamadı' })
  }

  tasks.splice(index, 1)
  res.json({ message: 'Görev silindi' })
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
}