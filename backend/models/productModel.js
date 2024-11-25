const db = require('../db');

class Product {
    static getAllPaginated(offset, limit) {
        return db.execute(`
            SELECT 
                p.id AS ProductId, 
                p.name AS ProductName, 
                c.id AS CategoryId, 
                c.name AS CategoryName 
            FROM products p
            JOIN categories c ON p.categoryId = c.id
            LIMIT ?, ?`, [offset, limit]);
    }

    static create(name, categoryId) {
        return db.execute('INSERT INTO products (name, categoryId) VALUES (?, ?)', [name, categoryId]);
    }

    static update(id, name, categoryId) {
        return db.execute('UPDATE products SET name = ?, categoryId = ? WHERE id = ?', [name, categoryId, id]);
    }

    static delete(id) {
        return db.execute('DELETE FROM products WHERE id = ?', [id]);
    }
}

module.exports = Product;
