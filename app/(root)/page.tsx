export const metadata = {
  title: 'Home',
};

import ProductList from '@/components/shared/product/product-list';

const Homepage = async () => {
  const res = await fetch('http://localhost:4000/api/products', {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const products = await res.json();
  return <ProductList data={products} title='Newest Arrivals' limit={4} />;
};

export default Homepage;
