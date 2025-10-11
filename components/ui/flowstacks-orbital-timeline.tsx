"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Target, Zap, CheckCircle, ArrowUpRight } from "lucide-react";

const wabiSabiTimelineData = [
  {
    id: 1,
    title: "Client Retention",
    content: "Systems create consistent experiences that keep clients coming back for more.",
    icon: Users,
    status: "completed" as const,
  },
  {
    id: 2,
    title: "Clear Signals",
    content: "Eliminate noise and confusion with streamlined communication flows.",
    icon: Target,
    status: "completed" as const,
  },
  {
    id: 3,
    title: "Time Savings",
    content: "Automated processes free up hours every week for strategic work.",
    icon: Clock,
    status: "completed" as const,
  },
  {
    id: 4,
    title: "Revenue Growth",
    content: "Consistent systems drive predictable revenue lifts month over month.",
    icon: TrendingUp,
    status: "in-progress" as const,
  },
  {
    id: 5,
    title: "Team Focus",
    content: "Teams work with calm focus when systems eliminate chaos and confusion.",
    icon: CheckCircle,
    status: "in-progress" as const,
  },
  {
    id: 6,
    title: "Owner Freedom",
    content: "Owners stop being bottlenecks when systems run the business.",
    icon: Zap,
    status: "pending" as const,
  },
  {
    id: 7,
    title: "Referral Growth",
    content: "Happy clients and smooth operations naturally generate more referrals.",
    icon: ArrowUpRight,
    status: "pending" as const,
  },
];

