"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
const LeftSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6 ">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
        >
          <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
            SmartPodify
          </h1>
        </Link>
        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`);
          return (
            <Link
              href={route}
              key={label}
              className={cn(
                "flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start",
                { "bg-nav-focus border-r-4 border-orange-1": isActive }
              )}
            >
              <Image src={imgURL} alt={label} width={24} height={24} />
              <p>{label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default LeftSidebar;

// "use client";
// import Link from "next/link";
// import React from "react";
// import Image from "next/image";
// import { cn } from "@/lib/utils";
// import { sidebarLinks } from "@/constants";
// import { usePathname, useRouter } from "next/navigation";

// const LeftSidebar = () => {
//   const pathname = usePathname();
//   const router = useRouter();
//   return (
//     <section className="left_sidebar">
//       <nav className="flex flex-col gap-6 ">
//         {/* Logo Section */}
//         <Link
//           href="/"
//           className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
//         >
//           <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
//           <h1 className="text-24 font-extrabold text-white max-lg:hidden">
//             SmartPodify
//           </h1>
//         </Link>

//         {/* Sidebar Links */}
//         {sidebarLinks.map(({ route, label, imgURL }, index) => {
//           const isActive =
//             pathname === route || pathname.startsWith(`${route}/`);
//           <Link
//             href={route}
//             key={index}
//             className={cn(
//               "flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start",
//               { "bg-nav-focus border-r-4 border-orange-1": isActive }
//             )}
//           >
//             <Image src={imgURL} alt={label} width={24} height={24} />
//             <p className="text-white max-lg:hidden">{label}</p>
//           </Link>;
//         })}
//       </nav>
//     </section>
//   );
// };

// export default LeftSidebar;
