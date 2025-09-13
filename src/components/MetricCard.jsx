import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function MetricCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend, 
  variant = "default",
  className 
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "border-success/20 bg-success/5";
      case "warning":
        return "border-warning/20 bg-warning/5";
      case "accent":
        return "border-accent/20 bg-accent/5";
      default:
        return "border-border bg-card";
    }
  };

  const getIconStyles = () => {
    switch (variant) {
      case "success":
        return "text-success bg-success/10";
      case "warning":
        return "text-warning bg-warning/10";
      case "accent":
        return "text-accent bg-accent/10";
      default:
        return "text-primary bg-primary/10";
    }
  };

  return (
    <Card className={cn(
      "p-6 hover:shadow-lg transition-all duration-300 animate-fade-in",
      getVariantStyles(),
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-bold text-foreground">{value}</h3>
            {trend && (
              <span className={cn(
                "text-sm font-medium px-2 py-1 rounded-full",
                trend.isPositive 
                  ? "text-success bg-success/10" 
                  : "text-destructive bg-destructive/10"
              )}>
                {trend.isPositive ? "+" : ""}{trend.value}%
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
        <div className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center",
          getIconStyles()
        )}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </Card>
  );
}