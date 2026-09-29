"use client";

import { usePhoneModal } from "../context/PhoneModalContext";

export default function PhoneCtaButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { open } = usePhoneModal();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
