import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

const InvestmentCalculator = () => {
  const [amount, setAmount] = useState(5000);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(8);
  const [result, setResult] = useState(null);

  const calculateReturns = () => {
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;
    const futureValue =
      amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const invested = amount * months;
    setResult({ futureValue, invested });
  };

  const data = result
    ? [5, 8, 11, 14, 17, 20].map((i) => {
        const months = i * 12;
        const monthlyRate = rate / 12 / 100;
        const value =
          amount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
        return {
          year: 2025 + (i - 5),
          value: parseFloat((value / 100000).toFixed(2)),
        };
      })
    : [];

  return (
    <div className="min-h-screen text-white flex items-center justify-center p-4">
      <div className="bg-[#0c3c60] text-black rounded-2xl shadow-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        <div className="space-y-4 bg-[#d2d2d2] rounded-2xl p-3" >
          <Input
            type="number"
            placeholder="$ Amount you want to invest"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="Number of years to invest"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="Expected annual rate of return (%)"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
          />
          <Button className="w-full" onClick={calculateReturns}>
            Calculate
          </Button>
        </div>

        <div className="text-white bg-[#0c3c60] rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-yellow-400 mb-2">Your Returns</h2>
          <p className="text-sm mb-1">By investing ₹{amount} monthly</p>
          {result && (
            <>
              <h3 className="text-xl font-bold mb-2">
                Watch Your Money Grow {(((result.futureValue - result.invested) / result.invested) * 100).toFixed(0)}% in {years} Years
              </h3>
              <p className="mb-2">
                Your Investment: <strong>${(result.invested / 100000).toFixed(2)} L</strong>
              </p>
              <p className="mb-4">
                Can Grow To: <strong>${(result.futureValue / 100000).toFixed(2)} L</strong> @ {rate}% p.a
              </p>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis domain={[0, 36]} tickFormatter={(val) => `${val} L`} />
                  <Tooltip formatter={(val) => `${val} L`} />
                  <Line type="monotone" dataKey="value" stroke="#FFD700" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestmentCalculator;
