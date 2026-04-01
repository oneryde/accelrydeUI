/** Runs before paint to avoid theme flash; pair with ThemeToggle. */
export default function ThemeScript() {
  const code = `(function(){try{var k='accelryde-theme',t=localStorage.getItem(k),p=new URLSearchParams(location.search).get('theme');var th=p==='light'||p==='dark'?p:t;if(th==='light'||th==='dark')document.documentElement.setAttribute('data-theme',th);}catch(e){}})();`;
  return (
    <script
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
