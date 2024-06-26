import { WidgetGrid } from "@/components/dashboard/WidgetsGrid";

export default function Page() {
  return (
    <div className="text-black p-2">
      <h1 className="text-3xl mt-2">Dashboard</h1>
      <span className="text-xl">Informacion General</span>
      <WidgetGrid />
    </div>
  );
}
