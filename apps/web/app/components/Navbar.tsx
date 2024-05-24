import PVPButton from "@repo/ui/pvpbutton";
import ComputerButton from "@repo/ui/computerbutton";
import SignUpButton from "@repo/ui/signupbutton";
import SignInButton from "@repo/ui/signinbutton";
export default function Navbar(): JSX.Element {
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-5 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="flex items-center justify-start rtl:justify-end">
          <a href="/" className="flex ms-2 md:me-24">
            <img
              src="https://static.vecteezy.com/system/resources/previews/007/869/009/large_2x/hand-of-businessman-holding-gold-king-chess-on-stock-market-or-forex-trading-graph-chart-with-cityscape-image-economy-trend-for-digital-financial-investment-management-or-leadership-strategy-concept-free-photo.jpg"
              className="h-8 me-3 rounded-full"
              alt="PlayChess Logo"
            />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
              PlayChess
            </span>
          </a>
        </div>
        <div className="h-full px-3 pb-4 pt-10 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <PVPButton></PVPButton>
            <ComputerButton></ComputerButton>
            <SignInButton></SignInButton>
            <SignUpButton></SignUpButton>
          </ul>
        </div>
      </aside>
    </div>
  );
}
