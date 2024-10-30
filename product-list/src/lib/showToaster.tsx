import CustomToast from "@/components/CustomToast";
import { toast } from "sonner";

export function showToaster(message: string) {
  toast.custom(() => <CustomToast message={message} />);
}
