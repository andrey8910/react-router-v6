import {Link, useMatch} from 'react-router-dom';

export const CustomLink = ({children, to, ...props}) => {

    const math = useMatch({
        path: to,
        end: to.length === 1,
    })
    return (
        <Link
            to={to}
            style={{
                color: math ? 'red' : 'white',
                fontWeight: 600,
                textDecoration: 'none',
            }}
            {...props}
        >
            {children}
        </Link>
    )
}
