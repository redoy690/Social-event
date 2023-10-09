
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-screen flex justify-center items-start mt-[20%]'>
            <div>
                <h2 className='font-bold'>No Data Found</h2>
                <Link to={'/'}><button className='btn bg-red-400 mt-2'>Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;