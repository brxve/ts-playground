import { useState, useEffect } from 'react';

import Image from 'next/image';

import { Link, Spinner } from 'components';
//import { Layout } from 'components/users';
import { userService } from 'services';

export default Index;

function Index() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getAll().then(x => setUsers(x));
    }, []);

    function deleteUser(id) {
        setUsers(users.map(x => {
            if (x.id === id) { x.isDeleting = true; }
            return x;
        }));
        userService.delete(id).then(() => {
            setUsers(users => users.filter(x => x.id !== id));
        });
    }

    return (
        //<Layout>
            

            <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
            

    <div className="flex flex-col justify-center h-full">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Users</h2>
                    <Link href="/users/add" className="btn btn-sm btn-success mb-2">Add User</Link>
            </header>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">E-mail</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Username</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Actions</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {users && users.map(user =>
                                <tr key={user.id}>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><Image className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" /></div>
                                            <div className="font-medium text-gray-800">{user.firstName} {user.lastName}</div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{user.email}</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-gray-500">@{user.username}</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <Link href={`/users/edit/${user.id}`} className="text-center mr-1">Edit</Link>
                                        <button onClick={() => deleteUser(user.id)} className="text-center text-red-700" disabled={user.isDeleting}>
                                            {user.isDeleting 
                                                ? <span className="spinner-border spinner-border-sm"></span>
                                                : <span>Delete</span>
                                            }
                                        </button>
                                    </td>
                                </tr>
                            )}
                            {!users &&
                                <tr>
                                    <td colSpan="4">
                                        <Spinner />
                                    </td>
                                </tr>
                            }
                            {users && !users.length &&
                                <tr>
                                    <td colSpan="4" className="text-center">
                                        <div className="p-2">No Users To Display</div>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>



        //</Layout>
    );
}

