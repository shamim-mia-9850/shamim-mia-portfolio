# Shamim Mia — Premium Portfolio

Vercel-ready Next.js portfolio for Shamim Mia.

## What is included

- Professional profile photo
- CV download
- Experience timeline
- Experience-based work samples
- Skills, education and courses
- LinkedIn / email / phone
- Dark/light mode
- Responsive mobile layout
- GitHub section ready
- Contact form ready for Formspree
- Custom-domain deployment guide

## 1. GitHub setup

Create a GitHub account if you do not already have one. Then create a repository such as:

`shamim-mia-portfolio`

Upload this project to that repository.

After you know your GitHub profile URL, open `app/page.js` and find:

```js
const githubUrl = "";
```

Change it to:

```js
const githubUrl = "https://github.com/YOUR_USERNAME";
```

Then commit/push the change.

## 2. Contact form setup

The form is prepared for Formspree, but the personal Formspree form ID must come from your own account.

1. Create an account at https://formspree.io/
2. Create a new form.
3. Copy the form endpoint shown by Formspree. It looks like:
   `https://formspree.io/f/xppwkqaq`
4. Open `app/page.js`.
5. Find:
   `action="https://formspree.io/f/xppwkqaq"`
6. Replace `YOUR_FORM_ID` with your real Formspree form ID.
7. Push the change to GitHub and redeploy on Vercel.

Never put passwords or private API keys in GitHub.

## 3. Deploy to Vercel

1. Sign in to Vercel.
2. Add New Project.
3. Import the GitHub repository.
4. Vercel should detect Next.js automatically.
5. Click Deploy.

## 4. Custom domain

Example:

`shamim-mia.com`

In Vercel:

1. Open your portfolio project.
2. Settings → Domains.
3. Click Add Domain.
4. Enter your domain.
5. Vercel will show the exact DNS records required for your domain.
6. If your domain was purchased elsewhere, add the shown A/CNAME records at that registrar.
7. Wait for verification and SSL provisioning.
8. Your custom domain will point to the latest production deployment.

Do not blindly copy DNS values from another project; use the values Vercel displays for your project.

## 5. Current content note

The Projects section contains **experience-based work samples** derived from the responsibilities in the CV. They are intentionally not presented as independent software projects.

No GitHub username or independent software-project URL was supplied in the CV, so those details are left unclaimed rather than invented.
