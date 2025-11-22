import Login from "@/components/Login/Login";
export default async function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold my-4 text-center">
        Practice Next Authentication
      </h1>
      <Login />
    </div>
  );
}
