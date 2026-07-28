"use client";

import React from "react";

interface BillItem {
  id: number;
  section: string;
  measurements?: string[];
  areaSqFt?: number;
  ratePerSqFt?: number;
  groutingPoints?: number;
  groutingRate?: number;
  totalAreaCost: number;
  totalGroutingCost: number;
  itemTotal: number;
}

const estimateData: BillItem[] = [
  {
    id: 1,
    section: "South Side Water Tank",
    measurements: ["8 x 7 = 56 sq.ft", "8 x 3.5 = 28 sq.ft", "8 x 3.5 = 28 sq.ft", "7 x 3.5 = 24.5 sq.ft", "7 x 3.5 = 24.5 sq.ft"],
    areaSqFt: 161,
    ratePerSqFt: 65,
    groutingPoints: 21,
    groutingRate: 250,
    totalAreaCost: 10465,
    totalGroutingCost: 5250,
    itemTotal: 15715,
  },
  {
    id: 2,
    section: "North Side Water Tank",
    measurements: ["Grading & sealing work"],
    areaSqFt: 161,
    ratePerSqFt: 65,
    groutingPoints: 21,
    groutingRate: 250,
    totalAreaCost: 10465,
    totalGroutingCost: 5250,
    itemTotal: 15715,
  },
  {
    id: 3,
    section: "1st Floor Waterproofing",
    measurements: [
      "4.5 x 6.25 = 34",
      "9 + 12.5 = 21.5",
      "4 x 5.5 = 22",
      "8 + 11 = 19",
      "4 x 6.25 = 25",
      "8 + 12.5 = 20.5",
      "4 x 6.25 = 37.5",
      "8 + 12.5 = 20.5",
      "5.75 x 4 = 23",
      "11.5 + 8 = 19.5",
    ],
    areaSqFt: 242,
    ratePerSqFt: 65,
    totalAreaCost: 15730,
    totalGroutingCost: 0,
    itemTotal: 15730,
  },
  {
    id: 4,
    section: "2nd Floor Waterproofing",
    measurements: ["Same layout as 1st Floor"],
    areaSqFt: 242,
    ratePerSqFt: 65,
    totalAreaCost: 15730,
    totalGroutingCost: 0,
    itemTotal: 15730,
  },
  {
    id: 5,
    section: "3rd Floor Waterproofing",
    measurements: ["Same layout as 1st Floor"],
    areaSqFt: 242,
    ratePerSqFt: 65,
    totalAreaCost: 15730,
    totalGroutingCost: 0,
    itemTotal: 15730,
  },
  {
    id: 6,
    section: "South Side Lift Room",
    measurements: ["Floor: 5 x 5 = 25 sq.ft", "Walls: 4 x (7 x 5) = 140 sq.ft"],
    areaSqFt: 165,
    ratePerSqFt: 50,
    groutingPoints: 20,
    groutingRate: 250,
    totalAreaCost: 8250,
    totalGroutingCost: 5000,
    itemTotal: 13250,
  },
  {
    id: 7,
    section: "North Side Sump",
    measurements: ["Floor: 8.5 x 7.25 = 61.625", "Side walls: 300.06 sq.ft total"],
    areaSqFt: 361.68,
    ratePerSqFt: 50,
    groutingPoints: 21,
    groutingRate: 250,
    totalAreaCost: 18084,
    totalGroutingCost: 5250,
    itemTotal: 23334,
  },
  {
    id: 8,
    section: "South Side Sump",
    measurements: ["Floor: 8.5 x 7.25 = 61.625", "Side walls: 300.05 sq.ft total"],
    areaSqFt: 361.67,
    ratePerSqFt: 50,
    groutingPoints: 21,
    groutingRate: 250,
    totalAreaCost: 18084,
    totalGroutingCost: 5250,
    itemTotal: 23334,
  },
  {
    id: 9,
    section: "North Side Lift Room",
    measurements: ["Floor: 5 x 5 = 25 sq.ft", "Walls: 4 x (5 x 7) = 140 sq.ft"],
    areaSqFt: 165,
    ratePerSqFt: 50,
    groutingPoints: 21,
    groutingRate: 250,
    totalAreaCost: 8250,
    totalGroutingCost: 5250,
    itemTotal: 13500,
  },
];

