import { useMenuState } from "@/global-state-store/menuStateStore";
import { Menu } from "lucide-react";
import React from "react";

interface OpenMenuButtonProps {}

const OpenMenuButton: React.FC<OpenMenuButtonProps> = ({}) => {
  const { openMenu } = useMenuState();

  return (
    <button onClick={() => openMenu()}>
      <Menu className="w-8 h-8" />
    </button>
  );
};

export default OpenMenuButton;
