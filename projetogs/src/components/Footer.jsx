import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
      </main>

      <footer className="bg-gray-900 text-white py-3 mt-4">
        <div className="container mx-auto flex flex-col items-center">
          <div className="text-2xl font-bold mb-2">Electric Chain</div>
          <div className="text-center text-sm mb-3">
            <p>&copy; 2024 Electric Chain. Todos os direitos reservados.</p>
            <p>Transformando energia descentralizada em autonomia global.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
              className="text-white hover:text-blue-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              aria-label="Twitter"
              className="text-white hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="text-white hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-serrano-8168b6206/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-white hover:text-blue-700"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
