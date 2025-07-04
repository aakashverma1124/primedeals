import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader className='p-0 items-center'>
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority={true}
          ></Image>
        </Link>
      </CardHeader>
      <CardContent className='p-4 grid gap-4'>
        <div className='text-xs'>{product.brand}</div>
        <Link href={`/products/${product.slug}`}>
          <div className='text-sm font-medium'>{product.name}</div>
        </Link>
        <div className='flex-between gap-4'>
          <p>{product.rating} Start</p>
          {product.stock > 0 ? (
            <p className='font-bold'>${product.price}</p>
          ) : (
            <p className='text-destructive'>Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
