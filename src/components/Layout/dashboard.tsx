import Logo from "@images/Header/safekeepLogo.svg";
import navs, { Dashfooter, newFeature } from "@config/navs";
import GasStation from "@images/Dashboard/gas-station.svg";
import { IChild } from "interface";
import Link from "next/link";
import { useRouter } from "next/router";
import ConnectWallet from "@components/connectWallet";
import WalletConnect from "@components/WalletConnect";
import ConnectionResult from "@components/WalletConnect/connectionResult"

interface ILink {
  id: number;
  title: string;
  icon: string;
  href?: string;
}

const DashOtherLinks = ({ ...data }: ILink & { soon?: boolean }) => {
  const { title, soon = false, icon: Icon } = data;
  return (
    <div className="flex justify-between mb-6">
      <div className="flex">
        {/* @ts-ignore */}
        <Icon className="mr-2" />
        <span className="text-safekeep-gray-200">{title}</span>
      </div>
      {!!soon && (
        <div>
          <span className="p-1 px-2 text-xs border rounded-full text-safe-green-700 border-safe-green-700">SOON</span>
        </div>
      )}
    </div>
  );
};
const NavLink = ({ ...data }: ILink) => {
  const Icon = data.icon;
  const router = useRouter();
  // const isActive = data.href === router.pathname;
  const isActive = false;
  return (
    <Link href="/dashboard" className={`${isActive ? "bg-safekeep-blue text-safekeep-white " : ""} flex  items-center  p-2 rounded-md `}>
      <div className="mr-2">
        <div className="mr-2">
          <Icon />
        </div>
      </div>
      <div>
        <span className={isActive ? "" : "text-transparent bg-clip-text bg-gradient-to-r from-[#001873] to-[#011A91] "}>{data.title}</span>
      </div>
    </Link>
  );
};

const NavLinks = () => {
  return (
    <>
      {navs.map(item => (
        <div className="mb-6 safekeep-darky-blue " key={item.id}>
          <NavLink {...item} />
        </div>
      ))}
    </>
  );
};
const DashboardLayout = ({ children }: IChild) => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="h-screen col-span-3 p-4 pt-10 pl-12 overflow-scroll overflow-x-hidden overflow-y-scroll pr-7 font-dmSans scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300">
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <Logo />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="mb-12">
                <NavLinks />
              </div>

              <div className="">
                <div className="mb-6 font-medium tracking-widest uppercase">new features</div>
                {newFeature.map(item => (
                  <div key={item.id}>
                    <DashOtherLinks {...item} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10">
            {Dashfooter.map(item => (
              <div key={item.id}>
                <DashOtherLinks {...item} />
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center justify-between text-safe-dark-main">
              <div className="text-xs">Privacy Policy</div>
              <div className="text-xs">Terms of Service</div>
              <div>
                <div className="flex items-center">
                  <GasStation className="mr-2" />
                  <span className="font-medium">19.2</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-9 ">
          <div className="flex justify-between grid-cols-10 p-3 lg:grid header-background">
            <div className="col-span-2"></div>
            <div className="col-span-4 ">
              <div className="relative flex ">
                <input placeholder="Search Assets,Transactions, Tokens..." className="w-full p-2 border rounded-md bg-safekeep-white placeholder:text-safekeep-gray-400 " />
                <img className="absolute scale-110 -translate-y-1/2 right-4 top-1/2" src="/search-icon.svg" alt="searc icon" />
              </div>
            </div>
            <div className="col-span-4">
              <div className="flex justify-end w-full">
                <div className="flex items-center">
                  <div>
                    <img className="mr-4" src="/ethereum-header.svg" alt="base-token-logo" />
                  </div>
                  <div>
                    <img className="mr-4" src="/profile-header.svg" alt="base-token-logo" />
                  </div>
                  <div className="flex items-center p-2 px-3 mx-4 rounded-full bg-safekeep-blue-100">
                    <div>
                      <img className="mr-2" src="/wallet-header.svg" alt="base-token-logo" />
                    </div>
                    <span className="text-sm font-medium text-black">0x45e7.....7410S</span>
                  </div>
                  <div>
                    <img src="toggle-light.svg" alt="toggle-light" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-screen border bg-safekeep-blue-100">
            {/* {children} */}
            <div className="flex justify-center mt-10 ">
              <ConnectWallet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
