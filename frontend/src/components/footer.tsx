import { Mail, Phone } from "lucide-react";
import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex justify-between items-center">
          <img src="/EcommerceLogo.png" alt="logo" width={41} height={34} />
          <div className="flex gap-9 items-center">
            <div className="flex gap-5 items-center">
              <div className="border border-white/[0.1] p-3 rounded-full">
                <Phone size={19} color="white" strokeWidth={1.25} />
              </div>
              <span className="text-sm">(976) 7007-1234</span>
            </div>
            <div className="flex gap-5 items-center">
              <div className="border border-white/[0.1] p-3 rounded-full">
                <Mail size={19} color="white" strokeWidth={1.25} />
              </div>
              <span className="text-sm">contact@ecommerce.mn</span>
            </div>
          </div>
        </div>
        <Separator className="my-11 bg-white/[0.2]" />
        <div className="flex justify-between items-center">
          <p className="text-sm">© 2024 Ecommerce MN</p>
          <div className="flex gap-7">
            <img src="/Facebook.png" />
            <img src="/Instagram.png" />
            <img src="Twitter.png" />
            <img src="LinkedIn.png" />
          </div>
        </div>
      </div>
    </footer>
  );
};
