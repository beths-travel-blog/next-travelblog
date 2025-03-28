This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Check node version is >16 then run the development server:

```bash
npm run dev -> localhost:3000
```

## Set Up

Node: nvm install node, nvm use node, node -v
Next: npm outdated, npm install next@latest
Install packages: npm install
Clear Cache and Reinstall Dependencies:
rm -rf node_modules package-lock.json
npm install
npm run dev

Graphiql: https://api-eu-west-2.hygraph.com/v2/cl8o9g9ar0niy01t86qd4esxo/master


## Tests
npm test

## Code Tips

getStaticProps: works only for page components inside pages folder
Tutorial: https://www.youtube.com/watch?v=Dc7LAgqy1_E&t=2223s

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
