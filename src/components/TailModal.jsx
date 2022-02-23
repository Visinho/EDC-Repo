import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon, CheckCircleIcon, } from '@heroicons/react/outline'

export default function TailModal({ message, title, status, setSubmitted, setStatus, setTitle, setMessage }) {
    const [open, setOpen] = useState(true)

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="flex flex-col gap-4 justify-center items-center">
                                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                                        {status === 'OK' ? <CheckCircleIcon className="h-6 w-6 text-green-600" aria-hidden="true" /> : <ExclamationIcon className="h-6 w-6 text-red-500" aria-hidden="true" />}
                                    </div>
                                    <div className="text-center sm:mt-0 sm:ml-4">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            {title}
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                {message}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                {status === 'OK' ? <button
                                    type="button"
                                    className="flex gap-4 mt-3 w-full inline-flex justify-center items-center rounded-md shadow-sm px-4 py-2 text-base font-medium text-white outline-none bg-green-500 hover:bg-green-600 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => { setOpen(false); setSubmitted(false); setStatus(''); setTitle(''); setMessage(''); }}
                                    ref={cancelButtonRef}
                                >
                                    Close
                                </button> :
                                    <button
                                        type="button"
                                        className="flex gap-4 mt-3 w-full inline-flex justify-center items-center rounded-md shadow-sm px-4 py-2 text-base font-medium text-white outline-none bg-red-500 hover:bg-red-600 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => { setOpen(false); setSubmitted(false); setStatus(''); setTitle(''); setMessage(''); }}
                                        ref={cancelButtonRef}
                                    >
                                        Close
                                    </button>
                                }
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}