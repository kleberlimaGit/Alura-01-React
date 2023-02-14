import Link from "next/link";
import React from "react";
import { NotFoundContainer, NotFoundContent } from "./styles";
export default function notFound() {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <h4>404</h4>
        <div>|</div>
        <p>Essa Pagina não pode ser encontrada</p>
      </NotFoundContent>
      <Link href="/">Ir para Pagina de Faq</Link>
    </NotFoundContainer>
  );
}