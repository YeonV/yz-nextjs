// See here: https://nextjs.org/docs/app/api-reference/file-conventions/template

// A template file is similar to a layout in that it wraps a layout or page. Unlike layouts that persist across routes and maintain state, templates are given a unique key, meaning children Client Components reset their state on navigation.

export default function Template({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

// While less common, you might choose to use a template over a layout if you want:

// Features that rely on useEffect (e.g logging page views) and useState (e.g a per-page feedback form).
// To change the default framework behavior. For example, Suspense Boundaries inside layouts only show the fallback the first time the Layout is loaded and not when switching pages. For templates, the fallback is shown on each navigation.
