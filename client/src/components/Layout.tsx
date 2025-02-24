import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const base = import.meta.env.VITE_BASE_URL || '';

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { href: `${base}/`, label: "Home" },
    { href: `${base}/services`, label: "Services" },
    { href: `${base}/contact`, label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href={`${base}/`}>
            <a className="text-2xl font-bold text-[#0039A6]">
              Demand Electric
            </a>
          </Link>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "text-gray-600 hover:text-[#0039A6] transition-colors",
                    location === item.href && "text-[#0039A6] font-semibold"
                  )}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-[#0039A6] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Demand Electric</h3>
              <p>25+ Years of Trusted Service</p>
              <p>Mountain Pine, AR</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p>Professional Electrical Services</p>
              <a href="tel:+15016936229" className="hover:underline">
                (501) 693-6229
              </a>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Hours</h3>
              <p>Monday - Friday: 8am - 5pm</p>
              <p>By Appointment on Weekends</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}