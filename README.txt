Dopamine Menu: how to put it online (about 5 minutes, free)

What is in this folder
  index.html             the tool itself
  manifest.webmanifest   lets phones add it to the home screen like an app
  sw.js                  keeps it working without internet after the first visit
  icon-*.png, apple-touch-icon.png   the app icon

Put it online with Cloudflare Pages (free account)
  1. Sign up or log in at dash.cloudflare.com.
  2. Go to "Workers & Pages", then "Create application", choose "Pages",
     then "Upload assets" (drag and drop).
  3. Give the project a name, for example "dopamine-menu".
     The address will be something like dopamine-menu.pages.dev.
  4. Drag this whole folder (or the zip) onto the upload area and press Deploy.
  5. Open the address on a phone to check it.

Any other static host works too (GitHub Pages, Netlify and so on): upload all files
together, keeping them in one folder.

On an iPhone
  Open the address in Safari, tap Share, then "Add to Home Screen".
  It then opens like an app and works without internet.

Updating it later
  Upload the new folder to the same project. Phones pick up the new version
  the next time they open it with internet.

Privacy
  Nothing anyone types is sent anywhere. Everything stays on their own phone.
  The host only keeps normal visit logs, like any website.
