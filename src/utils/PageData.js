import { FaRegClipboard } from "react-icons/fa6";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdWeb } from "react-icons/md";
import { SiConvertio } from "react-icons/si";
import { GoTrophy } from "react-icons/go";
import { MdOutlinePrivacyTip } from "react-icons/md";

export const features = [
  {
    title: "Powerful RMS",
    desc: "20+ Predefined Risk management settings that can be applied over and above any idea or strategy of a trader to safeguard capital.",
    logo: FaRegClipboard,
  },
  {
    title: "Deep Analytics",
    desc: "Find out what setup is making more money and which setup is in drawdown phase and how to improve it with our detailed analytical reports.",
    logo: TbBrandGoogleAnalytics,
  },
  {
    title: "Web and Mobile app",
    desc: "Automate your ideas from any device of your choice, no installation needed.",
    logo: MdWeb,
  },
  {
    title: "Option Convertor",
    desc: "Convert spot/future price into corresponding option trade and automate without writing a single line of code.",
    logo: SiConvertio,
  },
  {
    title: "Detailed trade and order book",
    desc: "Check the forward test report of your strategies for 90 days with our detailed orderbook and tradebook.",
    logo: GoTrophy,
  },
  {
    title: "Data privacy",
    desc: "We don’t store your broker credentials or generate token on your behalf, we also maintain IP logs of login and logout and all activities for full privacy.",
    logo: MdOutlinePrivacyTip,
  },
];

// Solutions Cards
import Sol1 from "../assets/algofox/sol1.png";
import Sol2 from "../assets/algofox/sol2.png";
import Sol3 from "../assets/algofox/sol3.png";

export const solutionCards = [
  {
    img: Sol1,
    title: "Trading platform",
    desc: "Build your strategy on any platform of your choice",
  },
  {
    img: Sol2,
    title: "Algofox Bridge",
    desc: "Connect Algofox with any broker of your choice",
  },
  {
    img: Sol3,
    title: "Broker",
    desc: "Orders get executed in your preferred broker",
  },
];
