import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Container from "./(common)/_components/Container";
import ContainerFluid from "./(common)/_components/ContainerFluid";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContainerFluid>
          <Container>{children}</Container>
        </ContainerFluid>
      </body>
    </html>
  );
}
