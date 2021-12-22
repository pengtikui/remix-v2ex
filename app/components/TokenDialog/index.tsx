import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import type { FunctionComponent } from 'react';

export interface TokenDialogProps {
  open: boolean;
  onClose: (value: boolean) => void;
}

const TokenDialog: FunctionComponent<TokenDialogProps> = ({ open, onClose }) => {
  const [token, setToken] = useState('');

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white border shadow-2xl rounded-xl">
              <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                Access Token
              </Dialog.Title>
              <div className="mt-3">
                <input
                  className="block w-full text-sm text-gray-800 border-gray-300 rounded-md focus:ring-blue-100 focus:border-blue-500"
                  type="text"
                  placeholder="填入 Access Token"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
                <p className="mt-2 text-xs text-gray-400 leading-snug">
                  请在{' '}
                  <a
                    className="hover:underline"
                    href="https://www.v2ex.com/settings/tokens"
                    target="_blank"
                  >
                    V2EX Tokens
                  </a>{' '}
                  创建一个 Token 并填写到这儿，该 Token 仅保存在你的浏览器中
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md tracking-wider hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
                  保存
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TokenDialog;
