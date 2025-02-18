import { useEffect } from 'react';

export function ChatWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.setAttribute('data-resources-url', "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
    script.setAttribute('data-widget-id', "67b26af989280d86250c6191");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
