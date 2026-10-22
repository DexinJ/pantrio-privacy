(() => {
  const allowedFiles = new Set([
    "index.html",
    "terms-of-use.html",
    "support.html",
    "delete-account.html",
    "subprocessors.html",
    "licenses.html",
  ]);

  const requestedLanguage = new URLSearchParams(location.search).get("lang");
  if (requestedLanguage !== "zh") return;

  const fileName = location.pathname.endsWith("/")
    ? "index.html"
    : location.pathname.split("/").pop();

  if (!allowedFiles.has(fileName)) return;

  const target = new URL(`zh-Hans/${fileName}`, document.baseURI);
  if (location.hash) target.hash = location.hash;
  location.replace(target.href);
})();