export default function WorkEstimate() {
  const grossTotal = 137878;
  const advancePaid = 25000;
  const balanceDue = 112878;

  return (
    <section className="py-16 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Card */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D95A1F]/10 text-[#D95A1F] text-xs font-bold uppercase tracking-wider mb-2">
              Official Quotation & Bill
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              R. RAJENDRAN WATERPROOFING WORK
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              SRI KAATHAIEE AMMAN THUNI • D.R.R.G
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              No. 1/312 Saravanan Street, Jalladianppet, Pallikaranai, Chennai - 600100
            </p>
          </div>

          <div className="text-left sm:text-right bg-slate-50 p-4 rounded-xl border border-slate-100 min-w-[200px]">
            <p className="text-xs text-slate-400 uppercase font-semibold">Date</p>
            <p className="text-sm font-bold text-slate-800">06.06.2026</p>
            <p className="text-xs text-slate-400 uppercase font-semibold mt-2">Mobile</p>
            <a href="tel:+918939083310" className="text-sm font-bold text-[#D95A1F] hover:underline">
              +91 89390 83310
            </a>
          </div>
        </div>

        {/* Breakdown Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
            <h2 className="text-base font-bold text-slate-800">Itemized Work Breakdown</h2>
            <span className="text-xs text-slate-500 font-medium">{estimateData.length} Work Areas</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50/30">
                  <th className="py-3 px-6">#</th>
                  <th className="py-3 px-6">Work Area / Section</th>
                  <th className="py-3 px-6 text-right">Area (Sq.Ft / Rate)</th>
                  <th className="py-3 px-6 text-right">Grouting (Pts / Rate)</th>
                  <th className="py-3 px-6 text-right">Amount (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {estimateData.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-400">{item.id}</td>
                    <td className="py-4 px-6">
                      <p className="font-bold text-slate-800">{item.section}</p>
                      {item.measurements && item.measurements.length > 0 && (
                        <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                          {item.measurements.join(" | ")}
                        </p>
                      )}
                    </td>
                    <td className="py-4 px-6 text-right font-medium text-slate-600 whitespace-nowrap">
                      {item.areaSqFt ? (
                        <span>
                          {item.areaSqFt} sq.ft × ₹{item.ratePerSqFt}
                          <br />
                          <span className="text-xs font-semibold text-slate-800">
                            = ₹{item.totalAreaCost.toLocaleString("en-IN")}
                          </span>
                        </span>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="py-4 px-6 text-right font-medium text-slate-600 whitespace-nowrap">
                      {item.groutingPoints ? (
                        <span>
                          {item.groutingPoints} pts × ₹{item.groutingRate}
                          <br />
                          <span className="text-xs font-semibold text-slate-800">
                            = ₹{item.totalGroutingCost.toLocaleString("en-IN")}
                          </span>
                        </span>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="py-4 px-6 text-right font-bold text-slate-900 whitespace-nowrap">
                      ₹{item.itemTotal.toLocaleString("en-IN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Financial Summary Box */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Payment Status</p>
            <h3 className="text-xl font-bold mt-1">Waterproofing Project Summary</h3>
            <p className="text-xs text-slate-400 mt-1">
              Guaranteed chemical grouting & elastomeric sealing application.
            </p>
          </div>

          <div className="w-full sm:w-auto bg-slate-800/80 border border-slate-700/60 rounded-xl p-5 space-y-3 min-w-[280px]">
            <div className="flex justify-between items-center text-sm text-slate-300">
              <span>Gross Total Amount:</span>
              <span className="font-bold text-white">₹{grossTotal.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-emerald-400">
              <span>Advance Paid:</span>
              <span className="font-bold">- ₹{advancePaid.toLocaleString("en-IN")}</span>
            </div>
            <div className="pt-2 border-t border-slate-700 flex justify-between items-center text-base font-extrabold text-[#D95A1F]">
              <span>Balance Due:</span>
              <span className="text-xl">₹{balanceDue.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}