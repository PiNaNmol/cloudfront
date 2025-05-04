
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          © 2025 TechStore. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
