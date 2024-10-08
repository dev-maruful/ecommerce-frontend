import Sidebar from "../../_components/Sidebar";

export default function layout({ children }) {
  return (
    <main className="flex">
      <Sidebar />
      <div className="min-h-[calc(100vh-88px)] w-3/4 p-10">{children}</div>
    </main>
  );
}
