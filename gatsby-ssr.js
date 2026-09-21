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

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([<MagicScriptTag key="magic-script-tag" />])
}
