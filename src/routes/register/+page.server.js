import { fail } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */

export const actions = {
  register: async ({ request }) => {
    try {
      // get form data
      const formData = await request.formData();
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");

      // insert data with api
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });

      const result = await response.json();

      if (!response.ok) {
        return fail(response.status, {
          success: false,
          message: result.message || "Something went wrong",
          errors: result.errors || [],
          values: {
            name,
            email,
            password,
          }
        });
      }

      return {
        success: true,
        message: "Registration successful!",
      };

    } catch (error) {
      if (error instanceof Response) {
        throw error;
      }
      console.error("Error:", error);
      return fail(500, {
        success: false,
        message: "Internal server error",
      });
    }
  }
};