import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen bg-muted flex flex-col items-center py-12 px-4">
        <div className="w-full max-w-7xl">
          <Link to="/">
            <h1 className="text-4xl font-bold mb-8 text-center">TanStack Notes App</h1>
          </Link>
          <Outlet />
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})