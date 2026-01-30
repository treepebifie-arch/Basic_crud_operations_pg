import * as db from '../config/db.js';

export const userService = {
    // create user
    async create(userData) {
        const { fullname, email, dob } = userData;
        const sql = 'INSERT INTO users (fullname, email, dob) VALUES ($1, $2, $3) RETURNING *;';
        const { rows } = await db.query(sql, [fullname, email, dob]);
        return rows[0];
    },

    // get all users
    async getAll() {
        const sql = 'SELECT * FROM users ORDER BY fullname DESC;';
        const { rows } = await db.query(sql);
        return rows;
    },

    // update user record
    async update(id, updateData) {
        const { fullname, email, dob } = updateData;
        const sql = 'UPDATE users SET fullname = $1, email = $2, dob = $3 WHERE id = $4 RETURNING *;';
        const { rows } = await db.query(sql, [fullname, email, dob, id]);
        return rows[0];
    },

    // // Update Partial user record
    // async updatePartial(id, updateData) {
        

    // delete user
    async delete(id) {
        const sql = 'DELETE FROM users WHERE id = $1 RETURNING *;';
        const { rows } = await db.query(sql, [id]);
        return rows[0];
    }
}