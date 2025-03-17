import React from "react";
import "./App.css";

class UserList extends React.Component {
    render() {
        return (
            <div className="flex flex-wrap gap-6 justify-center p-4">
                {this.props.users.length > 0 ? (
                    this.props.users.map((user) => (
                        <div 
                            key={user.id} 
                            className="bg-white shadow-lg rounded-xl p-6 w-72 text-center border border-gray-300"
                        >
                            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                            <hr className="my-2 border-gray-300"/>
                            <p className="text-gray-600"><strong>ID:</strong> {user.id}</p>
                            <p className="text-gray-500"><strong>Location:</strong> {user.location}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600">Loading users...</p>
                )}
            </div>
        );
    }
}

export default UserList;
