import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { footerLinks } from "../utils/data";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";

const Footer = () => {
  return (
    <footer className='text-white mp-20'>
      <div className='overflow-x-hidden -mb-0.5'>
        <svg
          preserveAspectRatio='none'
          viewBox='0 0 1200 120'
          xmlns='http://www.w3.org/2000/svg'
          style={{
            fill: "hsl(270, 60%, 50%)",
            width: "125%",
            height: 112,
            transform: "rotate(180deg)",
          }}
        >
          <path d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z' />
        </svg>
      </div>

      <div className='bg-purple-600 '>
        <div className='container px-5 py-20 mx-auto '>
          <div className='w-full flex flex-wrap gap-10 justify-between -mb-10 -px-4'>
            {footerLinks.map(({ id, title, links }) => (
              <div className='w-auto px-4 ' key={id + title}>
                <h2 className='font-large text-white tracking-widest text-lg mb-3'>
                  {title}
                </h2>

                <div className='mb-10 flex flex-col gap-3 '>
                  {links.map((link, index) => (
                    <Link
                      key={link + index}
                      to='/'
                      className='text-gray-300 text-sm hover:text-white '
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        

        <div className='bg-purple-900'>
          <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
            <p className='text-gray-300 text-sm text-center sm:text-left'>
              &copy; 2023 JobFinder —
              <a
                href='https://www.linkedin.com/in/thatonekrish/'
                className='text-[#1199e7] ml-1'
                target='_blank'
                rel='noopener noreferrer'
              >
                @ThatOneKrish
              </a>
            </p>

            <span className='sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-300 text-sm'>
              Designed by ThatOneKrish
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
