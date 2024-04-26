"use client"
import { useState } from "react";
import Appbar from "./components/Appbar";
import Navbar from "./components/Navbar";

export default function AdminLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <>
            <div>
                <Navbar open={sidebarOpen} onClose={setSidebarOpen} />
                <div className="lg:pl-72">

                    <Appbar open={sidebarOpen} onClose={setSidebarOpen} />

                    <main className="py-10">
                        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
                    </main>
                </div>
            </div>
        </>

    );
}