import React from 'react';
import { Accordion } from "flowbite-react";

/**
 * It returns a div that contains a div with a class of mb-8 mt-10 and an h1 with a class of
 * text-center text-3xl. The h1 has the text Questions & Answer. The div with a class of m-6 contains
 * an Accordion component. The Accordion component contains four Accordion.Panel components. Each
 * Accordion.Panel component contains an Accordion.Title component and an Accordion.Content component.
 * The Accordion.Title component has a class of text-2xl and the text of the question. The
 * Accordion.Content component contains a p tag with a class of mb-2 text-gray-500 dark:text-gray-400
 * and the text of the answer
 * @returns A React component.
 */
const Blog = () => {
    return (
        <div>
            <div className='mb-8 mt-10'>
                <h1 className='text-center text-3xl'>Questions & Answer</h1>
            </div>
            <div className='m-6'>
                <Accordion flush={true}>
                    <Accordion.Panel>
                        <Accordion.Title className='text-2xl'>
                            What is cors?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className='text-2xl'>
                            Why are you using firebase? What other options do you have to implement authentication?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                                Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className='text-2xl'>
                            How does the private route work?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className='text-2xl'>
                            What is Node? How does Node work?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Node.js is a lean, fast, cross-platform JavaScript runtime environment that is useful for both servers and desktop applications.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    );
};

export default Blog;