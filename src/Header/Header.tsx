import { Avatar, Indicator } from "@mantine/core";
import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 h-20 flex justify-between px-6 item-center text-white">
      <div className="flex gap-1 items-center text-bright-sun-400">
        <IconAnchor className="h-8 w-8 stroke={2.25}" />
        <div className="text-3xl font-semibold">SimpL Telent</div>
      </div>
      <NavLinks />
      <div className="flex gap-5 items-center">
        <div className="flex items-center gap-3">
          <div>Ashutosh</div>
          <Avatar src="avatar.png" alt="its's me" />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator color="brightSun.4" offset={6} size={9} processing>
            <IconBell stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};

export default Header;
