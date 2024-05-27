"use client";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Sidebar } from "primereact/sidebar";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(true);

  const items = [
    { label: "Dashboard", icon: "pi pi-fw pi-home" },
    { label: "Reports", icon: "pi pi-fw pi-chart-bar" },
    { label: "Settings", icon: "pi pi-fw pi-cog" },
    // Add more menu options here (up to 5)
  ];

  return (
    <div className="navigation-bar">
      <Sidebar visible={expanded} onHide={() => setExpanded(true)}>
        {/* <Logo /> Your custom logo component */}
        <Menu model={items} />
      </Sidebar>
      <Button
        icon={expanded ? "pi pi-angle-left" : "pi pi-angle-right"}
        onClick={() => setExpanded(!expanded)}
        className="toggle-button"
      />
    </div>
  );
};

export default NavigationBar;
