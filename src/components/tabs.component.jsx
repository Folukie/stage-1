import React from "react";
import links from "../data/links.json";
import { Outlet, Link } from "react-router-dom";

const Tabs = () => {
  return (
    <main className="space-y-10">
      <div className="grid mx-auto text-center space-y-6 ">
        {links.map((link, idx) =>
          link.id === "contact" ? (
            <Link
              to={link.href}
              key={idx}
              id={link.id}
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-secondary p-4 no-underline w-3/5 mx-auto rounded-md sm:w-11/12"
            >
              {link.title}
            </Link>
          ) : (
            <a
              href={link.href}
              key={idx}
              id={link.id}
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-secondary p-4 no-underline w-3/5 mx-auto rounded-md sm:w-11/12"
            >
              {link.title}
            </a>
          )
        )}
      </div>
      <div className="flex justify-center gap-6">
        <img alt="slack" src="/images/slack.svg" />

        <a href="https://github.com/Folukie/">
          <img alt="github" src="/images/github.svg" />
        </a>
      </div>
      <Outlet />
    </main>
  );
};

export default Tabs;
