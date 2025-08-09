import { redirect } from "@sveltejs/kit";

export async function handle({ event, resolve }) {
  // get cookie 'token'
  const token = event.cookies.get("token");
  const { pathname } = event.url;
  const publicPaths = ["/login", "/register"];
  const isAdminPath = pathname.startsWith("/admin");

  // If the user is login already and trying to access login or redister route, redirect to dashboard
  if (token && publicPaths.includes(pathname)) {
    throw redirect(302, "/admin/dashboard");
  }

  // If the user is not logged in and trying to access admin route, redirect to login
  if (!token && isAdminPath) {
    throw redirect(302, "/login");
  }

  return await resolve(event);
};