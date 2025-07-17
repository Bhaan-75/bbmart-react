import React from "react";

export default function Home() {
  return (
    <main className="p-6 space-y-10 bg-white text-black">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-800">Welcome to BBmart</h1>
        <p className="text-lg text-black">Books that make you smart – booksmart</p>
        <button className="bg-black text-white px-6 py-3 rounded-lg text-lg">Start Shopping</button>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center mt-10">
        <div className="bg-blue-50 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-blue-900">New & Used Books</h2>
          <p>Affordable books for exams, school, and leisure reading.</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-blue-900">Sell Your Books</h2>
          <p>Upload your book details and let others buy them from you.</p>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold text-blue-900">Based in Hyderabad</h2>
          <p>Serving all over India, starting from your city!</p>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-xl space-y-2 mt-10">
        <h2 className="text-xl font-bold text-blue-800">Need Help?</h2>
        <p>Email: smart.bookmart25@gmail.com</p>
        <p>Location: Hyderabad, India</p>
      </section>
    </main>
  );
}
