import Link from "next/link";
import React from "react";
import { HomeContainer } from "./styles";

export default function Home() {
  return (
    <>
      <h1>Alura Cases - Home</h1>
      <Link href="/faq">Ir para Pagina de Faq</Link>
    </>
  );
}
