/* eslint-disable @next/next/no-img-element */

const images = [
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop',
    alt: 'Modern Interior',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1550966871-3ed3c622101c?q=80&w=2070&auto=format&fit=crop',
    alt: 'Chef Plating',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=2070&auto=format&fit=crop',
    alt: 'Cocktail Bar',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop',
    alt: 'Private Dining',
    span: 'col-span-1 md:col-span-2',
  },
];

export default function RestaurantGallery() {
  return (
    <section className="py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-6 md:grid-cols-4 lg:px-8">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-surface/50 ${img.span} h-64 md:h-auto md:min-h-[300px]`}
          >
            <div className="absolute inset-0 z-10 bg-black/20 transition-colors duration-500 group-hover:bg-black/0" />
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 z-20 w-full bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-sm font-bold uppercase tracking-wider text-white">{img.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

