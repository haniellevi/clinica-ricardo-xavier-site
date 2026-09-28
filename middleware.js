// Vercel Routing Middleware: URLs de spam injetadas no site antigo e restos do WordPress
// respondem 410 (Gone) para o Google tirá-las do índice mais rápido.
export const config = {
  matcher: ['/details/:path*', '/service/:path*', '/elementor-938', '/elementor-938/', '/wp-login.php', '/wp-admin/:path*', '/xmlrpc.php', '/wp-json/:path*', '/wp-content/:path*'],
};

export default function middleware() {
  return new Response('410 Gone', { status: 410, headers: { 'content-type': 'text/plain; charset=utf-8', 'x-robots-tag': 'noindex' } });
}
