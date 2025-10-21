import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import CustomButton from "./button";

export default function ThemeIcon({
  isDarkMode,
  onChange,
}: {
  isDarkMode: boolean;
  onChange: (isDark: boolean) => void;
}) {
  return isDarkMode ? (
    <CustomButton onClick={() => onChange(false)}>
      <SunIcon className="size-6" />
    </CustomButton>
  ) : (
    <CustomButton onClick={() => onChange(true)}>
      <MoonIcon className="size-6" />
    </CustomButton>
  );
}
