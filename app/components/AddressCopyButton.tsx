"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function AddressCopyButton({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — no-op.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-md transition-colors ml-auto"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? "복사됨" : "주소 복사"}
    </button>
  );
}
