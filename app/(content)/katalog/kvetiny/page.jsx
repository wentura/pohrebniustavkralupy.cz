import { redirect } from "next/navigation";

export const metadata = {
  title: "Smuteční kytice a věnce",
  description: "Smuteční květinová vazba. Pohřební ústav Cibulka Kralupy.",
};

export default async function KvetinyPage() {
    redirect('/pro-pozustale');
//   return (
//     <div>KvetinyPage</div>
//   )
}
