import ThemeToggleButton from "./theme-toggle-button";

export default function Header() {


  return (
    <header className="flex items-center justify-between">
      <h1 className="flex items-center gap-2">
        <img
          src="/photo.jpeg"
          alt="profile picture"
          width={50}
          height={50}
          className="rounded-4xl"
        />
        <p className="flex flex-col">
          <span className="font-header font-extrabold text-3xl tracking-widest">
            Romain Tournesac
          </span>
          <small className="italic">Développeur web fullstack</small>
        </p>
      </h1>
      <ThemeToggleButton />
    </header>
  );
}
