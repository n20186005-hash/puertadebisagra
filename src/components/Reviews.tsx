'use client';

type Review = {
  name: string;
  date: string;
  rating: number;
  text: string;
};

export default function Reviews({
  title,
  declaration,
  reviews,
  moreText,
  googleMapsLink,
}: {
  title: string;
  declaration: string;
  reviews: Review[];
  moreText: string;
  googleMapsLink: string;
}) {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-white">{title}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-10 max-w-2xl mx-auto whitespace-pre-line">
        {declaration}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">{review.name}</h3>
                <span className="text-xs text-gray-500 dark:text-gray-400">{review.date}</span>
              </div>
              <div className="flex text-yellow-400 text-sm">
                {'★'.repeat(review.rating)}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              "{review.text}"
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          {moreText} <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
