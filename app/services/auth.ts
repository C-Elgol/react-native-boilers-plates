// services/auth.ts
export async function loginUser(email: string, password: string) {
  try {
    const response = await fetch("http://10.55.213.105:8000/api/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { success: false, error: data.detail || "Invalid credentials" };
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: "Network error. Check your connection." };
  }
}

export async function registerUser(data: any) {
  try {
    const response = await fetch("http://10.55.213.105:8000/api/auth/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return { success: false, error: result.detail || "Registration failed" };
    }

    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: "Network error. Check your connection." };
  }
}