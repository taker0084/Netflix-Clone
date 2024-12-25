import React from "react";
interface NavberItemProps {
  label: string;
}
const NavberItem: React.FC<NavberItemProps> = ({ label }) => {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  );
};

export default NavberItem;
