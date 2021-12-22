import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch } from 'remix';
import styles from './tailwind.css';
import type { MetaFunction, LinksFunction } from 'remix';

export const meta: MetaFunction = () => {
  return { title: 'Remix V2EX' };
};

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function App() {
  return (
    <html lang="zh-CN" className="text-[14px]">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="description"
          content="创意工作者的社区。讨论编程、设计、硬件、游戏等令人激动的话题。"
        />
        <Meta />
        <Links />
      </head>
      <body className="bg-gray-50">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
