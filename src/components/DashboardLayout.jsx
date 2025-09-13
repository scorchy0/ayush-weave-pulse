import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

export function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 bg-gradient-subtle border-b border-border flex items-center px-6">
            <SidebarTrigger className="mr-4" />
            <div className="flex-1 flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-foreground">AYUSH Ministry Dashboard</h1>
                <p className="text-sm text-muted-foreground">Compliance & Network Monitoring Portal</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium">Stakeholder Portal</p>
                  <p className="text-xs text-muted-foreground">Last updated: {new Date().toLocaleTimeString()}</p>
                </div>
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">A</span>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 p-6 bg-background">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}