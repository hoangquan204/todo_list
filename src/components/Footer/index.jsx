export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 border-t">
      <div className="max-w-5xl mx-auto p-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Task Manager App.
      </div>
    </footer>
  );
}