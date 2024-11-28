const db = require('../models/db');

const getUsers = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 4;
  const offset = (page - 1) * limit;

  const query = `
    SELECT *, (SELECT COUNT(*) FROM users) as total_count 
    FROM users LEFT JOIN addresses ON addresses.user_id = users.id
    LIMIT ? OFFSET ?
  `;

  db.all(query, [limit, offset], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    
    const totalCount = rows[0]?.total_count || 0;
    const totalPages = Math.ceil(totalCount / limit);

    res.json({
      users: rows.map(({ total_count, ...user }) => user),
      pagination: {
        total: totalCount,
        pages: totalPages,
        current: page
      }
    });
  });
};

const getUser = (req, res) => {
  const userId = req.params.userId;

  const query = `SELECT * FROM users WHERE id = ?`;
  
  db.get(query, [userId], (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ user });
  });
};

const getUserPosts = (req, res) => {
  const userId = req.params.userId;
  
  db.all('SELECT * FROM posts WHERE user_id = ?', [userId], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
};

const deletePost = (req, res) => {
  const postId = req.params.postId;
  
  db.run('DELETE FROM posts WHERE id = ?', [postId], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Post deleted successfully' });
  });
};

module.exports = {
  getUsers,
  getUser,
  getUserPosts,
  deletePost
};