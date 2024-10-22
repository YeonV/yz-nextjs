import Link from 'next/link'

// Good to know: In addition to catching expected notFound() errors,
// the root app/not-found.js file also handles any unmatched URLs for your whole application.
// This means users that visit a URL that is not handled by your app
// will be shown the UI exported by the app/not-found.js file.

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href='/'>Return Home</Link>
    </div>
  )
}

// By default, not-found is a Server Component. You can mark it as async to fetch and display data:

// import Link from 'next/link'
// import { headers } from 'next/headers'

// export default async function NotFound() {
//   const headersList = await headers()
//   const domain = headersList.get('host')
//   const data = await getSiteData(domain)
//   return (
//     <div>
//       <h2>Not Found: {data.name}</h2>
//       <p>Could not find requested resource</p>
//       <p>
//         View <Link href="/blog">all posts</Link>
//       </p>
//     </div>
//   )
// }

// If you need to use Client Component hooks like usePathname to display content based on the path, you must fetch data on the client-side instead.
