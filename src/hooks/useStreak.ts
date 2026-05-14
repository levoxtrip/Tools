import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "strive.completed-days";

const todayKey = (): string => {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
};

const readDays = (): string[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const writeDays = (days: string[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(days));
  } catch {
    // ignore
  }
};

// Returns the last 7 days as an array of booleans (oldest -> today)
const last7DaysStatus = (completedDays: string[]): boolean[] => {
  const result: boolean[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    result.push(completedDays.includes(key));
  }
  return result;
};

export const useStreak = () => {
  const [days, setDays] = useState<string[]>(() => readDays());

  useEffect(() => {
    writeDays(days);
  }, [days]);

  const markToday = useCallback(() => {
    const key = todayKey();
    setDays((prev) => (prev.includes(key) ? prev : [...prev, key]));
  }, []);

  const week = last7DaysStatus(days);
  const weekCount = week.filter(Boolean).length;

  return { markToday, week, weekCount };
};
