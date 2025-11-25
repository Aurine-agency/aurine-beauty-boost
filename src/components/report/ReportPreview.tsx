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
} from "recharts";

interface ReportData {
  title?: string;
  impressions?: string;
  reach?: string;
  clicks?: string;
  engagement?: string;
  conversions?: string;
}

interface ReportPreviewProps {
  data: ReportData;
}

export const ReportPreview = ({ data }: ReportPreviewProps) => {
  const pieData1 = [
    { name: "Active", value: 75 },
    { name: "Inactive", value: 25 },
  ];

  const pieData2 = [
    { name: "Active", value: 60 },
    { name: "Inactive", value: 40 },
  ];

  const lineData = [
    { month: "Sty", value: 20 },
    { month: "Lut", value: 35 },
    { month: "Mar", value: 45 },
    { month: "Kwi", value: 50 },
    { month: "Maj", value: 65 },
    { month: "Cze", value: 80 },
  ];

  const barData = [
    { month: "Sty", value: 45 },
    { month: "Lut", value: 52 },
    { month: "Mar", value: 61 },
    { month: "Kwi", value: 70 },
    { month: "Maj", value: 78 },
    { month: "Cze", value: 85 },
  ];

  const PINK = "#ec4899";
  const GRAY = "#6b7280";

  return (
    <div
      id="report-preview"
      className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 min-h-[800px]"
    >
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">{data.title}</h1>
        <p className="text-slate-400">Raport wygenerowany automatycznie</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-pink-500"></div>
            <p className="text-slate-400 text-sm">Wyświetlenia</p>
          </div>
          <p className="text-3xl font-bold text-white">{data.impressions}</p>
        </div>

        <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-pink-500"></div>
            <p className="text-slate-400 text-sm">Zasięg</p>
          </div>
          <p className="text-3xl font-bold text-white">{data.reach}</p>
        </div>

        <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-pink-500"></div>
            <p className="text-slate-400 text-sm">Kliknięcia</p>
          </div>
          <p className="text-3xl font-bold text-white">{data.clicks}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-pink-500"></div>
            <p className="text-slate-400 text-sm">Zaangażowanie</p>
          </div>
          <p className="text-3xl font-bold text-white">{data.engagement}%</p>
        </div>

        <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-pink-500"></div>
            <p className="text-slate-400 text-sm">Konwersje</p>
          </div>
          <p className="text-3xl font-bold text-white">{data.conversions}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800">
          <h3 className="text-white font-semibold mb-4">Konwersje</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData1}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                <Cell fill={PINK} />
                <Cell fill={GRAY} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800">
          <h3 className="text-white font-semibold mb-4">Zaangażowanie</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData2}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                <Cell fill={PINK} />
                <Cell fill={GRAY} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800">
          <h3 className="text-white font-semibold mb-4">Trend wzrostu</h3>
          <ResponsiveContainer width="100%" height={150}>
            <LineChart data={lineData}>
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Line
                type="monotone"
                dataKey="value"
                stroke={PINK}
                strokeWidth={2}
                dot={{ fill: PINK }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-800">
          <h3 className="text-white font-semibold mb-4">Miesięczne wyniki</h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={barData}>
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Bar dataKey="value" fill={PINK} radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
