import { Dialog } from "@capacitor/dialog";

export async function showAlert(title: string, message: string) {
  await Dialog.alert({
    title: title,
    message: message,
  });
}

export async function showConfirm(title: string, message: string) {
  const { value } = await Dialog.confirm({
    title: title,
    message: message,
  });
  return value;
}

export async function showPrompt(title: string, message: string) {
  const { value, cancelled } = await Dialog.prompt({
    title: title,
    message: message,
  });
  if (!cancelled) {
    return value;
  } else {
    return "Cancelled";
  }
}
