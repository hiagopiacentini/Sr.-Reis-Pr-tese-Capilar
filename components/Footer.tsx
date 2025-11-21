import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-10 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Sr. Reis Prótese Capilar. Todos os direitos reservados.</p>
        <div className="flex gap-4">
           <span>Vilhena (RO)</span>
           <span className="text-gray-700">•</span>
           <span>Cacoal (RO)</span>
           <span className="text-gray-700">•</span>
           <span>Sapezal (MT)</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;