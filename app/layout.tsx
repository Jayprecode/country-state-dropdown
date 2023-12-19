/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */

import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

/* -------------------------------------------------------------------------- */
/*                             Internal Dependency                            */
/* -------------------------------------------------------------------------- */

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Country Dropdown",
    description: "A Country Dropdown",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={`bg-[#09090b] text-[#fafafa] ${inter.className}`}>{children}</body>
        </html>
    );
};

export default RootLayout;
