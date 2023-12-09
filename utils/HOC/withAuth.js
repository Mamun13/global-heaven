import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {isLoggedIn} from "../auth";

const withAuth = (Component) => {
    return (props) => {
        const router = useRouter();

        const isAuthenticated = isLoggedIn();

        useEffect(() => {
            if (!isAuthenticated) {
                location.href = '/auth/login';
            }
        }, []);

        return isAuthenticated ? <Component {...props} /> : null;
    };
};

export default withAuth;