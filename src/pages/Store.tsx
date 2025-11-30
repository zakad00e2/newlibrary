import { ExternalLink, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  link: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    description: "A classic American novel by F. Scott Fitzgerald",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    link: "https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273565",
    category: "Fiction"
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    description: "Harper Lee's timeless classic of growing up and human dignity",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    link: "https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0061120084",
    category: "Fiction"
  },
  {
    id: 3,
    title: "1984",
    description: "George Orwell's dystopian masterpiece",
    price: "$13.99",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop",
    link: "https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934",
    category: "Science Fiction"
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    description: "Jane Austen's beloved romantic novel",
    price: "$11.99",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    link: "https://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/1503290565",
    category: "Romance"
  },
  {
    id: 5,
    title: "The Hobbit",
    description: "J.R.R. Tolkien's fantasy adventure classic",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400&h=600&fit=crop",
    link: "https://www.amazon.com/Hobbit-J-R-R-Tolkien/dp/054792822X",
    category: "Fantasy"
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    description: "J.D. Salinger's coming-of-age story",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop",
    link: "https://www.amazon.com/Catcher-Rye-J-D-Salinger/dp/0316769487",
    category: "Fiction"
  }
];

const Store = () => {
  return (
    <div className="min-h-screen pt-20 px-8" style={{ width: '90%', margin: '25px auto' }}>
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-1">Store</h1>
        <p className="text-gray-400 text-sm md:text-base">
          Browse our collection of classic and contemporary elements
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 pb-12">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-[320px] flex flex-col">
            <div className="w-full h-[280px] overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader className="p-4 flex-grow">
              <div className="flex justify-between items-start gap-2">
                <CardTitle className="text-base line-clamp-2">{product.title}</CardTitle>
                <Badge variant="secondary" className="text-xs shrink-0">{product.category}</Badge>
              </div>
              <CardDescription className="mt-1 text-sm line-clamp-2">{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-xl font-bold text-primary">{product.price}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button 
                className="w-full gap-2 text-sm h-9" 
                onClick={() => window.open(product.link, '_blank')}
              >
                <ShoppingCart className="h-3 w-3" />
                Buy Now
                <ExternalLink className="h-3 w-3 ml-auto" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Store;
