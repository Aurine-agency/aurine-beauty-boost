import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Facebook, TrendingUp, Target, CheckCircle2, Lightbulb } from "lucide-react";
import aurinelogo from "@/assets/aurine-report-logo.png";

interface ReportData {
  clientName?: string;
  city?: string;
  period?: string;
  budget?: string;
  impressions?: string;
  reach?: string;
  clicks?: string;
  ctr?: string;
  conversions?: string;
  costPerConversion?: string;
  bookings?: string;
}

interface ReportPreviewLandscapeProps {
  data: ReportData;
}

export const ReportPreviewLandscape = ({ data }: ReportPreviewLandscapeProps) => {
  const conversionData = [
    { name: "Rezerwacje", value: 72 },
    { name: "Pozostałe", value: 28 },
  ];

  const engagementData = [
    { name: "Zaangażowani", value: 65 },
    { name: "Pozostali", value: 35 },
  ];

  const weeklyData = [
    { week: "T1", reach: 15000, clicks: 650 },
    { week: "T2", reach: 19000, clicks: 820 },
    { week: "T3", reach: 25000, clicks: 1100 },
    { week: "T4", reach: 26000, clicks: 930 },
  ];

  const dailyBookings = [
    { day: "Pn", value: 22 },
    { day: "Wt", value: 28 },
    { day: "Śr", value: 32 },
    { day: "Cz", value: 35 },
    { day: "Pt", value: 38 },
    { day: "Sb", value: 42 },
    { day: "Nd", value: 25 },
  ];

  return (
    <div
      id="report-preview-landscape"
      className="w-[1600px] h-[900px] bg-[hsl(var(--brand-darker))] text-white rounded-3xl shadow-2xl overflow-hidden"
    >
      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-950/80 border-r border-slate-800 flex flex-col justify-between p-6">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                <img
                  src={aurinelogo}
                  alt="Aurine logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Aurine
                </p>
                <p className="text-sm font-semibold text-white">
                  Raport kampanii
                </p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <p className="font-semibold text-slate-100">
                {data.clientName || "Salon beauty"}
              </p>
              <p className="text-slate-400">{data.city || "Miasto nie podane"}</p>
              <p className="text-slate-500">
                Okres:{" "}
                <span className="text-slate-300">{data.period || "—"}</span>
              </p>
              <p className="text-slate-500">
                Budżet:{" "}
                <span className="text-pink-400 font-semibold">
                  {data.budget ? `${data.budget} PLN` : "—"}
                </span>
              </p>
            </div>

            <nav className="pt-4 space-y-2 text-xs text-slate-400">
              <p className="uppercase tracking-[0.25em] text-slate-500 mb-2">
                Sekcje
              </p>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-pink-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  <span>Podsumowanie</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  <span>Zaangażowanie</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  <span>Rezerwacje</span>
                </div>
              </div>
            </nav>
          </div>

          <div className="pt-4 text-[10px] text-slate-500">
            <p>Facebook Ads dla salonów beauty</p>
            <p className="text-slate-600">aurine-agency.com</p>
          </div>
        </aside>

        {/* Main analytics area */}
        <main className="flex-1 h-full bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-6 flex flex-col gap-4">
          {/* Top header */}
          <header className="flex items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                Podsumowanie wyników kampanii Facebook Ads przygotowane dla
                salonu beauty. Kluczowe wskaźniki skuteczności i rezerwacji.
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
                KPI RAPORTU
              </span>
              <div className="flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-700 px-4 py-2">
                <TrendingUp className="w-4 h-4 text-pink-400" />
                <div className="text-right">
                  <p className="text-[11px] text-slate-400">Rezerwacje</p>
                  <p className="text-lg font-semibold text-pink-400">
                    {data.bookings || "—"}
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* KPI row */}
          <section className="grid grid-cols-4 gap-4">
            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 px-4 py-3 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Wyświetlenia</span>
                <TrendingUp className="w-4 h-4 text-pink-400" />
              </div>
              <p className="text-2xl font-semibold">{data.impressions || "—"}</p>
              <p className="text-[11px] text-slate-500">Łączna liczba odsłon</p>
            </div>

            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 px-4 py-3 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Zasięg</span>
                <Target className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-2xl font-semibold">{data.reach || "—"}</p>
              <p className="text-[11px] text-slate-500">Unikalne osoby, które zobaczyły reklamy</p>
            </div>

            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 px-4 py-3 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Kliknięcia</span>
                <Facebook className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-2xl font-semibold">{data.clicks || "—"}</p>
              <p className="text-[11px] text-slate-500">Kliknięcia w reklamy kampanii</p>
            </div>

            <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl border border-pink-500/70 px-4 py-3 flex flex-col justify-between shadow-lg shadow-pink-500/30">
              <div className="flex items-center justify-between text-xs text-pink-50/80 mb-1">
                <span>Rezerwacje</span>
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <p className="text-2xl font-semibold text-white">{data.bookings || "—"}</p>
              <p className="text-[11px] text-pink-50/80">Umówione wizyty z kampanii</p>
            </div>
          </section>

          {/* Secondary KPI row */}
          <section className="grid grid-cols-3 gap-4">
            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 px-4 py-3">
              <p className="text-xs text-slate-400 mb-1">CTR</p>
              <p className="text-xl font-semibold">{data.ctr ? `${data.ctr}%` : "—"}</p>
              <p className="text-[11px] text-slate-500">Średni współczynnik klikalności</p>
            </div>
            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 px-4 py-3">
              <p className="text-xs text-slate-400 mb-1">Konwersje</p>
              <p className="text-xl font-semibold">{data.conversions || "—"}</p>
              <p className="text-[11px] text-slate-500">Wszystkie działania uznane za sukces</p>
            </div>
            <div className="bg-slate-900/80 rounded-2xl border border-slate-800 px-4 py-3">
              <p className="text-xs text-slate-400 mb-1">Koszt / konwersja</p>
              <p className="text-xl font-semibold">{data.costPerConversion || "—"}</p>
              <p className="text-[11px] text-slate-500">Średni koszt pozyskania jednej rezerwacji</p>
            </div>
          </section>

          {/* Charts & trends area */}
          <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
            {/* Left column: pies */}
            <div className="flex flex-col gap-4 min-h-0">
              {/* Conversion pie */}
              <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-4 flex flex-col flex-1 min-h-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-pink-500 w-7 h-7 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Efektywność rezerwacji</h4>
                      <p className="text-[11px] text-slate-400">
                        Udział rezerwacji w całkowitej liczbie konwersji
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={conversionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={75}
                        paddingAngle={4}
                        dataKey="value"
                      >
                        <Cell fill="#ec4899" />
                        <Cell fill="#334155" />
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-center text-slate-300 text-xs mt-2">
                  {data.bookings || "—"} z {data.conversions || "—"} wszystkich konwersji
                </p>
              </div>

              {/* Engagement pie */}
              <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-4 flex flex-col flex-1 min-h-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500 w-7 h-7 rounded-lg flex items-center justify-center">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Zaangażowanie odbiorców</h4>
                      <p className="text-[11px] text-slate-400">
                        Stosunek osób aktywnych do wszystkich objętych zasięgiem
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={engagementData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={75}
                        paddingAngle={4}
                        dataKey="value"
                      >
                        <Cell fill="#3b82f6" />
                        <Cell fill="#334155" />
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Right column: trends */}
            <div className="flex flex-col gap-4 min-h-0">
              {/* Weekly trend line */}
              <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-4 flex flex-col flex-1 min-h-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-purple-500 w-7 h-7 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Tygodniowy trend kampanii</h4>
                      <p className="text-[11px] text-slate-400">
                        Zmiana zasięgu i liczby kliknięć w kolejnych tygodniach
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weeklyData}>
                      <XAxis dataKey="week" stroke="#94a3b8" style={{ fontSize: "11px" }} />
                      <YAxis stroke="#94a3b8" style={{ fontSize: "11px" }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#0f172a",
                          border: "none",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="reach"
                        stroke="#ec4899"
                        strokeWidth={3}
                        dot={{ fill: "#ec4899", r: 3 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="clicks"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        dot={{ fill: "#3b82f6", r: 3 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Daily bookings bar */}
              <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-4 flex flex-col flex-1 min-h-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-pink-500 w-7 h-7 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Rezerwacje wg dni tygodnia</h4>
                      <p className="text-[11px] text-slate-400">
                        Rozkład liczby wizyt pozyskanych z kampanii
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dailyBookings}>
                      <XAxis dataKey="day" stroke="#94a3b8" style={{ fontSize: "11px" }} />
                      <YAxis stroke="#94a3b8" style={{ fontSize: "11px" }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#0f172a",
                          border: "none",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Bar dataKey="value" fill="#ec4899" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          <footer className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
            <p>Raport wygenerowany automatycznie przez Aurine Agency</p>
            <p>facebook.com/aurine.agency</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

