'use client';

import { ToolTip } from './ToolTip';
import Avator from './Avatar';
import Link from 'next/link';
import DarkModeButton from './DarkModeButton';
import { IconMenu } from '@douyinfe/semi-icons';
import { Tooltip as SemiTooltip, Tag } from '@douyinfe/semi-ui';
export default function Header() {
  return (
    <div className="w-4/5 h-24 fixed z-10 top-0 left-[50%] -translate-x-1/2">
      <div className="flex justify-between items-center px-10 py-6">
        <Avator />
        <div className="flex animate-fade-left animate-duration-1000 animate-delay-100">
          <div className="hidden md:flex">
            <Link href="/posts" className="mr-10 font-bold hover:text-blue-600">
              Posts
            </Link>
            <Link
              href="/resume"
              className="mr-10 font-bold hover:text-blue-600"
            >
              Resume
            </Link>
          </div>
          <div className="cursor-pointer hover:text-blue-600 md:hidden mr-4">
            <SemiTooltip
              content={
                <article>
                  <p>
                    <Link
                      href="/posts"
                      className="w-full mr-10 font-bold hover:text-blue-600"
                    >
                      Posts
                    </Link>
                  </p>
                  <p>
                    <Link
                      href="/resume"
                      className="w-full mr-10 font-bold hover:text-blue-600"
                    >
                      Resume
                    </Link>
                  </p>
                </article>
              }
              arrowPointAtCenter={false}
              position="bottom"
            >
              <IconMenu size="extra-large" />
            </SemiTooltip>
          </div>
          <ToolTip />
          <DarkModeButton />
        </div>
      </div>
    </div>
  );
}
