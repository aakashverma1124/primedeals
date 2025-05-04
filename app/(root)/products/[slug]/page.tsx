const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const res = await fetch(`http://localhost:4000/api/products/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }

  const productById = await res.json();

  return <>{productById.name}</>;
};

export default ProductDetailsPage;
