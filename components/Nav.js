import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex space-x-8">
        <li
          className="cursor-pointer hover:text-gray-500"
          onClick={() => router.push("/")}
        >
          Home
        </li>
        <li
          className="cursor-pointer hover:text-gray-500"
          onClick={() => router.push("/feed/1")}
        >
          News
        </li>
        <li
          className="cursor-pointer hover:text-gray-500"
          onClick={() => (window.location.href = "https://github.com/ckrook")}
        >
          Github
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
