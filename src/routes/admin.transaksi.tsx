import { createFileRoute } from "@tanstack/react-router";
import { DataTable, formatIdr, PageHead, Pill } from "@/components/kit";
import { useStore } from "@/store/appStore";

export const Route = createFileRoute("/admin/transaksi")({
  head: () => ({
    meta: [
      { title: "Transaksi DompetX — Aksara Cinta" },
      { name: "description", content: "Riwayat pesanan dan pembayaran paket langganan DompetX." },
      { property: "og:title", content: "Transaksi DompetX — Aksara Cinta" },
      { property: "og:description", content: "Riwayat pesanan dan pembayaran paket langganan DompetX." },
    ],
  }),
  component: TransactionsPage,
});

function TransactionsPage() {
  const { orders } = useStore();

  return (
    <>
      <PageHead title="Transaksi" subtitle="Riwayat pesanan DompetX">
        <Pill tone="success">Rp 18.450.000</Pill>
      </PageHead>

      <DataTable head={["Pesanan", "Pelanggan", "Paket", "Tagihan", "Metode", "Status", "Tanggal"]}>
        {orders.map((item) => (
          <tr key={item.id} className="transition-colors hover:bg-surface/40">
            <td className="px-4 py-3 font-mono text-xs text-primary">{item.id}</td>
            <td className="px-4 py-3">
              <p className="font-semibold">{item.customer}</p>
              <p className="text-[11px] text-helper">{item.email}</p>
            </td>
            <td className="px-4 py-3">
              <Pill tone={item.plan === "Platinum" ? "gold" : "matcha"}>{item.plan}</Pill>
            </td>
            <td className="px-4 py-3 font-semibold">{formatIdr(item.amount)}</td>
            <td className="px-4 py-3">
              <Pill tone="info">{item.method}</Pill>
            </td>
            <td className="px-4 py-3">
              <Pill tone={item.status === "Lunas" ? "success" : item.status === "Menunggu" ? "gold" : "danger"}>{item.status}</Pill>
            </td>
            <td className="px-4 py-3 text-xs text-helper">{item.date}</td>
          </tr>
        ))}
      </DataTable>
    </>
  );
}
