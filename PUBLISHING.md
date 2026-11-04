# Publishing the Reva Associates website

Do these in order. You can do steps 1–3 now and have a private test link to show your dad. Steps 4–6 need control of the domain and the remaining details.

Dashboard button names change from time to time, so if one doesn't match, look for the closest label.

## Costs

| Item | Cost | Notes |
|---|---|---|
| Hosting (Cloudflare Workers) | Free | Static pages aren't charged for bandwidth |
| HTTPS certificate | Free | Automatic |
| Contact form (Web3Forms) | Free | Reported at about 250 enquiries a month; I couldn't open their pricing page to confirm |
| `.co.ug` domain | Already registered, renews May 2027 | The registry lists $25/year; resellers can charge more |

## 1. Connect the contact form

1. Go to [web3forms.com](https://web3forms.com) and enter the email address that should receive enquiries. It should be the firm's, or use yours while testing.
2. Copy the access key they email you.
3. Paste it into `web3formsKey` in `src/data/site.ts`.

The key is meant to be visible in the page source. It can only send mail to that one address.

## 2. Put the code on GitHub

Done. The code is at [jagu256/Reva-Associates](https://github.com/jagu256/Reva-Associates), a private repository. To save and upload later changes, run these in `C:Reva`:

```bash
git add .
```

```bash
git commit -m "Describe your change"
```

```bash
git push
```

`.gitignore` keeps `.docx` files out of the repo, so your dad's filled-in questionnaire won't get uploaded.

## 3. Deploy to Cloudflare

**The host isn't decided yet.** These steps are for Cloudflare, but any static host works: use `npm run build` as the build command and `dist` as the output folder. `wrangler.jsonc`, the `wrangler` package and the `.workers.dev` link are Cloudflare-only, so remove them if you choose another host. GitHub Pages is the exception: its terms don't allow running an online business on it.

1. Create a free account at [cloudflare.com](https://dash.cloudflare.com/sign-up). Use an email address the firm will keep, because this account will end up controlling the live site.
2. Go to **Compute > Workers & Pages > Create application** and import your GitHub repository.
3. Set:
   - Project name: `reva-associates` (all lowercase, to match `wrangler.jsonc`)
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
4. Save and deploy.

You'll get a link like `reva-associates.<your-subdomain>.workers.dev`. Search engines are told not to index the site yet, so it's safe to share with your dad for review. Every `git push` to `main` now redeploys the site automatically.

## 4. Get control of the domain

The firm already uses `revaassociates.co.ug`, but the registry lists Mai Hosting as its owner and contact (checked 4 November 2026). It expires on 15 May 2027.

1. Ask for the registrant and contacts to be changed to Reva Associates Ltd.
2. Get the control panel login, or the authorisation code to transfer it to another registrar.
3. The firm uses `accounts1@revaassociates.co.ug` on its letterhead, so find out where that mailbox is hosted and who controls it. Keep it running during the move, because changing the nameservers can stop email if the mail records aren't copied across.

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
2. Have your dad approve all the wording, including the home page headline and service descriptions.
3. In `src/data/site.ts`, set `launched` to `true`. If you use the `www` address, update `url` too.
4. Run `npm run build`. It stops with an error if any TODO is left.
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

- **Accuracy:** that every claim on the site is correct, including the tax agent status, client numbers and years of experience.
- **Client names:** that each named client is happy to be listed.
- **Data protection:** the form collects personal details, so check what Uganda's Data Protection and Privacy Act 2019 requires, such as registering with the Personal Data Protection Office and adding a short privacy notice. I haven't added a privacy page.

### After launch

- Create a free **Google Business Profile**. For a local firm, this is likely to bring in more enquiries than anything else on this list.
- Add the site to **Google Search Console** and submit `sitemap-index.xml`.
