import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";
import logo from "@/assets/logo.png.asset.json";


export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <img
            src={logo.url}
            alt="Sree Laminations logo"
            className="mb-3 h-12 w-auto object-contain"
            loading="lazy"
          />
          <h2 className="font-display text-xl font-semibold">
            Sree <span className="text-gold-foil">Laminations</span>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Professional Gloss, Matt, Gold and 3D sheet lamination services with quality finishing
            and reliable service.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {site.phones.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                <a href={`tel:${p}`} className="hover:underline">
                  {p}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-2 text-muted-foreground">
              <Mail className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:underline">
                {site.email}
              </a>

            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <Clock className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Gloss lamination</li>
            <li>Matt lamination</li>
            <li>Gold lamination</li>
            <li>3D lamination</li>
            <li>Custom finishes</li>
          </ul>
          <Link
            to="/contact"
            className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Get a Quote
          </Link>

        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} Sree Lamination. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
