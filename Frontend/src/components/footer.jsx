export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 text-gray-600 py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="font-body text-sm">© {new Date().getFullYear()} Finanza Club. All rights reserved.</p>
      </div>
    </footer>
  );
}