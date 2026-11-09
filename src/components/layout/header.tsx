"use client";
import { content } from "@/config/content";

import Link from "next/link";
import Image from "next/image";
import { media } from "@/config/media";
import { navigation } from "@/config/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { clinic } from "@/config/clinic";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
const copy = content.header;

const links = navigation;
export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label={`${clinic.name} — início`}
      className={`brand ${light ? "text-cream" : ""}`}
    >
      {media.brand.logo ? (
        <Image
          src={media.brand.logo.src}
          alt={media.brand.logo.alt}
          width={media.brand.logo.width}
          height={media.brand.logo.height}
          className="brand-logo"
        />
      ) : (
        <span className="brand-name">
          {clinic.name.toLowerCase()}
          <span className="brand-star">{copy.text}</span>
        </span>
      )}
      <span className="brand-tagline">{clinic.tagline}</span>
    </Link>
  );
}
export function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <header
      className={`site-header ${path === "/" ? "home-header" : ""} ${scrolled ? "is-scrolled" : ""}`}
    >
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label={copy.navegacaoPrincipal}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={path === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Button asChild size="sm" className="header-booking">
            <Link href="/agendamento">
              {copy.agendarAvaliacao}
              <ArrowUpRight />
            </Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="mobile-menu"
                aria-label={copy.abrirMenu}
              >
                <Menu />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle className="font-serif text-4xl">
                {copy.exploreAElara}
              </DialogTitle>
              <DialogDescription className="mt-2 text-sm text-muted">
                {copy.cuidadoEmCadaDetalhe}
              </DialogDescription>
              <nav
                className="mt-8 flex flex-col gap-2"
                aria-label={copy.menuMobile}
              >
                {[
                  ...links,
                  { href: "/agendamento", label: copy.agendarAvaliacao2 },
                ].map((link) => (
                  <DialogClose asChild key={link.href}>
                    <Link
                      className="border-b border-line py-4"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </DialogClose>
                ))}
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
