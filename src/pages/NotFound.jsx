import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='hero'>
			<div className='text-center hero-content'>
				<div className='mx-w-lg'>
					<h1 className='text-8xl mb-8 font-bold '>Oops!</h1>
					<p className='text-5xl mb-8'>404 - Page cannot be found!</p>
					<Link to='/' className='btn btn-primary btn-lg'>
						<FaHome className='mr-2' />
						Back To Home
					</Link>
				</div>
			</div>
		</div>
	);
};
export default NotFound;
