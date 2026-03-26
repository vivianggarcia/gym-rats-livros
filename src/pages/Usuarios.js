import React, { useState, useEffect } from 'react';

const Usuarios = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [editingUserId, setEditingUserId] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        // Fetch users from an API or database
        // Example: const response = await fetch('/api/users');
        // setUsers(await response.json());
    };

    const handleAddUser = async () => {
        // Code to add a user
        const newUser = { id: Date.now(), name }; // Temporary local user object
        setUsers([...users, newUser]);
        setName('');
        // Also call API to save the new user
    };

    const handleEditUser = (user) => {
        setName(user.name);
        setEditingUserId(user.id);
    };

    const handleUpdateUser = async () => {
        // Code to update user
        setUsers(users.map(user => user.id === editingUserId ? { ...user, name } : user));
        setName('');
        setEditingUserId(null);
        // Also call API to save the updated user
    };

    const handleDeleteUser = async (userId) => {
        setUsers(users.filter(user => user.id !== userId));
        // Also call API to delete the user
    };

    return (
        <div>
            <h1>Gerenciar Usuários</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome do Usuário"
            />
            <button onClick={editingUserId ? handleUpdateUser : handleAddUser}>
                {editingUserId ? 'Atualizar Usuário' : 'Adicionar Usuário'}
            </button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} 
                        <button onClick={() => handleEditUser(user)}>Editar</button>
                        <button onClick={() => handleDeleteUser(user.id)}>Deletar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Usuarios;