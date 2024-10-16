import React, { useState, ChangeEvent, FormEvent } from "react";
// import AvatarWAddons from "./AvatarWAddons";
import styles from "./TopBar.module.css";

const TopBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Buscar:", searchTerm);
  };

  return (
    <div className={`${styles.topBar} flex items-center justify-between p-4 bg-black w-full`}>
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
          Buscar
        </button>
      </form>
      <button className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600">
        Reproducir
      </button>
    </div>
  );
};

export default TopBar;
