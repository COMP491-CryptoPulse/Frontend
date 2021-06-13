import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaBitcoin, FaGithub, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { GoGraph } from "react-icons/go";
import { AiOutlineBell } from "react-icons/ai";

export default function Home({ loggedIn }) {
  const router = useRouter();
  // If the user is already logged in, then redirect back to the home page.
  useEffect(() => {
    if (loggedIn) {
      router.push("/dashboard");
    }
  });

  return (
    <div className="animate-fade-in-down grid grid-cols-11">
      <img
        className="mt-14 col-start-4 col-span-5 mx-auto animate-pulse"
        width={192}
        height={192}
        src={"/app/logo.png"}
      />
      <p className="text-white text-center text-4xl font-extrabold mt-1 col-start-4 col-span-5 tracking-widest">
        CRYPTOPULSE
      </p>
      <p className="text-md text-center text-2xl col-start-4 col-span-5 font-semibold text-gray-400 mt-3">
        Social Network Analysis of Cryptocurrencies
      </p>
      <div className=" col-start-4 col-span-5 font-semibold text-gray-300 mt-3 grid grid-cols-11">
        <p className="col-start-2 col-end-11 mt-3 text-md text-center">
          It is hard to track every analyst that exist on social media. It is
          even harder when you have multiple coins in your wallet. Wouldn’t it
          be nice if there is a way to keep a track your coins on social media?
          There is a way now!
        </p>
        <button className=" col-start-4 col-end-9 h-12 mt-5 bg-yellow-50 hover:bg-yellow-500 text-xl text-blue-50 rounded">
          <Link href="/signup">Sign Up Now!</Link>
        </button>
      </div>
      <div className="border-t border-gray-500 col-start-3 col-span-7 font-semibold mt-5 grid grid-cols-2 gap-x-10 gap-y-5">
        <div className="mt-5 rounded-md">
          <FaBitcoin className="h-14 w-14 mx-auto text-white " />
          <p className="text-white text-center text-2xl mb-3">Follow Coins</p>
          <p className="border-t border-gray-600 text-center text-gray-300 p-3">
            Follow your favorite coins and track its price, relevant sources and
            relevant posts
          </p>
        </div>
        <div className=" mt-5 rounded-md text-white">
          <CgWebsite className="h-14 w-14 mx-auto" />
          <p className="text-white text-center text-2xl mb-3">Follow Sources</p>
          <p className="border-t border-gray-600 text-center text-gray-300 p-3">
            Follow your favorite sources and users and track the posts they have
            made about the cryptocurency market
          </p>
        </div>
        <div className="rounded-md text-white">
          <GoGraph className="h-14 w-14 mx-auto" />
          <p className="text-white text-center text-2xl mb-3">
            See Realtime Trends
          </p>
          <p className="border-t border-gray-600 text-center text-gray-300 p-3">
            Use our state-of-the-art dashboard to never miss cryptocurrency
            market trends
          </p>
        </div>
        <div className="rounded-md text-white">
          <AiOutlineBell className="h-14 w-14 mx-auto" />
          <p className="text-white text-center text-2xl mb-3">Add Triggers</p>
          <p className="border-t border-gray-600 text-center text-gray-300 p-3">
            Is social media on fire with cryptocurrency posts? Don't worry, with
            out notification system you will be ready!
          </p>
        </div>
      </div>
      <div className="border-t border-gray-500 col-start-3 col-span-7 font-semibold mt-5 grid grid-cols-4 gap-x-10 gap-y-5">
        <p className="col-span-4 text-center mt-5 text-3xl text-white">
          Our Team
        </p>
        <div className="flex flex-col bg-gray-900 items-center justify-center bg-white p-4 shadow rounded-lg mb-10">
          <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img
              className="text-center"
              src="/app/aliutkansahin.png"
              alt="image"
              className="h-full w-full"
            />
          </div>
          <p className="mt-4 font-bold text-xl text-gray-50">Ali Utkan Şahin</p>
          <div className="flex flex-row mt-4 space-x-2">
            <div className="cursor-pointer">
              <Link href="https://www.github.com/utkn">
                <FaGithub className="flex items-center justify-center h-8 w-8 text-gray-50" />
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link href="https://www.linkedin.com/in/utkan-şahin-563a91151/">
                <FaLinkedin className="flex items-center justify-center h-8 w-8 text-gray-50" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gray-900 items-center justify-center bg-white p-4 shadow rounded-lg mb-10">
          <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img
              className="text-center"
              src="/app/hakansahin.jpg"
              alt="image"
              className="h-full w-full"
            />
          </div>
          <p className="mt-4 font-bold text-xl text-gray-50">Hakan Şahin</p>
          <div className="flex flex-row mt-4 space-x-2">
            <div className="cursor-pointer">
              <Link href="https://www.github.com/hakansahin17">
                <FaGithub className="flex items-center justify-center h-8 w-8 text-gray-50" />
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link href="https://www.linkedin.com/in/hakansahin17/">
                <FaLinkedin className="flex items-center justify-center h-8 w-8 text-gray-50" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gray-900 items-center justify-center bg-white p-4 shadow rounded-lg mb-10">
          <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img
              className="text-center"
              src="/app/sinancemyucel.jpg"
              alt="image"
              className="h-full w-full"
            />
          </div>
          <p className="mt-4 font-bold text-xl text-gray-50">Sinan Cem Yücel</p>
          <div className="flex flex-row mt-4 space-x-2">
            <div className="cursor-pointer">
              <Link href="https://www.github.com/Sierox">
                <FaGithub className="flex items-center justify-center h-8 w-8 text-gray-50" />
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link href="https://www.linkedin.com/in/sinan-cem-y-92a26a125/">
                <FaLinkedin className="flex items-center justify-center h-8 w-8 text-gray-50" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gray-900 items-center justify-center bg-white p-4 shadow rounded-lg mb-10">
          <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img
              className="text-center"
              src="/app/tolgasumer.jpg"
              alt="image"
              className="h-full w-full"
            />
          </div>
          <p className="mt-4 font-bold text-xl text-gray-50">Tolga Sümer</p>
          <div className="flex flex-row mt-4 space-x-2">
            <div className="cursor-pointer">
              <Link href="https://www.github.com/Tolgino">
                <FaGithub className="flex items-center justify-center h-8 w-8 text-gray-50" />
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link href="https://www.linkedin.com/in/tolga-sümer-665b48136/">
                <FaLinkedin className="flex items-center justify-center h-8 w-8 text-gray-50" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
