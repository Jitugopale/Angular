const db = require('../db');

class Category {
    static getAll() {
        return db.execute('SELECT * FROM categories');
    }

    static getById(id) {
        return db.execute('SELECT * FROM categories WHERE id = ?', [id]);
    }

    static create(name) {
        return db.execute('INSERT INTO categories (name) VALUES (?)', [name]);
    }

    static update(id, name) {
        return db.execute('UPDATE categories SET name = ? WHERE id = ?', [name, id]);
    }

    static delete(id) {
        return db.execute('DELETE FROM categories WHERE id = ?', [id]);
    }
}

module.exports = Category;
