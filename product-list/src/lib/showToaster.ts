import { toast } from "sonner";

export function showToaster(message: string) {
  toast.success(message);
}
