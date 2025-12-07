import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 relative overflow-hidden">

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20 max-w-7xl relative z-10">
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} PT Dobeon Solusi Digital. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-600 hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
