# Publishing the Reva Associates website

Do these in order. You can do steps 1–3 now and have a private test link to show your dad. Steps 4–6 need his answers and a domain.

Dashboard button names change from time to time, so if one doesn't match, look for the closest label.

## Costs

| Item | Cost | Notes |
|---|---|---|
| Hosting (Cloudflare Workers) | Free | Static pages aren't charged for bandwidth |
| HTTPS certificate | Free | Automatic |
| Contact form (Web3Forms) | Free | Reported at about 250 enquiries a month; I couldn't open their pricing page to confirm |
| `.co.ug` domain | $25/year at [registry.co.ug](https://www.registry.co.ug/) | Resellers charge up to about $190, so compare first |

## 1. Connect the contact form

1. Go to [web3forms.com](https://web3forms.com) and enter the email address that should receive enquiries. It should be the firm's, or use yours while testing.
2. Copy the access key they email you.
3. Paste it into `web3formsKey` in `src/data/site.ts`.

The key is meant to be visible in the page source. It can only send mail to that one address.

## 2. Put the code on GitHub

Create an empty **private** repository called `reva-associates` at [repo.new](https://repo.new). Don't add a README. Then run this in `C:\Reva`, swapping in your username:

```bash
git init -b main
```

```bash
git add .
```

```bash
git commit -m "Initial website"
```

```bash
git remote add origin https://github.com/YOUR-USERNAME/reva-associates.git
```

```bash
git push -u origin main
```

`.gitignore` keeps `.docx` files out of the repo, so your dad's filled-in questionnaire won't get uploaded.

## 3. Deploy to Cloudflare

1. Create a free account at [cloudflare.com](https://dash.cloudflare.com/sign-up). Use an email address the firm will keep, because this account will end up controlling the live site.
2. Go to **Compute > Workers & Pages > Create application** and import your GitHub repository.
3. Set:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
4. Save and deploy.

You'll get a link like `reva-associates.<your-subdomain>.workers.dev`. Search engines are told not to index the site yet, so it's safe to share with your dad for review. Every `git push` to `main` now redeploys the site automatically.

## 4. Buy the domain

**I recommend `.co.ug`**, for example `revaassociates.co.ug`. It signals a Ugandan business, and that matters more for a local firm than a `.com` would. Buying the `.com` as well is optional and only protects the name.

1. **Ask your dad first** whether the firm already owns a domain or business email (question 28). If it does, you need the login, not a new domain.
2. Search for the name at [registry.co.ug](https://www.registry.co.ug/) and compare with a local registrar.
3. **Register it in the firm's name**, with a firm email address, not your personal details. Whoever is listed legally controls the domain.
4. Turn on auto-renew or set a calendar reminder. A lapsed domain takes the site and any email on it offline.

## 5. Connect the domain and HTTPS

1. In Cloudflare, choose **Add a domain**, enter it and pick the **Free** plan.
2. Cloudflare gives you two nameservers. In your registrar's control panel, replace the existing nameservers with those two.
3. Wait for Cloudflare to show the domain as active. This is often an hour or so but can take up to 48 hours.
4. Open your Worker, go to **Settings > Domains & Routes > Add > Custom domain**, and add `revaassociates.co.ug`. Add `www.revaassociates.co.ug` the same way.
5. In the domain's **SSL/TLS > Edge Certificates** settings, turn on **Always Use HTTPS**.

HTTPS needs no other setup, because Cloudflare issues and renews the certificate itself.

**If the firm already has email on the domain**, check that Cloudflare copied the MX records when you added it. If they're missing, the firm's email stops working when the nameservers change.

**If you want a professional address** like `info@revaassociates.co.ug`, Cloudflare Email Routing can forward it free to an existing inbox.

## 6. Launch

1. Fill in the details in `src/data/site.ts` and run `npm run todos` until none are left.
2. Replace the draft wording, including the home page headline, and have your dad approve all of it.
3. In `src/data/site.ts`, set `url` to the real address and `launched` to `true`.
4. Run `npm run build`. It stops with an error if any TODO or the placeholder URL is left.
5. Commit and push:

```bash
git add .
```

```bash
git commit -m "Launch website"
```

```bash
git push
```

6. Send a real enquiry through the live form and confirm it arrives, including in the spam folder. **This hasn't been tested end to end yet**, because it needs the real key.
7. Test a phone call, WhatsApp and email link from a phone.

### Before launch, your dad should check

- **Professional rules:** that the wording and any listed credentials fit ICPAU's rules on promoting a practice.
- **Data protection:** the form collects personal details, so check what Uganda's Data Protection and Privacy Act 2019 requires, such as registering with the Personal Data Protection Office and adding a short privacy notice. I haven't added a privacy page.

### After launch

- Create a free **Google Business Profile**. For a local firm, this is likely to bring in more enquiries than anything else on this list.
- Add the site to **Google Search Console** and submit `sitemap-index.xml`.
