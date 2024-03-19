"use client";

import { useMenuState } from "@/global-state-store/menuStateStore";
import Menu from "@/components/Menu";
import React from "react";

interface MenuContainerProps {}

const MenuContainer: React.FC<MenuContainerProps> = ({}) => {
  const { isOpen } = useMenuState();

  return <>{isOpen && <Menu />}</>;
};

export default MenuContainer;
