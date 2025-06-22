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
              <div className="w-8 h-8 bg-[#1877f2] rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-[#ff3d00] rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">@</span>
              </div>
              <div className="w-8 h-8 bg-[#1976d2] rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">in</span>
              </div>
            </div>
          </div>
          <div className="text-[#dae5ff] text-sm mb-4">
            <p>Web Development | App Development | UI/UX Design | Digital Marketing</p>
            <p>Based in Bangalore | 📧 contact@websort.com | 📱 +91 XXXXXXXXXX</p>
          </div>
          <div className="text-center pt-8 border-t border-[#1c395f]">
            <p className="text-[#dae5ff] text-sm">© 2025 WebSort. All rights reserved.</p>
          </div>
        </div>
      </footer>
        </>
    )
}

export default Footer;