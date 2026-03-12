"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Bell, CheckCircle2, UserPlus } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "Your account got verified",
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
      time: "Just now"
    },
    {
      id: 2,
      title: "This user sent you a friend request",
      icon: <UserPlus className="w-4 h-4 text-blue-400" />,
      time: "2m ago"
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end items-center p-6 gap-6">
      <div className="flex items-center gap-6 pr-4">
        {/* Search Icon */}
        <button className="text-neutral-500 hover:text-white transition-colors cursor-pointer">
          <Search className="w-5 h-5" />
        </button>

        {/* Notification Bell */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            onMouseEnter={() => setShowNotifications(true)}
            onMouseLeave={() => setShowNotifications(false)}
            className="text-neutral-500 hover:text-white transition-colors cursor-pointer relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full border border-black shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          </button>

          {/* Notifications Dropdown */}
          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                onMouseEnter={() => setShowNotifications(true)}
                onMouseLeave={() => setShowNotifications(false)}
                className="absolute right-0 mt-4 w-72 bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50 pointer-events-auto"
              >
                <div className="p-4 border-b border-white/5 bg-neutral-900/50">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">Recent Notifications</span>
                </div>
                <div className="flex flex-col">
                  {notifications.map((notif) => (
                    <div 
                      key={notif.id}
                      className="p-4 flex gap-3 hover:bg-white/5 transition-colors cursor-pointer group border-b border-white/5 last:border-0"
                    >
                      <div className="mt-1">{notif.icon}</div>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm text-neutral-200 group-hover:text-white transition-colors font-medium leading-tight">
                          {notif.title}
                        </span>
                        <span className="text-[10px] text-neutral-500">{notif.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-neutral-900/50 text-center border-t border-white/5">
                  <span className="text-[10px] text-emerald-400/80 hover:text-emerald-400 cursor-pointer transition-colors uppercase tracking-widest font-bold">View All Activity</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
