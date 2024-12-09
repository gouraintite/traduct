import Logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer id='footer' className="w-full max-w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-tert mb-0 absolute">
            <div className="text-center"> 
                <div>
                    <a className="flex-none text-xl font-semibold text-white" href="#" aria-label="Brand">
                        <img src={Logo} alt="" className='mx-auto w-32 rounded' />
                    </a>
                </div>

                <div className="mt-3">
                    <p className="text-white">Ensemble promouvons <span className="font-semibold text-secondary hover:text-secondary">nos langues et cutures    .</span></p>
                    <p className="text-white">© A-frilang. 2024. Tous droits reservés.</p>
                </div>

                <div className="mt-3 space-x-2">
                    <a className="inline-flex justify-center items-center w-10 h-10 text-center  text-secondary hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition" href="https://web.facebook.com/profile.php?id=61561607185556">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z"></path>
                    </svg>
                    </a>
                    <a className="inline-flex justify-center items-center w-10 h-10 text-center text-secondary hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition" href="https://www.linkedin.com/company/a-frilang/?viewAsMember=true">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,300,150">
                        <g fill="#e4a34a"><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g>
                     </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer