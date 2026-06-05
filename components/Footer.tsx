import Link from "next/link";
import { AArrowDown, ActivityIcon, AirplayIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-100 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">© 2026 Sen Pandian Digital Marketing Agency. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link href="https://github.com/your-repo" target="_blank" rel="noopener">
            <AArrowDown className="h-5 w-5 hover:text-primary-300 transition-colors" />
          </Link>
          <Link href="https://twitter.com/your-handle" target="_blank" rel="noopener">
            <ActivityIcon className="h-5 w-5 hover:text-primary-300 transition-colors" />
          </Link>
          <Link href="https://linkedin.com/company/your-company" target="_blank" rel="noopener">
            <AirplayIcon className="h-5 w-5 hover:text-primary-300 transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
