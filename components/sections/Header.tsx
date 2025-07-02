'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

// Custom NavLink component
const NavLink = ({ href, children, className = "", onClick }: { 
  href: string; 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`${className} ${isActive ? 'text-[#007DD0] border-b-2 border-[#007DD0] pb-1' : 'text-[#626262] hover:text-blue-600'} font-medium transition-colors`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('');

  const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'BDT', symbol: '৳', name: 'Bangladeshi Taka' },
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '/images/4715b6e495bb57fa634de4629ea3eb801d82ce6c.png' },
    { code: 'es', name: 'Español', flag: '/images/4715b6e495bb57fa634de4629ea3eb801d82ce6c.png' },
    { code: 'fr', name: 'Français', flag: '/images/4715b6e495bb57fa634de4629ea3eb801d82ce6c.png' },
    { code: 'de', name: 'Deutsch', flag: '/images/4715b6e495bb57fa634de4629ea3eb801d82ce6c.png' },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <header className="">
      <div className="w-full mx-auto items-center bg-[#E9F6FF] rounded-t-4xl h-[76px] relative ">
        {/* Main header */}
        <div className="flex items-center justify-between py-4 w-[95%] sm:w-[90%] lg:w-[86.26%] mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              {/* ...existing SVG... */}
            
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex text-[16px] space-x-8 items-center">
            <NavLink href="/">
              Home
            </NavLink>
            <NavLink href="/hotels">
              Hotels
            </NavLink>
            <NavLink href="/house">
              House
            </NavLink>
            <NavLink href="/about">
              About Us
            </NavLink>
            <NavLink href="/contact">
              Contact Us
            </NavLink>
          </nav>

          {/* Desktop Right menu */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Currency selector with dropdown */}
            <div className="hidden lg:flex relative">
              <button 
                className="flex items-center space-x-3 text-sm border border-gray-200 px-4 py-2 hover:bg-gray-50 cursor-pointer rounded-[20px] transition-colors"
                onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                  <path d="M21.5 11C21.5 16.5228 17.0228 21 11.5 21C5.97715 21 1.5 16.5228 1.5 11C1.5 5.47715 5.97715 1 11.5 1C17.0228 1 21.5 5.47715 21.5 11Z" stroke="#535353" strokeWidth="1.5" />
                  <path d="M14.5 13.4923C14.0216 14.3957 13.1512 15 12.1568 15C10.647 15 9.42308 13.6071 9.42308 11.8889V10.1111C9.42308 8.39289 10.647 7 12.1568 7C13.1512 7 14.0216 7.60426 14.5 8.50774M8.5 11H12.4231" stroke="#535353" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-[#535353] font-medium">{selectedCurrency}</span>
                <ChevronDown className={`w-4 h-4 text-[#007DD0] transition-transform ${isCurrencyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Currency Dropdown Menu */}
              {isCurrencyDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    {currencies.map((currency) => (
                      <button
                        key={currency.code}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center justify-between ${
                          selectedCurrency === currency.code ? 'bg-blue-50 text-[#007DD0]' : 'text-gray-700'
                        }`}
                        onClick={() => {
                          setSelectedCurrency(currency.code);
                          setIsCurrencyDropdownOpen(false);
                        }}
                      >
                        <span>{currency.symbol} {currency.name}</span>
                        <span className="text-xs text-gray-500">{currency.code}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Language selector with dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-sm border border-gray-200 rounded-full px-3 py-2 hover:bg-gray-50 cursor-pointer space-x-2 transition-colors"
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              >
                <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center">
                  <Image
                    src={selectedLanguage.flag}
                    alt={`${selectedLanguage.name} Flag`}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                </div>
                <ChevronDown className={`w-4 h-4 text-[#007DD0] transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Language Dropdown Menu */}
              {isLanguageDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center space-x-3 ${
                          selectedLanguage.code === language.code ? 'bg-blue-50 text-[#007DD0]' : 'text-gray-700'
                        }`}
                        onClick={() => {
                          setSelectedLanguage(language);
                          setIsLanguageDropdownOpen(false);
                        }}
                      >
                        <div className="w-4 h-4 rounded-full overflow-hidden">
                          <Image
                            src={language.flag}
                            alt={`${language.name} Flag`}
                            width={16}
                            height={16}
                            className="rounded-full"
                          />
                        </div>
                        <span>{language.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* List property button */}
            <button className="hidden lg:flex items-center space-x-2 px-4 py-2 rounded-full border-2 border-[#A5D3F1] text-[#007DD0] hover:bg-blue-50 transition-colors text-sm">
              List your property
              <span className="ml-1">↗</span>
            </button>

            {/* Notification/Message icon */}
            <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22" fill="none">
                <path d="M20.9598 9.97072C21.0134 10.8009 21.0134 11.6607 20.9598 12.4909C20.6856 16.7332 17.3536 20.1125 13.1706 20.3905C11.7435 20.4854 10.2536 20.4852 8.8294 20.3905C8.33896 20.3579 7.8044 20.2409 7.34401 20.0513C6.83177 19.8403 6.5756 19.7348 6.44544 19.7508C6.31527 19.7668 6.1264 19.9061 5.74868 20.1846C5.08268 20.6757 4.24367 21.0285 2.99943 20.9982C2.37026 20.9829 2.05568 20.9752 1.91484 20.7351C1.77401 20.495 1.94941 20.1626 2.30021 19.4978C2.78674 18.5758 3.09501 17.5203 2.62791 16.6746C1.82343 15.4666 1.1401 14.036 1.04024 12.4909C0.986587 11.6607 0.986587 10.8009 1.04024 9.97072C1.31441 5.72838 4.64639 2.34913 8.8294 2.07107C10.0318 1.99114 10.2812 1.97856 11.5 2.03368" stroke="#007DD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 4.5C21 6.433 19.433 8 17.5 8C15.567 8 14 6.433 14 4.5C14 2.567 15.567 1 17.5 1C19.433 1 21 2.567 21 4.5Z" fill="#FFAC47" stroke="#FFAC47" strokeWidth="1.5"/>
              </svg>
            </div>

            {/* User menu */}
            <div className="flex items-center space-x-2 text-[#007DD0] bg-gray-50 rounded-full px-3 py-2 cursor-pointer hover:bg-gray-100 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm font-medium hidden sm:block">Sunan</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Mobile notification icon */}
            <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22" fill="none">
                <path d="M20.9598 9.97072C21.0134 10.8009 21.0134 11.6607 20.9598 12.4909C20.6856 16.7332 17.3536 20.1125 13.1706 20.3905C11.7435 20.4854 10.2536 20.4852 8.8294 20.3905C8.33896 20.3579 7.8044 20.2409 7.34401 20.0513C6.83177 19.8403 6.5756 19.7348 6.44544 19.7508C6.31527 19.7668 6.1264 19.9061 5.74868 20.1846C5.08268 20.6757 4.24367 21.0285 2.99943 20.9982C2.37026 20.9829 2.05568 20.9752 1.91484 20.7351C1.77401 20.495 1.94941 20.1626 2.30021 19.4978C2.78674 18.5758 3.09501 17.5203 2.62791 16.6746C1.82343 15.4666 1.1401 14.036 1.04024 12.4909C0.986587 11.6607 0.986587 10.8009 1.04024 9.97072C1.31441 5.72838 4.64639 2.34913 8.8294 2.07107C10.0318 1.99114 10.2812 1.97856 11.5 2.03368" stroke="#007DD0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 4.5C21 6.433 19.433 8 17.5 8C15.567 8 14 6.433 14 4.5C14 2.567 15.567 1 17.5 1C19.433 1 21 2.567 21 4.5Z" fill="#FFAC47" stroke="#FFAC47" strokeWidth="1.5"/>
              </svg>
            </div>
            
            {/* Mobile user avatar */}
            <div className="flex items-center text-[#007DD0] bg-gray-50 rounded-full p-2 cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            {/* Hamburger Menu */}
            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#007DD0]" />
              ) : (
                <Menu className="w-5 h-5 text-[#007DD0]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 md:hidden">
            <div className="px-4 py-4 space-y-4">
              <nav className="space-y-3">
                <NavLink href="/" className="block py-2 hover:bg-gray-50 px-2 rounded" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
                <NavLink href="/hotels" className="block py-2 hover:bg-gray-50 px-2 rounded" onClick={() => setIsMobileMenuOpen(false)}>Hotels</NavLink>
                <NavLink href="/house" className="block py-2 hover:bg-gray-50 px-2 rounded" onClick={() => setIsMobileMenuOpen(false)}>House</NavLink>
                <NavLink href="/about" className="block py-2 hover:bg-gray-50 px-2 rounded" onClick={() => setIsMobileMenuOpen(false)}>About Us</NavLink>
                <NavLink href="/contact" className="block py-2 hover:bg-gray-50 px-2 rounded" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</NavLink>
              </nav>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex items-center justify-between text-sm border border-gray-200 rounded-lg px-4 py-3 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full overflow-hidden">
                      <Image src={selectedLanguage.flag} alt={selectedLanguage.name} width={20} height={20} className="rounded-full" />
                    </div>
                    <span className="text-[#626262]">{selectedLanguage.name}</span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border-2 border-[#A5D3F1] text-[#007DD0] hover:bg-blue-50 transition-colors text-sm font-medium">
                  List your property
                  <span>↗</span>
                </button>

                <div className="flex items-center space-x-3 text-[#007DD0] bg-gray-50 rounded-lg px-4 py-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm font-medium">Sunan</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close dropdowns */}
      {(isCurrencyDropdownOpen || isLanguageDropdownOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setIsCurrencyDropdownOpen(false);
            setIsLanguageDropdownOpen(false);
          }}
        />
      )}
    </header>
  );
}