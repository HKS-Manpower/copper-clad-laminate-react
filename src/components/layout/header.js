import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TwitterIcon from '@mui/icons-material/Twitter';

import DropDown from '~/components/header/dropdown';
import SearchBar from '~/components/header/searchbar';

const suggestions = [
    'Pcb',
    'FR-4',
    'CEM1',
    'FR-1',
    'Copper clad Laminate',
    'Grass Appox',
];

const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
];

const Header = () => {
    const handleSelect = (option) => {
        console.log('Selected option:', option);
    };
    return (
        <div className="max-w-full overflow-x-hidden">
            {/* red strip  */}
            <div className="flex w-full justify-between bg-[#E51E25] px-[5%] ">
                <div className="flex">
                    <div className=" border-s border-white/20 px-4 py-2">
                        <TwitterIcon
                            className="cursor-pointer"
                            style={{
                                fontSize: '20px',
                                color: '#FFF',
                            }}
                        />
                    </div>
                    <div className=" border-s border-white/20 px-4 py-2">
                        <FacebookIcon
                            className="cursor-pointer"
                            style={{
                                fontSize: '20px',
                                color: '#FFF',
                            }}
                        />
                    </div>
                    <div className=" border-s border-white/20 px-4 py-2">
                        <LinkedInIcon
                            className="cursor-pointer"
                            style={{
                                fontSize: '20px',
                                color: '#FFF',
                            }}
                        />
                    </div>
                    <div className=" border-x border-white/20 px-4 py-2">
                        <InstagramIcon
                            className="cursor-pointer"
                            style={{
                                fontSize: '20px',
                                color: '#FFF',
                            }}
                        />
                    </div>
                </div>

                <div className="flex">
                    <div className=" flex items-center justify-center gap-4 border-s border-white/20 px-4 py-2">
                        <LocalPhoneIcon
                            className="cursor-pointer"
                            style={{
                                fontSize: '20px',
                                color: '#fff',
                            }}
                        />
                        <p className="cursor-pointer text-[#FFF]">
                            +91 9898989898
                        </p>
                    </div>
                    <div className=" flex items-center justify-center gap-4 border-x border-white/20 px-4 py-2">
                        <EmailIcon
                            className="cursor-pointer"
                            style={{
                                fontSize: '20px',
                                color: '#fff',
                            }}
                        />
                        <p className="cursor-pointer text-[#FFF]">
                            thecoppercladlaminate@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            <div></div>

            {/* Menu  */}
            <div className="flex items-center justify-between border px-[5%] py-2">
                <div className="">
                    <img
                        width={150}
                        height={150}
                        alt="Logo"
                        src="/assets/images/CCL LOGO 1.png"
                    />
                </div>
                <div className="flex gap-16">
                    <div className="Navbar">Home</div>
                    {/* <div>Category</div> */}
                    <DropDown options={options} onSelect={handleSelect} />
                    <div className="Navbar">Manufactures</div>
                    <div className="Navbar">OEMs</div>
                    <div className="Navbar">About us</div>
                    <div className="Navbar">Contact</div>
                </div>

                <div className="flex w-auto gap-[5%]">
                    <SearchBar suggestions={suggestions} />
                </div>
            </div>
        </div>
    );
};

export default Header;
