import whitelogo from '../assets/whitelogo.png';


const Footer = () => {
    return (
        <>
        {/* Footer */}
      <footer className="bg-[#0b0014] border-t border-[#1c395f] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <img src={whitelogo} alt="WebSort Logo" className="w-28 h-8" />
            </div>
            <div className="flex space-x-4">
              <div>
                <span className='text-white'><i className="fa-brands fa-square-facebook"></i></span>
              </div>
              <div >
                <span className="text-white"><i class="fa-brands fa-square-instagram"></i></span>
              </div>
              <div>
                <span className="text-white"><i class="fa-brands fa-linkedin"></i></span>
              </div>
            </div>
          </div>
          <div className="text-[#dae5ff] text-sm mb-4">
            <p>Web Development | App Development | UI/UX Design | Digital Marketing</p>
            <p>Based in Bangalore | contact@websort.com | +91 XXXXXXXXXX</p>
          </div>
          <div className="text-center pt-8 border-t border-[#1c395f]">
            <p className="text-[#dae5ff] text-sm">2025 WebSort. All rights reserved.</p>
          </div>
        </div>
      </footer>
        </>
    )
}

export default Footer;