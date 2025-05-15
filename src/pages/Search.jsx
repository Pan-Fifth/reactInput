import React, { useState } from 'react';

const mockUsers = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
  { id: 4, name: 'Bob Brown' }
];

function LocalUserSearch() {
  const [query, setQuery] = useState('');

  const filteredUsers = mockUsers.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>ค้นหาชื่อผู้ใช้</h2>
      <input
        type="text"
        placeholder="พิมพ์เพื่อค้นหา..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
        {filteredUsers.length === 0 && <li>ไม่พบข้อมูล</li>}
      </ul>
    </div>
  );
}

export default LocalUserSearch;