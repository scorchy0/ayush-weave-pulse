import { cn } from "@/lib/utils";

interface StatusIndicatorProps {
  status: "online" | "warning" | "offline" | "pending";
  label?: string;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function StatusIndicator({ 
  status, 
  label, 
  size = "md", 
  showLabel = true 
}: StatusIndicatorProps) {
  const getStatusStyles = () => {
    switch (status) {
      case "online":
        return "bg-success shadow-success/20";
      case "warning":
        return "bg-warning shadow-warning/20";
      case "offline":
        return "bg-destructive shadow-destructive/20";
      case "pending":
        return "bg-muted shadow-muted/20 animate-pulse-slow";
      default:
        return "bg-muted";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "w-2 h-2";
      case "lg":
        return "w-4 h-4";
      default:
        return "w-3 h-3";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "online":
        return "Online";
      case "warning":
        return "Warning";
      case "offline":
        return "Offline";
      case "pending":
        return "Pending";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div 
        className={cn(
          "rounded-full shadow-lg",
          getStatusStyles(),
          getSizeStyles()
        )}
      />
      {showLabel && (
        <span className="text-sm text-foreground">
          {label || getStatusText()}
        </span>
      )}
    </div>
  );
}