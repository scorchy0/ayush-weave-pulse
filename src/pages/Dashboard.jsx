import { MetricCard } from "@/components/MetricCard";
import { StatusIndicator } from "@/components/StatusIndicator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Database,
  FileCheck,
  Network,
  Shield,
  TrendingUp,
  Users,
  AlertTriangle,
  CheckCircle2
} from "lucide-react";

export default function Dashboard() {
  const metrics = [
    {
      title: "Active Connections",
      value: "2,847",
      subtitle: "Network nodes online",
      icon: Network,
      trend: { value: 12.5, isPositive: true },
      variant: "success"
    },
    {
      title: "Compliance Score",
      value: "94.2%",
      subtitle: "AYUSH standards met",
      icon: Shield,
      trend: { value: 2.1, isPositive: true },
      variant: "accent"
    },
    {
      title: "Records Processed",
      value: "18,432",
      subtitle: "This month",
      icon: Database,
      trend: { value: 8.3, isPositive: true }
    },
    {
      title: "Reports Generated",
      value: "156",
      subtitle: "Last 30 days",
      icon: FileCheck,
      trend: { value: -3.2, isPositive: false }
    }
  ];

  const networkNodes = [
    { name: "Primary Manufacturing", status: "online", location: "Mumbai, Maharashtra" },
    { name: "Secondary Processing", status: "online", location: "Bangalore, Karnataka" },
    { name: "Quality Control Hub", status: "warning", location: "Delhi, NCR" },
    { name: "Distribution Center", status: "online", location: "Chennai, Tamil Nadu" },
    { name: "Export Terminal", status: "pending", location: "Kochi, Kerala" }
  ];

  const recentActivities = [
    {
      type: "compliance",
      message: "New AYUSH compliance report generated for Batch #AY-2024-0847",
      timestamp: "2 minutes ago",
      status: "success"
    },
    {
      type: "network",
      message: "Network health check completed - 98.7% uptime recorded",
      timestamp: "15 minutes ago",
      status: "success"
    },
    {
      type: "alert",
      message: "Quality control alert: Temperature variance detected in Mumbai facility",
      timestamp: "1 hour ago",
      status: "warning"
    },
    {
      type: "export",
      message: "Export documentation verified for shipment to Germany",
      timestamp: "2 hours ago",
      status: "success"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-1">
            Real-time insights into AYUSH Ministry compliance and network operations
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <TrendingUp className="w-4 h-4" />
            Analytics
          </Button>
          <Button className="gap-2 bg-gradient-primary">
            <FileCheck className="w-4 h-4" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard
            key={metric.title}
            {...metric}
            className="hover:scale-105 transition-transform duration-200"
          />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Network Status */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              Network Status
            </h3>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-4">
            {networkNodes.map((node, index) => (
              <div
                key={node.name}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <StatusIndicator status={node.status} showLabel={false} />
                  <div>
                    <h4 className="font-medium text-foreground">{node.name}</h4>
                    <p className="text-sm text-muted-foreground">{node.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <StatusIndicator 
                    status={node.status} 
                    size="sm"
                    label={node.status.charAt(0).toUpperCase() + node.status.slice(1)}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  {activity.status === "success" ? (
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-warning" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground leading-relaxed">
                    {activity.message}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button 
            variant="outline" 
            className="h-20 flex-col gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Database className="w-6 h-6" />
            <span>Query Provenance</span>
          </Button>
          <Button 
            variant="outline"
            className="h-20 flex-col gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <FileCheck className="w-6 h-6" />
            <span>Compliance Check</span>
          </Button>
          <Button 
            variant="outline"
            className="h-20 flex-col gap-2 hover:bg-success hover:text-success-foreground transition-colors"
          >
            <Shield className="w-6 h-6" />
            <span>Security Audit</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}