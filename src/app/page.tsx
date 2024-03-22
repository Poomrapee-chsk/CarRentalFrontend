import Image from "next/image";
import styles from "./page.module.css";
import Banner from '@/components/Banner';
import Card from '@/components/Card'
import CarPanel from "@/components/CarPanel";
import TravelCard from "@/components/TravelCard";

export default function Home() {


  return (
    <main>
      <Banner/>
      <TravelCard/>
    </main>
  );
}
