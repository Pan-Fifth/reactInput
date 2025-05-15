import { useState } from 'react';
import Navigation from '../components/Navigation';

const Toggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // ตัวอย่างข้อมูลจำลอง
    const data = [
        { id: 1, name: "Alice", role: "Admin", status: "Active" },
        { id: 2, name: "Bob", role: "User", status: "Inactive" },
        { id: 3, name: "Charlie", role: "Moderator", status: "Active" },
        { id: 4, name: "Daisy", role: "User", status: "Active" },
    ];

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div>
            <Navigation />
            <div>
            <label class="switch">
                <input type="checkbox" onChange={toggleTheme}/>
                <span class="slider round"></span>
            </label>
            </div>
            <div
            style={{
                backgroundColor: isDarkMode ? "black" : "pink",
                color: isDarkMode ? "white" : "black",
                minHeight: "100vh",
                padding: "20px",
            }}
        >
            
            <div>
                <h1>Welcome CodeCamp20</h1>
                <p>Simple example of toggling themes using a switch.</p>
            </div>
            <div>
                <h2>User Information</h2>
                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        marginTop: "20px",
                    }}
                >
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid", padding: "8px" }}>
                                ID
                            </th>
                            <th style={{ border: "1px solid", padding: "8px" }}>
                                Name
                            </th>
                            <th style={{ border: "1px solid", padding: "8px" }}>
                                Role
                            </th>
                            <th style={{ border: "1px solid", padding: "8px" }}>
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user) => (
                            <tr key={user.id}>
                                <td
                                    style={{
                                        border: "1px solid",
                                        padding: "8px",
                                    }}
                                >
                                    {user.id}
                                </td>
                                <td
                                    style={{
                                        border: "1px solid",
                                        padding: "8px",
                                    }}
                                >
                                    {user.name}
                                </td>
                                <td
                                    style={{
                                        border: "1px solid",
                                        padding: "8px",
                                    }}
                                >
                                    {user.role}
                                </td>
                                <td
                                    style={{
                                        border: "1px solid",
                                        padding: "8px",
                                        color:
                                            user.status === "Active"
                                                ? "green"
                                                : "red",
                                    }}
                                >
                                    {user.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}
export default Toggle