export default function Footer() {
  const actualYear = new Date().getFullYear();

  return (
    <footer className="mx-auto">
      <small>
        Copyright &copy; {actualYear} Romain Tournesac. All rights reserved.
      </small>
    </footer>
  );
}
