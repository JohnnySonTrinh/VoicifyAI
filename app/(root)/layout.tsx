import LeftSidebar from "@/components/LeftSidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar />
        <section>
          <div>
            <div>
              <Image />
              <span className="text-white-1">MobileNav</span>
            </div>
          </div>
        </section>
        {children}
        <p className="text-white-1">RIGHT SIDEBAR</p>
      </main>
    </div>
  );
}
