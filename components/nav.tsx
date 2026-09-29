import { AiFillDollarCircle } from 'react-icons/ai';
import Logo from '../src/assets/logo.png';

const Nav = ({ coin }: { coin: number})  => {
    return (
        <div >
            <nav className="flex  justify-between items-center p-4 bg-gray-800 text-white container mx-auto">
                <img src={Logo} alt="Logo" />

            <ul className="flex gap-4 items-center">
                <li>home</li>
                <li>about</li>
                <li>contact</li>
            </ul>
            <h2 className='font-bold text-3xl text-yellow-500 flex gap-4 items-center'><AiFillDollarCircle />{coin}</h2>
                </nav>
        </div>
    );
};

export default Nav;