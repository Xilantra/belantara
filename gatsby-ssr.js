const React = require("react")

const MagicScriptTag = () => {
  const codeToRunOnClient = `
(function() {
  function getInitialTheme() {
    try {
      var stored = localStorage.getItem('theme');
      if (stored) return stored;
      var mql = window.matchMedia('(prefers-color-scheme: dark)');
      if (mql && mql.matches) return 'dark';
    } catch (e) {}
    return 'light';
  }
  var theme = getInitialTheme();
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();
`
  return (
    <script
      key="theme-anti-fouc"
      dangerouslySetInnerHTML={{ __html: codeToRunOnClient }}
    />
  )
}

exports.onRenderBody = ({ setPreBodyComponents, setPostBodyComponents }) => {
  setPreBodyComponents([<MagicScriptTag key="magic-script-tag" />])
  setPostBodyComponents([
    <script
      key="cloudflare-analytics"
      type="module"
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "0772717ef8014846a4df099dca9ab75d"}'
    />,
  ])
}
