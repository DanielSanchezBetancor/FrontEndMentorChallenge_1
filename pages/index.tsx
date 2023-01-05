import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState } from "react";

// Custom imports
import Header from './components/Header/Header.js';
import HeroPage from './components/HeroPage/HeroPage.js';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [isOpen, setOpen] = useState(false);
  const [isFeaturesOpen, setFeaturesOpen] = useState(false);
  const [isCompaniesOpen, setCompaniesOpen] = useState(false);
  function disableMenus() {
    setOpen(false);
    setFeaturesOpen(false);
    setCompaniesOpen(false);
}
    return (
        <>
          <Header 
            isOpen={isOpen}
            isFeaturesOpen={isFeaturesOpen}
            isCompaniesOpen={isCompaniesOpen}
            setOpen={setOpen}
            setFeaturesOpen={setFeaturesOpen}
            setCompaniesOpen={setCompaniesOpen}
            disableMenus={disableMenus}
            />
            <main onClick={() => disableMenus()}>
              <HeroPage />
            

            </main>
        </>
    );
}
