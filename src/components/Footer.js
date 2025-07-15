import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="text-gray-300 bg-gray-900">
      <div className="container w-full px-4 py-12 mx-auto md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + intro + réseaux */}
          <div>
            <div className="flex items-center mb-6 space-x-2">
              <img src="logo.png" alt="Nexsite" className="w-8 h-8" />
              <span className="text-xl font-bold text-white">Nexsite</span>
            </div>
            <p className="mb-6 text-left">
              Plateforme innovante dédiée à l’éducation, à la technologie et à
              la connectivité.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <i className="w-5 h-5 fab fa-instagram" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61564815623223"
                className="text-gray-400 transition-colors hover:text-white"
                aria-label="Facebook"
              >
                <i className="w-5 h-5 fab fa-facebook" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <a href="#Hero" className="transition-colors hover:text-brand-blue">
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-brand-blue"
                >
                  Nos Services
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-brand-blue">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-brand-blue">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-brand-blue">
                  Inscription
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="transition-colors hover:text-brand-blue">
                  Soutien scolaire
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-brand-blue">
                  Activités éducatives
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-brand-blue">
                  Cours d'anglais
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-brand-blue">
                  Cours de français
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-brand-blue">
                  Cours d'espagnol
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <i className="w-5 h-5 mr-3 fas fa-phone text-brand-blue" />
                <span>+212 612563245</span>
              </li>
              <li className="flex items-center">
                <i className="w-5 h-5 mr-3 fas fa-envelope text-brand-blue" />
                <span>nexsite11@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-12 text-sm text-center border-t border-gray-800">
          <p>&copy; {currentYear} Nexsite. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
