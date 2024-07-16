import PanelLayout from "@/components/layouts/PanelLayout";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return <PanelLayout>{children}</PanelLayout>;
};

export default ProtectedLayout;
