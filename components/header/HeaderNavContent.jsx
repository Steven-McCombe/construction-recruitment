import Link from "next/link";
import {
  blogItems,
  candidateItems,
  employerItems,
  findJobItems,
  homeItems,
  pageItems,
  shopItems,
} from "../../data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";

const HeaderNavContent = () => {
  const router = useRouter();

  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
        <li
    className={isActiveParent(homeItems, router.asPath) ? "current" : ""}
>
    <Link href="/">Home</Link>
</li>
{/* End homepage menu items */}

<li
    className={isActiveParent(findJobItems, router.asPath) ? "current" : ""}
>
    <Link href="/job-list-v1">Find Jobs</Link>
</li>
{/* End findjobs menu items */}


          <li className={isActiveParent(employerItems, router.asPath) || router.asPath === "/employers-dashboard/dashboard" ? "current" : ""}>
           <Link href="/employers-list-v1">Employers</Link>
          </li>
          {/* End Employers menu items */}

          <li
    className={
      isActiveParent(candidateItems, router.asPath) ||
      router.asPath === "/candidates-dashboard/dashboard"
        ? "current"
        : ""
    }
>
    <Link href="/candidates-list-v1">Candidates</Link>
</li>
{/* End Candidates menu items */}


          <li
            className={`${
              isActiveParentChaild(blogItems, router.asPath) ? "current" : ""
            } dropdown`}
          >
            <span>Blog</span>
            <ul>
              {blogItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, router.asPath) ? "current" : ""
                  }
                  key={i}
                >
                  <Link href={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          {/* End Blog menu items */}

          <li
            className={`${
              isActiveParentChaild(pageItems, router.asPath) ||
              isActiveParentChaild(shopItems[0].items, router.asPath)
                ? "current "
                : ""
            } dropdown`}
          >
            <span>Pages</span>
            <ul>
              {shopItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={`${
                      isActiveParentChaild(shopItems[0].items, router.asPath)
                        ? "current "
                        : ""
                    }`}
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, router.asPath)
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link href={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              {pageItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, router.asPath) ? "current" : ""
                  }
                  key={i}
                >
                  <Link href={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          {/* End Pages menu items */}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
