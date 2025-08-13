/** @type {import('./$types').PageLoad} */
export async function load({ fetch, cookies }) {
  // Ambil token dari cookie
  const token = cookies.get('token');
  
  // Mengirim permintaan dengan token
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin/users`, {
    method: 'GET',
    headers: {
      'Authorization': `${token}`,
      'Content-Type': 'application/json'
    }
  });

  const result = await response.json();
  // Assign response data to users
  const users = result.data;

  //return props `users`
  return { users };
}