"use client"
import React, { useEffect } from 'react';

const FeedbackForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    script.onload = () => {
      window.jotformEmbedHandler("iframe[id='JotFormIFrame-241404985315457']", "https://form.jotform.com/");
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='flex flex-col items-center m-10'>
      <iframe
        id="JotFormIFrame-241404985315457"
        title="Course Instructor Feedback Form"
        onLoad={() => window.parent.scrollTo(0, 0)}
        allowTransparency="true"
        allow="geolocation; microphone; camera; fullscreen"
        src="https://form.jotform.com/241404985315457"
        frameBorder="0"
        style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
        scrolling="no"
      ></iframe>
   
    </div>
  );
};

export default FeedbackForm;