export function WabiSabiOrbitalTimeline() {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [showAllCards, setShowAllCards] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState<number | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoRotate) {
      timer = setInterval(() => {
        setRotationAngle((prev) => (prev + 0.2) % 360);
      }, 50);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [autoRotate]);

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 180;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    return { x, y, angle };
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500 border-green-400";
      case "in-progress":
        return "bg-amber-500 border-amber-400";
      case "pending":
        return "bg-slate-500 border-slate-400";
      default:
        return "bg-slate-500 border-slate-400";
    }
  };

  const handleCenterClick = () => {
    setShowAllCards(!showAllCards);
    setAutoRotate(!showAllCards);
    if (!showAllCards) {
      setHoveredId(null);
      setSelectedNodeId(null);
    }
  };

  const handleNodeClick = (nodeId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedNodeId(selectedNodeId === nodeId ? null : nodeId);
    setShowAllCards(false);
    setAutoRotate(selectedNodeId === nodeId);
    setHoveredId(null);
  };

  return (
    <div className="w-full h-[500px] bg-slate-950 rounded-2xl overflow-hidden relative flex items-center justify-center">
      {/* Central Hub */}
      <motion.div 
        className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 animate-pulse flex items-center justify-center z-10 cursor-pointer group"
        onClick={handleCenterClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute w-20 h-20 rounded-full border border-amber-400/30 animate-ping"></div>
        <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center">
          <motion.div
            animate={{ rotate: showAllCards ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-amber-600 font-bold text-sm"
          >
            {showAllCards ? "×" : "↗"}
          </motion.div>
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-xs text-white/70 bg-slate-800/80 px-2 py-1 rounded whitespace-nowrap">
            {showAllCards ? "Hide Cards" : "Show All Cards"}
          </span>
        </div>
      </motion.div>

      {/* Orbital Ring */}
      <div className="absolute w-80 h-80 rounded-full border border-slate-600/30"></div>

      {/* Orbital Nodes */}
      {wabiSabiTimelineData.map((item, index) => {
        const position = calculateNodePosition(index, wabiSabiTimelineData.length);
        const Icon = item.icon;
        const isHovered = hoveredId === item.id;

        return (
          <motion.div
            key={item.id}
            className="absolute transition-all duration-500 cursor-pointer group"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
            }}
            onMouseEnter={() => !selectedNodeId && setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={(e) => handleNodeClick(item.id, e)}
            whileHover={{ scale: selectedNodeId ? 1 : 1.2 }}
          >
            {/* Node */}
            <div
              className={`
                w-12 h-12 rounded-full flex items-center justify-center
                ${getStatusColor(item.status)}
                border-2 shadow-lg transition-all duration-300
                ${isHovered ? "shadow-xl shadow-amber-400/30" : ""}
              `}
            >
              <Icon size={20} className="text-white" />
            </div>

            {/* Node Label */}
            <div className="absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="text-xs font-semibold text-white/80 bg-slate-800/80 px-2 py-1 rounded backdrop-blur-sm">
                {item.title}
              </span>
            </div>

            {/* Hover Card or Show All Cards */}
            {(isHovered || showAllCards) && !selectedNodeId && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.3, delay: showAllCards ? index * 0.1 : 0 }}
                className={`absolute ${showAllCards ? 'top-16' : 'top-20'} left-1/2 -translate-x-1/2 w-64 bg-slate-800/95 backdrop-blur-lg border border-slate-600/50 rounded-lg p-4 shadow-xl z-20`}
              >
                <div className="flex items-center mb-2">
                  <Icon size={16} className="text-amber-400 mr-2" />
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{item.content}</p>
                <div className="mt-3 pt-2 border-t border-slate-600/30">
                  <span className={`
                    text-xs px-2 py-1 rounded-full
                    ${item.status === 'completed' ? 'bg-green-500/20 text-green-400' : 
                      item.status === 'in-progress' ? 'bg-amber-500/20 text-amber-400' : 
                      'bg-slate-500/20 text-slate-400'}
                  `}>
                    {item.status === 'completed' ? 'Completed' : 
                     item.status === 'in-progress' ? 'In Progress' : 'Pending'}
                  </span>
                </div>
              </motion.div>
            )}
          </motion.div>
        );
      })}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {wabiSabiTimelineData.map((_, index) => {
          const currentPos = calculateNodePosition(index, wabiSabiTimelineData.length);
          const nextIndex = (index + 1) % wabiSabiTimelineData.length;
          const nextPos = calculateNodePosition(nextIndex, wabiSabiTimelineData.length);
          
          return (
            <line
              key={`line-${index}`}
              x1={currentPos.x + 250}
              y1={currentPos.y + 250}
              x2={nextPos.x + 250}
              y2={nextPos.y + 250}
              stroke="rgba(148, 163, 184, 0.2)"
              strokeWidth="1"
              strokeDasharray="4,4"
            />
          );
        })}
      </svg>

      {/* Selected Node Detail View */}
      {selectedNodeId && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute inset-4 bg-slate-900/95 backdrop-blur-lg border border-slate-600/50 rounded-xl p-8 z-30 flex flex-col items-center justify-center"
        >
          {(() => {
            const selectedItem = wabiSabiTimelineData.find(item => item.id === selectedNodeId);
            if (!selectedItem) return null;
            const Icon = selectedItem.icon;
            
            return (
              <>
                {/* Close Button */}
                <button
                  onClick={() => setSelectedNodeId(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-700/50 hover:bg-slate-600/50 flex items-center justify-center text-white/70 hover:text-white transition-all"
                >
                  ×
                </button>

                {/* Node Icon */}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${getStatusColor(selectedItem.status)} border-4 shadow-2xl`}>
                  <Icon size={32} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{selectedItem.title}</h3>

                {/* Status Badge */}
                <div className="mb-6">
                  <span className={`
                    px-4 py-2 rounded-full text-sm font-semibold
                    ${selectedItem.status === 'completed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
                      selectedItem.status === 'in-progress' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 
                      'bg-slate-500/20 text-slate-400 border border-slate-500/30'}
                  `}>
                    {selectedItem.status === 'completed' ? '✓ COMPLETED' : 
                     selectedItem.status === 'in-progress' ? '⟳ IN PROGRESS' : 
                     '○ PENDING'}
                  </span>
                </div>

                {/* Content */}
                <p className="text-slate-300 text-center text-lg leading-relaxed max-w-md mb-8">
                  {selectedItem.content}
                </p>

                {/* Additional Details */}
                <div className="bg-slate-800/50 rounded-lg p-4 w-full max-w-md">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-slate-400 text-sm">Impact Level</span>
                    <span className="text-amber-400 font-semibold">High</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-slate-400 text-sm">Timeline</span>
                    <span className="text-slate-300">2-4 weeks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">Category</span>
                    <span className="text-slate-300">System Optimization</span>
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg"
                  onClick={() => setSelectedNodeId(null)}
                >
                  Learn More About This Outcome
                </motion.button>
              </>
            );
          })()}
        </motion.div>
      )}
    </div>
  );
}

export default WabiSabiOrbitalTimeline;
