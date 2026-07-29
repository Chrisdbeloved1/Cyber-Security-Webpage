'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Zap, Lock, Activity, Server, Radio } from 'lucide-react';

interface Node {
  id: number;
  x: number;
  y: number;
  radius: number;
  label: string;
  type: 'gateway' | 'core' | 'sentinel' | 'cloud' | 'ai';
  pulse: number;
  status: 'OPTIMAL' | 'SHIELDED' | 'MONITORED';
  connections: number[];
}

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeNode, setActiveNode] = useState<Node | null>(null);
  const [systemStats, setSystemStats] = useState({
    activeShields: 1420,
    latency: 1.4,
    threatsNeutralized: 99.99,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Initial node topology
    const nodes: Node[] = [
      { id: 0, x: width * 0.5, y: height * 0.5, radius: 22, label: 'Cybreon Core Zero-Trust', type: 'core', pulse: 0, status: 'SHIELDED', connections: [1, 2, 3, 4, 5] },
      { id: 1, x: width * 0.25, y: height * 0.28, radius: 14, label: 'Quantum Kyber Gateway', type: 'gateway', pulse: 1, status: 'OPTIMAL', connections: [0, 2, 5] },
      { id: 2, x: width * 0.75, y: height * 0.28, radius: 15, label: 'AI Model Safety Guard', type: 'ai', pulse: 2, status: 'SHIELDED', connections: [0, 1, 3] },
      { id: 3, x: width * 0.8, y: height * 0.68, radius: 13, label: 'Sovereign Vault Cluster', type: 'cloud', pulse: 0.5, status: 'OPTIMAL', connections: [0, 2, 4] },
      { id: 4, x: width * 0.5, y: height * 0.82, radius: 14, label: 'Adversarial Sentinel', type: 'sentinel', pulse: 1.5, status: 'MONITORED', connections: [0, 3, 5] },
      { id: 5, x: width * 0.2, y: height * 0.68, radius: 12, label: 'Identity Token Mesh', type: 'gateway', pulse: 2.5, status: 'OPTIMAL', connections: [0, 1, 4] },
    ];

    // Pulses along connections
    const signalPackets: { from: number; to: number; progress: number; speed: number }[] = [
      { from: 1, to: 0, progress: 0.1, speed: 0.008 },
      { from: 0, to: 2, progress: 0.4, speed: 0.006 },
      { from: 0, to: 3, progress: 0.7, speed: 0.009 },
      { from: 5, to: 0, progress: 0.2, speed: 0.007 },
      { from: 4, to: 0, progress: 0.8, speed: 0.005 },
    ];

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      let hovered: Node | null = null;
      for (const node of nodes) {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        if (Math.sqrt(dx * dx + dy * dy) < node.radius + 15) {
          hovered = node;
          break;
        }
      }
      setActiveNode(hovered);
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let time = 0;
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw connecting mesh lines
      for (let i = 0; i < nodes.length; i++) {
        for (const connIndex of nodes[i].connections) {
          if (connIndex > i) {
            const target = nodes[connIndex];
            const dx = target.x - nodes[i].x;
            const dy = target.y - nodes[i].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            const isHighlighted =
              (activeNode && (activeNode.id === nodes[i].id || activeNode.id === target.id));

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle = isHighlighted
              ? 'rgba(87, 255, 240, 0.6)'
              : 'rgba(46, 211, 198, 0.15)';
            ctx.lineWidth = isHighlighted ? 2 : 1;
            ctx.setLineDash([4, 6]);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }

      // 2. Animate Signal Packets
      for (const packet of signalPackets) {
        packet.progress += packet.speed;
        if (packet.progress >= 1) {
          packet.progress = 0;
        }
        const fromNode = nodes[packet.from];
        const toNode = nodes[packet.to];
        const px = fromNode.x + (toNode.x - fromNode.x) * packet.progress;
        const py = fromNode.y + (toNode.y - fromNode.y) * packet.progress;

        // Draw glowing signal dot
        ctx.beginPath();
        ctx.arc(px, py, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#57FFF0';
        ctx.shadowColor = '#57FFF0';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 3. Draw Hexagonal & Circular Glass Nodes
      for (const node of nodes) {
        const isHovered = activeNode?.id === node.id;
        const radius = isHovered ? node.radius + 4 : node.radius;

        // Outer pulse ring
        const pulseSize = (Math.sin(time + node.pulse) * 0.5 + 0.5) * 12;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius + pulseSize, 0, Math.PI * 2);
        ctx.strokeStyle = isHovered ? 'rgba(87, 255, 240, 0.4)' : 'rgba(46, 211, 198, 0.1)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Outer node border
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#12282A' : '#0D1E20';
        ctx.shadowColor = '#2ED3C6';
        ctx.shadowBlur = isHovered ? 20 : 8;
        ctx.fill();
        ctx.strokeStyle = isHovered ? '#57FFF0' : '#2ED3C6';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Center core light
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = node.type === 'core' ? '#57FFF0' : '#2ED3C6';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [activeNode]);

  // Periodic random stat fluctuations for real-time vitality feel
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStats((prev) => ({
        activeShields: 1420 + Math.floor(Math.random() * 8),
        latency: +(1.2 + Math.random() * 0.4).toFixed(2),
        threatsNeutralized: 99.99,
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[450px] lg:h-[580px] flex items-center justify-center">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1A5C5E]/20 via-[#2ED3C6]/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Decorative frame overlay */}
      <div className="absolute inset-0 rounded-2xl border border-[#2ED3C6]/20 bg-[#071416]/50 backdrop-blur-sm overflow-hidden flex flex-col justify-between p-4 shadow-2xl">
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between z-10 text-xs font-mono text-[#AFC4C7] bg-[#0D1E20]/80 px-3 py-2 rounded-lg border border-[#2ED3C6]/20">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#57FFF0] animate-ping" />
            <span className="text-[#57FFF0] font-semibold tracking-wide">TOPOLOGY MESH V4.8</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline">LATENCY: <strong className="text-white">{systemStats.latency}ms</strong></span>
            <span>SHIELDS: <strong className="text-white">{systemStats.activeShields} NODES</strong></span>
          </div>
        </div>

        {/* The interactive Canvas element */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-pointer z-0"
        />

        {/* Bottom Floating Info Tooltip */}
        <div className="z-10 mt-auto">
          {activeNode ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#12282A]/90 backdrop-blur-md p-3 rounded-xl border border-[#2ED3C6]/40 text-xs shadow-lg flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-[#1A5C5E]/40 text-[#57FFF0]">
                  {activeNode.type === 'core' && <ShieldCheck className="w-4 h-4" />}
                  {activeNode.type === 'gateway' && <Zap className="w-4 h-4" />}
                  {activeNode.type === 'ai' && <Cpu className="w-4 h-4" />}
                  {activeNode.type === 'cloud' && <Server className="w-4 h-4" />}
                  {activeNode.type === 'sentinel' && <Radio className="w-4 h-4" />}
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm">{activeNode.label}</h4>
                  <p className="text-[#AFC4C7] text-[11px] font-mono">Status: {activeNode.status} • Zero-Trust Ephemeral Mesh</p>
                </div>
              </div>
              <span className="px-2 py-1 rounded bg-[#2ED3C6]/20 text-[#57FFF0] font-mono text-[10px] uppercase font-bold border border-[#2ED3C6]/30">
                ACTIVE
              </span>
            </motion.div>
          ) : (
            <div className="bg-[#0D1E20]/80 backdrop-blur-sm p-3 rounded-xl border border-[#2ED3C6]/15 text-xs text-[#AFC4C7] flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-[#2ED3C6]" />
                Hover nodes to inspect live zero-trust topology parameters
              </span>
              <span className="text-[10px] font-mono text-[#6E8588] hidden sm:inline">CRYPTO LATTICE ACTIVE</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
