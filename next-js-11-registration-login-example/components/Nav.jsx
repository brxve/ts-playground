import { useState, useEffect } from 'react';

import { NavLink } from '.';
import { userService } from 'services';

export { Nav };

function Nav() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        userService.logout();
    }

    // only show nav when logged in
    if (!user) return null;
    
    return (
        <nav class="flex justify-center space-x-4">
            <a href="/" class="font-bold px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Home</a>
            <a href="/users" class="font-bold px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Users</a>
            <button onClick={() => logout()} class="font-bold px-3 py-2 text-red-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Logout</button>
        </nav>
    );
}