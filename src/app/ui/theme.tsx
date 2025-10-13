import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Button from "./button";

export default function ThemeIcon({
  isDarkMode,
  onChange,
}: {
  isDarkMode: boolean;
  onChange: (isDark: boolean) => void;
}) {
  return isDarkMode ? (
    <Button onClick={() => onChange(false)} className="bg-transparent">
      <SunIcon className="size-6" />
    </Button>
  ) : (
    <Button onClick={() => onChange(true)}>
      <MoonIcon className="size-6" />
    </Button>
  );
}
