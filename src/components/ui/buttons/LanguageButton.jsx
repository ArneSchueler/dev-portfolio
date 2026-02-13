import Button from "./Button";
import { enBtn, deBtn } from "./Button";
export default function LanguageButton() {
  return (
    <div className="flex items-center">
      <Button {...enBtn} />
      <div className="w-px h-[70%] bg-neutral-600"></div>
      <Button {...deBtn} />
    </div>
  );
}
