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
      className="bg-[hsl(var(--brand-darker))] w-full h-full p-10"
      style={{ 
        aspectRatio: '16/9',
        minWidth: '1280px',
        maxWidth: '1920px',
        margin: '0 auto'
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8 pb-5 border-b-2 border-slate-800">
        <div className="flex items-center gap-5">
          <img src={aurinelogo} alt="Aurine" className="w-14 h-14" />
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {data.clientName}
            </h1>
            <p className="text-base text-slate-400">
              Raport Facebook Ads • {data.period} • {data.city}
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 px-7 py-4 rounded-xl border-2 border-pink-500/30">
          <p className="text-xs text-slate-400">Budżet</p>
          <p className="text-3xl font-bold text-pink-400">{data.budget} PLN</p>
        </div>
      </div>

      {/* Main Content Grid - 2 columns: KPI cards left, charts right */}
      <div className="grid grid-cols-[400px,1fr] gap-8 mb-6">
        {/* Left: Key Metrics Cards */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-300 mb-4 uppercase tracking-wider">
            Kluczowe metryki
          </h3>
          
          <div className="bg-gradient-to-br from-pink-900/50 to-pink-700/60 rounded-2xl p-5 border border-pink-500/40">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-pink-500/20 w-10 h-10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-pink-300" />
              </div>
              <p className="text-slate-200 text-sm font-semibold">Wyświetlenia</p>
            </div>
            <p className="text-4xl font-bold text-white">{data.impressions}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-purple-700/60 rounded-2xl p-5 border border-purple-500/40">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-500/20 w-10 h-10 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-purple-300" />
              </div>
              <p className="text-slate-200 text-sm font-semibold">Zasięg</p>
            </div>
            <p className="text-4xl font-bold text-white">{data.reach}</p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/50 to-blue-700/60 rounded-2xl p-5 border border-blue-500/40">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-500/20 w-10 h-10 rounded-lg flex items-center justify-center">
                <Facebook className="w-5 h-5 text-blue-300" />
              </div>
              <p className="text-slate-200 text-sm font-semibold">Kliknięcia</p>
            </div>
            <p className="text-4xl font-bold text-white">{data.clicks}</p>
          </div>

          <div className="bg-gradient-to-br from-pink-600 to-pink-700 rounded-2xl p-5 border-2 border-pink-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <p className="text-white text-sm font-semibold">Rezerwacje</p>
            </div>
            <p className="text-4xl font-bold text-white">{data.bookings}</p>
          </div>
        </div>

        {/* Right: Charts in 2x2 grid */}
        <div className="grid grid-cols-2 gap-5">
          {/* Chart 1: Conversion pie */}
          <div className="bg-slate-900/60 rounded-2xl p-5 border border-slate-700">
            <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <div className="bg-pink-500 w-7 h-7 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              Efektywność rezerwacji
            </h4>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={conversionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={85}
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
            <p className="text-center text-slate-300 text-sm mt-2">
              {data.bookings} z {data.conversions}
            </p>
          </div>

          {/* Chart 2: Engagement pie */}
          <div className="bg-slate-900/60 rounded-2xl p-5 border border-slate-700">
            <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <div className="bg-blue-500 w-7 h-7 rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              Zaangażowanie
            </h4>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={engagementData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={85}
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

          {/* Chart 3: Weekly trend line */}
          <div className="bg-slate-900/60 rounded-2xl p-5 border border-slate-700">
            <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <div className="bg-purple-500 w-7 h-7 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              Tygodniowy trend
            </h4>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData}>
                  <XAxis dataKey="week" stroke="#94a3b8" style={{ fontSize: '11px' }} />
                  <YAxis stroke="#94a3b8" style={{ fontSize: '11px' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '12px',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="reach"
                    stroke="#ec4899"
                    strokeWidth={3}
                    dot={{ fill: "#ec4899", r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="clicks"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ fill: "#3b82f6", r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 4: Daily bookings bar */}
          <div className="bg-slate-900/60 rounded-2xl p-5 border border-slate-700">
            <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
              <div className="bg-pink-500 w-7 h-7 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              Rezerwacje wg dni
            </h4>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyBookings}>
                  <XAxis dataKey="day" stroke="#94a3b8" style={{ fontSize: '11px' }} />
                  <YAxis stroke="#94a3b8" style={{ fontSize: '11px' }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1e293b',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '12px',
                    }}
                  />
                  <Bar dataKey="value" fill="#ec4899" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: KPI summary + Recommendations */}
      <div className="grid grid-cols-[400px,1fr] gap-8 mt-6">
        {/* KPI Summary */}
        <div className="bg-slate-950/60 rounded-2xl p-5 border border-slate-800">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Podsumowanie KPI
          </h4>
          <div className="flex gap-4">
            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700 flex-1">
              <p className="text-slate-300 text-xs mb-1">CTR</p>
              <p className="text-2xl font-bold text-white">{data.ctr}%</p>
            </div>
            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700 flex-1">
              <p className="text-slate-300 text-xs mb-1">Konwersje</p>
              <p className="text-2xl font-bold text-white">{data.conversions}</p>
            </div>
            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700 flex-1">
              <p className="text-slate-300 text-xs mb-1">Koszt/konw.</p>
              <p className="text-2xl font-bold text-white">{data.costPerConversion}</p>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/20 p-2 rounded-lg">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-white font-bold text-base">Rekomendacje</h4>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-white/95 text-xs font-semibold mb-2">
                Optymalizacja budżetu
              </p>
              <p className="text-white/80 text-[11px] leading-relaxed">
                Zwiększ +20% w weekendy
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-white/95 text-xs font-semibold mb-2">
                Targetowanie
              </p>
              <p className="text-white/80 text-[11px] leading-relaxed">
                Kobiety 35-50, wellness
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-white/95 text-xs font-semibold mb-2">
                Video Ads
              </p>
              <p className="text-white/80 text-[11px] leading-relaxed">
                Format przed/po, +45% CTR
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-3">
              <p className="text-white/95 text-xs font-semibold mb-2">
                Instagram Stories
              </p>
              <p className="text-white/80 text-[11px] leading-relaxed">
                -15% promocja, +30% zasięg
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
        <p className="text-slate-400 text-xs">Raport wygenerowany przez Aurine Agency</p>
        <p className="text-slate-500 text-xs">aurine-agency.com</p>
      </div>
    </div>
  );
};
