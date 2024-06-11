import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-black h-auto py-12">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center mb-4">
          <a href="https://github.com/Lavdewangan1" className="text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out">
            <FaGithub size={24} />
          </a>
          <a href="https://x.com/Lavdewangan1?t=lWHHYG2A6CuPZEJS0CT3Fg&s=09" className="text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out ml-4">
            Twitter
          </a>
          <a href="https://www.linkedin.com/in/lav-dewangan-a2b40b293/" className="text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out ml-4">
            LinkedIn
          </a>
        </div>
        <p className="text-gray-400 text-sm text-center">
          &copy; 2023 Lav Dewangan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}