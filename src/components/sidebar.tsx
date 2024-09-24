// import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import {menuItems} from "./MenuItem";

const Menu = async () => {
  // const user = await currentUser();
  // const role = user?.publicMetadata.role as string;
  return (
    
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            // if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            //}
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
