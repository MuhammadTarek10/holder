"use client";
export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={() => {}}>Log in</button>
      <button formAction={() => {}}>Sign up</button>
    </form>
  );
}