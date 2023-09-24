"use client"
import React, {useEffect} from 'react';

const TwitterFeed = () => {
    useEffect(() => {
        // Load Twitter widget script
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.charset = 'utf-8';
        script.async = true;

        // Append the script to the document
        document.getElementById('twitter-feed').appendChild(script);

        return () => {
            // Clean up the script when the component unmounts
            document.getElementById('twitter-feed').removeChild(script);
        };
    }, []);

    return (
        <div id="content-wrap">
            <a className="twitter-timeline"
               data-lang="en"
               data-height="600"
               data-theme="light"
               href="https://twitter.com/CallyPkFriends?ref_src=twsrc%5Etfw"
            >
                Tweets by CallyPkFriends
            </a>
        </div>
    );
};

export default TwitterFeed;

