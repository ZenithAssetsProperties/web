import { redirect } from "next/navigation";

/** Keep the original public URL working while Properties becomes canonical. */
export default function ListingsRedirect() {
  redirect("/properties");
}
