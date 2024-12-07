// import Link from "next/link";
// import React from "react";
// import Image from "next/image";
// import { sidebarLinks } from "@/constants";
// const LeftSidebar = () => {
//   return (
//     <section className="left_sidebar">
//       <nav className="flex flex-col gap-6 ">
//         <Link
//           href="/"
//           className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
//         >
//           <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
//           <h1 className="text-24 font-extrabold text-white max-lg:hidden">
//             SmartPodify
//           </h1>
//         </Link>
//         {sidebarLinks.map((route, label, imgURL) => {
//           return (
//             <Link
//               href={route}
//               key={label}
//               className="flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start "
//             >
//               <Image src={imgURL} alt={label} width={24} height={24} />
//               <p>{label}</p>
//             </Link>
//           );
//         })}
//       </nav>
//     </section>
//   );
// };

// export default LeftSidebar;
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { sidebarLinks } from "@/constants";

const LeftSidebar = () => {
  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6 ">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
        >
          <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
            SmartPodify
          </h1>
        </Link>

        {/* Sidebar Links */}
        {sidebarLinks.map(({ route, label, imgURL }, index) => (
          <Link
            href={route}
            key={index}
            className="flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start"
          >
            <Image src={imgURL} alt={label} width={24} height={24} />
            <p className="text-white max-lg:hidden">{label}</p>
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default LeftSidebar;
